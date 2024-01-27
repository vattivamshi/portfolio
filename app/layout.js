import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

import Navbar from '../components/Navbar'
import Footer from "@/components/Footer";

export const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});
export const poppins = Poppins({
  subsets:["latin"],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
export const metadata = {
  title: "Vamshi Vatti - Data Analyst",
  description: "Portfolio website of Vamshi Vatti - Data Analyst based in London",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/VV_Logo_light.svg',
        href: '/VV_Logo_light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/VV_Logo_dark.svg',
        href: '/VV_Logo_dark.svg',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      
      <body className="bg-primaryBgLight dark:bg-primaryBgDark duration-150">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
      
    </html>
  );
}
