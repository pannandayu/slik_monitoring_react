import MaritalStatusAndSpousePGInterface from "@/interfaces/pg/MaritalStatusAndSpousePGInterface";
class SpouseInfoPGClass implements MaritalStatusAndSpousePGInterface {
  maritalStatus: string | null = null;
  nama_pasangan?: string = undefined;
  no_ktp?: string = undefined;
  jenis_kelamin?: string = undefined;
  lastRequestLevelPasangan?: string = undefined;
  tanggal_lahir?: string = undefined;
}

export default SpouseInfoPGClass;
