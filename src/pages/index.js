import Layout from "../components/Layout";
import { experiencias, skills, projects } from "../profile";
import Link from "next/link";

const Index = () => (

    <Layout>
        {/* header Cart */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="foto-Franco-Cv.jpg" alt="" className="img-fluid" />

                        </div>
                        <div className="col-md-8">
                            <h1>Franco Pellizzari</h1>
                            <h3>Fullstack Developer</h3>
                            <p>
                                Este es mi portafolio. Aawgwa wagiaoháw gawiawg
                                awhga9h9hgaw iaighaiw´hgi´hwgaháiwawhgah
                                aghg9ahw</p>
                            <a href="/hireme">Hire Me!</a>

                        </div>

                    </div>

                </div>

            </div>


        </header>

        {/* SEGUNDA SECCION */}
        <section className="row">
            <div className="col-md-4 py-2">
                <div className="card bg-light animate__animated animate__fadeInLeft">
                    <div className="card-body">
                        <h1>Skills</h1>

                        {/* Skill Progress  */}
                        {skills.map(({ skill, porcentaje }, i) => (
                            <div className="py-3" key={i}>
                                <h5>{skill}</h5>
                                <div className="progress ">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${porcentaje}%` }}
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experiencia</h1>
                        <ul>
                            {
                                experiencias.map(({ title, descripcion, desde, hasta }, index) => (
                                    <li key={index}>
                                        <h3>{title}</h3>
                                        <h5>{desde} - {hasta}</h5>
                                        <p>
                                            {descripcion}
                                        </p>

                                    </li>
                                ))}
                        </ul>
                        <Link href="/experiencias" className="btn btn-light">
                            Conoce Más
                        </Link>



                       
                    </div>
                </div>

            </div>

        </section>
        <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>
              {projects.map(({ name, description, image }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={`/${image}`} alt="" className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="#!">Saber Más</a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-12 mt-4">
                <div className="text-center">
                  <Link href="/portfolio" className="btn btn-outline-light">
                    Ver Más Proyectos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    </Layout>


);
export default Index;