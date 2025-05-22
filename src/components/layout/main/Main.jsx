// IMPORTS
import MainContent from "./MainContent";
import MainSubscription from "./MainSubscription";

export default function Main({ mainContentComics }) {
  return (
    <main>
      <MainContent comics={mainContentComics} />
      <MainSubscription />
    </main>
  );
}
