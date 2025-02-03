import { useState } from "react";
import { products as defaultProducts } from "../../data/Product";
import ProductCard from "./ProductCard";
import { Product } from "../../data/Product";

interface ProductListProps {
  limit: any;
  currentItems?: Product[];
  products?: Product[];
}

const ProductList: React.FC<ProductListProps> = ({
  limit,
  currentItems,
  products,
}) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const finalProducts = currentItems || products || defaultProducts;

  const visibleProducts =
    showAll || !limit ? finalProducts : finalProducts.slice(0, limit);

  return (
    <section className="flex flex-col justify-around">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 xl:mx-24 mx-8 pb-10">
        {visibleProducts.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            sale={product.sale}
            quantity={product.quantity}        
          />
        ))}
      </div>
      {limit && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex self-center text-lg font-bold border-2 border-yellow-600 text-yellow-600 py-4 px-16 my-10 hover:bg-slate-300"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
};

export default ProductList;
