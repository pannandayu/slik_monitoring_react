import GradingResultPGInterface from "@/interfaces/pg/GradingResultPGInterface";
class GradingResultPGClass implements GradingResultPGInterface {
  resultGradingScreening1 = {
    param_grading_id: "",
    result_grading: undefined as string | undefined,
    flag_result_grading: "",
    updated_date: undefined as string | undefined,
  };

  resultGradingScreening2 = [
    {
      param_grading_id: "",
      result_grading: undefined as string | undefined,
      flag_result_grading: "",
      updated_date: undefined as string | undefined,
    },
  ];

  resultGradingScreening3 = [
    {
      param_grading_id: "",
      result_grading: undefined as string | undefined,
      flag_result_grading: "",
      updated_date: undefined as string | undefined,
    },
  ];
}

export default GradingResultPGClass;
