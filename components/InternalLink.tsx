import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import NextLink from 'next/link';

interface InternalLinkProps {
  text: string;
  path: string;
  props?: ChakraLinkProps;
}

export default function InternalLink({ text, path, props }: InternalLinkProps) {
  return (
    <ChakraLink
      key={path}
      href={path}
      as={NextLink}
      textDecoration="none"
      _hover={{
        color: 'gray',
        textDecoration: 'underline',
      }}
      width="auto"
      {...props}
    >
      {text}
    </ChakraLink>
  );
}
