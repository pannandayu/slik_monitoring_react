import PersonalInfoPGInterface from "@/interfaces/pg/PersonalInfoPGInterface";

class PersonalInfoPGClass implements PersonalInfoPGInterface {
  nama_nasabah: string = "";
  no_ktp: string = "";
  app_id: string = "";
  request_id: string = "";
  application_no: string = "";
  jenis_kelamin: string = "";
  lastRequestLevelDebiturUtama: string = "";
  tanggal_lahir: string = "";
}

export default PersonalInfoPGClass;