import Header from '../Components/Header';
import Footer from '../Components/Footer';
import photo_welckson from '../images/photo_welckson.jpeg';

function Profile() {
  return (
    <main>
      <Header />
      <section className='profile'>
      <h1>Quem sou eu ?</h1>
        <p>Formado em engenharia mecânica, atuei mais de 5 anos na área.
          Atualmente estou estudando na Trybe iniciando o módulo de desenvolvimento em 
          Back End (Docker | SQL | Nodejs). Possuo experiência com gestão, gerência de projetos, 
          planejamento, metodologia ágil e Front End (React | React Testing Library | JavaScript).
        </p>
        <img width='250px' alt='Welckson photography' src={ photo_welckson } />
        <h4>Welckson Valentim</ h4>
      </section>
      <Footer />
    </main>
  );
}

export default Profile;