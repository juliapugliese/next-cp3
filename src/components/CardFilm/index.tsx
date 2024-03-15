import {PropsCardFilm} from './interfaces'
import "./styles.css"


const CardFilm  = (props: PropsCardFilm) => {
    return( 
    <div>
        <p>{props.title}</p>
        <img src={props.image} alt='' />
        <button><a href={props.link}>Assistir</a></button>
    </div>
);
};

export default CardFilm;