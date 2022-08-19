import "./App.scss";
import Body from "./layout/Body";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path="/shopping-app" element={<Body />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
