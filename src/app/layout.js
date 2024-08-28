import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Portfolio | Faustino",
  description: "Portfolio para la visualizacion de proyectos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${poppins.className} py-6 h-screen w-screen`}>
        <div className="area bg-gradient-to-r from-gray-700 to-black fixed w-full h-full inset-0 -z-40">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}
