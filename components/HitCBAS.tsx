import styles from "@/styles/DataBox.module.css";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CardDataBox from "@/wrappers/CardDataBox";
import CBASPersonalInfo from "@/classes/cbas/CBASPersonalInfo";
import CBASSpouseInfo from "@/classes/cbas/CBASSpouseInfo";
import CBASAggregateInfo from "@/classes/cbas/CBASAggregateInfo";

const HitCBAS: React.FC<{
  requestId: string;
  maritalStatus: string | null;
}> = ({ requestId, maritalStatus }) => {
  const [hitCbas, setHitCbas] = useState<boolean>(false);
  const [hitButtonText, setHitButtonText] = useState<number>(0);
  const [searchingCbas, setSearchingCbas] = useState<boolean>(false);
  const [cbasError, setCbasError] = useState<string>();
  const [cbasDataPersonal, setCbasDataPersonal] = useState<CBASPersonalInfo>(
    new CBASPersonalInfo()
  );
  const [cbasDataSpouse, setCbasDataSpouse] = useState<CBASSpouseInfo>(
    new CBASSpouseInfo()
  );
  const [cbasDataAggregate, setCbasDataAggregate] = useState<CBASAggregateInfo>(
    new CBASAggregateInfo()
  );

  useEffect(() => {
    setCbasDataPersonal(new CBASPersonalInfo());
    setCbasDataSpouse(new CBASSpouseInfo());
    setCbasDataAggregate(new CBASAggregateInfo());
    setHitButtonText(0);
    setCbasError(undefined);
  }, [requestId, maritalStatus]);

  const postCbasHandler = async () => {
    setHitCbas(true);
    setHitButtonText(1);
    setSearchingCbas(true);
    setCbasError(undefined);
    console.log("Requesting to CBAS now!");

    let appIdPersonal = requestId + "101";
    let appIdSpouse = requestId + "102";
    try {
      if (maritalStatus === "01") {
        // const cbasPersonalRequest = await fetch("/api/hit-cbas", {
        //   body: JSON.stringify({ appId: appIdPersonal, type: "category" }),
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        // });

        const cbasPersonalRequest = await fetchWithTimeout(
          "/api/hit-cbas",
          { appId: appIdPersonal, type: "category" },
          "POST"
        );

        const cbasPersonalResponse = await cbasPersonalRequest.json();

        // const cbasSpouseRequest = await fetch("/api/hit-cbas", {
        //   body: JSON.stringify({ appId: appIdSpouse, type: "category" }),
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        // });

        const cbasSpouseRequest = await fetchWithTimeout(
          "/api/hit-cbas",
          { appId: appIdSpouse, type: "category" },
          "POST"
        );

        const cbasSpouseResponse = await cbasSpouseRequest.json();

        // const cbasAggregateRequest = await fetch("/api/hit-cbas", {
        //   body: JSON.stringify({ requestId, type: "agregat_ind" }),
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        // });

        const cbasAggregateRequest = await fetchWithTimeout(
          "/api/hit-cbas",
          { requestId, type: "agregat_ind" },
          "POST"
        );

        const cbasAggregateResponse = await cbasAggregateRequest.json();

        setCbasDataPersonal(cbasPersonalResponse);
        setCbasDataSpouse(cbasSpouseResponse);
        setCbasDataAggregate(cbasAggregateResponse);
      } else {
        // const cbasPersonalRequest = await fetch("/api/hit-cbas", {
        //   body: JSON.stringify({ appId: appIdPersonal, type: "category" }),
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        // });

        const cbasPersonalRequest = await fetchWithTimeout(
          "/api/hit-cbas",
          { appId: appIdPersonal, type: "category" },
          "POST"
        );

        const cbasPersonalResponseNotMarried = await cbasPersonalRequest.json();

        // const cbasAggregateRequest = await fetch("/api/hit-cbas", {
        //   body: JSON.stringify({ requestId, type: "agregat_ind" }),
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        // });

        const cbasAggregateRequest = await fetchWithTimeout(
          "/api/hit-cbas",
          { requestId, type: "agregat_ind" },
          "POST"
        );
        
        const cbasAggregateResponseNotMarried =
          await cbasAggregateRequest.json();

        setCbasDataPersonal(cbasPersonalResponseNotMarried);
        setCbasDataAggregate(cbasAggregateResponseNotMarried);
      }

      setSearchingCbas(false);
      setHitCbas(false);
    } catch (error: any) {
      console.error(error.message);
      setCbasError(error.message);
      setSearchingCbas(false);
      setHitCbas(false);
    }
  };

  const personalResponseBox = (
    <CardDataBox>
      <div className={styles.frame}>
        <div className={styles["cbas-response"]}>
          <h2 style={{ marginTop: "1rem", color: "#CA5305" }}>
            Personal Response
          </h2>
          <h4>Name: {cbasDataPersonal.content?.namaDebitur}</h4>
          <h4>
            Request Date: {cbasDataPersonal.content?.tanggalPermintaan || "-"}
          </h4>
          <h4>Category:</h4>
          <h4
            style={{
              backgroundColor: `${cbasDataPersonal.content?.color}`,
              padding: "0.5rem",
              borderRadius: "10px",
              textAlign: "center",
              width: "45%",
              margin: "0",
            }}
          >
            {cbasDataPersonal.content?.kategoriDebitur}
          </h4>
        </div>
      </div>
    </CardDataBox>
  );
  const spouseResponseBox = (
    <CardDataBox>
      <div className={styles.frame}>
        <div className={styles["cbas-response"]}>
          <h2 style={{ marginTop: "1rem", color: "#CA5305" }}>
            Spouse Response
          </h2>
          <h4>Name: {cbasDataSpouse.content?.namaDebitur}</h4>
          <h4>
            Request Date: {cbasDataSpouse.content?.tanggalPermintaan || "-"}
          </h4>
          <h4>Category:</h4>
          <h4
            style={{
              backgroundColor: `${cbasDataSpouse.content?.color}`,
              padding: "0.5rem",
              borderRadius: "10px",
              textAlign: "center",
              width: "45%",
              margin: "0",
            }}
          >
            {cbasDataSpouse.content?.kategoriDebitur}
          </h4>
        </div>
      </div>
    </CardDataBox>
  );
  const aggregateResponseBox = (
    <CardDataBox>
      <div className={styles.frame}>
        <div className={styles["cbas-response"]}>
          <h2 style={{ marginTop: "1rem", color: "#CA5305" }}>
            Aggregate Response
          </h2>
          <h4>Category:</h4>
          <h4
            style={{
              backgroundColor: `${cbasDataAggregate.contentDebitur?.color}`,
              padding: "0.5rem",
              borderRadius: "10px",
              textAlign: "center",
              width: "45%",
              margin: "0",
            }}
          >
            {cbasDataAggregate.contentDebitur?.kategoriAgregat}
          </h4>
        </div>
      </div>
    </CardDataBox>
  );

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
            key={
              cbasDataPersonal.content?.nikDebitur ||
              Math.random().toFixed(2).toString()
            }
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
        cbasDataPersonal.responseCode === "1" &&
        cbasDataPersonal.responseDesc.endsWith("success") ? (
          maritalStatus === "01" ? (
            <div style={{ display: "flex", gap: "3.5rem" }}>
              {personalResponseBox}
              {cbasDataSpouse.responseCode === "1" &&
              cbasDataSpouse.responseDesc.endsWith("success") ? (
                spouseResponseBox
              ) : (
                <div className={styles.frame}>
                  <div>
                    <h2 style={{ color: "red" }}>Spouse data not found.</h2>
                  </div>
                </div>
              )}
              {cbasDataAggregate.responseCode === "1" &&
              cbasDataAggregate.responseDesc.endsWith("success") ? (
                aggregateResponseBox
              ) : (
                <div className={styles.frame}>
                  <div>
                    <h2 style={{ color: "red" }}>Aggregate data not found.</h2>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div style={{ display: "flex", gap: "100px" }}>
              {personalResponseBox}
              {cbasDataAggregate.responseCode === "1" &&
              cbasDataAggregate.responseDesc.endsWith("success") ? (
                aggregateResponseBox
              ) : (
                <div className={styles.frame}>
                  <div>
                    <h2 style={{ color: "red" }}>Aggregate data not found.</h2>
                  </div>
                </div>
              )}
            </div>
          )
        ) : cbasDataSpouse.responseCode === "1" &&
          cbasDataSpouse.responseDesc.endsWith("success") ? (
          <div style={{ display: "flex", gap: "3.5rem" }}>
            <div className={styles.frame}>
              <div>
                <h2 style={{ color: "red" }}>Personal data not found.</h2>
              </div>
            </div>
            {spouseResponseBox}
            {cbasDataAggregate.responseCode === "1" &&
            cbasDataAggregate.responseDesc.endsWith("success") ? (
              aggregateResponseBox
            ) : (
              <div className={styles.frame}>
                <div>
                  <h2 style={{ color: "red" }}>Aggregate data not found.</h2>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.frame}>
            <div>
              <h2 style={{ color: "red" }}>All data not found.</h2>
            </div>
          </div>
        )
      ) : (
        ""
      )}
      {cbasError && cbasError}
    </div>
  );
};

export default HitCBAS;

const fetchWithTimeout = async (
  url: string,
  body: { appId?: string; requestId?: string; type: string },
  method: string
): Promise<Response> => {
  const abortController = new AbortController();
  const timer = setTimeout(() => abortController.abort(), 120000);

  const timeout = { timeout: 120000 };

  const request = await fetch(url, {
    ...timeout,
    body: JSON.stringify(body),
    method,
    headers: { "Content-Type": "application/json" },
    signal: abortController.signal,
  });

  clearTimeout(timer);

  return request;
};
