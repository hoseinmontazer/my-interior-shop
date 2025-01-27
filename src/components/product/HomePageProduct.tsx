import ProductList from "./ProductList";

interface HomePageProductProps {}

const HomePageProduct: React.FC<HomePageProductProps> = () => {
  return (
    <section className="py-10">
      <h1 className="text-center font-bold text-5xl pb-4">Our Products</h1>
      <ProductList limit={8} />
    </section>
  );
};
export default HomePageProduct;
