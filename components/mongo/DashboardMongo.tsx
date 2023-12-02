import MongoDataClass from "@/classes/mongo/MongoDataClass";
import styles from "@/styles/DataBox.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeaderMongo from "./HeaderMongo";
import SubmitterMongo from "./SubmitterMongo";
import AboutClientMongo from "./AboutClientMongo";
import ScoringMongo from "./ScoringMongo";
import ApplicationStatus from "./ApplicationStatus";

const DashboardMongo: React.FC<{ data: MongoDataClass }> = ({ data }) => {
  const [mongoData, setMongoData] = useState<MongoDataClass>(
    new MongoDataClass()
  );

  const [mongoPersonal, setMongoPersonal] =
    useState<MongoDataClass["detail"]["debitur"]["personal"]>();

  const [mongoSpouse, setMongoSpouse] =
    useState<MongoDataClass["detail"]["debitur"]["personal"]["spouse"]>();

  const [personalAge, setPersonalAge] = useState<string>();
  const [spouseAge, setSpouseAge] = useState<string>();

  useEffect(() => {
    setMongoData(data);
    setMongoPersonal(data.detail.debitur.personal);
    setPersonalAge(
      (
        new Date().getFullYear() -
        new Date(
          data.detail.debitur.personal.debitur_tanggal_lahir
        ).getFullYear()
      ).toString()
    );
    if (
      data.detail.debitur.personal.debitur_status_perkawinan === "01" &&
      data.detail.debitur.personal.spouse.spouse_ktp_name !== ""
    ) {
      setMongoSpouse(data.detail.debitur.personal.spouse);
      setSpouseAge(
        (
          new Date().getFullYear() -
          new Date(
            data.detail.debitur.personal.spouse.spouse_date_of_birth
          ).getFullYear()
        ).toString()
      );
    }
  }, [data]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={styles["data-box"]}
    >
      <div className={styles["client-data"]}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ fontWeight: "bolder", textAlign: "center" }}>
            Client's Data
          </h1>
          <h1>Created @ {mongoData.order_created_date}</h1>
        </div>
        <hr />

        <HeaderMongo headerData={mongoData} />

        <SubmitterMongo submitterData={mongoData} />

        <AboutClientMongo
          mongoData={mongoData}
          mongoPersonal={mongoPersonal}
          mongoSpouse={mongoSpouse}
          personalAge={personalAge}
          spouseAge={spouseAge}
        />

        <ScoringMongo mongoData={mongoData} mongoPersonal={mongoPersonal} />

        <ApplicationStatus mongoData={mongoData} />
      </div>
    </motion.div>
  );
};

export default DashboardMongo;
