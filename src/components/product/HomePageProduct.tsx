import ProductList from "./ProductList";

interface HomePageProductProps {}

const HomePageProduct: React.FC<HomePageProductProps> = () => {
  return (
    <section>
      <h1 className="text-center font-bold text-4xl py-10">Our Products</h1>
      <ProductList limit={8} />
    </section>
  );
};
export default HomePageProduct;
