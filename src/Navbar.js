import { useEffect } from "react";
import { NavLink
  // , Link
 } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    console.log("Navbar loaded...")
  }, [])

  return ( 
    <div className="Navbar">
        <h1>Navbar component</h1>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink to="/projects">Projects</NavLink>
          {/* <Link to='/projects'>Projects</Link> */}
        </div>
    </div>
  );
}

export default Navbar;

// style={{
//   backgroundColor: '#f1356d',
//   borderRadius:'7px',
//   color: 'white'
// }}