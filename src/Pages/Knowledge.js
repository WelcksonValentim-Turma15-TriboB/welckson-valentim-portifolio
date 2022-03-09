import Header from '../Components/Header';
import Footer from '../Components/Footer';
import softwares from '../images/softwares.JPG';
import HTML_CSS_JS_Bootstrap from '../images/HTML_CSS_JS_Bootstrap.png';
import nodejs_MYSQL_docker from '../images/nodejs_MYSQL_docker.png';

function Knowledge() {
  return (
    <main>
      <Header />
      <section className='knowledge'>
      <h1>Conhecimentos</h1>
        <h3>Plataformas</h3>
        <section className='plat-knowledge'>
          <ul>
            <li>Visual Studio code</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>MySQL Workbench</li>
          </ul>
          <img alt='logo softwares' src={ softwares } />
        </section>
      </section>
      <section className='knowledge'>
        <h3>Tecnologias - Front-End</h3>
        <section className='plat-knowledge'>
          <ul>
            <li>React</li>
            <li>React Testing library</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
          <img alt='logo HTML_CSS_JS_Bootstrap' src={ HTML_CSS_JS_Bootstrap } />
        </section>
      </section>
      <section className='knowledge'>
        <h3>Tecnologias - Back-End</h3>
        <section className='plat-knowledge'>
          <ul>
            <li>Docker</li>
            <li>SQL</li>
            <li>Node.JS</li>
          </ul>
          <img alt='logo nodejs_MYSQL_docker' src={ nodejs_MYSQL_docker } />
        </section>
      </section>
      <Footer />
    </main>
  );
}
export default Knowledge;