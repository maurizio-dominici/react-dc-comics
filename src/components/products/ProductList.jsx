// imports
import ProductCard from "./ProductCard";

export default function ProductList({ comics }) {
  return (
    <div className="row">
      {comics.map((post) => (
        <ProductCard title={post.title} thumb={post.thumb} key={post.id} />
      ))}
    </div>
  );
}
