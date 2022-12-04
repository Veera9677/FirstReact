import { BrowserRouter, Routes, Route } from "react-router-dom";
import Photos from "./components/Photos";
import Photos2 from "./components/Photos2";
import Layout from "./components/Layout";
import NoPage from "./components/Nopage";
import Home from "./components/Home";
import Contact from "./components/Contact";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return ( <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/photos2" element={<Photos2 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}