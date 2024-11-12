// import logo from "./logo.svg";
import "./App.css";
// import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Impact from "./pages/Impact";
import AiAnalysis from "./pages/AiAnalysis";
import ManualAnalysis from "./pages/ManualAnalysis";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/aianalysis" element = {<AiAnalysis/>}/>
          <Route path="/manualanalysis" element={<ManualAnalysis/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
