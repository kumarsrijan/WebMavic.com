import Home5Team from "../components/Team/Home5Team";
import About3 from "../components/about/About3";
//
import Choose6 from "../components/choose/Choose6";
import Breadcrumb from "../components/common/Breadcrumb";
import Home3Contact from "../components/contact/Home3Contact";
import Feature4 from "../components/features/Feature4";
import Layout from "../components/layout/Layout";
// import Partnar4 from "../components/partner/Partnar4";
import Testimonial3 from "../components/testimonial/Testimonial3";

function AboutPage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="About"
        title="Get To Know About WebMavic"
        pageName="ABOUT"
      />
      <About3 />
      <Choose6 />
      {/* <Feature4 /> */}
      {/* <Partnar4 /> */}
      <Testimonial3 />
      <Home5Team />
      <Home3Contact />
      {/* <Home3Blog /> */}
    </Layout>
  );
}

export default AboutPage;
