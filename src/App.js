import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { ContactUs, Footer, Header } from "./components";
import ProgressBar from "react-progressbar-on-scroll";
function App() {
  return (
    <div className="min-h-screen min-w-full overflow-hidden scroll-smooth">
      <ProgressBar
        color="#22c55e"
        gradient={true}
        colorGradient="#ffc069"
        height={5}
      />
      <Header />
      <Routes>
        <Route path="/Task-Encompass-Learning/" exact element={<HomePage />} />
      </Routes>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
