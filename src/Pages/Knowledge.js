import Header from '../Components/Header';
import Footer from '../Components/Footer';
import softwares from '../images/softwares.JPG';
import HTML_CSS_JS_Bootstrap from '../images/HTML_CSS_JS_Bootstrap.png';
import nodejs_MYSQL_docker from '../images/nodejs_MYSQL_docker.png';

function Knowledge() {
  return (
    <main>
      <Header />
      <h1>Conhecimentos</h1>
      <section className='knowledge'>
        <section className='plat-knowledge'>
        <h3>Softwares</h3>
          <ul>
            <li>Visual Studio Code</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>MySQL Workbench</li>
          </ul>
          <img alt='logo softwares' src={ softwares } />
        </section>
        <section className='plat-knowledge'>
        <h3>Tecnologias - Front-End</h3>
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
        <section className='plat-knowledge'>
        <h3>Tecnologias - Back-End</h3>
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