import Banner from "./Guacamaya/Banner"
import Form from "./Guacamaya/Form"
import Navbar from "./Guacamaya/Navbar"
import FAQS from "./Guacamaya/FAQS"
import Table from "./Guacamaya/FlightPlans"
import Footer from "./Guacamaya/Footer"
import OurPlaces from "./Guacamaya/OurPlaces/OurPlaces"


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
