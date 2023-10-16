import logo from './logo.svg';


function Icon(props) {
    return(
        <div className="icon">
            <img src = {props.sprite} alt ="class icon"></img>
            <p>{props.name}</p>
        </div>
    )
}

export default Icon;