import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Routes from "../App/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
