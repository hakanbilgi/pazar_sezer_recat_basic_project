import Card from '../Card/Card'
import "./Main.css"
import data from "../../Helper/data";

const Main = () => {
  return (
    <>
    {data.map((item)=> <Card {...item} />
    )}
    </>
  )
}

export default Main