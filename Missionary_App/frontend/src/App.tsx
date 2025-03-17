import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import InboxPage from "./Pages/InboxPage";
import SearchPage from "./Pages/SearchPage";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<InboxPage />} />
                <Route path="/search" element={<SearchPage />} />

            </Routes>
        </>
    );
}

export default App;
