import { Outlet } from "react-router-dom";
import ContextProvider from "./store/ContextProvider";
import "./index.css";
function App() {
  return (
    <ContextProvider>
      <Outlet></Outlet>
    </ContextProvider>
  );
}

export default App;
