import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import InboxPage from "./Pages/InboxPage";
import SearchPage from "./Pages/SearchPage";
import FriendsPage from "./Pages/FriendsPage";
import ProfilePage from "./Pages/ProfilePage";
import TemplatePage from "./Pages/TemplatePage";
import ComposePage from "./Pages/ComposePage";
import LoginPage from "./Pages/LoginPage";
import ReadEmailPage from "./Pages/ReadEmailPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<InboxPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* <Route path="/write" element={<TemplatePage />} /> */}
        <Route path="/write" element={<ComposePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reademail" element={<ReadEmailPage />} />
      </Routes>
    </>
  );
}

export default App;
