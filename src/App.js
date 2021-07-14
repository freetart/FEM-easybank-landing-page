import Globals from "./abstracts/Globals";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    <>
      <Globals />
      <Navbar />
      <Hero />
      <main>
        <Features />
      </main>
    </>
  );
}

export default App;
