const Card = props => {
    return ( 
        <div className="text-bg-light border rounded text-center p-3 px-5 px-md-4 p-md-2">{props.children}</div>
     );
}
 
export default Card;