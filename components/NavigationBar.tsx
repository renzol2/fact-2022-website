import { Box, Flex, Link as ChakraLink, Spacer } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import InternalLink from './InternalLink';
import MobileNavigation from './MobileNavigation';

export const NavigationBar = () => {
  const IMAGE_LENGTH = 70;
  const IMAGE_SOURCE = '/images/fact_logo.webp';
  // TODO: add these in when making other pages
  const NAVIGATION = [
    {
      text: 'About',
      path: '/about',
    },
    {
      text: 'Agenda',
      path: '/agenda',
    },
    {
      text: 'Team',
      path: '/team',
    },
    {
      text: 'Map',
      path: '/map',
    },
    {
      text: 'Workshops',
      path: '/workshops',
    },
    {
      text: 'FAQ',
      path: '/faq',
    },
    {
      text: 'Donate',
      path: '/donate',
    },
  ];
  return (
    <Flex
      w="100%"
      px={{ base: '1rem', sm: '2rem', md: '3rem', lg: '5rem' }}
      py="0.2rem"
      bgColor="backgroundgray"
      alignItems="center"
    >
      <ChakraLink as={Link} href="/" passHref>
          <Image
            src={IMAGE_SOURCE}
            width={IMAGE_LENGTH}
            height={IMAGE_LENGTH}
            alt="FACT 2022 Logo"
          />
      </ChakraLink>
      <Box display={{ base: 'none', lg: 'block' }} ml="0.5rem">
        {NAVIGATION.map(({ text, path }) => (
          <InternalLink
            key={path}
            path={path}
            text={text}
            props={{ mx: '1.2rem', fontWeight: 'normal', fontSize: 'md' }}
          />
        ))}
      </Box>
      <Spacer />
      <MobileNavigation />
    </Flex>
  );
};
