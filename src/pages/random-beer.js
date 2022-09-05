import Axios from 'axios';
import {useState, useEffect} from "react";

const RandomBeer = () =>{

    const [randombBeer, setRandomBeer] = useState([]);

useEffect( () =>{
    Axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(element =>{
            console.log(element);
            setRandomBeer(element.data);
        })

}, [])

    return(

            <div >
                <img src={randombBeer.image_url} alt="beer" />
                <h1>{randombBeer.name}</h1>
                <h2> {randombBeer.tagline}</h2>
                <h2> {randombBeer.first_brewed}</h2>
                <h2> {randombBeer.attenuation_level}</h2>
                <h2> {randombBeer.description}</h2>
                <h2>{randombBeer.contributed_by}</h2>

			</div>  

    )
}

export default RandomBeer;