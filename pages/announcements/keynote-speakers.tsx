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

const KeynoteSpeakersPage = () => {
  const IMAGE_LENGTH = useBreakpointValue({
    base: 300,
    sm: 400,
    md: 600,
    lg: 755,
  });
  const BACKGROUND_SOURCE = '/images/foellinger_audience_dark_bkg.webp';
  const KEYNOTE_SPEAKERS_POST_SOURCE = '/images/announcements/keynote1.png';

  return (
    <>
      <Head>
        <title>Keynote Speakers - FACT 2022</title>
      </Head>
      <NavigationBar />
      <Flex textAlign="center" flexDir="column" alignItems="center" pb="2rem">
        <ImageHeader title="Keynote Speakers" imgSrc={BACKGROUND_SOURCE} />
        <Divider
          color="factturquoise"
          borderColor="factturquoise"
          borderWidth="1px"
          w={{ base: '50%', md: '30%' }}
          mb="2rem"
        />

        <Image
          src={KEYNOTE_SPEAKERS_POST_SOURCE}
          width={IMAGE_LENGTH}
          height={IMAGE_LENGTH}
          placeholder="blur"
          blurDataURL={KEYNOTE_SPEAKERS_POST_SOURCE}
          alt="FACT 2022: Kaunlaran - Enrich our Growth"
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
            <strong>November 2, 2022</strong>
          </Paragraph>
          <Paragraph>
            INTRODUCING OUR KEYNOTE SPEAKERS! 🤩👏 We are so excited to have{' '}
            <ChakraLink
              isExternal
              href="https://www.instagram.com/jeremybautista/"
              textDecoration="underline"
              textColor="factturquoise"
            >
              Jeremy Bautista
            </ChakraLink>
            , the very FIRST FACT Coordinator, and{' '}
            <ChakraLink
              isExternal
              href="https://www.instagram.com/averiebishop/"
              textDecoration="underline"
              textColor="factturquoise"
            >
              Averie Bishop, Miss Texas
            </ChakraLink>
            , as our keynote speakers for this year’s FACT conference! Join us
            11/12 at Opening Session next week💓
          </Paragraph>
          <Heading as="h2" fontWeight="light" mt="2rem">
            About <strong>Jeremy Bautista</strong>
          </Heading>
          <Paragraph>
            Jeremy Bautista is the son of immigrant parents who arrived from the
            Philippines in the late 1960s then settled and married in the
            Chicago area. Jeremy, born in Chicago, grew up in the western
            suburbs and attended the University of Illinois at Urbana-Champaign
            (BA, History - 1996) and National Louis University (MA, Teaching -
            1999). At UIUC, Jeremy was active in the Asian American student
            community during his 5 years as an undergraduate. He currently works
            as a Systems Analyst in Information Technology for Community Unit
            School District 201 in Westmont, IL, his K-12 alma mater. He and his
            wife Cristine are parents to 2 teenage boys and 3 dogs who together
            fill up most of their time at home. If ever a free moment presents
            itself, Jeremy enjoys comic books, attending youth sporting events,
            and Asian pop music. He thanks the FACT leadership committee for the
            invitation to be with you at all at FACT 30.
          </Paragraph>
          <Heading as="h2" fontWeight="light" mt="2.5rem">
            About <strong>Averie Bishop</strong>
          </Heading>
          <Paragraph>
            I am your 85th anniversary Miss Texas and the first Asian American
            woman to represent the lonestar state. I am a first generation law
            school graduate, small business owner, viral influencer, and
            international nonprofit CEO. I am also the youngest committee member
            of the anti-hate and discrimination advisory council to Mayor Eric
            Johnson in the City of Dallas. As Miss Texas, I will dedicate my
            year of service to my social platform, "Yall Means All" and the
            Texas Cares for Children program. I grew up in poverty, experienced
            food insecurity, and faced discrimination in my small hometown. My
            social platform aims to make every child feel at home and teaches
            them how to grow into their greatest potential, even through
            challenging adversities. I have various age-appropriate school
            programs that address diversity and inclusion, social media, and
            mental health. I am available for motivational speaking engagements,
            professional training and coaching, sponsorship promotions, and
            beyond.
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

export default KeynoteSpeakersPage;
