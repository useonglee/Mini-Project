import { Route, Routes } from "react-router-dom";
import DetailPage from "./Detail";
import HomePage from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/watch" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
