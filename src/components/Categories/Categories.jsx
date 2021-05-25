import Card from "../UI/Card";
import "./Categories.css";
import CategoryItem from "./CategoryItem";

function Categories(props) {
  const clickHandler = () => {
    props.onBackBtnClick();
  };

  return (
    <div>
      <Card className="categories">
        <button className="categories_backBtn" onClick={clickHandler}>
          {"<"} Back
        </button>
        {props.items.map((item) => (
          <CategoryItem key={item.title} title={item.title} />
        ))}
      </Card>
    </div>
  );
}

export default Categories;
