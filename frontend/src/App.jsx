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
      <Navbar></Navbar>
      <Banner></Banner>
      <Form></Form>
      <OurPlaces></OurPlaces>
      <FAQS></FAQS>
      <Table></Table>
      <Footer></Footer>
    </>
  )
}

export default App
