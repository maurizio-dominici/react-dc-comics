export default function Alert({
  text = "nothing",
  colorText = "blue",
  bgColor = "blue",
}) {
  return (
    <div className={`minialert ${bgColor}`}>
      <div className={`color text${colorText}`}>{text}</div>
    </div>
  );
}
