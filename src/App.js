import "./App.css";

import GlobalCss from "./styles/global.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";

import ImgAutomatisme from "./img/automatisme.jpg";
import ImgDevweb from "./img/devweb.jpg";
import ImgContact from "./img/contact.jpg"

import Contact from "./components/Contact";

function App() {
  const titleSection = [];
  titleSection[1] = "Développement Web";
  titleSection[2] = "Automatisme";

  const commentSection = [];
  commentSection[1] = "Commentaire pour la première section";
  commentSection[2] = "Commentaire pour la deuxième section";

  return (
    <div className="App">
      <GlobalCss />
      <Header />
      <main>
        <Section
          img={<ImgDevweb />}
          title={titleSection[1]}
          comment={commentSection[1]}
          name={"section1"}
          right={false}
        />
        <Section
          img={<ImgAutomatisme />}
          title={titleSection[2]}
          comment={commentSection[2]}
          name={"section2"}
          right={true}
        />
        <Section img={<ImgContact />} name={"contact"} right={false}>
          <Contact />{" "}
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
