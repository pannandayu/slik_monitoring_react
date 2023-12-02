import SLIKRequestAttemptPGnterface from "@/interfaces/pg/SLIKRequestAttemptPGInterface";

class SLIKRequestAttemptPGClass implements SLIKRequestAttemptPGnterface {
  app_id: string = "";
  application_no: string = "";
  insert_date: string = "";
  response_code: string = "";
  refresh: string = "";
  screening: string = "";
  status_applicant: string = "";
}

export default SLIKRequestAttemptPGClass