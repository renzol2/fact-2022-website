import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import { Footer } from '../components/Footer';
import { NavigationBar } from '../components/NavigationBar';
import { FACT_PACK } from '../constants/factPack';

const Team = () => {
  const CHAIR_IMAGE_WIDTH = 400;
  const CHAIR_IMAGE_HEIGHT = 600;
  const WIDTH = 1000;
  const HEIGHT = 600;
  const FACT_PACK_POST_SOURCE = '/images/fact_pack.webp';
  const FACT_PACK_CREWNECK_POST_SOURCE = '/images/fact_pack_crewnecks.webp';
  const FACT_PACK_POST_WIDTH = useBreakpointValue({
    base: WIDTH / 3,
    md: WIDTH / 2,
    lg: WIDTH,
  });
  const FACT_PACK_POST_HEIGHT = useBreakpointValue({
    base: HEIGHT / 3,
    md: HEIGHT / 2,
    lg: HEIGHT,
  });

  return (
    <>
      <Head>
        <title>Meet the Team - FACT 2022</title>
      </Head>
      <NavigationBar />
      <Flex
        textAlign="center"
        flexDir="column"
        alignItems="center"
        pt="2rem"
        pb="8rem"
      >
        <Heading
          fontSize={{ base: '10vw', md: '6vw' }}
          color="darkturquoise"
          fontWeight="black"
        >
          Meet the Team
        </Heading>

        <Divider
          color="factturquoise"
          borderColor="factturquoise"
          borderWidth="1px"
          w="25%"
        />
        <Text
          color="factturquoise"
          fontWeight="light"
          fontSize={{ base: '5vw', md: '2vw' }}
          mb="2rem"
        >
          FACT Pack 2022
        </Text>

        {/* Group photo */}
        <Image
          src={FACT_PACK_POST_SOURCE}
          width={FACT_PACK_POST_WIDTH}
          height={FACT_PACK_POST_HEIGHT}
          placeholder="blur"
          blurDataURL={FACT_PACK_POST_SOURCE}
          alt="FACT PACK"
          style={{
            borderRadius: '10px',
            objectFit: 'cover',
            background: 'rgba(0, 0, 0, 0.0)',
          }}
        />

        <Divider
          color="factturquoise"
          borderColor="factturquoise"
          borderWidth="1px"
          w="25%"
          my="2rem"
        />

        {/* Bios */}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing="5rem"
          px={{ base: '2rem', sm: '4rem', md: '5rem', lg: '9rem' }}
          my="4rem"
        >
          {FACT_PACK.map((chair) => (
            <a>
              <NextLink href={`/team/${chair.slug}`} key={chair.slug}>
                <Box key={chair.imageSource}>
                  <Image
                    src={chair.imageSource}
                    width={CHAIR_IMAGE_WIDTH}
                    height={CHAIR_IMAGE_HEIGHT}
                    placeholder="blur"
                    blurDataURL={chair.imageSource}
                    alt={chair.chairName}
                    style={{
                      borderRadius: '10px',
                      objectFit: 'cover',
                      background: 'rgba(0, 0, 0, 0.0)',
                    }}
                  />
                  <Text
                    fontSize={{ base: '2.5rem', md: '2rem' }}
                    lineHeight="10"
                    fontWeight="black"
                    color="factturquoise"
                    my="0.5rem"
                  >
                    {chair.chairName}
                  </Text>
                  <Text fontWeight="normal">{`${chair.cochairs[0].name} & ${chair.cochairs[1].name}`}</Text>
                </Box>
              </NextLink>
            </a>
          ))}
        </SimpleGrid>

        {/* Group photo */}
        <Image
          src={FACT_PACK_CREWNECK_POST_SOURCE}
          width={FACT_PACK_POST_WIDTH}
          height={FACT_PACK_POST_HEIGHT}
          placeholder="blur"
          blurDataURL={FACT_PACK_CREWNECK_POST_SOURCE}
          alt="FACT PACK with crewnecks!"
          style={{
            borderRadius: '10px',
            objectFit: 'cover',
            background: 'rgba(0, 0, 0, 0.0)',
          }}
        />
      </Flex>
      <Footer />
    </>
  );
};

export default Team;
