import Nav from "../component/layout/Nav";
import FeaturedProduct from "../component/product/FeaturedProduct";
import ProductGrid from "../component/product/ProductGrid";
import { useProducts } from "../hooks/useProduct";

const Home = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p className="p-8">Loading...</p>;
  if (error) return <p className="p-8 text-red-500">{error}</p>;

  const featured = products.find((p) => p.featured);

  return (
    <main className="max-w-7xl mx-auto">
      <Nav />

      <section className="grid md:grid-cols-2 gap-8 px-8">
        {/* Left Content */}
        <div className="bg-gray-100 rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-semibold">
              Elevate your lifestyle with premium essentials.
            </h1>
            <p className="text-gray-500 mt-4">
              Discover high-quality products designed for comfort and style.
            </p>
          </div>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full w-fit">
            Browse All Products →
          </button>
        </div>

        {/* Featured */}
        {featured && <FeaturedProduct product={featured} />}
      </section>

      <section className="px-8 mt-12">
        <h2 className="text-2xl font-semibold mb-6">
          Browse by categories
        </h2>

        <ProductGrid products={products} />
      </section>
    </main>
  );
};

export default Home;