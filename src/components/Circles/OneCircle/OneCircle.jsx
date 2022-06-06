
export default function OneCircle( props) {
    const styleCircle ={
        backgroundColor: props.color,
        width: props.size,
        height: props.size,
        borderRadius: props.borde,
    };
  return (
    <div className='circle' style={styleCircle}></div>
  )
}
