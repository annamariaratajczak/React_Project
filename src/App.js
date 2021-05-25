import Companies from "./components/Companies/Companies";
import Categories from "./components/Categories/Categories";
import React, { useState } from "react";
import CompanyList from "./components/data/company_list.json";
import CategoryList from "./components/data/category_list.json";
import CategoryPerCompany from "./components/data/category_per_company.json";

function App() {
  const [showCompanies, setShowCompanies] = useState(true);
  const [categories, setCategories] = useState([]);

  const companyClickHandler = (compID) => {
    setShowCompanies(false);

    let categoriesIDs = Object.keys(CategoryPerCompany[compID]);
    console.log(categoriesIDs);

    let filterCat = categoriesIDs.map((ID) => {
      return CategoryList[ID];
    });

    setCategories(filterCat);
  };

  const backClickHandler = () => {
    setShowCompanies(true);
  };

  return (
    <div>
      {showCompanies ? (
        <Companies items={CompanyList} onCompanyClick={companyClickHandler} />
      ) : (
        <Categories items={categories} onBackBtnClick={backClickHandler} />
      )}
    </div>
  );
}

export default App;
