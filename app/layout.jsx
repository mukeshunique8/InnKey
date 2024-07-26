import "../app/global.css";
import { Raleway, Inter, Roboto_Serif } from "next/font/google";
import { Poppins } from "next/font/google";

const roboto_serif = Roboto_Serif({ subsets: ["latin"] });

const poppins = Poppins(
  { subsets: ["latin"],
  weight: [ '100','300','400','700','900'],
variable:'--font-roboto' },
  
);


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
