export default function ProductCard({ title, thumb }) {
  return (
    <div className="card">
      <div className="card-media">
        <img src={thumb} alt="" />
      </div>
      <div className="card-content">
        <h4>{title}</h4>
      </div>
    </div>
  );
}
