// Imports
import Header from "./Header";
import MainContent from "./MainContent";
import MainSubscription from "./MainSubscription";
import FooterReferences from "./FooterReferences";
import FooterSocials from "./FooterSocials";

export default function Wrapper() {
  return (
    <div className="wrapper">
      <Header />
      <MainContent />
      <MainSubscription />
      <FooterReferences />
      <FooterSocials />
    </div>
  );
}
