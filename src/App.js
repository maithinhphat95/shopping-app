import "./App.scss";
import Body from "./layout/Body";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
