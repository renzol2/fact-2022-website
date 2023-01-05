import { Flex, Text, Heading } from '@chakra-ui/react';
import { REGISTRATION_URL } from '../constants/urls';
import ExternalLinkButton from './ExternalLinkButton';

export const Hero = ({ title }: { title: string }) => {
  const BACKGROUND_SOURCE = '/images/fact_background.webp';

  return (
    <Flex
      w="100%"
      backgroundImage={BACKGROUND_SOURCE}
      backgroundColor="factturquoise"
      backgroundSize="cover"
      backgroundPosition="center center"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      px="3rem"
      py="5rem"
    >
      <Flex flexDir="column" width={{ base: '90%', md: '60%' }}>
        <Text
          color="text"
          align="center"
          fontWeight="light"
          fontSize={{ base: '4vw', md: '2vw' }}
          mt="2rem"
        >
          November 11-13
        </Text>

        <Heading
          fontSize={{ base: '12vw', md: '8vw' }}
          color="factyellow"
          fontWeight="black"
          textAlign="center"
          textShadow="0 0 5px black"
        >
          {title}
        </Heading>

        <Heading
          as="i"
          fontSize={{ base: '4vw', md: '3vw' }}
          color="factturquoise"
          fontWeight="normal"
          textAlign="center"
        >
          KAUNLARAN: ENRICH OUR GROWTH
        </Heading>

        <Text
          color="text"
          align="center"
          fontWeight="light"
          fontSize={{ base: '1.2rem', md: '1.5rem' }}
          my={3}
        >
          FACT is the largest student-led Filipino-American conference in the
          Midwest, promoting Filipino and Filipino-American culture through
          workshops, panels, and performances.
        </Text>

        <Text
          color="text"
          align="center"
          fontWeight="light"
          fontSize={{ base: '1.2rem', md: '1.5rem' }}
          my={3}
        >
          Held at the University of Illinois at Urbana-Champaign. Registration
          is <strong>OUT NOW</strong>!
        </Text>
      </Flex>
      <ExternalLinkButton
        text="Register for FACT!"
        path={REGISTRATION_URL}
        props={{ py: '1rem' }}
      />
    </Flex>
  );
};

Hero.defaultProps = {
  title: 'FACT 2022',
};
