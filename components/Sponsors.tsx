import {
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';

const Sponsors = () => {
  const IMAGE_LENGTH = useBreakpointValue({
    base: 200,
    md: 300,
  });
  const SPONSOR_IMAGE_SOURCES = [
    {
      source: '/images/sponsors/asian_student_achievement.jpg',
      alt: 'Asian Student Achievement',
    },
    {
      source: '/images/sponsors/mafa.jpg',
      alt: 'Midwest Association of Filipino Americans',
    },
    {
      source: '/images/sponsors/mcb.png',
      alt: 'UIUC Molecular and Cellular Biology',
    },
    {
      source: '/images/sponsors/naffaa.jpg',
      alt: 'National Federation of Filipino American Associations',
    },
    { source: '/images/sponsors/nawc.png', alt: 'New American Welcome Center' },
    { source: '/images/sponsors/ymca.png', alt: 'University YMCA' },
  ];
  const DONORS = [
    'Ernest Cabrera',
    'Janet Masucol',
    'Clinton Wolf',
    'Gia Joyce Fernandez',
    'Angela Serrano',
    'Gephine Fernandez-Tran',
    'Gendell Fernandez',
    'Allison and AJ',
    'Sheila Parinas',
    'Erika Saligan',
    'Michael Reyes',
  ];

  return (
    <Flex
      w="full"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      bg="factturquoise"
      py="5rem"
    >
      <Heading
        fontSize={{ base: '8vw', md: '4vw' }}
        color="factyellow"
        fontWeight="black"
        textAlign="center"
        textShadow="0 0 5px black"
      >
        Sponsors
      </Heading>
      <Divider
        color="factyellow"
        borderColor="factyellow"
        borderWidth="1px"
        w="25%"
        mt="1rem"
        mb="3rem"
      />
      <SimpleGrid
        columns={{ base: 2, lg: 3 }}
        spacing={5}
        px={{ base: '1rem', md: '2rem' }}
        mt="2rem"
        mb="5rem"
      >
        {SPONSOR_IMAGE_SOURCES.map(({ source, alt }) => (
          <Image
            src={source}
            width={IMAGE_LENGTH}
            height={IMAGE_LENGTH}
            placeholder="blur"
            blurDataURL={source}
            alt={alt}
            style={{ borderRadius: '10px', objectFit: 'cover', background: 'rgba(0, 0, 0, 0.0)'  }}
            key={source}
          />
        ))}
      </SimpleGrid>

      {/* Donors */}
      <Heading
        fontSize={{ base: '8vw', md: '3vw' }}
        color="factyellow"
        fontWeight="black"
        textAlign="center"
        textShadow="0 0 5px black"
        my="1rem"
      >
        Donors
      </Heading>
      <Text
        fontSize="xl"
        color="gray.200"
        maxW={{ base: '90%', sm: '75%', md: '60%' }}
        my="1rem"
      >
        Thank you to our donors for your generous contributions! We could not
        have put on this conference on without you all - thank you for your
        constant support!
      </Text>

      <SimpleGrid
        minChildWidth="30%"
        spacing={8}
        maxW={{ base: '90%', sm: '75%', md: '60%' }}
        py="2rem"
      >
        {DONORS.map((donor) => (
          <Text
            fontWeight="bold"
            fontSize={{ base: 'xl', md: '2xl' }}
            color="gray.200"
            textAlign="center"
            key={donor}
          >
            {donor}
          </Text>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Sponsors;
