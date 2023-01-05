import React from 'react';
import {
  Divider,
  Flex,
  Heading,
  Link,
} from '@chakra-ui/react';
import Head from 'next/head';
import ExternalLinkButton from '../components/ExternalLinkButton';
import { Footer } from '../components/Footer';
import { ImageHeader } from '../components/ImageHeader';
import { NavigationBar } from '../components/NavigationBar';
import Paragraph from '../components/Paragraph';
import { REGISTRATION_URL } from '../constants/urls';

const Question = ({ children }: { children: React.ReactNode }) => (
  <Heading
    fontWeight="normal"
    fontSize="2xl"
    px={{ base: '1.2rem', md: 0 }}
    mt="2.7rem"
    mb="0.7rem"
    textAlign="left"
  >
    {children}
  </Heading>
);

const FaqPage = () => {
  const BACKGROUND_SOURCE = '/images/union_dark_bkg.webp';

  return (
    <>
      <Head>
        <title>FAQ - FACT 2022</title>
      </Head>
      <NavigationBar />
      <Flex textAlign="center" flexDir="column" alignItems="center" pb="2rem">
        <ImageHeader
          title="FAQ"
          subtitle="Frequently Asked Questions"
          imgSrc={BACKGROUND_SOURCE}
        />
        <Divider
          color="factturquoise"
          borderColor="factturquoise"
          borderWidth="1px"
          w={{ base: '50%', md: '30%' }}
          mb="2rem"
        />

        {/* Text */}
        <Flex
          flexDir="column"
          alignItems="stretch"
          mx={{ base: '5%', md: '10%', lg: '20%' }}
          my="2rem"
        >
          {/* Admissions */}
          <Question>How much are admissions to FACT?</Question>
          <Paragraph useTopMargin={false}>
            Registration for FACT workshops is $12 total and free for UIUC
            students (please email{' '}
            <Link textDecor="underline" href="mailto:teamfact@psauiuc.org">
              teamfact@psauiuc.org
            </Link>{' '}
            for more information on how to register as a UIUC student).
            Attendance for our Variety Show for non UIUC students are $10 per
            person, and free for UIUC students with an icard.
          </Paragraph>

          {/* Full workshops */}
          <Question>The workshop I want to attend is full.</Question>
          <Paragraph useTopMargin={false}>
            Some workshops may reach full capacity due to the volume of
            delegates. We suggest registering for ones that are still open.
            However, during check-in or late registration, spots may open up,
            and we may be able to place you into your desired workshop.
          </Paragraph>

          {/* Session 2 Full */}
          <Question>
            All workshops in Session 2 are full. What should I do?
          </Question>
          <Paragraph useTopMargin={false}>
            Please register without a workshop in that spot for now. During
            check-in or late registration, we may be able to add you to one
            depending on capacity!
          </Paragraph>

          {/* High school */}
          <Question>I am a high schooler. May I attend FACT?</Question>
          <Paragraph useTopMargin={false}>
            If you are a minor, you are not able to register for FACT workshops.
            However, you are able to attend our Night Market and Variety Show!
          </Paragraph>

          {/* Refunds */}
          <Question>
            I can no longer attend FACT and would like a refund for Variety Show
            and/or Registration.
          </Question>
          <Paragraph useTopMargin={false}>
            Please email{' '}
            <Link href="mailto:teamfact@psauiuc.org" textDecor="underline">
              teamfact@psauiuc.org
            </Link>{' '}
            for Registration refunds and factvshow@psauiuc.org, and they will be
            able to help you out.
          </Paragraph>

          {/* Night Market */}
          <Question>What is FACT Night Market?</Question>
          <Paragraph useTopMargin={false}>
            The FACT Night Market is a new addition to our FACT Conference where
            small vendors will sell their merchandise on the Main Quad! This
            event will take place 3:30-5:30pm on Saturday, November 12th.
          </Paragraph>

          {/* Register link */}
          <ExternalLinkButton
            text="Register for FACT!"
            path={REGISTRATION_URL}
            props={{ alignSelf: 'center', mt: '5rem' }}
          />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default FaqPage;
