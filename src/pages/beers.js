import Axios from "axios";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import '../App.css'
const Beers = () =>{
    
    const [beerList, setBeerList] = useState([]);



    useEffect( ()=>{
        Axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response =>{
            const {data} = response;
            setBeerList(data);

        })

    }, [])

    return(
        <div className="card">
					{
						beerList.map(e =>{
							return(
								<div key={e._id} >
									<img src={e.image_url} alt="beer" />
									<h1>{e.name}</h1>
									<h2> {e.tagline}</h2>
									<h2>{e.contributed_by}</h2>

									 <Link to={ `/beers/:${e._id}`}>
										<h3>Details</h3>
									</Link> 

								</div>
							)
						})
					}
					
            

        </div>
            )
    
        

 
    
 
    
}

export default Beers;