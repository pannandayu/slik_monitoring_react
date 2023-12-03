import CBASGradingPersonalAndSpouseInterface from "@/interfaces/cbas/CBASGradingPersonalAndSpouseInterface";

class CBASPersonalInfo implements CBASGradingPersonalAndSpouseInterface {
  responseCode: string = "";
  responseDesc: string = "";
  content?: {
    nikDebitur: "";
    namaDebitur: "";
    tanggalPermintaan: "";
    kategoriDebitur: "";
    color: "";
  };
}

export default CBASPersonalInfo;
