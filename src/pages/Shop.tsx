import Footer from "../components/footer/Footer";
import UpperFooter from "../components/footer/UpperFooter";
import MyHeader from "../components/header/MyHeader";
import MySecHeader from "../components/header/MySecHeader";
import ShopItems from "../components/product/ShopItems";

const Shop = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="shop-container bg-black min-h-screen">
        <MyHeader />
        <MySecHeader title="Shop" />
        <ShopItems />
        <UpperFooter />
        <Footer />
      </div>
    </div>
  );
};
export default Shop;
