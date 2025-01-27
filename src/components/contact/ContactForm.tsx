const ContactForm: React.FC = () => {
  return (
    <form className=" w-full xl:w-1/2 text-base font-semibold p-3">
      <label className="flex justify-start items-center py-4">Your name</label>
      <input
        type="text"
        placeholder="Abc"
        className="w-full xl:w-10/12 px-4 py-4 text-base rounded-lg border-1 border-gray-400"
      />

      <label className="flex justify-start items-center py-4">
        Email address
      </label>
      <input
        type="text"
        placeholder="Abc@def.com"
        className="w-full xl:w-10/12 px-4 py-4 text-base rounded-lg border-1 border-gray-400"
      />

      <label className="flex justify-start items-center py-4">Subject</label>
      <input
        type="text"
        placeholder="This is optional"
        className="w-full xl:w-10/12 px-4 py-4 text-base rounded-lg border-1 border-gray-400"
      />

      <label className="flex justify-start items-center py-4">Message</label>
      <textarea
        placeholder="Hi! I'd like to ask about"
        className="w-full xl:w-10/12 px-4 py-4 text-base rounded-lg border-1 border-gray-400"
      />

      <input
        type="submit"
        value="submit"
        className="flex justify-start items-center py-3 w-full xl:w-1/3 mt-10 bg-yellow-600 text-light font-normal rounded-lg"
      />
    </form>
  );
};
export default ContactForm;
