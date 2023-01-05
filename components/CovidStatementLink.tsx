import { Button, Heading, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

const CovidStatementLink = () => {
  return (
    <>
      <Heading
        mx={{ base: '1rem', sm: '0' }}
        fontWeight="normal"
        mt="5rem"
        mb="2rem"
        textAlign="center"
      >
        <Text color="darkturquoise" fontWeight="black">
          IMPORTANT:
        </Text>{' '}
        Read our COVID-19 Statement
      </Heading>
      <NextLink href="/covid-19-statement" passHref>
        <Button
          color="white"
          bg="darkturquoise"
          fontWeight="bold"
          size="lg"
          mt="1rem"
          mb="1rem"
          p="2rem"
          mx="2rem"
          width="18rem"
          height="3.5rem"
          boxShadow="md"
          _hover={{ bg: 'factturquoise', textDecor: 'none' }}
        >
          COVID-19 Statement
        </Button>
      </NextLink>
    </>
  );
};

export default CovidStatementLink;
