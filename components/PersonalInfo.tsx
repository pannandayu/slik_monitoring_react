import { Fragment } from "react";

const PersonalInfo: React.FC<{ data: PersonalInfoInterface }> = ({ data }) => {
  return (
    <Fragment>
      <h3>Nama Debitur: {data.nama_nasabah}</h3>
      <h3>ID Card No: {data.no_ktp}</h3>
      <h3>App ID: {data.app_id}</h3>
      <h3>Request ID: {data.request_id}</h3>
      <h3>App No: {data.application_no}</h3>
      <h3>Gender: {data.jenis_kelamin}</h3>
    </Fragment>
  );
};

export default PersonalInfo