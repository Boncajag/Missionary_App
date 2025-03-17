import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import InboxPage from "./InboxPage";
import SearchPage from "./SearchPage";

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
