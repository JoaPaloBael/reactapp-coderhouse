import OneCircle from "./OneCircle/OneCircle";

export default function Circles(props) {

  return (
    <div className="circles">
      <OneCircle  color="darkred" size="60px" borde="50%"/>
      <OneCircle  color="red" size="60px" borde="50%"/>
      <OneCircle  color="orange" size="60px" borde="50%"/>
      <OneCircle  color="yellow" size="60px" borde="50%"/>
    </div>
  )
}
