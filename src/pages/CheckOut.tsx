import Billing from "../components/checkout/Billing";
import Footer from "../components/footer/Footer";
import UpperFooter from "../components/footer/UpperFooter";
import MyHeader from "../components/header/MyHeader";
import MySecHeader from "../components/header/MySecHeader";

const Checkout = () => {
  return (
    <div>
      <div className="bg-black">
        <div className="shop-container">
          <MyHeader />
          <MySecHeader title="Checkout" />
          <Billing />
          <UpperFooter />
          <Footer />
        </div>
      </div>
    </div>
  )
};
export default Checkout