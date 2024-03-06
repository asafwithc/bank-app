import { CardDeal, Navbar, Hero, Stats, Business, Billing, Testimonials, Clients, CTA, Footer } from "./components";
import styles from "./style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="padding-x flex-center">
      <div className="box-width">
        <Navbar />
      </div>
    </div>

    <div className="bg-primary flex-center">
      <div className="box-width">
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary padding-x flex-center`}>
      <div className={`box-width`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;