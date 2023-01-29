import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Second } from "./pages/Second";
import { Main } from "./pages/Main";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Second" element={<Second />} />
       
      </Routes>
    </>
  );
}
export default App;