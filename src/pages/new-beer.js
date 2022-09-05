const NewBeer = () =>{

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return(
        
        <form  method="POST" id="createNewBeer" onSubmit={handleSubmit}>
            <label for="name">Name <input id="name" type="text" /></label>
            <label for="Tagline">Tagline<input id="Tagline" type="text" /></label>
            <label for="Description">Description<input id="Description" type="textarea" /></label>
            <label for="FirstBrewed">FirstBrewed<input id="FirstBrewed" type="text" /></label>
            <label for="BrewersTips">BrewersTips<input id="BrewersTips" type="text" /></label>
            <label for="AttenuationLevel">AttenuationLevel<input id="AttenuationLevel" type="text" /></label>
            <label for="ContributedBy">ContributedBy<input id="ContributedBy" type="text" /></label>

            <button type="submit">Add New</button>
        </form>
    )
}

export default NewBeer;