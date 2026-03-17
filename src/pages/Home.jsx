import ProductCard from "../components/ProductCard";
import BottomNav from "../components/BottomNav";

function Home() {
  return (
    <>
      <main className="home">
        
        {/* HEADER */}
        <header className="home__header">
          <h2>Hello 👋</h2>
          <p>Let’s start shopping</p>
        </header>

        {/* SEARCH */}
        <section className="search">
          <input placeholder="Search product..." />
        </section>

        {/* CATEGORIES */}
        <section className="categories">
          <button className="active">All</button>
          <button>Shoes</button>
          <button>Clothes</button>
          <button>Watch</button>
        </section>

        {/* PRODUCTS */}
        <section className="products">
          <ProductCard
            title="Nike Air"
            price="$120"
            img="https://via.placeholder.com/150"
          />
          <ProductCard
            title="Adidas Run"
            price="$90"
            img="https://via.placeholder.com/150"
          />
          <ProductCard
            title="Puma Sport"
            price="$80"
            img="https://via.placeholder.com/150"
          />
          <ProductCard
            title="Reebok"
            price="$70"
            img="https://via.placeholder.com/150"
          />
        </section>

      </main>

      <BottomNav />
    </>
  );
}

export default Home;