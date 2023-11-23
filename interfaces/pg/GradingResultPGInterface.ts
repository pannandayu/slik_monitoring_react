interface GradingResultPGInterface {
  resultGradingScreening1: {
    param_grading_id: string;
    result_grading?: string;
    flag_result_grading: string;
    updated_date?: string;
  };
  resultGradingScreening2: [
    {
      param_grading_id: string;
      result_grading?: string;
      flag_result_grading: string;
      updated_date?: string;
    }
  ];
  resultGradingScreening3: [
    {
      param_grading_id: string;
      result_grading?: string;
      flag_result_grading: string;
      updated_date?: string;
    }
  ];
}

export default GradingResultPGInterface;
