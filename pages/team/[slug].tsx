import Head from 'next/head';
import { GetStaticProps } from 'next';
import Script from 'next/script';
import { NavigationBar } from '../../components/NavigationBar';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Fade,
  Flex,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

import Link from 'next/link';
import { FACT_PACK } from '../../constants/factPack';
import Image from 'next/image';
import { Footer } from '../../components/Footer';
import ExternalLinkButton from '../../components/ExternalLinkButton';
import { REGISTRATION_URL } from '../../constants/urls';
import { ParsedUrlQuery } from 'querystring';

interface Cochair {
  name: string;
  chair: string;
  className: string;
  major: string;
  bio: string;
  imageSource: string;
}

interface Chair {
  slug: string;
  chairName: string;
  imageSource: string;
  cochairs: Array<Cochair>;
}

interface TeamChairPageProps {
  chair: Chair;
}

const TeamChairPage = ({ chair }: TeamChairPageProps) => {
  const IMAGE_WIDTH = 400;
  const IMAGE_HEIGHT = 600;
  const pageTitle = `${chair.chairName} - FACT 2022`;
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

      <Flex
        textAlign="center"
        flexDir="column"
        alignItems="center"
        py="2rem"
        mb="2rem"
      >
        {/* Breadcrumb */}
        <Breadcrumb fontWeight="thin" color="factturquoise" my="1rem" px={2}>
          <BreadcrumbItem>
            <Link href={`/team`} scroll={false}>
              <BreadcrumbLink>Team</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">{chair.chairName}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Title */}
        <Heading
          fontSize={{ base: '6vw', md: '4vw' }}
          color="darkturquoise"
          fontWeight="black"
          as="h1"
          mx={{ base: '1rem', md: '10%' }}
        >
          {chair.chairName}
        </Heading>
        <Divider
          color="factturquoise"
          borderColor="factturquoise"
          borderWidth="1px"
          w="50%"
          my="1rem"
        />
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          w={{ base: '95%', sm: '90%', md: '75%' }}
          mb="4rem"
        >
          {chair.cochairs.map((cochair) => (
            <Box
              key={cochair.imageSource}
              p="2rem"
              w={{ base: '100%', md: '50%' }}
            >
              {/* Co-chair image */}
              <Fade in>
                <Image
                  src={cochair.imageSource}
                  width={IMAGE_WIDTH}
                  height={IMAGE_HEIGHT}
                  placeholder="blur"
                  blurDataURL={cochair.imageSource}
                  alt={cochair.name}
                  style={{ borderRadius: '10px', objectFit: 'cover', background: 'rgba(0, 0, 0, 0.0)'  }}
                />
              </Fade>

              {/* Co-chair name */}
              <Heading
                fontSize={{ base: '5vw', md: '2vw' }}
                color="factturquoise"
                fontWeight="bold"
                my="1rem"
              >
                {cochair.name}
              </Heading>
              {/* Co-chair major & bio */}
              <Text fontWeight="bold">{`${cochair.className} studying ${cochair.major}`}</Text>
              <Text mt="1rem" textAlign="left">
                {cochair.bio}
              </Text>
            </Box>
          ))}
        </Flex>
        <ExternalLinkButton text="Register for FACT!" path={REGISTRATION_URL} />

        {/* Breadcrumb */}
        <Breadcrumb fontWeight="thin" color="factturquoise" my="1rem" px={2}>
          <BreadcrumbItem>
            <Link href={`/team`} scroll={false}>
              <BreadcrumbLink>Team</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">{chair.chairName}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Footer />
    </>
  );
};

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  const chair = FACT_PACK.find((chair) => chair.slug === slug);

  return {
    props: { chair: chair },
  };
}

export async function getStaticPaths() {
  const factPack = FACT_PACK;
  const paths = factPack.map((chair) => ({
    params: { slug: chair.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default TeamChairPage;
