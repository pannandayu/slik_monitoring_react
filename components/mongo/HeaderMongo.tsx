import styles from "@/styles/DataBox.module.css";

const HeaderMongo: React.FC<{
  headerData: {
    application_id: string;
    slik?: { idPermintaanSlik: string };
    approval_surveyor: string;
    order_id: string;
  };
}> = ({ headerData }) => {
  const {
    application_id,
    slik: { idPermintaanSlik } = {},
    approval_surveyor,
    order_id,
  } = headerData;

  return (
    <div
      style={{ justifyContent: "space-between" }}
      className={styles["info-container-mongo"]}
    >
      <h2
        style={{
          fontWeight: "normal",
          textAlign: "left",
        }}
      >
        Application ID: <br /> {application_id}
      </h2>
      <h2 style={{ fontWeight: "normal", textAlign: "center" }}>
        Request ID: <br /> {idPermintaanSlik || "Not yet available."}
      </h2>
      <h2 style={{ fontWeight: "normal", textAlign: "center" }}>
        Apprv. Surveyor: <br /> {approval_surveyor}
      </h2>
      <h2 style={{ fontWeight: "normal", textAlign: "right" }}>
        Appl. No: <br /> {order_id}
      </h2>
    </div>
  );
};

export default HeaderMongo;
