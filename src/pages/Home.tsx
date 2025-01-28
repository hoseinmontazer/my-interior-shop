import Footer from "../components/footer/Footer"
import MyHeader from "../components/header/MyHeader"
import TitlePic from "../components/home/TitlePic"
import BrowseTheRange from "../components/home/BrowseTheRange"
import HomePageProduct from "../components/product/HomePageProduct"
import Inspiration from "../components/home/Inspiration"
import Furniture from "../components/home/Furniture"

const Home = () => {

    return (
        <div className=" bg-black min-h-screen overflow-x-hidden">
          <div className="shop-container">
                <MyHeader />
                <TitlePic />
                <BrowseTheRange />
                <HomePageProduct />
                <Inspiration />
                <Furniture />
                <Footer />
            </div>
        </div>
    )
}
export default Home