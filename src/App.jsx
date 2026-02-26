import { useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Careers from "./pages/Careers";
import BookSession from "./pages/BookSession";
import Resources from "./pages/Resources";
import Assessment from "./pages/Assessment";

import Navbar from "./components/Navbar";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("Dashboard");

  const user = { name: "John Doe" };

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div>

      {/* ✅ GLOBAL NAVBAR */}
      <Navbar
        user={user}
        onLogout={() => setIsLoggedIn(false)}
        setPage={setPage}
        page={page}
      />

      {/* ✅ PAGE SWITCH */}
      {page === "Dashboard" && <Dashboard setPage={setPage} />}
      {page === "Explore Careers" && <Careers />}
      {page === "Quiz" && <Assessment />}
      {page === "Book Session" && <BookSession />}
      {page === "Resources" && <Resources />}

    </div>
  );
}

export default App;