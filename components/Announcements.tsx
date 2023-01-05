import {
  Flex,
  Text,
  Heading,
  Divider,
  Box,
} from '@chakra-ui/react';
import Link from 'next/link';
import ANNOUNCEMENTS from '../constants/announcements';

const Announcements = () => {
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
        Announcements
      </Heading>
      <Divider
        color="factyellow"
        borderColor="factyellow"
        borderWidth="1px"
        w="25%"
        mt="1rem"
        mb="3rem"
      />
      <Flex flexDir="column" alignItems="stretch" px="2rem">
        {ANNOUNCEMENTS.map((announcement) => (
          <Link
            href={`/${announcement.slug}`}
            key={announcement.title}
          >
              <Box
                as="article"
                bgColor="#66A0A3"
                w="inherit"
                p={{ base: '2rem', md: '3rem' }}
                minW="60vw"
                maxW={{ base: '95vw', md: '60vw' }}
                boxShadow="lg"
                textColor="gray.50"
                borderRadius="10px"
                my="1rem"
              >
                <Text>{announcement.date}</Text>
                <Heading fontWeight="black" mb="1rem">
                  {announcement.title}
                </Heading>
                <Text> {announcement.description} </Text>
              </Box>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Announcements;
