const Payment = () => {
    return (
        <div>
            <div className="flex flex-col text-left p-4 text-lg">
                <form>
                    <input type="radio" name="payment" value="bank1" className="p-1" />
                    <label className="px-3 py-1 font-bold">Direct Bank Transfer</label><br />
                    <p>Make your payment directly into our bank account. Please use your Order ID as the
                        payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>

                    <input type="radio" name="payment" value="bank2" className="p-1" />
                    <label className="px-3 py-1 font-bold">Direct Bank Transfer</label><br />

                    <input type="radio" name="payment" value="cash" className="p-1" />
                    <label className="px-3 py-1 font-bold">Cash On Delivery</label><br />

                    <p className="pb-3">Your personal data will be used to support your experience throughout this website, to manage
                        access to your account, and for other purposes described in our <b>privacy policy.</b>
                    </p>
                </form>
                <div className="flex justify-center">
                     <button className="flex justify-center p-1 border-1 rounded-xl border-gray-700 py-3 w-3/5 text-xl">Place Order</button>
                </div>
               
            </div>
        </div>
    );
};

export default Payment;
