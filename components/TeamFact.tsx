import { Flex, Text, Heading, Link as ChakraLink } from '@chakra-ui/react';
import Image from 'next/image';
import { TEAM_FACT_SIGNUP_URL } from '../constants/urls';

export const TeamFact = () => {
  const IMAGE_WIDTH = 966;
  const IMAGE_HEIGHT = 541;
  const IMAGE_SOURCE = '/images/team_fact.webp';

  return (
    <Flex
      w="full"
      flexDir={{ base: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      bg="factturquoise"
    >
      <Flex flex="1" px={{ base: '0rem', md: '4rem' }}>
        <Image
          src={IMAGE_SOURCE}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          placeholder="blur"
          blurDataURL={IMAGE_SOURCE}
          alt="Team Fact"
        />
      </Flex>

      <Flex
        flexDir="column"
        justifyContent="center"
        flex="1"
        px={{ base: '2rem', sm: '6rem' }}
        py={{ base: '0rem', md: '8rem' }}
      >
        <Heading
          fontSize={{ base: '9vw', sm: '6vw', md: '3vw' }}
          color="yellow"
          fontWeight="light"
          textAlign={'center'}
          pt={{ base: '2rem', md: '0rem' }}
          textShadow="0 0 1px black"
        >
          Be part of <b>Team FACT</b>!
        </Heading>

        <Text
          color="text"
          align="center"
          fontWeight="light"
          fontSize={{ base: '1rem', md: '1.2rem' }}
          textAlign="left"
          mt="1rem"
        >
          Each year, FACT is made possible by Team FACT, a team of volunteers
          headed by our Team FACT Managers. FACT would not be what it is today
          without our amazing volunteers!
        </Text>

        <Text
          color="text"
          align="center"
          fontWeight="light"
          fontSize={{ base: '1rem', md: '1.2rem' }}
          textAlign="left"
          mt="2rem"
          mb={{ base: '4rem', md: '0' }}
        >
          Interested in helping out and joining Team FACT?{' '}
          <ChakraLink
            isExternal
            fontWeight={'black'}
            href={TEAM_FACT_SIGNUP_URL}
          >
            Click here
          </ChakraLink>
        </Text>
      </Flex>
    </Flex>
  );
};
