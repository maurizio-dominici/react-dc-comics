// imports
import ProductCard from "./ProductCard";

export default function ProductList({ comics }) {
  return (
    <div className="row">
      {comics.map((post) => (
        <ProductCard title={post.title} thumb={post.thumb} key={post.id} />
      ))}
      <div className="col-1-1">
        <div className="button-posts">
          <a href="#">LOAD MORE</a>
        </div>
      </div>
    </div>
  );
}
