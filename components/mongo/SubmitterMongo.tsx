const SubmitterMongo: React.FC<{
  submitterData: { customer_name: string };
}> = ({ submitterData }) => {
  const { customer_name } = submitterData;
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h2 style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          This application is submitted on behalf of...
        </h2>
        <h3
          style={{
            marginTop: "0",
            marginBottom: "1rem",
            fontSize: "1.5rem",
            fontWeight: "lighter",
          }}
        >
          {customer_name}
        </h3>
      </div>
    </div>
  );
};

export default SubmitterMongo;
