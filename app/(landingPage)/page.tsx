import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Services />
    </main>
  );
}

export default Home;
