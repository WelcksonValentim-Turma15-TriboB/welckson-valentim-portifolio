import Header from '../Components/Header';
import Footer from '../Components/Footer';
import social_github_icon from '../images/social_github_icon.png';
import linkedin_logo_icon from '../images/linkedin_logo_icon.png';
import office365_outlook_icon from '../images/office365_outlook_icon.png';
import instagram_logo_icon from '../images/instagram_logo_icon.png';

function Contact() {
    return (
      <main>
        <Header />
        <section className='contact'>
          <h1>Contatos</h1>
          <a href='//www.linkedin.com/in/welcksonvalentim' target="_blank" rel="noreferrer noopener">
            <h4>Linkedin</h4>
            <img alt='logo Linkedin' src={ linkedin_logo_icon } />
          </a>
          <a href='https://github.com/welcksonvalentim' target="_blank" rel="noreferrer noopener">
            <h4>GitHub</h4>
            <img alt='logo GitHub' src={ social_github_icon } />
          </a>
          <a href='mailto:wellvalentim@hotmail.com?'>
            <h4>Outlook</h4>
            <img alt='logo Email' src={ office365_outlook_icon } />
          </a>
          <a href='hhtps://instagram.com/welcksonvalentim' target='_blank' rel='noreferrer noopener'>
            <h4>Instagram</h4>
            <img alt='logo Instagram' src={ instagram_logo_icon } />
          </a>
        </section>
        <Footer />
      </ main>
    );
  }
  
  export default Contact;