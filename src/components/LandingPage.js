import React from "react";
import PanelTop from "./PanelTop";
import AlphaPanel from "./AlphaPanel";
import Expect from './Expect';
import Testimonial from './Testimonial';
import Purchase from './Purchase';
import Footer from "./Footer";



function LandingPage() {
  return (
    <React.Fragment>
      {/* <!-- Section 1 --> */}
      <PanelTop />
      {/* <!-- Section 2 --> */}
      <AlphaPanel />
      {/* <!-- Section 3 --> */}
      <Expect />
      {/* <!-- Section 4 --> */}
      <Testimonial />
      {/* <!-- Section 5 --> */}
      <Purchase />
      {/* <!-- Section 6 --> */}
      <Footer />
    </React.Fragment>
    )
}

export default LandingPage;