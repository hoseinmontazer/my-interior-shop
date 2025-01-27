import { Link } from "react-router-dom";

const SubtotalCard=()=>{
    return(
        <div>
             <div className="py-8 px-14 bg-purple-50 text-lg text-center mb-10">
                        <h1 className="p-5 pt-0 font-bold">Cart Totals</h1>
                        <div className="flex justify-between p-3">
                            <span className="mx-2 font-semibold">Subtotal</span>
                            <span className="mx-2 text-muted">2500 $</span>
                        </div>
                        <div className="flex justify-between p-3 mb-3">
                            <span className="mx-2 font-semibold">Total</span>
                            <span className="mx-2 text-yellow-700 text-xl">2500 $</span>
                        </div>
                        <Link to="/checkout"><button className="border-2 border-black rounded-2xl px-12 py-3 mb-8 m-3 text-2xl text-black">Check Out</button></Link>
                    </div>
        </div>
    )
};
export default SubtotalCard