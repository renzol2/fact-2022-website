import {
  Divider,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  Link as ChakraLink,
  SimpleGrid,
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import ExternalLinkButton from '../../components/ExternalLinkButton';
import { Footer } from '../../components/Footer';
import { ImageHeader } from '../../components/ImageHeader';
import { NavigationBar } from '../../components/NavigationBar';
import Paragraph from '../../components/Paragraph';
import { REGISTRATION_URL } from '../../constants/urls';

const FundraisersPage = () => {
  const WIDTH = 480;
  const HEIGHT = 600;
  const FUNDRAISERS_POST_WIDTH = useBreakpointValue({
    base: WIDTH / 1.5,
    md: WIDTH,
  });
  const FUNDRAISERS_POST_HEIGHT = useBreakpointValue({
    base: HEIGHT / 1.5,
    md: HEIGHT,
  });
  const BACKGROUND_SOURCE = '/images/union_dark_bkg.webp';
  const FUNDRAISER_FLYERS_SOURCES = [
    '/images/announcements/kft_flyer.png',
    '/images/announcements/shawarma_joint_flyer.png',
    '/images/announcements/teamoji_flyer.png',
    '/images/announcements/tenko_tea_flyer.png',
  ];

  return (
    <>
      <Head>
        <title>Fundraisers - FACT 2022</title>
      </Head>
      <NavigationBar />
      <Flex textAlign="center" flexDir="column" alignItems="center" pb="2rem">
        <ImageHeader title="Fundraisers" imgSrc={BACKGROUND_SOURCE} />
        <Divider
          color="factturquoise"
          borderColor="factturquoise"
          borderWidth="1px"
          w={{ base: '50%', md: '30%' }}
          mb="2rem"
        />

        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5}>
          {FUNDRAISER_FLYERS_SOURCES.map((source) => (
            <Image
              src={source}
              width={FUNDRAISERS_POST_WIDTH}
              height={FUNDRAISERS_POST_HEIGHT}
              placeholder="blur"
              blurDataURL={source}
              alt="Fundraiser for FACT 2022"
              style={{ borderRadius: '10px', objectFit: 'cover', background: 'rgba(0, 0, 0, 0.0)'  }}
              key={source}
            />
          ))}
        </SimpleGrid>

        {/* Text */}
        <Flex
          flexDir="column"
          alignItems="center"
          mx={{ base: '5%', md: '10%', lg: '20%' }}
          my="2rem"
        >
          <Paragraph>
            <strong>November 9</strong>
          </Paragraph>
          <Paragraph>
            Come support FACT 2022 by ordering delicious food and drink at any
            of our fundraisers. Come to Tenko Tea on Friday and Shawarma Joint,
            Teamoj, and KFT on Saturday!
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

export default FundraisersPage;
