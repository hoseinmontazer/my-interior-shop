import ContactInfo from "../components/contact/ContactInfo";
import Footer from "../components/footer/Footer";
import UpperFooter from "../components/footer/UpperFooter";
import MyHeader from "../components/header/MyHeader";
import MySecHeader from "../components/header/MySecHeader";

const Contact=()=>{
    return(
        <div className="bg-black overflow-x-hidden">
            <div className="bg-white max-w-[1400px] mx-auto">
                <MyHeader />
                <MySecHeader title="Contact"/>
                <ContactInfo />
                <UpperFooter />
                <Footer />
            </div>
        </div>
    )
};
export default Contact