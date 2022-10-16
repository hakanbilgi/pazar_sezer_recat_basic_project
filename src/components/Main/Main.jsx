import Card from '../Card/Card'
import "./Main.css"
import data from "../../Helper/data";

const Main = () => {
  return (
    <div className="container">
      {data.map((item)=> <Card {...item} />
    )}
    </div>
    
    
  )
}

export default Main