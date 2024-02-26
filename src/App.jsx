import Sidebar from "./components/Sidebar";
import "./index.css";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Sidebar />
      </div>
      <div style={{ width: "100vw" }}>
        <Topbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
