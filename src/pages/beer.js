import Axios from "axios";
import {useState} from "react";
import { useParams } from "react-router-dom";

const Beer = () =>{
    const [beer, setBeer] = useState([]);
    const {id} = useParams();


        Axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => { 
            const {data} = response;
            const i = data.find(element => element._id === id);
            setBeer(i);
            console.log(data)
        }) ;

    return ( 
            <div key={beer._id} >
                <img src={beer.image_url} alt="beer" />
                <h1>{beer.name}</h1>
                <h2> {beer.tagline}</h2>
                <h2> {beer.first_brewed}</h2>
                <h2> {beer.attenuation_level}</h2>
                <h2> {beer.description}</h2>
                <h2>{beer.contributed_by}</h2>

			</div>  
    )
}


export default Beer;