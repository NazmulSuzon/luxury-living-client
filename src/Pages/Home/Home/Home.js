import React from 'react';
import Services from '../../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Projects></Projects>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;