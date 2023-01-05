import { Flex, Heading, Text } from '@chakra-ui/react';

interface ImageHeaderProps {
  imgSrc: string;
  title: string;
  subtitle?: string | undefined;
}

export const ImageHeader = ({ imgSrc, title, subtitle }: ImageHeaderProps) => {
  return (
    <Flex
      w="100%"
      backgroundImage={imgSrc}
      backgroundColor="black"
      backgroundSize="cover"
      backgroundPosition="center center"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      py="5rem"
      mb="2rem"
    >
      <Flex flexDir="column" width={{ base: '90%', md: '60%' }}>
        <Heading
          fontSize={{ base: '12vw', md: '8vw' }}
          color="factyellow"
          fontWeight="black"
          textAlign="center"
          textShadow="0 0 5px black"
          as="h1"
        >
          {title}
        </Heading>
        <Text
          color="text"
          align="center"
          fontWeight="light"
          fontSize={{ base: '4vw', md: '2vw' }}
          mt="2rem"
        >
          {subtitle}
        </Text>
      </Flex>
    </Flex>
  );
};
