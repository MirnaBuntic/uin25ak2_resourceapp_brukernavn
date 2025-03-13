import { Routes, Route, useParams, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";


function App() {
  const {slug} = useParams()
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/html" />} />
        <Route path="/:slug" element={<Resources category={slug} />} />
      </Routes>
    </Layout>
  );
}

export default App;