// Imports
import ProductList from "../../products/ProductList";

export default function MainContent({ comics }) {
  return (
    <section id="main-content">
      <div className="container">
        <ProductList comics={comics} />
      </div>
    </section>
  );
}
