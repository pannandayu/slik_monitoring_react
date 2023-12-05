import CardDataBox from "@/wrappers/CardDataBox";
import { Fragment } from "react";

const AboutClientMongo: React.FC<{
  gradingData: {
    grading_slik: string;
    grading_slik_pasangan: string;
    aggregate_slik_perorangan: string;
    aggregate_slik_perorangan_brms?: string;
  };
  personalData:
    | {
        debitur_nama_sesuai_ktp: string;
        debitur_no_ktp: string;
        debitur_jenis_kelamin: string;
        debitur_status_perkawinan: string;
      }
    | undefined;
  spouseData: { spouse_ktp_name: string; spouse_ktp_no: string } | undefined;
  personalAge: string | undefined;
  spouseAge: string | undefined;
}> = ({ gradingData, personalData, spouseData, personalAge, spouseAge }) => {
  const {
    grading_slik,
    grading_slik_pasangan,
    aggregate_slik_perorangan,
    aggregate_slik_perorangan_brms,
  } = gradingData;

  const {
    debitur_nama_sesuai_ktp,
    debitur_no_ktp,
    debitur_jenis_kelamin,
    debitur_status_perkawinan,
  } = personalData ?? {};

  const { spouse_ktp_name, spouse_ktp_no } = spouseData ?? {};

  return (
    <div>
      <h2>More about the client...</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CardDataBox>
          <h2>Personal Info</h2>
          <h3>Name: {debitur_nama_sesuai_ktp}</h3>
          <h3>ID Card No: {debitur_no_ktp}</h3>
          <h3>Gender: {debitur_jenis_kelamin}</h3>
          <h3>Age: {personalAge}</h3>
          <h3>
            SLIK Grading:{" "}
            <span style={{ fontFamily: "Arial", fontWeight: "bolder" }}>
              {grading_slik}
            </span>
          </h3>
        </CardDataBox>
        <CardDataBox>
          <h2>Spouse Info</h2>
          {debitur_status_perkawinan === "01" && spouseData ? (
            <Fragment>
              <h3>Name: {spouse_ktp_name}</h3>
              <h3>ID Card No: {spouse_ktp_no}</h3>
              <h3>Gender: {debitur_jenis_kelamin === "P" ? "L" : "P"}</h3>
              <h3>Age: {spouseAge}</h3>
              <h3>
                SLIK Grading:{" "}
                <span style={{ fontFamily: "Arial", fontWeight: "bolder" }}>
                  {grading_slik_pasangan}
                </span>
              </h3>
            </Fragment>
          ) : (
            "NOT MARRIED"
          )}
        </CardDataBox>
        <CardDataBox>
          <h2>Aggregate Info</h2>
          <h3>
            SLIK Grading:{" "}
            <span style={{ fontFamily: "Arial", fontWeight: "bolder" }}>
              {aggregate_slik_perorangan}
            </span>
          </h3>
          <h3>
            BRMS SLIK Grading:{" "}
            <br />
            <span style={{ fontFamily: "Arial", fontWeight: "bolder" }}>
              {aggregate_slik_perorangan_brms || 'Not yet available.'}
            </span>
          </h3>
        </CardDataBox>
      </div>
    </div>
  );
};

export default AboutClientMongo;
