import Header from "../Components/Header";
function Knowledge() {
  return (
    <main>
      <Header />
      <h1>Conhecimentos</h1>
      <section>
        <h3>Plataformas</h3>
        <ul>
          <li>Visual Studio code</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>MySQL Workbench</li>
        </ul>
      </section>
      <section>
        <h3>Tecnologias - Front-End</h3>
        <ul>
          <li>React</li>
          <li>React Testing library</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
        </ul>
      </section>
      <section>
        <h3>Tecnologias - Back-End</h3>
        <ul>
          <li>Docker</li>
          <li>SQL</li>
          <li>Node.JS</li>
        </ul>
      </section>
    </main>
  );
}
export default Knowledge;