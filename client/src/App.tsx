import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Outlet />
    </>
  );
}
export default App;
