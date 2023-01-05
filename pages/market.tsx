import {
  Divider,
  Flex,
  Link,
  ListItem,
  SimpleGrid,
  UnorderedList,
  useBreakpointValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import ExternalLinkButton from '../components/ExternalLinkButton';
import { Footer } from '../components/Footer';
import { ImageHeader } from '../components/ImageHeader';
import { NavigationBar } from '../components/NavigationBar';
import Paragraph from '../components/Paragraph';
import { REGISTRATION_URL } from '../constants/urls';

const MarketPage = () => {
  const WIDTH = 720;
  const HEIGHT = 900;
  const RESPONSIVE_WIDTH = useBreakpointValue({
    base: WIDTH / 3,
    md: WIDTH / 2,
    lg: WIDTH / 1.5,
  });
  const RESPONSIVE_HEIGHT = useBreakpointValue({
    base: HEIGHT / 3,
    md: HEIGHT / 2,
    lg: HEIGHT / 1.5,
  });
  const BACKGROUND_SOURCE = '/images/foellinger_audience_dark_bkg.webp';
  const MARKET_MAP_SOURCE = '/images/small_business_market_map.jpg';
  const BUSINESSES_SOURCE = '/images/small_businesses.jpg';
  const BUSINESSES_LIST = [
    { tag: '@lycheemoon.co', url: 'https://www.instagram.com/lycheemoon.co/' },
    { tag: '@abkdco', url: 'https://www.instagram.com/abkdco/' },
    { tag: '@ateatkuyako', url: 'https://www.instagram.com/ateatkuyako/' },
    { tag: '@psa_fact', url: 'https://www.instagram.com/psa_fact/' },
    { tag: '@muijistudio', url: 'https://www.instagram.com/muijistudio/' },
    {
      tag: '@thepusofoundation',
      url: 'https://www.instagram.com/thepusofoundation/',
    },
    { tag: '@ariannaua', url: 'https://www.instagram.com/ariannaua/' },
  ];

  return (
    <>
      <Head>
        <title>Small Business Market - FACT 2022</title>
      </Head>
      <NavigationBar />
      <Flex textAlign="center" flexDir="column" alignItems="center" pb="2rem">
        <ImageHeader
          title="Small Business Market"
          subtitle="Support small businesses!"
          imgSrc={BACKGROUND_SOURCE}
        />
        <Divider
          color="factturquoise"
          borderColor="factturquoise"
          borderWidth="1px"
          w={{ base: '50%', md: '30%' }}
          mb="2rem"
        />

        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5}>
          <Image
            src={MARKET_MAP_SOURCE}
            width={RESPONSIVE_WIDTH}
            height={RESPONSIVE_HEIGHT}
            placeholder="blur"
            blurDataURL={MARKET_MAP_SOURCE}
            alt="FACT 2022 Small Business Market Map"
            style={{ borderRadius: '10px', objectFit: 'cover', background: 'rgba(0, 0, 0, 0.0)'  }}
          />
          <Image
            src={BUSINESSES_SOURCE}
            width={RESPONSIVE_WIDTH}
            height={RESPONSIVE_HEIGHT}
            placeholder="blur"
            blurDataURL={BUSINESSES_SOURCE}
            alt="FACT 2022 Small Business Market Map"
            style={{ borderRadius: '10px', objectFit: 'cover', background: 'rgba(0, 0, 0, 0.0)'  }}
          />
        </SimpleGrid>

        {/* Text */}
        <Flex
          flexDir="column"
          alignItems="stretch"
          mx={{ base: '5%', md: '10%', lg: '20%' }}
          my="2rem"
        >
          <Paragraph>
            Come out and support these wonderful and talented small businesses!
            The <strong>Small Business Market</strong> will be happening on
            Saturday, November 12th, 2022 from 3:30PM - 5:30PM at the University
            YMCA Latzer Hall and Murphy Lounge. Be there or be square!
          </Paragraph>
          <Paragraph>
            <strong>Address</strong>:{' '}
            <Link
              href="https://g.page/University-Y?share"
              textDecor="underline"
              isExternal
            >
              University YMCA, Latzer Hall & Murphy Lounge (1001 S Wright St,
              Champaign, IL 61820)
            </Link>
          </Paragraph>
          <Paragraph>The small businesses featured are:</Paragraph>
          <UnorderedList
            fontSize={{ base: '1rem', md: '1.2rem' }}
            textAlign="left"
            mt="2rem"
            fontWeight="normal"
            color="gray.600"
            px={{ base: '1.2rem', md: 0 }}
          >
            {BUSINESSES_LIST.map(({ tag, url }) => (
              <ListItem key={url}>
                <Link isExternal href={url} textDecor="underline">
                  {tag}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
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

export default MarketPage;
