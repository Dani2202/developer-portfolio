import { GoogleTagManager } from "@next/third-parties/google";
import { Inter, Poppins, Roboto_Mono } from "next/font/google";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
// import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins'
});

const robotoMono = Roboto_Mono({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-roboto-mono'
});

export const metadata = {
  title: "Portfolio of Daniyal Qureshi - Software Engineer",
  description:
    "This is the portfolio of Daniyal Qureshi, a Software Engineer with expertise in React.js, Next.js, TypeScript, and modern web development. I have experience working on complex projects including shareholder voting platforms, AI-driven dashboards, and comprehensive management systems. I am passionate about building scalable applications and implementing best practices like ABAC, RBAC, and custom component development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable} ${robotoMono.variable}`}>
        {/* <ToastContainer /> */}
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          {/* <ScrollToTop /> */}
        </main>
        <Footer />
      </body>
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} /> */}
    </html>
  );
}
