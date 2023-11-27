import Card from "@/wrappers/Card";
import { motion } from "framer-motion";
import styles from "@/styles/Form.module.css";
import inputStyles from "@/styles/Input.module.css";
import Input from "./Input";
import React, { useContext, useRef, useState } from "react";
import InputDataMongoSchema from "@/validations/InputDataMongoSchema";
import { ZodIssue } from "zod";
import DataContext from "@/context/data-context";
import axios, { AxiosResponse } from "axios";
import SearchStatus from "./SearchStatus";

const FormMongo: React.FC<{ switchHandler: (state: boolean) => void }> = ({
  switchHandler,
}) => {
  const applicationIdRef = useRef<HTMLInputElement>(null);

  const dataContext = useContext(DataContext);

  const [buttonDisabled, setButtonDisabled] = useState<boolean | undefined>(
    undefined
  );

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const [errorObject, setErrorObject] = useState<{
    errorPath: string[];
    errorMessage: string[];
  } | null>(null);

  const errorClassName = `${inputStyles.input} ${inputStyles["input-error"]}`;

  const submitHandler: React.FormEventHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const inputData = {
      application_id: applicationIdRef.current?.value,
    };

    const validation = InputDataMongoSchema.safeParse(inputData);

    if (validation.success) {
      console.log("Data is valid ==>", validation.data);
      console.log("Sending your request!");
      dataContext.searchParametersMongoHandler([inputData]);

      postDataHandler(validation.data);

      applicationIdRef.current!.value = "";

      setErrorObject(null);
    } else {
      const zodErrors: ZodIssue[] = validation.error.issues;

      const errorPath = zodErrors.map((e) => e.path[0].toString());
      const errorMessage = zodErrors.map((e) => e.message.toString());

      setErrorObject({ errorPath, errorMessage });
    }
  };

  const postDataHandler = async (data: { application_id: string }) => {
    try {
      const testApi = await fetch("/api/tes");
      console.log(testApi);
      const resultMongo = await axios.post("/api/search-data-mongo", data);

      dataContext.isSearchingHandlerMongo(true);

      console.log(resultMongo);

      if (resultMongo.data) {
        dataContext.searchStatusHandlerMongo(true);
        dataContext.resultDataMongoHandler({
          ...resultMongo.data,
          form: "Mongo",
        });
      } else {
        dataContext.searchStatusHandlerMongo(false);
      }

      dataContext.isSearchingHandlerMongo(false);
      setButtonDisabled(undefined);
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.response.data.message + " using MongoDB Ref");
      dataContext.searchParametersMongoHandler([{}]);
      dataContext.searchStatusHandlerMongo(null);
      dataContext.isSearchingHandlerMongo(null);
      setButtonDisabled(undefined);
    }
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <Input
          labelName="Application ID"
          idForName="application-id"
          type="text"
          className={
            errorObject?.errorPath.includes("application_id")
              ? errorClassName
              : inputStyles.input
          }
          ref={applicationIdRef}
        />
        {
          <p>
            {errorObject?.errorMessage.filter((e) =>
              e.includes("Application ID")
            )}
          </p>
        }
        <motion.button
          className={styles["submit-button"]}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          disabled={buttonDisabled}
        >
          Search
        </motion.button>
        <motion.button
          className={styles["switch-button-pg"]}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          disabled={buttonDisabled}
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            switchHandler(true);
          }}
        >
          Switch
        </motion.button>
      </form>
      {dataContext.isSearchingMongo === false && (
        <SearchStatus
          searchParams={dataContext.searchParametersMongo}
          form={"Mongo"}
        />
      )}
      <h5 style={{ color: "red" }}>
        {errorMessage ? errorMessage : undefined}
      </h5>
    </Card>
  );
};

export default FormMongo;
