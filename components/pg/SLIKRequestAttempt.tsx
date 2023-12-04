import SLIKRequestAttemptPGClass from "@/classes/pg/SLIKRequestAttemptPGClass";
import styles from "@/styles/DataBox.module.css";
import { Fragment } from "react";

const SLIKRequestAttemptPG: React.FC<{
  data: SLIKRequestAttemptPGClass[];
}> = ({ data }) => {
  const latestRequest = data.slice(0, 1);
  const olderRequests = data.slice(1);

  return (
    <div className={styles["client-data"]}>
      <h2 style={{ marginTop: "0.75rem", marginBottom: "0.75rem" }}>
        Latest Request
      </h2>
      <div className={styles["last-request"]}>
        {latestRequest.map((item) => {
          return (
            <Fragment key={`${item.app_id}-${item.insert_date}`}>
              <h3>CBAS Request ID {item.app_id.split("I")[0] + "I"}</h3>
              <h3>
                @{" "}
                {new Date(item.insert_date).toLocaleDateString() +
                  " - " +
                  new Date(item.insert_date).toLocaleTimeString()}
              </h3>
              <h3>By: {item.status_applicant}</h3>
              <h3>Response? {item.response_code === "1" ? "OK" : "NOT OK"}</h3>
              <h3>Refresh? {item.refresh === "1" ? "Yes" : "No"}</h3>
              <h3>
                Screening{" "}
                <p
                  style={{
                    textAlign: "center",
                    marginTop: 0,
                    // marginBottom: "0.75rem",
                  }}
                >
                  {item.screening}
                </p>
              </h3>
            </Fragment>
          );
        })}
      </div>
      {olderRequests.length > 0 ? (
        <Fragment>
          <h2 style={{ marginTop: "0", marginBottom: "0.75rem" }}>
            SLIK Request Attempt(s)
          </h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>App ID</th>
                <th>Insert Date</th>
                <th>Status</th>
                <th>Response</th>
                <th>Refresh</th>
                <th>Screening</th>
              </tr>
            </thead>
            <tbody>
              {olderRequests.map((item) => {
                return (
                  <tr key={`${item.app_id}-${item.insert_date}`}>
                    <td>{item.application_no}</td>
                    <td>{item.app_id}</td>
                    <td>{new Date(item.insert_date).toLocaleString()}</td>
                    <td>{item.status_applicant}</td>
                    <td>{item.response_code === "1" ? "OK" : "NOT OK"}</td>
                    <td>{item.refresh}</td>
                    <td>{item.screening}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Fragment>
      ) : (
        <h4>There are no other SLIK request attempt(s).</h4>
      )}
    </div>
  );
};

export default SLIKRequestAttemptPG;
