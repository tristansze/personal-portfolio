import styles from "./App.module.css";
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero"
import { About } from "./components/about/about";
import { Experience } from "./components/experience/experience";
import { Contact } from "./components/contact/contact";

function App() {

  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;