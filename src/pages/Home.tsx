import Footer from "../components/footer/Footer"
import MyHeader from "../components/header/MyHeader"
import TitlePic from "../components/TitlePic"
import BrowseTheRange from "../components/BrowseTheRange"
import HomePageProduct from "../components/product/HomePageProduct"
import Inspiration from "../components/Inspiration"
import Furniture from "../components/Furniture"

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