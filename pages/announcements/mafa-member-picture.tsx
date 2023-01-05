import {
  Divider,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  Link as ChakraLink,
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import ExternalLinkButton from '../../components/ExternalLinkButton';
import { Footer } from '../../components/Footer';
import { ImageHeader } from '../../components/ImageHeader';
import { NavigationBar } from '../../components/NavigationBar';
import Paragraph from '../../components/Paragraph';
import { REGISTRATION_URL } from '../../constants/urls';

const MafaMemberPicturePage = () => {
  const WIDTH = 1080;
  const HEIGHT = 566;
  const BACKGROUND_SOURCE = '/images/foellinger_audience_dark_bkg.webp';

  return (
    <>
      <Head>
        <title>MAFA Member Picture - FACT 2022</title>
      </Head>
      <NavigationBar />
      <Flex textAlign="center" flexDir="column" alignItems="center" pb="2rem">
        <ImageHeader title="MAFA Member Picture" imgSrc={BACKGROUND_SOURCE} />
        <Divider
          color="factturquoise"
          borderColor="factturquoise"
          borderWidth="1px"
          w={{ base: '50%', md: '30%' }}
          mb="2rem"
        />

        {/* Text */}
        <Flex
          flexDir="column"
          alignItems="center"
          mx={{ base: '5%', md: '10%', lg: '20%' }}
          my="2rem"
        >
          <Paragraph>
            <strong>November 12</strong>
          </Paragraph>
          <Paragraph>
            MAFA will be taking a MAFA Member Organization picture IMMEDIATELY
            after session 2 at the Foellinger Auditorium by 12:50! From there,
            we can split into our MAFAmilies for pictures and lunch :) see you
            at Foellinger!
          </Paragraph>
          <ExternalLinkButton
            text="Register for FACT!"
            path={REGISTRATION_URL}
            props={{ alignSelf: 'center', mt: '5rem' }}
          />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default MafaMemberPicturePage;
