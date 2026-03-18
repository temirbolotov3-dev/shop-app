import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  // FILTER
  const filteredProducts = products.filter(item => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "all" || item.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <main className="home">

      {/* 🔥 TOP HEADER */}
      <header className="home__top">
        <div>
          <p>Hello 👋</p>
          <h3>Welcome Back!</h3>
        </div>

        <div className="avatar"></div>
      </header>

      {/* 🔍 SEARCH */}
      <div className="search">
        <input
          type="text"
          placeholder="What do you need?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🎯 CATEGORIES */}
      <div className="categories">
        <button
          className={category === "all" ? "active" : ""}
          onClick={() => setCategory("all")}
        >
          🔥
        </button>

        <button
          className={category === "beauty" ? "active" : ""}
          onClick={() => setCategory("beauty")}
        >
          💄
        </button>

        <button
          className={category === "fragrances" ? "active" : ""}
          onClick={() => setCategory("fragrances")}
        >
          🌸
        </button>

        <button
          className={category === "groceries" ? "active" : ""}
          onClick={() => setCategory("groceries")}
        >
          🥑
        </button>
      </div>

      {/* PRODUCTS */}
      {loading ? (
        <section className="products">
          {Array(6).fill().map((_, i) => (
            <div key={i} className="card">
              <div className="skeleton"></div>
            </div>
          ))}
        </section>
      ) : (
        <section className="products">
          {filteredProducts.map(item => (
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              img={item.thumbnail}
            />
          ))}
        </section>
      )}

    </main>
  );
}

export default Home;