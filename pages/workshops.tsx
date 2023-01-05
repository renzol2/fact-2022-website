import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useToast,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { ImageHeader } from '../components/ImageHeader';
import { NavigationBar } from '../components/NavigationBar';
import { WORKSHOPS } from '../constants/workshops';

const WorkshopsPage = () => {
  const BACKGROUND_SOURCE = '/images/union_dark_bkg_bw.webp';
  const ALL_SESSIONS_QUERY = 'All Sessions';
  const [searchQuery, setSearchQuery] = useState('');
  const [sessionQuery, setSessionQuery] = useState<string | null>(ALL_SESSIONS_QUERY);
  const router = useRouter();
  const toast = useToast();
  useEffect(() => {
    router.beforePopState((state) => {
      state.options.scroll = false;
      return true;
    });
  }, []);

  return (
    <>
      <Head>
        <title>Workshops - FACT 2022</title>
        <Script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`,
          }}
        />
      </Head>
      <NavigationBar />
      <Flex textAlign="center" flexDir="column" alignItems="center" pb="2rem">
        <ImageHeader title="Workshops" imgSrc={BACKGROUND_SOURCE} />

        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'stretch', md: 'center' }}
          mx={{ base: '5%', md: '15%', lg: '30%' }}
          minW={{ base: 0, md: '40%' }}
          mt="2rem"
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="search"
              placeholder="Search workshops"
              onChange={(e) => {
                setSearchQuery(e.target.value.toLowerCase().trim());
              }}
            />
          </InputGroup>

          <Menu>
            <MenuButton
              as={Button}
              my="1rem"
              pl={{ base: 0, md: '1.5rem' }}
              pr={{ base: 0, md: '3.2rem' }}
              ml={{ base: 0, md: '0.5rem' }}
            >
              {sessionQuery === ALL_SESSIONS_QUERY
                ? 'Filter by session'
                : sessionQuery?.substring(0, 9)}
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={(_) => {
                  setSessionQuery(ALL_SESSIONS_QUERY);
                  toast({
                    title: 'Viewing all workshops.',
                    position: 'bottom-right',
                    duration: 5000,
                    isClosable: true,
                  });
                }}
              >
                All Sessions
              </MenuItem>
              <MenuItem
                onClick={(e) => {
                  const target = e.currentTarget;
                  setSessionQuery(target.textContent);
                  toast({
                    title: 'Viewing workshops from Session 1.',
                    position: 'bottom-right',
                    duration: 5000,
                    isClosable: true,
                  });
                }}
              >
                Session 1 (Past)
              </MenuItem>
              <MenuItem
                onClick={(e) => {
                  setSessionQuery(e.currentTarget.textContent);
                  toast({
                    title: 'Viewing workshops from Session 2.',
                    position: 'bottom-right',
                    duration: 5000,
                    isClosable: true,
                  });
                }}
              >
                Session 2 (Present)
              </MenuItem>
              <MenuItem
                onClick={(e) => {
                  setSessionQuery(e.currentTarget.textContent);
                  toast({
                    title: 'Viewing workshops from Session 3.',
                    position: 'bottom-right',
                    duration: 5000,
                    isClosable: true,
                  });
                }}
              >
                Session 3 (Future)
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        {/* Workshops */}
        <Flex
          flexDir="column"
          alignItems="stretch"
          px={{ base: '2rem', sm: '3rem', md: '4rem', lg: '18%' }}
          my="3rem"
        >
          {WORKSHOPS.sort(
            (w1, w2) => {
              const id1 = w1.session.at(8);
              const id2 = w2.session.at(8);
              return parseInt(id1 === undefined ? '0' : id1) - parseInt(id2 === undefined ? '0' : id2);
            }
          )
            .filter(
              (workshop) =>
                (workshop.title.toLowerCase().includes(searchQuery) ||
                  workshop.facilitator.name
                    .toLowerCase()
                    .includes(searchQuery) ||
                  workshop.location.toLowerCase().includes(searchQuery)) &&
                (workshop.session.includes(sessionQuery === null ? '' : sessionQuery) ||
                  sessionQuery === ALL_SESSIONS_QUERY)
            )
            .map((workshop) => (
              <a>
                <Link href={`/workshops/${workshop.slug}`} key={workshop.slug}>
                  <Box
                    bgColor="orange.50"
                    boxShadow="md"
                    py="2rem"
                    px="2rem"
                    my="1.5rem"
                    textAlign="left"
                    borderRadius="10px"
                    _hover={{
                      boxShadow: 'lg',
                    }}
                    alignSelf="stretch"
                    minW={{ base: '80vw', lg: '63vw' }}
                  >
                    {/* Session */}
                    <Text
                      fontSize="xl"
                      fontWeight="normal"
                      color="factturquoise"
                    >
                      {workshop.session}
                    </Text>

                    {/* Workshop title */}
                    <Heading
                      as="h2"
                      fontSize={{ base: '2xl', md: '3xl' }}
                      fontWeight="black"
                      mb="0.5rem"
                      color="darkturquoise"
                    >
                      {workshop.title}
                    </Heading>

                    {/* Facilitator name */}
                    <Text
                      fontSize="xl"
                      fontWeight="black"
                      color="gray.600"
                      mb="0.5rem"
                    >
                      {workshop.facilitator.name}
                    </Text>

                    {/* Location */}
                    <Text fontSize="lg" color="gray.500">
                      {workshop.location}
                    </Text>
                  </Box>
                </Link>
              </a>
            ))}
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default WorkshopsPage;
