import Alert from "../ui/Alert";

export default function MainContent() {
  return (
    <div id="main-content">
      <div className="container">
        <div className="row">
          <Alert
            text={"messaggio di errore"}
            colorText={"red"}
            bgColor={"red"}
          />
        </div>
      </div>
    </div>
  );
}
