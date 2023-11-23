interface CBASGradingContentInterface {
  responseCode: string;
  content: {
    nikDebitur: string;
    namaDebitur: string;
    tanggalPermintaan: string;
    kategoriDebitur: string;
    color: string;
  };
}

export default CBASGradingContentInterface;
