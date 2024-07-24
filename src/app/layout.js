<<<<<<< Updated upstream
import Cabecalho from "../components/Cabecalho.js";
import Rodape from "../components/Rodape.js"
=======
<<<<<<< HEAD
import Cabecalho from "./components/Cabecalho.js";
import Rodape from "./components/Rodape.js"
=======
import Cabecalho from "../components/Cabecalho.js";
import Rodape from "../components/Rodape.js"
>>>>>>> 9624da836cfc9c0485113ca5f955dbfc633830ef
>>>>>>> Stashed changes
export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
      <Cabecalho />
    {children}
      <Rodape />
=======
>>>>>>> Stashed changes
        <Cabecalho />

        {children}
        <Rodape />
<<<<<<< Updated upstream
=======
>>>>>>> 9624da836cfc9c0485113ca5f955dbfc633830ef
>>>>>>> Stashed changes
      </body>
    </html>
  );
}
