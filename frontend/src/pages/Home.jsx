import { Navbar, Banner, Form, OurPlaces, FAQS, Table, Footer } from "./../components";


function Home() {
  return (
    <>
    <div className="dark:bg-slate-900">

      <Navbar />
      <Banner />
      <Form />
      <OurPlaces />
      <FAQS />
      <Table />
      <Footer />
    </div>
    </>
  )
}

export default Home