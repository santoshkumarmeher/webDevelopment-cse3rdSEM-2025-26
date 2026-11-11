// import { useState } from "react";

// function Home() {
//   return(
//     <h2>This is home page</h2>
//   )
// }
// function About() {
// return(
//   <h2>This is About page</h2>
// )

// }
// function Contact() {
//   return(
//     <h2>This is Contact page</h2>
//   )

// }
// function App() {
//   const [page, setPage] = useState("Home");
//   return (
//     <div>
//       <h1>Welcome to my website</h1>
//       <button onClick={() => setPage("Home")}>Home</button>
//       <button onClick={() => setPage("About")}>About</button>
//       <button onClick={() => setPage("Contact")}>Contact</button>

//       {page === "Home" && <Home/>}
//       {page === "About" && <About/>}
//       {page === "Contact" && <Contact/>}
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Link } from "react-router";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/About'element={<About/>} />
        <Route path='/Contact'element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
