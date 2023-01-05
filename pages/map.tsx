import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { Footer } from '../components/Footer';
import InternalLink from '../components/InternalLink';
import { NavigationBar } from '../components/NavigationBar';

const MapPage = () => {
  const FACT_MAP_MAIN_QUAD_SOURCE = '/images/fact_map_main_quad.png';
  const FACT_MAP_SOUTH_QUAD_SOURCE = '/images/fact_map_south_quad.png';
  const FACT_MAP_WIDTH = 1421;
  const FACT_MAP_HEIGHT = 798;
  return (
    <>
      <Head>
        <title>Map - FACT 2022</title>
      </Head>
      <NavigationBar />
      <Flex textAlign="center" flexDir="column" alignItems="center" py="2rem">
        <Heading
          fontSize={{ base: '10vw', md: '6vw' }}
          color="darkturquoise"
          fontWeight="black"
        >
          Map
        </Heading>
        <Divider
          color="factturquoise"
          borderColor="factturquoise"
          borderWidth="1px"
          w={{ base: '50%', md: '30%' }}
          mt="1rem"
          mb="3rem"
        />
        <InternalLink
          text="View FACT 2022 Map as PDF"
          path="/files/FACT_2022_Map.pdf"
          props={{
            mb: '2rem',
            fontSize: '2xl',
            fontWeight: 'bold',
            color: 'factturquoise',
          }}
        />
        <Box mx="1rem">
          <Image
            src={FACT_MAP_MAIN_QUAD_SOURCE}
            width={FACT_MAP_WIDTH}
            height={FACT_MAP_HEIGHT}
            placeholder="blur"
            blurDataURL={FACT_MAP_MAIN_QUAD_SOURCE}
            alt="Map of the main quad for FACT 2022 Conference"
            style={{ borderRadius: '10px', objectFit: 'cover', background: 'rgba(0, 0, 0, 0.0)'  }}
          />
          <Image
            src={FACT_MAP_SOUTH_QUAD_SOURCE}
            width={FACT_MAP_WIDTH}
            height={FACT_MAP_HEIGHT}
            placeholder="blur"
            blurDataURL={FACT_MAP_SOUTH_QUAD_SOURCE}
            alt="Map of the south quad for FACT 2022 Conference"
            style={{ borderRadius: '10px', objectFit: 'cover', background: 'rgba(0, 0, 0, 0.0)'  }}
          />
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default MapPage;
