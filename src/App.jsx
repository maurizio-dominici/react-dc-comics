// Imports react
import Header from "./components/layout/header/Header";
import Alert from "./components/ui/Alert";
import Main from "./components/layout/main/Main";
import Footer from "./components/layout/footer/Footer";

// Imports data
import mainContentComics from "./data/comics";

export default function App() {
  const hasMessage = false;

  return (
    <>
      <Header />
      {hasMessage && (
        <Alert bgColor={"blue"} colorText={"blue"}>
          messaggio di errore
          <h1>errore</h1>
        </Alert>
      )}
      <Main mainContentComics={mainContentComics} />
      <Footer />
    </>
  );
}
