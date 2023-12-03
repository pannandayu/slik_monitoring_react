import CBASGradingPersonalAndSpouseInterface from "@/interfaces/cbas/CBASGradingPersonalAndSpouseInterface";
class CBASSpouseInfo implements CBASGradingPersonalAndSpouseInterface {
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

export default CBASSpouseInfo;
