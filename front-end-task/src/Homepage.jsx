import NavBar1 from "./NavBar1";
import './App.css'
import Carousell from "./Carousel";
import NavBar2 from "./NavBar2";
import Categories from "./Categories";
import ItemsTab from "./ItemsTab";
function HomePage (){
    return(
        <>
        <div className="navBars">
        <NavBar1/>
        <NavBar2/>
        </div>
        <br />
        <br />
        <Carousell/>
        <br />
        <br />
        <Categories/>
        <br />
        <ItemsTab/>
        </>
    );
    
}
export default HomePage;