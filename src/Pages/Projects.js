import Header from "../Components/Header";
import Footer from '../Components/Footer';

function Projects() {
  return (
    <main>
      <Header />
      <section className='projects'>
        <h1>Projetos</h1>
          <div className='divProjects'>
            <h2>Aplicação list Of Cars</h2>
            <a
              href='https://listofcarsfrontend.herokuapp.com/cars'
              target="_blank"
              rel="noreferrer noopener"
              className='linkProjects'
            >
              <iframe 
                title='gif project listOfCars'
                src="https://giphy.com/embed/RehiJfEYcpIQlOAc2c"
                frameBorder="0"
              >
              </iframe>
              <p>Com esta aplicação podemos visualizar lista de veículos, com descrição de marca, modelo e versão.
                Ao clicar sobre o card abre-se uma nova página, do site WebMotors, com as especificações técnicas de cada modelo.</p>
              <ul>
                <li>Tecnologias – Front end: React.js, Javascript, HTML, CSS;</li>
                <li>Tecnologias – Back end: Node.js, Sequelize, MySQL, Cors, Docker;</li>
                <li>Plataformas – Supabase e Heroku;</li>
              </ul>
             </a>
            <a href='https://github.com/welcksonvalentim/listofcarsfrontend' target="_blank" rel="noreferrer noopener">
              <h4>Repositório - Front End: https://github.com/welcksonvalentim/listofcarsfrontend</h4>
            </a>
            <a href='https://github.com/welcksonvalentim/listOfCarsBackEnd' target="_blank" rel="noreferrer noopener">
              <h4>Repositório - Back End: https://github.com/welcksonvalentim/listOfCarsBackEnd</h4>
            </a>
          </div>
      </section>
      <Footer />
    </main>
  );
}
export default Projects;