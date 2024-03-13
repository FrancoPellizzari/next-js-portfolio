import Navbar from "./Navbar.js";
import Head from "next/head";


const Layout = ({ children }) => (
  <>
 
    <Navbar />
    
    <main className="container d-flex flex-column  py-4">
      {children}
    </main>
  </>
);

export default Layout;
