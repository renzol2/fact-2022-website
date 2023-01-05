import { Flex, Link as ChakraLink, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import InternalLink from './InternalLink';

export const Footer = () => {
  const FACT_LOGO_LENGTH = 150;
  const FACT_LOGO_SOURCE = '/images/fact_logo.webp';

  const PSA_LOGO_LENGTH = 120;
  const PSA_LOGO_SOURCE = '/images/psa_logo_new.webp';

  return (
    <Flex
      as="footer"
      py="4rem"
      px="1rem"
      flexDir="column"
      alignItems="center"
      w="100%"
      bgColor="backgroundgray"
    >
      {/* Images */}
      <Flex flexDir={{ base: 'column', sm: 'row' }}>
        <Image
          style={{ objectFit: 'scale-down', background: 'rgba(0, 0, 0, 0.0)' }}
          src={PSA_LOGO_SOURCE}
          width={PSA_LOGO_LENGTH}
          height={PSA_LOGO_LENGTH}
          placeholder="blur"
          blurDataURL={PSA_LOGO_SOURCE}
          alt="PSA Logo"
        />
        <Image
          style={{ objectFit: 'scale-down', background: 'rgba(0, 0, 0, 0.0)' }}
          src={FACT_LOGO_SOURCE}
          width={FACT_LOGO_LENGTH}
          height={FACT_LOGO_LENGTH}
          placeholder="blur"
          blurDataURL={FACT_LOGO_SOURCE}
          alt="FACT 2022 Logo"
        />
      </Flex>

      {/* Navigation */}
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4 }}
        textAlign="center"
        my="1.5rem"
      >
        <InternalLink
          text="Home"
          path="/"
          props={{ fontWeight: 'bold', my: '0.5rem', mx: '1rem' }}
        />
        <InternalLink
          text="About"
          path="/about"
          props={{ fontWeight: 'bold', my: '0.5rem', mx: '1rem' }}
        />
        <InternalLink
          text="Agenda"
          path="/agenda"
          props={{ fontWeight: 'bold', my: '0.5rem', mx: '1rem' }}
        />
        <InternalLink
          text="Team"
          path="/team"
          props={{ fontWeight: 'bold', my: '0.5rem', mx: '1rem' }}
        />
        <InternalLink
          text="Map"
          path="/map"
          props={{ fontWeight: 'bold', my: '0.5rem', mx: '1rem' }}
        />
        <InternalLink
          text="Workshops"
          path="/workshops"
          props={{ fontWeight: 'bold', my: '0.5rem', mx: '1rem' }}
        />
        <InternalLink
          text="FAQ"
          path="/faq"
          props={{ fontWeight: 'bold', my: '0.5rem', mx: '1rem' }}
        />
        <InternalLink
          text="COVID-19"
          path="/covid-19-statement"
          props={{ fontWeight: 'bold', my: '0.5rem', mx: '1rem' }}
        />
      </SimpleGrid>

      {/* Copyright and PSA UIUC text */}
      <Text textAlign="center">
        <ChakraLink isExternal href="https://psauiuc.org/">
          Brought to you by the Philippine Student Association UIUC.
        </ChakraLink>
      </Text>
      <Text>Copyright © 2022 PSA UIUC</Text>
    </Flex>
  );
};
