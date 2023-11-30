interface CBASGradingPersonalAndSpouse {
  responseCode: string;
  responseDesc: string;
  content?: {
    nikDebitur: string;
    namaDebitur: string;
    tanggalPermintaan: string;
    kategoriDebitur: string;
    color: string;
  };
}

export default CBASGradingPersonalAndSpouse;
