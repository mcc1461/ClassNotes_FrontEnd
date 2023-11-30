import "./Card.css";
import data from "../../data";
import Button from "../button/Button";

const Card = () => {
  return (
    <div>
        {data.map(({id, language, img, btnName}) => {
            return (
                <div key={id}>
                    <h1>{language}</h1>
                    <img src={img} alt="" />
                    <Button name={btnName} />
                </div>
            )
        })}
    </div>
  );
}

export default Card
