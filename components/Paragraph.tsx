import { Text } from '@chakra-ui/react';

const Paragraph = ({
  children,
  useTopMargin = true,
}: {
  children: React.ReactNode;
  useTopMargin?: boolean;
}) => (
  <Text
    as="p"
    align="center"
    fontSize={{ base: '1rem', md: '1.2rem' }}
    textAlign="left"
    mt={useTopMargin ? '2rem' : '0'}
    px={{ base: '1.2rem', md: 0 }}
    fontWeight="normal"
    color="gray.600"
  >
    {children}
  </Text>
);

export default Paragraph;
