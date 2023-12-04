import CardDataBox from "@/wrappers/CardDataBox";

const ScoringMongo: React.FC<{
  scoringData: {
    scoring: { credit_scoring: string; total_scoring: number };
    scoring_dukcapil: string;
    scoring_dukcapil_pasangan: string;
  };
  mongoPersonal: { debitur_status_perkawinan: string } | undefined;
}> = ({ scoringData, mongoPersonal }) => {
  const {
    scoring: { credit_scoring, total_scoring },
    scoring_dukcapil,
    scoring_dukcapil_pasangan,
  } = scoringData;

  const { debitur_status_perkawinan } = mongoPersonal ?? {};

  return (
    <div>
      <h2>Scoring time!</h2>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
        }}
      >
        <CardDataBox>
          <h2>Credit Score</h2>
          <h3>{credit_scoring}</h3>
          <h3>{total_scoring}</h3>
        </CardDataBox>
        <CardDataBox>
          <h2>Personal Dukcapil Score</h2>
          <h3 style={{ fontSize: "1.5rem" }}>{scoring_dukcapil}</h3>
        </CardDataBox>
        <CardDataBox>
          <h2>Spouse Dukcapil Score</h2>
          {debitur_status_perkawinan === "01" && scoring_dukcapil_pasangan ? (
            <h3 style={{ fontSize: "1.5rem" }}>{scoring_dukcapil_pasangan}</h3>
          ) : (
            <h3 style={{ fontSize: "1.5rem" }}>NOT MARRIED</h3>
          )}
        </CardDataBox>
      </div>
    </div>
  );
};

export default ScoringMongo;
