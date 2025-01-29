const Payment = () => {
  return (
    <div className="flex flex-col p-4 text-xl leading-10 text-justify">
      <form>
        <input type="radio" name="payment" value="bank1" className="p-1" />
        <label className="px-3 py-1 font-bold">Direct Bank Transfer</label>
        <br />
        <p>
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>

        <input type="radio" name="payment" value="bank2" className="p-1" />
        <label className="px-3 py-1 font-bold">Direct Bank Transfer</label>
        <br />

        <input type="radio" name="payment" value="cash" className="p-1" />
        <label className="px-3 py-1 font-bold">Cash On Delivery</label>
        <br />

        <p className="pb-3">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <b>privacy policy.</b>
        </p>
      </form>
      <div className="flex justify-center">
        <button className="flex justify-center p-1 border-2 rounded-xl border-gray-700 hover:bg-gray-200 py-4 w-3/5 text-2xl m-8">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Payment;
