import Address from "./Address";
import ContactForm from "./ContactForm";

const ContactInfo = () => {
  return (
    <section className="xl:py-16 p-3">
      <header className="flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-3xl xl:text-5xl font-bold py-3">Get In Touch With Us</h1>
        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
          For More Information About Our Product & Services, Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </header>
      <div className="flex flex-col xl:flex-row py-16">
        <Address />
        <ContactForm />
      </div>
    </section>
  );
};
export default ContactInfo;
