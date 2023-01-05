import {
  Divider,
  Flex,
  Link,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import ExternalLinkButton from '../components/ExternalLinkButton';
import { Footer } from '../components/Footer';
import { ImageHeader } from '../components/ImageHeader';
import { NavigationBar } from '../components/NavigationBar';
import Paragraph from '../components/Paragraph';
import { REGISTRATION_URL } from '../constants/urls';

const Covid19StatementPage = () => {
  const BACKGROUND_SOURCE = '/images/foellinger_audience_dark_bkg.webp';

  return (
    <>
      <Head>
        <title>COVID-19 Statement - FACT 2022</title>
      </Head>
      <NavigationBar />
      <Flex textAlign="center" flexDir="column" alignItems="center" pb="2rem">
        <ImageHeader title="COVID-19 Statement" imgSrc={BACKGROUND_SOURCE} />
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
          alignItems="normal"
          mx={{ base: '5%', md: '10%', lg: '20%' }}
          my="2rem"
        >
          <Paragraph>
            <strong>October 23, 2022</strong>
          </Paragraph>
          <Paragraph useTopMargin={false}>
            Champaign, IL - The Officer Board of the Philippine Student
            Association is excited to welcome back delegates from across the
            country to our 30th Filipino Americans Coming Together Conference,
            our first in-person conference since 2019.
          </Paragraph>
          <Paragraph>
            While COVID-19 cases and hospitalizations have been steadily
            declining, there is still risk for infection in Champaign County,
            particularly due to the collection of delegates traveling to our
            campus before and during FACT weekend. With that in mind, our
            Officer Board and FACT Co-Coordinators have decided to implement the
            following COVID-19 safety guidelines during this year's FACT
            conference.
          </Paragraph>
          <UnorderedList
            fontSize={{ base: '1rem', md: '1.2rem' }}
            textAlign="left"
            mt="2rem"
            fontWeight="normal"
            color="gray.600"
            px={{ base: '1.2rem', md: 0 }}
          >
            <ListItem>
              Delegates will be required to wear a mask during all official
              events held indoors, including Opening Ceremony, Workshop
              Sessions, and Variety Show.
            </ListItem>
            <ListItem>
              Delegates are strongly encouraged to receive the COVID-19 Bivalent
              Booster before arriving on campus. This booster is different than
              previous formulations and provides better immunity for currently
              circulating COVID variants.
            </ListItem>
            <ListItem>
              Delegates should test for COVID-19 before arriving on campus or
              checking in at the Asian American Cultural Center, up to 48 hours
              before their arrival. In the event that a delegate tests positive
              for COVID-19, they should contact our FACT Co-Coordinators as soon
              as possible at{' '}
              <Link href="mailto:fact@psauiuc.org" color="factturquoise">
                fact@psauiuc.org
              </Link>{' '}
              to discuss exposures at the conference and refunds, if applicable.
            </ListItem>
          </UnorderedList>
          <Paragraph>
            With this safety plan in place, the Officer Board is looking forward
            to providing an enriching and safe experience for our delegates and
            for our campus. Contact our executive board at{' '}
            <Link href="mailto:execs@psauiuc.org" color="factturquoise">
              execs@psauiuc.org
            </Link>{' '}
            if you have any questions.
          </Paragraph>
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

export default Covid19StatementPage;
