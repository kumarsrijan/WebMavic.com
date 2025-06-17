import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/style2.css";

export const metadata = {
  title: 'WebMavic- Revolutionize Your Digital Presence with Innovation, Precision, and Style!',
  description: 'WebMavic is a cutting-edge digital agency specializing in web design, development, and digital marketing. We create stunning websites and effective online strategies to elevate your brand and drive results.',
  keywords: 'web design, web development, digital marketing, SEO, branding, e-commerce, responsive design, user experience, online presence',
};


export default function RootLayout({
  children,
}) {
  
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="assets/img/webmavic-icon.png"
        /> 
      </head>
        <body>{children}</body>
       
    </html>
  )
}