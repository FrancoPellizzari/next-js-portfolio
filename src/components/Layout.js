import Navbar from "./Navbar.js";
import Head from "next/head";
import { useEffect } from "react";
import {useRouter} from 'next/router'
import nProgress from 'nprogress'


const Layout = ({ children }) => {
  
  const router = useRouter();
  
  useEffect(() =>{
    const handleRouteChange = url => {
      nProgress.start();
    }
    router.events.on('routeChangeStart', handleRouteChange)

    router.events.on('routeChangeComplete', () => nProgress.done());

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

 return (
  <>

    <Navbar />

    <main className="container d-flex flex-column  py-4">
      {children}
    </main>
    <footer className="bg-dark text-light text-center">
      <div className="container p-4">
        <h1>&copy; Franco Pellizzari Portfolio</h1>
        <p>2000 - {new Date().getFullYear()}</p>
        <p>Todos los derechos reservados.</p>
      </div>
    </footer>

  </>
 )
  

};

export default Layout;
