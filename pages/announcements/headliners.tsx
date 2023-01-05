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

const HeadlinersPage = () => {
  const WIDTH = 1080;
  const HEIGHT = 1350;
  const HEADLINERS_POST_WIDTH = useBreakpointValue({
    base: WIDTH / 3,
    md: WIDTH / 2,
    lg: WIDTH / 1.5,
  });
  const HEADLINERS_POST_HEIGHT = useBreakpointValue({
    base: HEIGHT / 3,
    md: HEIGHT / 2,
    lg: HEIGHT / 1.5,
  });
  const BACKGROUND_SOURCE = '/images/union_dark_bkg.webp';
  const HEADLINERS_POST_SOURCE = '/images/announcements/headliners.png';

  return (
    <>
      <Head>
        <title>Headliners - FACT 2022</title>
      </Head>
      <NavigationBar />
      <Flex textAlign="center" flexDir="column" alignItems="center" pb="2rem">
        <ImageHeader title="Headliners" imgSrc={BACKGROUND_SOURCE} />
        <Divider
          color="factturquoise"
          borderColor="factturquoise"
          borderWidth="1px"
          w={{ base: '50%', md: '30%' }}
          mb="2rem"
        />

        <Image
          src={HEADLINERS_POST_SOURCE}
          width={HEADLINERS_POST_WIDTH}
          height={HEADLINERS_POST_HEIGHT}
          placeholder="blur"
          blurDataURL={HEADLINERS_POST_SOURCE}
          alt="FACT 2022 Headliners - Ashley Mehta and Ella Jay Basco"
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
            <strong>November 5, 2022</strong>
          </Paragraph>
          <Paragraph>
            <ChakraLink
              isExternal
              href="https://www.instagram.com/ashleymehtaofficial/"
              textDecoration="underline"
              textColor="factturquoise"
            >
              Ashley Mehta
            </ChakraLink>{' '}
            and{' '}
            <ChakraLink
              isExternal
              href="https://www.instagram.com/ellajaybasco/"
              textDecoration="underline"
              textColor="factturquoise"
            >
              Ella Jay Basco
            </ChakraLink>{' '}
            will be our headlining performances at our Variety Show NEXT WEEK!
            🤩 We are EXTREMELY excited to have these talented guests at our
            conference this year, and we hope you all are too. 🌟🌟 SEE YOU ALL
            SOON!
          </Paragraph>
          <Heading as="h2" fontWeight="light" mt="2rem">
            About <strong>Ashley Mehta</strong>
          </Heading>
          <Paragraph>
            Ashley Mehta melds pop, R&B, hip hop and electronic music creating
            an ebullient, yet unique sound. Coming from the Bay Area, Ashley
            stylistically approaches her sound with her culture in mind. As her
            roots are from both Filipino and Indian backgrounds, Ashley
            showcases her presence with pride in her cultures.
          </Paragraph>
          <Paragraph>
            With just her acoustic guitar and drive for music, Ashley set her
            music career in motion by singing medleys and covers at different
            venues, ranging from high school events to local coffee shops.
            Beginning her freshman year of college, she shifted her focus to
            original music. She released her first single and she continues to
            release new music. Ashley continues to radiate the same positive
            energy kept throughout her sound.
          </Paragraph>
          <Heading as="h2" fontWeight="light" mt="2.5rem">
            About <strong>Ella Jay Basco</strong>
          </Heading>
          <Paragraph>
            Half Filipino and half Korean, Ella Jay Basco made her film debut in
            February 2020, donning Batgirl's mantle opposite Margot Robbie in
            Warner Brothers/DC movie Birds of Prey. Most recently, Basco recurs
            on NBC/Peacock's new show A FRIEND OF THE FAMILY, with Mckenna
            Grace, Collin Hanks and Anna Paquin. She has also guest starred on
            Veep and Grey's Anatomy. At 16 years old, she is blazing a trail for
            Asian American girls who are looking to see themselves on screen and
            in music. Ella Jay is also a singer-songwriter and plays the guitar,
            piano, and ukulele. Her most recent song EYE TO EYE, can be heard on
            KCRW and her music video BUBBLE TEA has graced the tv screens on MTV
            and Nickelodeon.
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

export default HeadlinersPage;
