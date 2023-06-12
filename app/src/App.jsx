import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
