import PersonalInfoPGClass from "@/classes/pg/PersonalInfoPGClass";
import styles from "@/styles/DataBox.module.css";

const PersonalInfoPG: React.FC<{
  data: PersonalInfoPGClass;
}> = ({ data }) => {
  const birthDate = new Date(data.tanggal_lahir);
  const age = (new Date().getFullYear() - birthDate.getFullYear()).toString();

  return (
    <div className={styles["client-data"]}>
      <h2 style={{ marginTop: "0.5rem", marginBottom: "0.75rem" }}>
        Personal Info
      </h2>
      <div className={styles["info-container"]}>
        <div className={styles["personal-info"]}>
          <h3 style={{ marginTop: "0.5rem" }}>Name: {data.nama_nasabah}</h3>
          <h3>ID Card No: {data.no_ktp}</h3>
          <h3>Gender: {data.jenis_kelamin}</h3>
          <h3>Age: {age}</h3>
        </div>
        <div className={styles["screening-info"]}>
          <h3
            style={{
              textAlign: "center",
              fontSize: "0.8rem",
            }}
          >
            Last Successful Request At
          </h3>
          <h3
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              margin: "auto",
            }}
          >
            Screening {data.lastRequestLevelDebiturUtama}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoPG;
