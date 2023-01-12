import Header from "./components/Layout/Header";
import StyleGlobal from "./styles/global";
import ButtomNav from "./components/BottomNav";
import Sidenav from "./components/Sidenav";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Leaderboards from "./pages/Leaderboards";
import Profile from "./pages/Profile";
import DetailThread from "./pages/DetailThread";
import AddThread from "./pages/AddThread";

function App() {
  const [hide, setHide] = useState(true)

  return (
    <>
      <StyleGlobal />
      <Header hide={hide} setHide={setHide} />
      <Sidenav hide={hide} />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/threads/:id" element={<DetailThread />} />
        <Route path="/add" element={<AddThread />} />
      </Routes>

      <ButtomNav />
    </>
  )
}

export default App;
