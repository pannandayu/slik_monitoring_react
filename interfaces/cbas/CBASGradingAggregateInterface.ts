interface CBASGradingAggregateInterface {
  responseCode: string;
  responseDesc: string;
  contentDebitur?: {
    kategoriAgregat: string;
    color: string;
  };
}

export default CBASGradingAggregateInterface;
