import { useContext } from "react";
import {
  Navbar,
  Banner,
  Form,
  OurPlaces,
  FAQS,
  Table,
  Footer,
} from "./../components";
import { GuacamayaContext } from "./../context";

function Home() {
  const context = useContext(GuacamayaContext);

  return (
    <>
      <div className={context.darkModeClass}>
        <div className="dark:bg-slate-900">
          <Navbar />
          <Banner />
          <Form />
          <OurPlaces />
          <FAQS />
          {/* <Table /> */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
