import "./Card.css"
const Card = ({name,image,desc}) => {
  return (
    
      <div className="card">
        <img src={image} alt="" className="cardimg" />
        <h3 className="name">{name}</h3>
        <p className="desc">{desc}</p>
        <button className="button">Detail</button>
      </div>
  
  );
}

export default Card