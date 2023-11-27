import React, { useState } from "react";
import Title from "@/components/Title";
import FormSwitch from "@/wrappers/FormSwitch";
import DashboardSwitch from "@/wrappers/DashboardSwitch";

export default function Home() {
  const [formIsPG, setFormIsPG] = useState<boolean>(true);

  const setFormIsPGHandler = (state: boolean) => {
    setFormIsPG(state);
  };

  return (
    <div>
      <h1>Find your client here.</h1>
      <h2>You can search by...</h2>
      <Title form={formIsPG ? "PG" : "Mongo"} />
      <div style={{ display: "flex" }}>
        <FormSwitch
          formIsPG={formIsPG}
          onClickSwitchForm={setFormIsPGHandler}
        />
        <DashboardSwitch formIsPG={formIsPG} />
      </div>
    </div>
  );
}
