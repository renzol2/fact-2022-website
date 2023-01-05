import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Fade,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Footer } from '../../components/Footer';
import { NavigationBar } from '../../components/NavigationBar';
import { WORKSHOPS } from '../../constants/workshops';
import { useEffect } from 'react';
import Script from 'next/script';
import ExternalLinkButton from '../../components/ExternalLinkButton';
import { REGISTRATION_URL } from '../../constants/urls';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticProps } from 'next';

interface IImage {
  source: string;
  alt: string;
  width: number;
  height: number;
}
interface Workshop {
  title: string;
  description: Array<string>;
  session: string;
  location: string;
  slug: string;
  facilitator: {
    name: string;
    images: Array<IImage>;
    bio: Array<string>;
    cofacilitators: Array<string> | undefined;
  };
}

interface WorkshopPageProps {
  workshop: Workshop;
}

const WorkshopPage = ({ workshop }: WorkshopPageProps) => {
  const IMAGE_LENGTH = 400;
  const pageTitle = `${workshop.title} - FACT 2022`;
  const getTime = (session: string) => {
    if (session.includes('1')) return '10:10 AM - 11:20 AM';
    else if (session.includes('2')) return '11:30 AM - 12:40 PM';
    else return '1:45 PM - 3:00 PM';
  };
  const router = useRouter();
  useEffect(() => {
    router.beforePopState((state) => {
      state.options.scroll = false;
      return true;
    });
  }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <Script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`,
          }}
        />
      </Head>
      <NavigationBar />
      <Fade in>
        <Flex textAlign="center" flexDir="column" alignItems="center" py="2rem">
          {/* Breadcrumb */}
          <Breadcrumb fontWeight="thin" color="factturquoise" my="1rem" px={2}>
            <BreadcrumbItem>
              <Link href={`/workshops`} scroll={false}>
                <BreadcrumbLink>Workshops</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">{workshop.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          {/* Workshop title */}
          <Heading
            fontSize={{ base: '6vw', md: '3vw' }}
            color="darkturquoise"
            fontWeight="black"
            as="h1"
            mx={{ base: '1rem', md: '10%' }}
          >
            {workshop.title}
          </Heading>
          <Divider
            color="factturquoise"
            borderColor="factturquoise"
            borderWidth="1px"
            w="50%"
            my="1rem"
          />

          {/* Text */}
          <Flex
            mx={{ base: '5%', md: '10%', lg: '20%' }}
            my="2rem"
            flexDir="column"
            alignItems="center"
          >
            <Text
              as="p"
              align="center"
              fontSize={{ base: '1rem', md: '1.2rem' }}
              textAlign="center"
              mt="1rem"
              fontWeight="bold"
            >
              {workshop.session}
            </Text>
            <Text
              as="p"
              align="center"
              fontSize={{ base: '1rem', md: '1.2rem' }}
              textAlign="left"
            >
              {workshop.location}
            </Text>
            <Text
              as="p"
              align="center"
              fontSize={{ base: '1rem', md: '1.2rem' }}
              textAlign="left"
            >
              {getTime(workshop.session)}
            </Text>
            {/* Description */}
            {workshop.description.map((paragraph, i) => (
              <Text
                as="p"
                alignSelf="start"
                fontWeight="normal"
                color="gray.600"
                fontSize={{ base: '1rem', md: '1.2rem' }}
                textAlign="left"
                mt="1rem"
                key={i}
              >
                {paragraph}
              </Text>
            ))}
          </Flex>

          <Heading
            fontSize={{ base: '5vw', md: '2vw' }}
            fontWeight="black"
            my="2rem"
          >
            About the Facilitator
          </Heading>

          {/* Facilitator's name */}
          <Flex
            mx={{ base: '5%', md: '10%', lg: '20%' }}
            my="2rem"
            flexDir="column"
            alignItems="center"
          >
            <Heading
              fontSize={{ base: '5vw', md: '2vw' }}
              color="factturquoise"
              fontWeight="bold"
            >
              {workshop.facilitator.name}
            </Heading>
            {workshop.facilitator.images.length > 0 && (
              <VStack
                spacing="1rem"
                mx={{ base: '0.5rem', md: '2rem' }}
                pt="2rem"
              >
                {workshop.facilitator.images.map(
                  ({ source, alt, width, height }) => (
                    <Box key={source}>
                      <Image
                        src={source}
                        width={
                          (width / (width < height ? width : height)) *
                          IMAGE_LENGTH
                        }
                        height={
                          (height / (width < height ? width : height)) *
                          IMAGE_LENGTH
                        }
                        placeholder="blur"
                        blurDataURL={source}
                        alt={alt}
                        style={{ borderRadius: '10px', objectFit: 'cover', background: 'rgba(0, 0, 0, 0.0)'  }}
                      />
                    </Box>
                  )
                )}
              </VStack>
            )}
          </Flex>

          {/* Text */}
          <Flex
            mx={{ base: '5%', md: '10%', lg: '20%' }}
            my="2rem"
            flexDir="column"
            alignItems="center"
          >
            {workshop.facilitator.bio.map((paragraph, i) => (
              <Text
                as="p"
                alignSelf="start"
                fontWeight="normal"
                color="gray.600"
                fontSize={{ base: '1rem', md: '1.2rem' }}
                textAlign="left"
                mt="1rem"
                key={i}
              >
                {paragraph}
              </Text>
            ))}
            {workshop.facilitator.cofacilitators !== undefined && (
              <Box my="2rem">
                <Text
                  alignSelf="start"
                  fontWeight="bold"
                  color="gray.800"
                  textAlign="center"
                  fontSize={{ base: '1.5rem', md: '1.9rem' }}
                  mt="1rem"
                >
                  Cofacilitators
                </Text>
                <VStack>
                  {workshop.facilitator.cofacilitators.map((cofacilitator) => (
                    <Text
                      fontWeight="normal"
                      color="gray.700"
                      textAlign="center"
                      fontSize={{ base: '1rem', md: '1.2rem' }}
                      mt="1rem"
                      key={cofacilitator}
                    >
                      {cofacilitator}
                    </Text>
                  ))}
                </VStack>
              </Box>
            )}
          </Flex>
          <ExternalLinkButton
            text="Register for FACT!"
            path={REGISTRATION_URL}
          />
          {/* Breadcrumb */}
          <Breadcrumb fontWeight="thin" color="factturquoise" my="2rem" px={2}>
            <BreadcrumbItem>
              <Link href={`/workshops`} scroll={false}>
                <BreadcrumbLink>Workshops</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">{workshop.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
      </Fade>
      <Footer />
    </>
  );
};

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  const workshop = WORKSHOPS.find((workshop) => workshop.slug === slug);

  return {
    props: { workshop: workshop },
  };
}

export async function getStaticPaths() {
  const workshops = WORKSHOPS;
  const paths = workshops.map((workshop) => ({
    params: { slug: workshop.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default WorkshopPage;
