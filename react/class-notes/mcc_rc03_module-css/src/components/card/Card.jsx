import "./card.css";
import data from "../../data";
import Button from "../button/Button";

const Card = () => {
  return (
    <div>
        {data.map(({id, language, img, btnName}) => {
            return (
                <div key={id}>
                    <h1 className="title">{language}</h1>
                    <img className="images" src={img} alt="" />
                    <Button name={btnName}></Button>
                </div>
            )
        })}
    </div>
  );
}

export default Card
