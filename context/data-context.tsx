import InputDataInterface from "@/interfaces/InputDataInterface";
import React, { ReactNode, useState } from "react";

interface DataContextInterface {
  searchStatusPG: boolean | null;
  searchStatusMongo: boolean | null;

  isSearchingPG: boolean | null;
  isSearchingMongo: boolean | null;

  searchParametersPG: InputDataInterface[];
  searchParametersMongo: [{}];

  idNotFoundMongo: boolean;

  resultData: {} | null;

  searchStatusHandlerPG: (state: boolean | null) => void;
  searchStatusHandlerMongo: (state: boolean | null) => void;

  isSearchingHandlerPG: (state: boolean | null) => void;
  isSearchingHandlerMongo: (state: boolean | null) => void;

  searchParametersPGHandler: (data: InputDataInterface[]) => void;
  searchParametersMongoHandler: (data: [{}]) => void;

  idNotFoundHandlerMongo: (state: boolean) => void;

  resultDataHandler: (data: {}) => void;
}

const DataContext = React.createContext<DataContextInterface>({
  searchStatusPG: null,
  isSearchingPG: null,

  searchStatusMongo: null,
  isSearchingMongo: null,

  searchParametersPG: [{}],
  searchParametersMongo: [{}],

  resultData: {},

  idNotFoundMongo: false,

  searchStatusHandlerPG: () => {},
  searchStatusHandlerMongo: () => {},

  isSearchingHandlerPG: () => {},
  isSearchingHandlerMongo: () => {},

  searchParametersPGHandler: () => {},
  searchParametersMongoHandler: () => {},

  resultDataHandler: () => {},

  idNotFoundHandlerMongo: () => {},
});

export default DataContext;

export const DataContextProvider: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [searchStatusPG, setSearchStatusPG] = useState<boolean | null>(null);
  const [isSearchingPG, setIsSearchingPG] = useState<boolean | null>(null);

  const [searchStatusMongo, setSearchStatusMongo] = useState<boolean | null>(
    null
  );
  const [isSearchingMongo, setIsSearchingMongo] = useState<boolean | null>(
    null
  );

  const [searchParametersPG, setSearchParametersPG] = useState<
    InputDataInterface[]
  >([{}]);

  const [searchParametersMongo, setSearchParametersMongo] = useState<[{}]>([
    {},
  ]);

  const [idNotFoundMongo, setIdNotFoundMongo] = useState<boolean>(false);

  const [resultData, setResultData] = useState<{} | null>(null);

  const searchStatusHandlerPG = (state: boolean | null) => {
    setSearchStatusPG(state);
  };
  const searchStatusHandlerMongo = (state: boolean | null) => {
    setSearchStatusMongo(state);
  };

  const isSearchingHandlerPG = (state: boolean | null) => {
    setIsSearchingPG(state);
  };
  const isSearchingHandlerMongo = (state: boolean | null) => {
    setIsSearchingMongo(state);
  };

  const searchParametersPGHandler = (data: InputDataInterface[]) => {
    setSearchParametersPG(data);
  };

  const searchParametersMongoHandler = (data: [{}]) => {
    setSearchParametersMongo(data);
  };

  const idNotFoundHandlerMongo = (state: boolean) => {
    setIdNotFoundMongo(state);
  };

  const resultDataHandler = (data: {}) => {
    setResultData(data);
  };

  return (
    <DataContext.Provider
      value={{
        searchStatusPG,
        searchStatusMongo,
        isSearchingPG,
        isSearchingMongo,
        searchParametersPG,
        searchParametersMongo,
        idNotFoundMongo,
        resultData,
        searchStatusHandlerPG,
        searchStatusHandlerMongo,
        isSearchingHandlerPG,
        isSearchingHandlerMongo,
        searchParametersPGHandler,
        searchParametersMongoHandler,
        idNotFoundHandlerMongo,
        resultDataHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
