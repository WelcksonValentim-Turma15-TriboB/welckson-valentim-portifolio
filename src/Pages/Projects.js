import Header from "../Components/Header";
import Footer from '../Components/Footer';

function Projects() {
  return (
    <main>
      <Header />
      <section className='projects'>
        <h1>Projetos</h1>
        <a href='https://listofcarsfrontend.herokuapp.com/cars' target="_blank" rel="noreferrer noopener">
          <h4>Aplicação list Of Cars</h4>
          <iframe 
            title='gif project listOfCars'
            src="https://giphy.com/embed/RehiJfEYcpIQlOAc2c"
            width="480"
            height="270"
            frameBorder="0"
            class="giphy-embed" 
            allowFullScreen
          >
            </iframe>
          <p>Com esta aplicação podemos visualizar lista de veículos, com descrição de marca, modelo e versão.
            Ao clicar sobre o card abre-se uma nova página, do site WebMotors, com as especificações técnicas de cada modelo.</p>
          <ul>
            <li>Tecnologias – Front end: React.js, Javascript, HTML, CSS;</li>
            <li>Tecnologias – Back end: Node.js, Sequelize, MySQL, Cors, Docker;</li>
            <li>Plataformas - Supabase e Heroku;</li>
            <li>Link repositório – Front End: https://github.com/welcksonvalentim/listofcarsfrontend</li>
            <li>Link repositório – Back End: https://github.com/welcksonvalentim/listOfCarsBackEnd</li>
          </ul>
        </a>
      </section>
      <Footer />
    </main>
  );
}
export default Projects;