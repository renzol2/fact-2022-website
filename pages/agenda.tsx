import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Divider,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

import Head from 'next/head';
import ExternalLinkButton from '../components/ExternalLinkButton';
import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { REGISTRATION_URL } from '../constants/urls';
import { FRIDAY_AGENDA, SATURDAY_AGENDA } from '../constants/agenda';
import InternalLink from '../components/InternalLink';
import { ImageHeader } from '../components/ImageHeader';

const Agenda = () => {
  const BACKGROUND_SOURCE = '/images/fact_background.webp';
  return (
    <>
      <Head>
        <title>Agenda - FACT 2022</title>
      </Head>
      <NavigationBar />
      <Flex textAlign="center" flexDir="column" alignItems="center" pb="2rem">
        <ImageHeader
          title="Agenda"
          subtitle="KAUNLARAN: ENRICH OUR GROWTH"
          imgSrc={BACKGROUND_SOURCE}
        />

        {/* Text */}
        <Flex
          flexDir="column"
          alignItems="left"
          textAlign="left"
          mx={{ base: '5%', md: '10%', lg: '20%' }}
          my="2rem"
        >
          <Divider
            color="factturquoise"
            borderColor="factturquoise"
            borderWidth="1px"
            w={{ base: '70%', md: '50%' }}
            mt="1rem"
            mb="1rem"
          />
          {/* 11/11 */}
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="black"
            mb="0.5rem"
            color="darkturquoise"
          >
            Friday, November 11
          </Heading>

          {FRIDAY_AGENDA.map((item) => (
            <>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="bold"
                mt="2.5rem"
                mb="0.5rem"
                color="factturquoise"
              >
                {item.name}
              </Heading>

              <Text fontSize="xl" fontWeight="normal" color="gray.600">
                {item.time}
              </Text>

              {item.location && (
                <Text fontSize="lg" fontWeight="normal" color="gray.500">
                  {item.location}
                </Text>
              )}
              {item.internalLinks &&
                item.internalLinks.map(({ href, text }) => (
                  <InternalLink
                    key={href}
                    path={href}
                    text={text}
                    props={{
                      fontSize: 'lg',
                      fontWeight: 'normal',
                      color: 'gray.500',
                      textDecor: 'underline',
                    }}
                  />
                ))}
            </>
          ))}

          <Divider
            color="factturquoise"
            borderColor="factturquoise"
            borderWidth="1px"
            w={{ base: '70%', md: '50%' }}
            mt="1rem"
            mb="1rem"
          />
          <Alert status="info" my="2rem">
            <AlertIcon />
            <AlertDescription>
              Workshops in Sessions 1 & 2 have been pushed back by 20 minutes. The
              schedule on this page has been updated to reflect the new times.
              Note that Session 3 workshops begin at the originally schedule time. Thank you
              for your patience!
            </AlertDescription>
          </Alert>
          {/* 11/12 */}
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="black"
            mb="0.5rem"
            color="darkturquoise"
          >
            Saturday, November 12
          </Heading>

          {SATURDAY_AGENDA.map((item) => (
            <>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="bold"
                mt="2.5rem"
                mb="0.5rem"
                color="factturquoise"
              >
                {item.name}
              </Heading>

              <Text fontSize="xl" fontWeight="normal" color="gray.600">
                {item.time}
              </Text>

              {item.location && (
                <Text fontSize="lg" fontWeight="normal" color="gray.500">
                  {item.location}
                </Text>
              )}
              {item.internalLinks &&
                item.internalLinks.map(({ href, text }) => (
                  <InternalLink
                    key={href}
                    path={href}
                    text={text}
                    props={{
                      fontSize: 'lg',
                      fontWeight: 'normal',
                      color: 'gray.500',
                      textDecor: 'underline',
                    }}
                  />
                ))}
            </>
          ))}
        </Flex>
        <ExternalLinkButton text="Register for FACT!" path={REGISTRATION_URL} />
      </Flex>
      <Footer />
    </>
  );
};

export default Agenda;
