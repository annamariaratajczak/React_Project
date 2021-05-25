import Card from "../UI/Card";
import "./Companies.css";
import CompanyItem from "./CompanyItem";
import React, { useState } from "react";
import Search from "../Search/Search";

function Companies(props) {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log("search", event.target.value);
  };
  console.log(search);

  const filterItems = Object.entries(props.items).filter(([key, item]) =>
    item.title.toLowerCase().startsWith(search.toLowerCase())
  );

  const companyList = filterItems.map(([key, item]) => {
    return (
      <CompanyItem
        compID={key}
        key={item.title}
        title={item.title}
        onClick={props.onCompanyClick}
      />
    );
  });

  return (
    <div>
      <Card className="companies">
        <Search handleChange={handleChange} value={search} />
        {companyList}
      </Card>
    </div>
  );
}

export default Companies;
