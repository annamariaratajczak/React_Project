import Card from "../UI/Card";
import "./CategoryItem.css";

function CategoryItem(props) {
  return (
    <Card className="category-item">
      <div className="category-item__description">
        <h2>{props.title}</h2>
      </div>
    </Card>
  );
}

export default CategoryItem;
