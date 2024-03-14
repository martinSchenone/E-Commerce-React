import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { ContextProvider } from "./context/context.jsx";
import { Footer } from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <BrowserRouter>
      <div className=" relative min-h-screen mx-auto max-w-7xl w-full">
        <Navbar />
        <App />
        <Footer />
      </div>
    </BrowserRouter>
  </ContextProvider>
);
