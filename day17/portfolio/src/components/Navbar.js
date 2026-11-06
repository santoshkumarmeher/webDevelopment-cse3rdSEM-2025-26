export default function Navbar(props) {
  const status = props.status || "Login"
  const title = props.title || "PORTFOLIO"
    return (
    <div className="navbar">
      <h1>{title}</h1>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
        <li>{status}</li>
      </ul>
    </div>
  );
}
function Hero(props) {
    const section = props.section || "PORTFOLIO"
  return (
    <div className="hero">
      <h1>This is {section} Section</h1>
    </div>
  );
}
export {Hero};