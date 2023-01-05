import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link as ChakraLink,
  Button,
  Flex,
  MenuDivider,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  REGISTRATION_URL,
  Y_DONATION_URL,
} from '../constants/urls';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const MobileNavigation = ({ showDropdownOnMobile = true }) => {
  return (
    <>
      {/* Mobile */}
      {showDropdownOnMobile && (
        <Box display={{ base: 'block', lg: 'none' }}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              borderRadius={10}
              bgColor="blackAlpha.300"
              id="navigation-menu"
              aria-label="Navigation Menu"
            />
            <MenuList>
              {/* Internal links */}
              <NextLink href="/about">
                <MenuItem>About</MenuItem>
              </NextLink>
              <NextLink href="/team">
                <MenuItem>Team</MenuItem>
              </NextLink>
              <NextLink href="/agenda">
                <MenuItem>Agenda</MenuItem>
              </NextLink>
              <NextLink href="/map">
                <MenuItem>Map</MenuItem>
              </NextLink>
              <NextLink href="/workshops">
                <MenuItem>Workshops</MenuItem>
              </NextLink>
              <NextLink href="/faq">
                <MenuItem>FAQ</MenuItem>
              </NextLink>
              <NextLink href="/covid-19-statement">
                <MenuItem>COVID-19 Statement</MenuItem>
              </NextLink>
              <MenuDivider />

              {/* External links */}
              <ChakraLink href={FACEBOOK_URL} isExternal>
                <MenuItem>Facebook</MenuItem>
              </ChakraLink>
              <ChakraLink href={INSTAGRAM_URL} isExternal>
                <MenuItem>Instagram</MenuItem>
              </ChakraLink>
              <ChakraLink href={Y_DONATION_URL} isExternal>
                <MenuItem>Donate</MenuItem>
              </ChakraLink>
            </MenuList>
          </Menu>
        </Box>
      )}

      {/* Desktop */}
      <Box display={{ base: 'none', lg: 'block' }}>
        <Flex flexDir="row" alignItems="center" gap="1rem">
          <ChakraLink isExternal href={FACEBOOK_URL}>
            <IconButton
              aria-label="Facebook"
              colorScheme="facebook"
              variant="ghost"
              icon={<FaFacebook />}
              boxShadow="none"
              size="lg"
            />
          </ChakraLink>
          <ChakraLink isExternal href={INSTAGRAM_URL}>
            <IconButton
              aria-label="Instagram"
              colorScheme="pink"
              variant="ghost"
              icon={<FaInstagram />}
              boxShadow="none"
              size="lg"
            />
          </ChakraLink>
          <a href={REGISTRATION_URL}>
            <Button
              color="white"
              bg="darkturquoise"
              fontWeight="bold"
              size="md"
              _hover={{ bgColor: 'factturquoise' }}
            >
              Register
            </Button>
          </a>
        </Flex>
      </Box>
    </>
  );
};

export default MobileNavigation;
