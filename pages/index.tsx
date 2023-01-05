import { Fade } from '@chakra-ui/react';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { NavigationBar } from '../components/NavigationBar';

import { RevealVideo } from '../components/RevealVideo';
import { RegistrationVideo } from '../components/RegistrationVideo';
import CovidStatementLink from '../components/CovidStatementLink';
import Announcements from '../components/Announcements';
import Sponsors from '../components/Sponsors';

const Index = () => (
  <>
    <NavigationBar />
    <Fade in>
      <Container height="100vh">
        {/* Hero section */}
        <Hero />

        {/* Team FACT Section */}
        <Announcements />

        {/* COVID-19 statement */}
        <CovidStatementLink />

        {/* Registration Video */}
        <RegistrationVideo />

        {/* Reveal Video */}
        <RevealVideo />

        {/* Sponsors */}
        <Sponsors />

        <Footer />
      </Container>
    </Fade>
  </>
);

export default Index;
