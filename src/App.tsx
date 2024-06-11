import Cards from "./components/Cards";
import Header from "./components/Header";
import Home from "./components/Home";
import Transactions from "./components/Transactions";

import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Cards />
      <div className="h-24"></div>
      <Transactions />
    </div>
  );
}

export default App;
