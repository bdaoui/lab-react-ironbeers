
import './App.css';
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/home";
import Beers from './pages/beers';
import NewBeer from "./pages/new-beer";
import RandomBeer from "./pages/random-beer"
import Navbar from './components/Navbar';
import Beer from './pages/beer';

function App() {

    
  return (
<>

    <Routes>
      <Route path={"/"} element = { <Home />} />

      <Route path="/" element={ <Navbar />}>
        <Route path={"/beers"} element={<Beers />} />
        <Route path={"/new-beer"} element={<NewBeer />} />
        <Route path={"/random-beer"} element={<RandomBeer />} />
        <Route path={"/beers/:id"} element={<Beer />} />

      </Route>
    </Routes>
</>
 
 );
}

export default App;
