import { Routes, Route, Navigate } from "react-router-dom";

import "./app.scss";
import Home from "./Pages/Home/Home";
import Watch from "./Pages/Watch/Watch";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  const user = true;
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={user ? <Home /> : <Navigate to="/register" />}
      />
      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      {user && (
        <>
          <Route path="/movies" element={<Home type="movies" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/watch" element={<Watch />} />
        </>
      )}
    </Routes>
  );
}

export default App;
