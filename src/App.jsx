// Imports react
import Header from "./components/layout/header/Header";
import MainContent from "./components/layout/main/MainContent";
import MainSubscription from "./components/layout/main/MainSubscription";
import FooterReferences from "./components/layout/footer/FooterReferences";
import FooterSocials from "./components/layout/footer/FooterSocials";
import Alert from "./components/ui/Alert";

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
      <MainContent comics={mainContentComics} />
      <MainSubscription />
      <FooterReferences />
      <FooterSocials />
    </>
  );
}
