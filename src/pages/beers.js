import Axios from "axios";
import {useState, useEffect} from "react";

const Beers = () =>{
    
    const [beerList, setBeerList] = useState();



    useEffect( ()=>{
        Axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response =>{
            const {data} = response;
            setBeerList(data);

        })

    }, [])

		console.log(beerList);
    return(
        <>
					{
						beerList.map(e =>{
							return(
								<h1>{e.name}</h1>
							)
						})
					}
					
            

        </>
            )
    
        

 
    
 
    
}

export default Beers;