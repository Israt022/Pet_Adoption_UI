import About from "../components/Home/About";
import CarouselSlide from "../components/Home/Carousel/CarouselSlide";
import Category from "../components/Home/Categories/Category";
import Pet from "../components/Home/Pets/Pet";

const Home = () => {
    return (
        <div>
            <CarouselSlide/>
            <Category/>
            <Pet/>
            <About/>
        </div>
    );
};

export default Home;