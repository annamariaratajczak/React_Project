import Card from "../UI/Card";
import "./CompanyItem.css";

function CompanyItem(props) {
  const clickHandler = () => {
    props.onClick(props.compID);
  };

  return (
    <div onClick={clickHandler}>
      <a href="#">
        <Card className="company-item">
          <div className="company-item__description">
            <h2>{props.title}</h2>
          </div>
        </Card>
      </a>
    </div>
  );
}

export default CompanyItem;
