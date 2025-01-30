import ContactInfo from "../components/contact/ContactInfo";
import Footer from "../components/footer/Footer";
import UpperFooter from "../components/footer/UpperFooter";
import MyHeader from "../components/header/MyHeader";
import MySecHeader from "../components/header/MySecHeader";

const Contact = () => {
  return (
    <div className="bg-black">
      <main className="shop-container">
        <MyHeader />
        <MySecHeader title="Contact" />
        <ContactInfo />
        <UpperFooter />
        <Footer />
      </main>
    </div>
  );
};
export default Contact;
