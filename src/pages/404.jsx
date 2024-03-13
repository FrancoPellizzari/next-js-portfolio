import Link from "next/link";
import Layout from "../components/Layout";

const custom404 = () => (
<Layout>
<div className="text-center">
      <h1 className="display-1">404</h1>
      <p>
        Esta pagina no existe. Por favor, vuevla a  <Link href="/">Home</Link>
      </p>
    </div>
</Layout>


);

export default custom404;

