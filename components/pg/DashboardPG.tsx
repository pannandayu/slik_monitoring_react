import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/DataBox.module.css";
import SLIKRequestAttemptPG from "./SLIKRequestAttempt";
import GradingResultHistoryPG from "./GradingResultHistoryPG";
import HitCBAS from "../HitCBAS";
import AllPGDataInterface from "@/interfaces/pg/AllPGDataInterface";
import PersonalInfoPGClass from "@/classes/pg/PersonalInfoPGClass";
import SpouseInfoPGClass from "@/classes/pg/SpouseInfoPGClass";
import PersonalInfoPG from "./PersonalInfoPG";
import SpouseInfoPG from "./SpouseInfoPG";
import SLIKRequestAttemptPGClass from "@/classes/pg/SLIKRequestAttemptPGClass";
import GradingResultPGClass from "@/classes/pg/GradingResultPGClass";

const DashboardPG: React.FC<{
  data: AllPGDataInterface;
}> = ({ data }) => {
  const {
    lastRequestLevel,
    personalInfo,
    spouseInfo,
    slikResponseLog,
    screeningResults,
  } = data;

  const [personalInfoPG, setPersonalInfoPG] = useState<PersonalInfoPGClass>(
    new PersonalInfoPGClass()
  );

  const [spouseInfoPG, setSpouseInfoPG] = useState<SpouseInfoPGClass>(
    new SpouseInfoPGClass()
  );

  const [slikRequestInfoPG, setSlikRequestInfoPG] = useState<
    SLIKRequestAttemptPGClass[]
  >([new SLIKRequestAttemptPGClass()]);

  const [gradingResultHistoryPG, setGradingResultHistoryPG] =
    useState<GradingResultPGClass>(new GradingResultPGClass());

  // const [requestId, setRequestId] = useState<string>("");

  useEffect(() => {
    setPersonalInfoPG({
      ...personalInfo,
      lastRequestLevelDebiturUtama:
        lastRequestLevel.lastRequestLevelDebiturUtama,
    });
    setSpouseInfoPG({
      ...spouseInfo,
      lastRequestLevelPasangan: lastRequestLevel.lastRequestLevelPasangan,
    });
    setSlikRequestInfoPG(slikResponseLog);
    setGradingResultHistoryPG(screeningResults);
  }, [data]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={styles["data-box"]}
    >
      <h1>Client's Data </h1>
      <hr />
      <div className={styles.frame}>
        <PersonalInfoPG data={personalInfoPG} />
        <SpouseInfoPG data={spouseInfoPG} />
      </div>
      <div className={styles.frame}>
        <SLIKRequestAttemptPG data={slikRequestInfoPG} />
      </div>
      <div className={styles.frame}>
        <GradingResultHistoryPG data={gradingResultHistoryPG} />
      </div>
      <div className={styles.frame}>
        <HitCBAS
          maritalStatus={spouseInfoPG.maritalStatus}
          requestId={personalInfoPG.request_id}
        />
      </div>
    </motion.div>
  );
};

export default DashboardPG;
