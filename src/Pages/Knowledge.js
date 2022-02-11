import Header from '../Components/Header';
import Visual_Studio_Code_icon from '../images/Visual_Studio_Code_icon.png';
import HTML_CSS_JS_Bootstrap from '../images/HTML_CSS_JS_Bootstrap.png';
import nodejs_MYSQL_docker from '../images/nodejs_MYSQL_docker.png';

function Knowledge() {
  return (
    <main>
      <Header />
      <section className='knowledge'>
      <h1>Conhecimentos</h1>
        <h3>Plataformas</h3>
        <ul>
          <li>Visual Studio code</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>MySQL Workbench</li>
        </ul>
        <img alt='logo Visual Studio code' src={ Visual_Studio_Code_icon } />
      </section>
      <section className='knowledge'>
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
      <section className='knowledge'>
        <h3>Tecnologias - Back-End</h3>
        <ul>
          <li>Docker</li>
          <li>SQL</li>
          <li>Node.JS</li>
        </ul>
        <img alt='logo nodejs_MYSQL_docker' src={ nodejs_MYSQL_docker } />
      </section>
    </main>
  );
}
export default Knowledge;