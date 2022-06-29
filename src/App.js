import { Component, tags } from "@odoo/owl";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";

const APP_TEMPLATE = tags.xml/*xml*/ `
<main>
  <Navbar/>
  <Home/>
  <Footer/>
</main>
`;

export class App extends Component {
  static template = APP_TEMPLATE;
  static components = { Navbar, Footer, Home };
}
