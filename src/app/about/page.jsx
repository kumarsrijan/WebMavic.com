import Home5Team from "@/components/Team/Home5Team";
import About3 from "@/components/about/About3";
import Choose6 from "@/components/choose/Choose6";
import Breadcrumb from "@/components/common/Breadcrumb";
import Home3Contact from "@/components/contact/Home3Contact";
import Layout from "@/components/layout/Layout";



export const metadata = {
  title: "About | WebMavic",
  description: "Get to know about WebMavic, our mission, vision, and the team behind the scenes.",
  keywords: "WebMavic, about us, company information, team, mission, vision",
};

function AboutPage() {
  return (
    <Layout>
      <Breadcrumb pageList="About" title="Get To Know About WebMavic" pageName="ABOUT"/>
      <About3 />
      <Choose6 />
      
      <Home5Team />
      <Home3Contact />
    </Layout>
  );
}

export default AboutPage;
