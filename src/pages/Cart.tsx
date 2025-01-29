import CartTable from "../components/cart/CartTable";
import Footer from "../components/footer/Footer";
import UpperFooter from "../components/footer/UpperFooter";
import MyHeader from "../components/header/MyHeader";
import MySecHeader from "../components/header/MySecHeader";

const Cart = () => {
    return (
        <div className="bg-black">
            <main className="shop-container">
                <MyHeader />
                <MySecHeader title="Cart"/>
                <CartTable />
                <UpperFooter />
                <Footer />
            </main>


        </div>

    )
};
export default Cart