import "./App.css";
import LoginPage from "./Component/LoginPage";
import AxiosApi from "./Component/AxiosApi";

function App() {
  return (
    <div className="Main-continer">
      <LoginPage />
      <AxiosApi />
    </div>
  );
}

export default App;
