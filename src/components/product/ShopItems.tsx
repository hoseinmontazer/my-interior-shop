import Pagination from "../Pagination";
import ProductList from "./ProductList";
import {products} from '../../data/Product'

interface ShopItemsProps {}
const ShopItems: React.FC<ShopItemsProps> = () => {
    return (
        <div className="flex flex-col items-center xl:px-12 py-10">
            <ProductList limit={""} />
            <Pagination items={products} itemsPerPage={16} />
        </div>
    );
};

export default ShopItems;
