import DataContext from "@/context/data-context";
import { Fragment, useContext } from "react";
import SearchParameters from "./SearchParameters";

const Title: React.FC<{ form: string }> = ({ form }) => {
  const dataContext = useContext(DataContext);

  const formSearching =
    form === "PG" ? dataContext.isSearchingPG : dataContext.isSearchingMongo;

  const PGDetail = (
    <span>
      Searching in PostgreSQL
      <img style={{ width: "3%" }} src="/postgre.png" />
    </span>
  );

  const mongoDetail = (
    <span>
      Searching in MongoDB
      <img style={{ width: "3%" }} src="/mongo.png" />
    </span>
  );
  return (
    <Fragment>
      {formSearching && <SearchParameters form={form} />}
      {form === "PG" ? PGDetail : mongoDetail}
    </Fragment>
  );
};

export default Title;
