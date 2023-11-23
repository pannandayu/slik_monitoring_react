import DashboardPG from "@/components/pg/DashboardPG";

const DataBox: React.FC<{ data: any }> = ({ data }) => {
  return <div>{data.form === "PG" && <DashboardPG data={data} />}</div>;
  // TODO ELSE DASHBOARD MONGO
};

export default DataBox;
