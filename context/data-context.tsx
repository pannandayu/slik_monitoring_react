import InputDataInterface from "@/interfaces/InputDataInterface";
import React, { ReactNode, useState } from "react";

interface DataContextInterface {
  searchStatusPG: boolean | null;
  searchStatusMongo: boolean | null;

  isSearchingPG: boolean | null;
  isSearchingMongo: boolean | null;

  searchParametersPG: InputDataInterface[];
  searchParametersMongo: [{}];

  resultDataPG: {} | null;
  resultDataMongo: {} | null;

  searchStatusHandlerPG: (state: boolean | null) => void;
  searchStatusHandlerMongo: (state: boolean | null) => void;

  isSearchingHandlerPG: (state: boolean | null) => void;
  isSearchingHandlerMongo: (state: boolean | null) => void;

  searchParametersPGHandler: (data: InputDataInterface[]) => void;
  searchParametersMongoHandler: (data: [{}]) => void;

  resultDataPGHandler: (data: {}) => void;
  resultDataMongoHandler: (data: {}) => void;
}

const DataContext = React.createContext<DataContextInterface>({
  searchStatusPG: null,
  isSearchingPG: null,

  searchStatusMongo: null,
  isSearchingMongo: null,

  searchParametersPG: [{}],
  searchParametersMongo: [{}],

  resultDataPG: {},
  resultDataMongo: {},

  searchStatusHandlerPG: () => {},
  searchStatusHandlerMongo: () => {},

  isSearchingHandlerPG: () => {},
  isSearchingHandlerMongo: () => {},

  searchParametersPGHandler: () => {},
  searchParametersMongoHandler: () => {},

  resultDataPGHandler: () => {},
  resultDataMongoHandler: () => {},
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

  const [resultDataPG, setResultDataPG] = useState<{} | null>(null);
  const [resultDataMongo, setResultDataMongo] = useState<{} | null>(null);

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

  const resultDataPGHandler = (data: {}) => {
    setResultDataPG(data);
  };

  const resultDataMongoHandler = (data: {}) => {
    setResultDataMongo(data);
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
        resultDataPG,
        resultDataMongo,
        searchStatusHandlerPG,
        searchStatusHandlerMongo,
        isSearchingHandlerPG,
        isSearchingHandlerMongo,
        searchParametersPGHandler,
        searchParametersMongoHandler,
        resultDataPGHandler,
        resultDataMongoHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
