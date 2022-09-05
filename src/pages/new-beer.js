import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import Axios from "axios";

const NewBeer = () =>{
    const nameInputRef = useRef();
    const TaglineInputRef = useRef();
    const DescriptionInputRef = useRef();
    const FirstBrewedInputRef = useRef();
    const BrewersTipsInputRef = useRef();
    const AttenuationLevelInputRef = useRef();
    const ContributedByInputRef = useRef();
    
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();


        const enteredValue = [nameInputRef.current.value, TaglineInputRef.current.value, DescriptionInputRef.current.value, FirstBrewedInputRef.current.value, BrewersTipsInputRef.current.value, AttenuationLevelInputRef.current.value, ContributedByInputRef.current.value];
        console.log(enteredValue);

        Axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {name:enteredValue[0], tagline:enteredValue[1], description: enteredValue[2], first_brewed:enteredValue[3], brewers_tips:enteredValue[4], attenuation_level:enteredValue[5], contributed_by:enteredValue[5]} )
            .then(response =>{
                console.log(response);
            })
            .catch(err => console.log(err));

            navigate("/")
    }

    return(
        
        <form  method="POST" id="createNewBeer" onSubmit={handleSubmit}>
            <label for="name">Name <input id="name" type="text" ref={nameInputRef} /></label>
            <label for="Tagline">Tagline<input id="Tagline" type="text" ref={TaglineInputRef}/></label>
            <label for="Description">Description<input id="Description" type="textarea" ref={DescriptionInputRef}/></label>
            <label for="FirstBrewed">FirstBrewed<input id="FirstBrewed" type="text" ref={FirstBrewedInputRef} /></label>
            <label for="BrewersTips">BrewersTips<input id="BrewersTips" type="text" ref={BrewersTipsInputRef}/></label>
            <label for="AttenuationLevel">AttenuationLevel<input id="AttenuationLevel" type="text" ref={AttenuationLevelInputRef} /></label>
            <label for="ContributedBy">ContributedBy<input id="ContributedBy" type="text" ref={ContributedByInputRef} /></label>

            <button type="submit">Add New</button>
        </form>
    )
}

export default NewBeer;