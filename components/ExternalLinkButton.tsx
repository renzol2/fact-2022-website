import { Button, ButtonProps } from '@chakra-ui/react';

interface ExternalLinkButtonProps {
  text: string;
  path: string;
  color?: string;
  props?: ButtonProps;
}

const ExternalLinkButton = ({
  text,
  path,
  color,
  props,
}: ExternalLinkButtonProps) => {
  return (
    <a href={path}>
      <Button
        color="white"
        bg="darkturquoise"
        fontWeight="bold"
        size="lg"
        mt="1rem"
        mb="1rem"
        mx="2rem"
        width="18rem"
        height="3.5rem"
        boxShadow="md"
        _hover={{ bg: 'factturquoise', textDecor: 'none' }}
        {...props}
      >
        {text}
      </Button>
    </a>
  );
};

export default ExternalLinkButton;
