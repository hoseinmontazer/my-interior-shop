const ContactForm: React.FC = () => {
  return (
    <form className=" w-full xl:w-1/2 text-xl font-semibold p-3">
      <label className="flex justify-start items-center text-2xl py-6">
        Your name
      </label>
      <input
        type="text"
        placeholder="Abc"
        className="w-full xl:w-8/12 border px-4 py-5 text-xl rounded-lg border-1 border-gray-400"
      />
      <label className="flex justify-start items-center text-2xl py-6">
        Email address
      </label>
      <input
        type="email"
        placeholder="Abc@def.com"
        className="w-full xl:w-8/12 border px-4 py-5 text-xl rounded-lg border-1 border-gray-400"
      />
      <label className="flex justify-start items-center text-2xl py-6">
        Subject
      </label>
      <input
        type="text"
        placeholder="This is optional"
        className="w-full xl:w-8/12 border px-4 py-5 text-xl rounded-lg border-1 border-gray-400"
      />
      <label className="flex justify-start items-center text-2xl py-6">
        Message
      </label>
      <textarea
        placeholder="Hi! I'd like to ask about"
        className="w-full xl:w-8/12 border px-4 py-5 text-xl rounded-lg border-1 border-gray-400"
      />
      <input
        type="submit"
        value="submit"
        className="flex justify-start items-center py-5 w-full xl:w-1/3 mt-10 bg-yellow-600 text-white rounded-lg"
      />
    </form>
  );
};
export default ContactForm;
