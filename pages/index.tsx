import React, { Fragment, useState } from "react";
import Title from "@/components/Title";
import FormSwitch from "@/components/FormSwitch";
import DataBoxSwitch from "@/components/DataBoxSwitch";

export default function Home() {
  const [formIsPG, setFormIsPG] = useState<boolean>(true);

  const setFormIsPGHandler = (state: boolean) => {
    setFormIsPG(state);
  };

  return (
    <Fragment>
      <h1>Find your client here.</h1>
      <h2>You can search by...</h2>
      <Title form={formIsPG ? "PG" : "Mongo"} />
      <div style={{ display: "flex" }}>
        <FormSwitch
          formIsPG={formIsPG}
          onClickSwitchForm={setFormIsPGHandler}
        />
        <DataBoxSwitch formIsPG={formIsPG} />
      </div>
    </Fragment>
  );
}
