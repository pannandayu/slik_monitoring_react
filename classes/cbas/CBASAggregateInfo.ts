import CBASGradingAggregateInterface from "@/interfaces/cbas/CBASGradingAggregateInterface";

class CBASAggregateInfo implements CBASGradingAggregateInterface {
  responseCode: string = "";
  responseDesc: string = "";
  contentDebitur? = {
    kategoriAgregat: "",
    color: "",
  };
}

export default CBASAggregateInfo;
