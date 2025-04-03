import NavBar1 from "./NavBar1";
import './App.css'
import Carousell from "./Carousel";
import NavBar2 from "./NavBar2";
import Categories from "./Categories";
function HomePage (){
    return(
        <>
        <NavBar1/>
        <NavBar2/>
        <br />
        <br />
        <Carousell/>
        <br />
        <br />
        <Categories/>
        </>
    );
    
}
export default HomePage;