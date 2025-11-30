import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Analytics } from '@vercel/analytics/react';

function App() {
    return (
        <ThemeProvider>
            <Layout>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </Layout>
            <Analytics />
        </ThemeProvider>
    );
}

export default App;
