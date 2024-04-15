import Banner from "./pages/Banner"
import Form from "./pages/Form"
import Navbar from "./pages/Navbar"
import FAQS from "./pages/FAQS"
import Table from "./pages/FlightPlans"
import Footer from "./pages/Footer"
import OurPlaces from "./pages/OurPlaces/OurPlaces"


function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Form />
      <OurPlaces />
      <FAQS />
      <Table />
      <Footer />
    </>
  )
}

export default App
