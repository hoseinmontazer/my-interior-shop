import Address from "./Address";
import ContactForm from "./ContactForm";

const ContactInfo = () => {
    return (
        <div className="xl:py-16">
            <div className="flex flex-col justify-center items-center text-center p-4">
                <h1 className="text-4xl font-bold">
                    Get In Touch With Us
                </h1>
                <div className="text-gray-400 text-base max-w-2xl leading-relaxed mt-1">
                    For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </div>
            </div>
            <div className="container flex flex-col xl:flex-row  w-full py-16">
            <Address />
            <ContactForm />
            </div>
        </div>
    )
};
export default ContactInfo