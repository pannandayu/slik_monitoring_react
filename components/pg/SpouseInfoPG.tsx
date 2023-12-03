import styles from "@/styles/DataBox.module.css";
import { Fragment } from "react";
import SpouseInfoPGClass from "@/classes/pg/SpouseInfoPGClass";

const SpouseInfoPG: React.FC<{ data: SpouseInfoPGClass }> = ({ data }) => {
  let age;
  if (data.tanggal_lahir) {
    const birthDate = new Date(data.tanggal_lahir);
    age = (new Date().getFullYear() - birthDate.getFullYear()).toString();
  }

  return (
    <div className={styles["client-data"]}>
      <h2>Spouse Info</h2>
      {data.maritalStatus === "01" ? (
        <Fragment>
          <div className={styles["info-container"]}>
            <div className={styles["personal-info"]}>
              <h3>Name: {data.nama_pasangan}</h3>
              <h3>ID Card No: {data.no_ktp}</h3>
              <h3>Gender: {data.jenis_kelamin}</h3>
              <h3>Age: {age}</h3>
            </div>
            <div className={styles["screening-info"]}>
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                }}
              >
                Last Successful Request At
              </h3>
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "1.75rem",
                  margin: "auto",
                }}
              >
                Screening {data.lastRequestLevelPasangan}
              </h3>
            </div>
          </div>
        </Fragment>
      ) : (
        <h3>NOT MARRIED</h3>
      )}
    </div>
  );
};

export default SpouseInfoPG;
