interface GradingResultPGInterface {
  resultGradingScreening1: {
    param_grading_id: string;
    result_grading: string | undefined;
    flag_result_grading: string;
    updated_date: string | undefined;
  };
  resultGradingScreening2: {
    param_grading_id: string;
    result_grading: string | undefined;
    flag_result_grading: string;
    updated_date: string | undefined;
  }[];
  resultGradingScreening3: {
    param_grading_id: string;
    result_grading: string | undefined;
    flag_result_grading: string;
    updated_date: string | undefined;
  }[];
}

export default GradingResultPGInterface;
