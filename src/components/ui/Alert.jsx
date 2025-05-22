export default function Alert({ children, colorText, bgColor }) {
  const content = children ?? "Si è verificato un errore";
  return (
    <div className="container">
      <div className={`minialert ${bgColor || "red"}`}>
        <div className={`color text${colorText || "red"}`}>{content}</div>
      </div>
    </div>
  );
}
