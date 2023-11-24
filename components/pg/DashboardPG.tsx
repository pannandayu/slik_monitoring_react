import { useEffect, useState } from "react";
import PersonalInfoPGInterface from "@/interfaces/pg/PersonalInfoPGInterface";
import MaritalStatusAndSpousePGInterface from "@/interfaces/pg/MaritalStatusAndSpousePGInterface";
import SLIKRequestAttemptPGnterface from "@/interfaces/pg/SLIKRequestAttemptPGInterface";
import { motion } from "framer-motion";
import PersonalInfoPG from "./PersonalInfoPG";
import SpouseInfoPG from "./SpouseInfoPG";
import styles from "@/styles/DataBox.module.css";
import SLIKRequestAttemptPG from "./SLIKRequestAttempt";
import GradingResultHistoryPG from "./GradingResultHistoryPG";
import GradingResultPGInterface from "@/interfaces/pg/GradingResultPGInterface";
import HitCBAS from "../HitCBAS";

const DashboardPG: React.FC<{
  data: {
    lastRequestLevel: any;
    personalInfo: any;
    spouseInfo: any;
    slikResponseLog: any;
    screeningResults: any;
  };
}> = ({ data }) => {
  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [data]);

  const [personalInfoPG, setPersonalInfoPG] = useState<PersonalInfoPGInterface>(
    {
      nama_nasabah: "",
      no_ktp: "",
      app_id: "",
      request_id: "",
      application_no: "",
      jenis_kelamin: "",
      lastRequestLevelDebiturUtama: "",
      tanggal_lahir: "",
    }
  );

  const [spouseInfoPG, setSpouseInfoPG] =
    useState<MaritalStatusAndSpousePGInterface>({
      maritalStatus: null,
      nama_pasangan: null,
      no_ktp: null,
      jenis_kelamin: null,
      lastRequestLevelPasangan: null,
      tanggal_lahir: null,
    });

  const [slikRequestInfoPG, setSlikRequestInfoPG] = useState<
    SLIKRequestAttemptPGnterface[]
  >([
    {
      app_id: "",
      application_no: "",
      insert_date: "",
      response_code: "",
      refresh: "",
      screening: "",
      status_applicant: "",
    },
  ]);

  const [gradingResultHistoryPG, setGradingResultHistoryPG] =
    useState<GradingResultPGInterface>({
      resultGradingScreening1: {
        param_grading_id: "",
        result_grading: "",
        flag_result_grading: "",
        updated_date: "",
      },
      resultGradingScreening2: [
        {
          param_grading_id: "",
          result_grading: "",
          flag_result_grading: "",
          updated_date: "",
        },
      ],
      resultGradingScreening3: [
        {
          param_grading_id: "",
          result_grading: "",
          flag_result_grading: "",
          updated_date: "",
        },
      ],
    });

  useEffect(() => {
    setPersonalInfoPG({
      ...data.personalInfo,
      lastRequestLevelDebiturUtama:
        data.lastRequestLevel.lastRequestLevelDebiturUtama,
    });
    setSpouseInfoPG({
      ...data.spouseInfo,
      lastRequestLevelPasangan: data.lastRequestLevel.lastRequestLevelPasangan,
    });
    setSlikRequestInfoPG(data.slikResponseLog);
    setGradingResultHistoryPG(data.screeningResults);
  }, [data]);

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
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
