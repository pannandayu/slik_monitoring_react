import styles from "@/styles/SubmitterMongo.module.css";

const SubmitterMongo: React.FC<{
  submitterData: { customer_name: string };
}> = ({ submitterData }) => {
  const { customer_name } = submitterData;
  return (
    <div className={styles["submitter-mongo"]}>
      <div>
        <h2>This application is submitted on behalf of...</h2>
        <h3>{customer_name}</h3>
      </div>
    </div>
  );
};

export default SubmitterMongo;
