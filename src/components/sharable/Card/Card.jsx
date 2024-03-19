import "./Card.module.css";
const Card = ({title,sub_title, children}) => {
  return (
    <fieldset className="c_card">
      <div className="text-center">
        <h2 className="fs-title">{title || ""}</h2>
        <br></br>
        <h3 className="fs-subtitle">{sub_title || ""}</h3>
        <hr></hr>
      </div>
      {children}
    </fieldset>
  );
};

export default Card;
