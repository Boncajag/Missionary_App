import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import InboxPage from "./Pages/InboxPage";
import SearchPage from "./Pages/SearchPage";
import FriendsPage from "./Pages/FriendsPage";
import ProfilePage from "./Pages/ProfilePage";
import TemplatePage from "./Pages/TemplatePage";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<InboxPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/friends" element={<FriendsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/write" element={<TemplatePage />} />
            </Routes>
        </>
    );
}

export default App;
