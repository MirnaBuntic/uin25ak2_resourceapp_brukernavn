import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";
import Home from "./components/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources/:category" element={<Resources />} />
      </Routes>
    </Layout>
  );
}

export default App;