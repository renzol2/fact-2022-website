import { Divider, Flex, useBreakpointValue } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import ExternalLinkButton from '../components/ExternalLinkButton';
import { Footer } from '../components/Footer';
import { ImageHeader } from '../components/ImageHeader';
import { NavigationBar } from '../components/NavigationBar';
import Paragraph from '../components/Paragraph';
import { REGISTRATION_URL, Y_DONATION_URL } from '../constants/urls';

const DonatePage = () => {
  const IMAGE_LENGTH = useBreakpointValue({
    base: 300,
    sm: 400,
    md: 600,
    lg: 755,
  });
  const BACKGROUND_SOURCE = '/images/foellinger_audience_dark_bkg.webp';
  const DONATE_POST_SOURCE = '/images/donate.png';

  return (
    <>
      <Head>
        <title>Donate - FACT 2022</title>
      </Head>
      <NavigationBar />
      <Flex textAlign="center" flexDir="column" alignItems="center" pb="2rem">
        <ImageHeader title="FACT 2022 Donations" imgSrc={BACKGROUND_SOURCE} />
        <Divider
          color="factturquoise"
          borderColor="factturquoise"
          borderWidth="1px"
          w={{ base: '50%', md: '30%' }}
          mb="2rem"
        />

        <Image
          src={DONATE_POST_SOURCE}
          width={IMAGE_LENGTH}
          height={IMAGE_LENGTH}
          placeholder="blur"
          blurDataURL={DONATE_POST_SOURCE}
          alt="Donate to FACT 2022"
          style={{ borderRadius: '10px', objectFit: 'cover', background: 'rgba(0, 0, 0, 0.0)'  }}
        />

        {/* Text */}
        <Flex
          flexDir="column"
          alignItems="center"
          mx={{ base: '5%', md: '10%', lg: '20%' }}
          my="2rem"
        >
          <Paragraph>
            <strong>October 23, 2022</strong>
          </Paragraph>
          <Paragraph>
            FACT is around the corner and would not be possible without the help
            of the people and teams who continuously work to make it happen ✨.
            With that, check out the YMCA website! On this website, it includes
            different donation packages and what comes in those packages - these
            donations will help the event and are very much appreciated 🙏.
          </Paragraph>
          <ExternalLinkButton
            text="Donate to FACT 2022!"
            path={Y_DONATION_URL}
            props={{ alignSelf: 'center', mt: '3rem' }}
          />
          <ExternalLinkButton
            text="Register for FACT!"
            path={REGISTRATION_URL}
            props={{ alignSelf: 'center', mt: '1rem' }}
          />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default DonatePage;
