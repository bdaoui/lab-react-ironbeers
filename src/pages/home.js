import beer from "../assets/beers.png";
import newbeer from "../assets/new-beer.png";
import randombeer from "../assets/random-beer.png";
import {Link} from "react-router-dom";


const Home = () =>{
    return(
        <div className="App">
            <section>
            <img src={beer} alt="beer"/>
            <Link to={"/beers"}>
                <h2>All Beers</h2>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </section>
        
        
            <section>
            <img src={newbeer} alt="beer"/>
            <Link to={"/new-beer"}>
                <h2>Random Beer</h2>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </section>
        
        <section>
            <img src={randombeer} alt="beer"/>
            <Link to={'random-beer'}>
                <h2>New Beer</h2>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </section>
        </div>
    )
}

export default Home;