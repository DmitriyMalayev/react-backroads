import NavBar from "./components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Hero from "./components/Hero";

function App() {
    return (
        <>
            <NavBar/>
            <Hero/>
            <About/>
            <Services/>
            <Tours/>
            <Footer/>
        </>
    );
}

export default App;
