import {
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  CustomerReviews,
  Footer
} from './sections'
import Nav from './components/Nav.jsx'
export default function App() {
  return (
    <main>
      <Nav />

      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero/>
      </section>

      <section id='products' className="padding ">
        <PopularProducts/> 
      </section>

      <section className="padding ">
        <SuperQuality/>
      </section>

      <section id='services' className="padding-x py-10 ">
        <Services/>
      </section>

      <section className="padding ">
        <SpecialOffer/>
      </section>

      <section  className="bg-pale-blue padding">
        <CustomerReviews/>
      </section>

      <section id='contactus' className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>

      <section className=" bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}