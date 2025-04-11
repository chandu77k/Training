import '../App.css';
import NavBar1 from "./NavBar1";
import NavBar2 from "./NavBar2";
import CoverImagesCarousel from "./CarouselSlides"
import Categories from "./Categories";
import BestSelling from './BestSelling';
function HomePage (){
    return(
        <>
        <div className="navBars">
        <NavBar1/>
        <NavBar2/>
        </div>
        <div className='remainingBody'>
        <br />
        <CoverImagesCarousel/>
        <br />
        <Categories/>
        <br />
        <BestSelling/>
        </div>
        </>
    );
    
}
export default HomePage;