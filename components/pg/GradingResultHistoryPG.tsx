import GradingResultPGClass from "@/classes/pg/GradingResultPGClass";
import styles from "@/styles/DataBox.module.css";

import { motion } from "framer-motion";
import { Fragment, useState } from "react";

const GradingResultHistoryPG: React.FC<{
  data: GradingResultPGClass;
}> = ({ data }) => {
  const gradingScreening1 = data.resultGradingScreening1;
  const gradingScreening2 = data.resultGradingScreening2;
  const gradingScreening3 = data.resultGradingScreening3;

  const [openPopupScreening1, setOpenPopupScreening1] =
    useState<boolean>(false);
  const [openPopupScreening2, setOpenPopupScreening2] = useState<boolean[]>(
    new Array(gradingScreening2.length).fill(false)
  );
  const [openPopupScreening3, setOpenPopupScreening3] = useState<boolean[]>(
    new Array(gradingScreening3.length).fill(false)
  );

  const popupScreening1Handler: React.MouseEventHandler = (): void => {
    setOpenPopupScreening1((prevState) => !prevState);
  };

  const popupScreening2Handler = (index: number): void => {
    const updatedPopupState = [...openPopupScreening2];
    updatedPopupState[index] = !updatedPopupState[index];
    setOpenPopupScreening2(updatedPopupState);
  };

  const popupScreening3Handler = (index: number): void => {
    const updatedPopupState = [...openPopupScreening3];
    updatedPopupState[index] = !updatedPopupState[index];
    setOpenPopupScreening3(updatedPopupState);
  };

  return (
    <div className={styles["client-data"]}>
      <h2 style={{ marginTop: "0.75rem", marginBottom: "0.75rem" }}>
        Grading Result History / Records
      </h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Screening</th>
            <th>Personal</th>
            <th>Spouse</th>
            <th>Aggregate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Screening 1</td>
            <motion.td
              whileHover={{ scale: 1.1, cursor: "pointer" }}
              whileTap={{ scale: 0.9 }}
              onClick={popupScreening1Handler}
              style={{
                color: `${
                  gradingScreening1.flag_result_grading === "0"
                    ? "#E55B07"
                    : "black"
                }`,
              }}
            >
              {gradingScreening1?.result_grading || "NULL"}
              {openPopupScreening1 ? (
                <motion.div
                  key={
                    gradingScreening1.updated_date?.toString() ||
                    Math.random().toFixed(2).toString()
                  }
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.15 }}
                  className={styles.popup}
                >
                  {gradingScreening1?.updated_date ? (
                    <Fragment>
                      <h4>Updated at</h4>
                      <h4>
                        {new Date(
                          gradingScreening1.updated_date
                        ).toLocaleString()}
                      </h4>
                    </Fragment>
                  ) : (
                    "NOT YET UPDATED"
                  )}
                </motion.div>
              ) : (
                ""
              )}
            </motion.td>
            <td> - </td>
            <td> - </td>
          </tr>
          <tr>
            <td>Screening 2</td>
            {gradingScreening2.length > 0 ? (
              gradingScreening2.map((item, index) => {
                return (
                  <motion.td
                    key={`${item.updated_date}-${item.param_grading_id}`}
                    whileHover={{ scale: 1.1, cursor: "pointer" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => popupScreening2Handler(index)}
                    style={{
                      color: `${
                        item.flag_result_grading === "0" ? "#E55B07" : "black"
                      }`,
                    }}
                  >
                    {item?.result_grading
                      ? item.result_grading
                      : item.result_grading === ""
                      ? "-"
                      : "NULL"}
                    {openPopupScreening2[index] ? (
                      <motion.div
                        key={
                          gradingScreening2[0].updated_date?.toString() ||
                          Math.random().toFixed(2).toString()
                        }
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.15 }}
                        className={styles.popup}
                      >
                        {gradingScreening2[index]?.updated_date ? (
                          <Fragment>
                            <h4>Updated at</h4>
                            <h4>
                              {
                                gradingScreening2[index].updated_date?.split(
                                  "."
                                )[0]
                              }
                            </h4>
                          </Fragment>
                        ) : (
                          "NOT YET UPDATED"
                        )}
                      </motion.div>
                    ) : (
                      ""
                    )}
                  </motion.td>
                );
              })
            ) : (
              <td>Not yet arrived on the current screening.</td>
            )}
          </tr>
          <tr>
            <td>Screening 3</td>
            {gradingScreening3.length > 0 ? (
              gradingScreening3.map((item, index) => {
                return (
                  <motion.td
                    key={`${item.updated_date}-${item.param_grading_id}`}
                    whileHover={{ scale: 1.1, cursor: "pointer" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => popupScreening3Handler(index)}
                    style={{
                      color: `${
                        item.flag_result_grading === "0" ? "#E55B07" : "black"
                      }`,
                    }}
                  >
                    {item?.result_grading
                      ? item.result_grading
                      : item.result_grading === ""
                      ? "-"
                      : "NULL"}
                    {openPopupScreening3[index] ? (
                      <motion.div
                        key={
                          gradingScreening3[0].updated_date?.toString() ||
                          Math.random().toFixed(2).toString()
                        }
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.15 }}
                        className={styles.popup}
                      >
                        {gradingScreening3[index]?.updated_date ? (
                          <Fragment>
                            <h4>Updated at</h4>
                            <h4>
                              {
                                gradingScreening3[index].updated_date?.split(
                                  "."
                                )[0]
                              }
                            </h4>
                          </Fragment>
                        ) : (
                          "NOT YET UPDATED"
                        )}
                      </motion.div>
                    ) : (
                      ""
                    )}
                  </motion.td>
                );
              })
            ) : (
              <td>Not yet arrived on the current screening.</td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GradingResultHistoryPG;
