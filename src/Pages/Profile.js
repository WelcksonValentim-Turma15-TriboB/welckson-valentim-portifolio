import Header from '../Components/Header';
import photo_welckson from '../images/photo_welckson.jpeg';

function Profile() {
  return (
    <main>
      <Header />
      <section className='profile'>
      <h1>Quem é Welckson?</h1>
        <p>Engenheiro mecânico com mais de 5 anos de atuação,
          decidi investir em um sonho antigo de atuar com tecnologia.
          Possuo experiência com gestão, gerência de projetos, planeamento,
          metodologia ágil e desenvolvi habilidades técnicas em Front End,
          inciando no momento o desenvolvimento em Back End (estudando na Trybe).
        </p>
        <img width='250px' alt='Welckson photography' src={ photo_welckson } />
      </section>
    </main>
  );
}

export default Profile;