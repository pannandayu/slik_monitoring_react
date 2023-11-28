import styles from "@/styles/DataBox.module.css";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CBASGradingPersonalAndSpouseInterface from "@/interfaces/CBASGradingPersonalAndSpouseInterface";
import CardDataBox from "@/wrappers/CardDataBox";
import CBASGradingAggregateInterface from "@/interfaces/CBASGradingAggregateInterface";

const HitCBAS: React.FC<{
  requestId: string;
  maritalStatus: string | null;
}> = ({ requestId, maritalStatus }) => {
  const [hitCbas, setHitCbas] = useState<boolean>(false);
  const [hitButtonText, setHitButtonText] = useState<number>(0);

  const [searchingCbas, setSearchingCbas] = useState<boolean>(false);
  const [cbasDataPersonal, setCbasDataPersonal] =
    useState<CBASGradingPersonalAndSpouseInterface>({
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
    useState<CBASGradingPersonalAndSpouseInterface>({
      responseCode: "",
      content: {
        nikDebitur: "",
        namaDebitur: "",
        tanggalPermintaan: "",
        kategoriDebitur: "",
        color: "",
      },
    });

  const [cbasDataAggregate, setCbasDataAggregate] =
    useState<CBASGradingAggregateInterface>({
      responseCode: "",
      contentDebitur: {
        kategoriAgregat: "",
        color: "",
      },
    });

  const postCbasHandler = async () => {
    setHitCbas(true);
    setHitButtonText(1);
    setSearchingCbas(true);
    console.log("Requesting to CBAS now");

    let appIdPersonal = requestId + "101";
    let appIdSpouse = requestId + "102";
    try {
      if (maritalStatus === "01") {
        const cbasPersonalRequest = await fetch("/api/hit-cbas", {
          body: JSON.stringify({ appId: appIdPersonal, type: "category" }),
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        const cbasPersonalResponse = await cbasPersonalRequest.json();

        const cbasSpouseRequest = await fetch("/api/hit-cbas", {
          body: JSON.stringify({ appId: appIdSpouse, type: "category" }),
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        const cbasSpouseResponse = await cbasSpouseRequest.json();

        const cbasAggregateRequest = await fetch("/api/hit-cbas", {
          body: JSON.stringify({ requestId, type: "agregat_ind" }),
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        const cbasAggregateResponse = await cbasAggregateRequest.json();

        setCbasDataPersonal(cbasPersonalResponse);
        setCbasDataSpouse(cbasSpouseResponse);
        setCbasDataAggregate(cbasAggregateResponse);
      } else {
        const cbasPersonalRequest = await fetch("/api/hit-cbas", {
          body: JSON.stringify({ appId: appIdPersonal, type: "category" }),
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        const cbasPersonalResponseNotMarried = await cbasPersonalRequest.json();

        const cbasAggregateRequest = await fetch("/api/hit-cbas", {
          body: JSON.stringify({ requestId, type: "agregat_ind" }),
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        const cbasAggregateResponseNotMarried =
          await cbasAggregateRequest.json();

        setCbasDataPersonal(cbasPersonalResponseNotMarried);
        setCbasDataAggregate(cbasAggregateResponseNotMarried);
      }

      setSearchingCbas(false);
      setHitCbas(false);
    } catch (error: any) {
      console.error(error);
      setSearchingCbas(false);
      setHitCbas(false);
    }
  };

  const personalResponseBox = (
    <CardDataBox>
      <div className={styles.frame}>
        <div>
          <h2 style={{ marginTop: "1rem", color: "#CA5305" }}>
            Personal Response
          </h2>
          <h4>Name: {cbasDataPersonal.content.namaDebitur}</h4>
          <h4>
            Request Date: {cbasDataPersonal.content.tanggalPermintaan || "-"}
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
  );
  const spouseResponseBox = (
    <CardDataBox>
      <div className={styles.frame}>
        <div>
          <h2 style={{ marginTop: "1rem", color: "#CA5305" }}>
            Spouse Response
          </h2>
          <h4>Name: {cbasDataSpouse.content.namaDebitur}</h4>
          <h4>
            Request Date: {cbasDataSpouse.content.tanggalPermintaan || "-"}
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
  );
  const aggregateResponseBox = (
    <CardDataBox>
      <div className={styles.frame}>
        <div>
          <h2 style={{ marginTop: "1rem", color: "#CA5305" }}>
            Aggregate Response
          </h2>
          <h4>
            Category:{" "}
            <span
              style={{
                backgroundColor: `${cbasDataAggregate.contentDebitur.color}`,
                padding: "0.5rem",
                borderRadius: "10px",
              }}
            >
              {cbasDataAggregate.contentDebitur.kategoriAgregat}
            </span>
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
              {personalResponseBox}
              {cbasDataSpouse.responseCode === "1" ? (
                spouseResponseBox
              ) : (
                <div className={styles.frame}>
                  <div>
                    <h2 style={{ color: "red" }}>Spouse data not found.</h2>
                  </div>
                </div>
              )}
              {cbasDataAggregate.responseCode === "1" ? (
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
              {cbasDataAggregate.responseCode === "1" ? (
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
