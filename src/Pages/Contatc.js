import Header from "../Components/Header";
import GitHub_Logo_White from '../images/GitHub_Logo_White.png';

function Contact() {
    return (
      <section>
        <Header />
        <h1>Contatos</h1>
        <a href='//www.linkedin.com/in/welcksonvalentim' target="_blank" rel="noreferrer noopener">
          <img 
            alt='logo Linkedin' 
            src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'
          />
        </a>
        <a href='https://github.com/WelcksonValentim-Turma15-TriboB' target="_blank" rel="noreferrer noopener">
          <img 
            alt='logo GitHub'
            width='200px'
            src={ GitHub_Logo_White }
          />
        </a>
        <a href='mailto:wellvalentim@hotmail.com?'>
          <img 
            alt='logo Email'
            src='https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white' />
        </a>
        <a href='hhtps://instagram.com/welcksonvalentim' target='_blank' rel='noreferrer noopener'>
          <img
            alt='logo Instagram'
            src='https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white' />
        </a>
      </section>
    );
  }
  
  export default Contact;