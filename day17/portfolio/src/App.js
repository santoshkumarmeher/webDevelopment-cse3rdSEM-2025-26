import './App.css';
import Navbar,{Hero} from "./components/Navbar"


function App() {
  // const isLoggedin = true
  const isLoggedin = false
  return (
      <>
      {
        (isLoggedin ? <Navbar title = "USERNAME" status = "Logout"/> :<Navbar/>)
      }
      <Hero/>
      <Hero section = "Quick Links"/>
      </>
  );
}

export default App;
