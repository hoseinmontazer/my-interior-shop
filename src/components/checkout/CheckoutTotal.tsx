import Payment from "./Payment";

const CheckoutTotal = () => {
    return (
        <div className="w-full xl:1/2">
            <div className="mx-2 xl:px-14 pt-6 xl:pt-16 border-2 xl:border-none text-center ">
                <div className="flex xl:justify-between justify-center xl:p-3 text-3xl font-semibold">
                    <span className="mx-2">Product</span>
                    <span className="mx-2">Subtotal</span>
                </div>
                <div className="flex justify-between p-3">
                    <span className="mx-2 text-lg text-muted">Asgaard chair<spna className="text-black ml-1">x 1</spna></span>
                    <span className="mx-2 text-lg">2500 $</span>
                </div>
                <div className="flex justify-between p-3">
                    <span className="mx-2 text-lg">Subtotal</span>
                    <span className="mx-2 text-lg">2500 $</span>
                </div>
                <div className="flex justify-between p-3">
                    <span className="mx-2 text-lg">Total</span>
                    <span className="mx-2 text-2xl font-extrabold text-yellow-700">2500 $</span>
                </div>
                <hr/>
                <Payment />
            </div>
        </div>
    )
};
export default CheckoutTotal