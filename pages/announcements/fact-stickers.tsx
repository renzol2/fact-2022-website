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

const FactStickersPage = () => {
  const WIDTH = 1080;
  const HEIGHT = 566;
  const FACT_STICKERS_POST_WIDTH = useBreakpointValue({
    base: WIDTH / 3,
    md: WIDTH / 2,
    lg: WIDTH,
  });
  const FACT_STICKERS_POST_HEIGHT = useBreakpointValue({
    base: HEIGHT / 3,
    md: HEIGHT / 2,
    lg: HEIGHT,
  });
  const BACKGROUND_SOURCE = '/images/foellinger_audience_dark_bkg.webp';
  const FACT_STICKERS_POST_SOURCE = '/images/announcements/stickers.png';

  return (
    <>
      <Head>
        <title>FACT Stickers - FACT 2022</title>
      </Head>
      <NavigationBar />
      <Flex textAlign="center" flexDir="column" alignItems="center" pb="2rem">
        <ImageHeader title="FACT 2022 Stickers" imgSrc={BACKGROUND_SOURCE} />
        <Divider
          color="factturquoise"
          borderColor="factturquoise"
          borderWidth="1px"
          w={{ base: '50%', md: '30%' }}
          mb="2rem"
        />

        <Image
          src={FACT_STICKERS_POST_SOURCE}
          width={FACT_STICKERS_POST_WIDTH}
          height={FACT_STICKERS_POST_HEIGHT}
          placeholder="blur"
          blurDataURL={FACT_STICKERS_POST_SOURCE}
          alt="Stickers sold at FACT 2022"
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
            <strong>October 31, 2022</strong>
          </Paragraph>
          <Paragraph>
            Here are the stickers we will be selling at our conference in a few
            weeks!! Thank you to all of our talented artists for their designs
            💓 You can purchase these stickers (3 for $1) during badge pick-up,
            our small business market, and V-Show!✨
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

export default FactStickersPage;
