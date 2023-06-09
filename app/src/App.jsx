import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
