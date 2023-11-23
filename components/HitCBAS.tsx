import styles from "@/styles/DataBox.module.css";
import axios from "axios";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CBASGradingContentInterface from "@/interfaces/CBASGradingContentInterface";
import Card from "@/wrappers/Card";
import CardDataBox from "@/wrappers/CardDataBox";

const HitCBAS: React.FC<{
  requestId: string;
  maritalStatus: string | null;
}> = ({ requestId, maritalStatus }) => {
  const [hitCbas, setHitCbas] = useState<boolean>(false);
  const [hitButtonText, setHitButtonText] = useState<number>(0);

  const [searchingCbas, setSearchingCbas] = useState<boolean>(false);
  const [cbasDataPersonal, setCbasDataPersonal] =
    useState<CBASGradingContentInterface>({
      responseCode: "",
      content: {
        nikDebitur: "",
        namaDebitur: "",
        tanggalPermintaan: "",
        kategoriDebitur: "",
        color: "",
      },
    });

  const [cbasDataSpouse, setCbasDataSpouse] =
    useState<CBASGradingContentInterface>({
      responseCode: "",
      content: {
        nikDebitur: "",
        namaDebitur: "",
        tanggalPermintaan: "",
        kategoriDebitur: "",
        color: "",
      },
    });

  const postCbasHandler = async () => {
    setHitCbas(true);
    setHitButtonText(1);
    setSearchingCbas(true);
    console.log("Requesting to CBAS now!");

    let cbasPersonalResponse;
    let cbasSpouseResponse;
    let appIdPersonal = requestId + "101";
    let appIdSpouse = requestId + "102";

    if (maritalStatus === "01") {
      cbasPersonalResponse = await axios.post("/api/hit-cbas", {
        appId: appIdPersonal,
        type: "category",
      });
      cbasSpouseResponse = await axios.post("/api/hit-cbas", {
        appId: appIdSpouse,
        type: "category",
      });
      setCbasDataPersonal(cbasPersonalResponse.data);
      setCbasDataSpouse(cbasSpouseResponse.data);
    } else {
      cbasPersonalResponse = await axios.post("/api/hit-cbas", {
        appId: appIdPersonal,
        type: "category",
      });
      setCbasDataPersonal(cbasPersonalResponse.data);
    }

    setSearchingCbas(false);
    setHitCbas(false);
  };

  return (
    <div className={styles["client-data"]}>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <h2>Hit CBAS?</h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles["hit-cbas-button"]}
          onClick={postCbasHandler}
          hidden={hitCbas}
        >
          {hitButtonText === 1 ? (
            "Retry?"
          ) : (
            <img
              style={{
                width: "50px",
                height: "20px",
                objectFit: "cover",
              }}
              src="/seabass.png"
              alt="Seabass"
            />
          )}
        </motion.button>
      </div>
      {searchingCbas && (
        <AnimatePresence mode="wait">
          <motion.div
            key={"cbasData"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
          >
            <h3
              style={{ margin: 0 }}
            >{`Request sent at ${new Date().toLocaleTimeString()}`}</h3>
            <h3 style={{ marginTop: "1rem" }}>
              Please kindly wait for the result.
            </h3>
          </motion.div>
        </AnimatePresence>
      )}

      {!searchingCbas && cbasDataPersonal.responseCode !== "" ? (
        cbasDataPersonal.responseCode === "1" ? (
          maritalStatus === "01" ? (
            <div style={{ display: "flex", gap: "100px" }}>
              <CardDataBox>
                <div className={styles.frame}>
                  <div>
                    <h2 style={{ marginTop: "1rem", color: "#008001" }}>
                      Personal Response
                    </h2>
                    <h4>Name: {cbasDataPersonal.content.namaDebitur}</h4>
                    <h4>
                      Request Date:{" "}
                      {cbasDataPersonal.content.tanggalPermintaan || "-"}
                    </h4>
                    <h4>
                      Category:{" "}
                      <span
                        style={{
                          backgroundColor: `${cbasDataPersonal.content.color}`,
                          padding: "0.5rem",
                          borderRadius: "10px",
                        }}
                      >
                        {cbasDataPersonal.content.kategoriDebitur}
                      </span>
                    </h4>
                  </div>
                </div>
              </CardDataBox>
              <CardDataBox>
                <div className={styles.frame}>
                  <div>
                    <h2 style={{ marginTop: "1rem", color: "#008001" }}>
                      Spouse Response
                    </h2>
                    <h4>Name: {cbasDataSpouse.content.namaDebitur}</h4>
                    <h4>
                      Request Date:{" "}
                      {cbasDataSpouse.content.tanggalPermintaan || "-"}
                    </h4>
                    <h4>
                      Category:{" "}
                      <span
                        style={{
                          backgroundColor: `${cbasDataSpouse.content.color}`,
                          padding: "0.5rem",
                          borderRadius: "10px",
                        }}
                      >
                        {cbasDataSpouse.content.kategoriDebitur}
                      </span>
                    </h4>
                  </div>
                </div>
              </CardDataBox>
            </div>
          ) : (
            <CardDataBox>
              <div className={styles.frame}>
                <div>
                  <h2 style={{ marginTop: "1rem", color: "#008001" }}>
                    Response
                  </h2>
                  <h4>Name: {cbasDataPersonal.content.namaDebitur}</h4>
                  <h4>
                    Request Date:{" "}
                    {cbasDataPersonal.content.tanggalPermintaan || "-"}
                  </h4>
                  <h4>
                    Category:{" "}
                    <span
                      style={{
                        backgroundColor: `${cbasDataPersonal.content.color}`,
                        padding: "0.5rem",
                        borderRadius: "10px",
                      }}
                    >
                      {cbasDataPersonal.content.kategoriDebitur}
                    </span>
                  </h4>
                </div>
              </div>
            </CardDataBox>
          )
        ) : (
          <div className={styles.frame}>
            <div>
              <h2 style={{ color: "red" }}>Data not found.</h2>
            </div>
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default HitCBAS;
