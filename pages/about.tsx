import { Divider, Flex, useBreakpointValue } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import ExternalLinkButton from '../components/ExternalLinkButton';
import { Footer } from '../components/Footer';
import { ImageHeader } from '../components/ImageHeader';
import { NavigationBar } from '../components/NavigationBar';
import Paragraph from '../components/Paragraph';
import { REGISTRATION_URL } from '../constants/urls';

const AboutPage = () => {
  const FACT_FACEBOOK_EVENT_HEADER_WIDTH = useBreakpointValue({
    base: 300,
    md: 600,
    lg: 955,
  });
  const FACT_FACEBOOK_EVENT_HEADER_HEIGHT = useBreakpointValue({
    base: 157,
    md: 314,
    lg: 500,
  });
  const BACKGROUND_SOURCE = '/images/foellinger_audience_dark_bkg.webp';
  const FACT_FACEBOOK_LOGO_SOURCE = '/images/fact_facebook_event_header.webp';

  return (
    <>
      <Head>
        <title>About - FACT 2022</title>
      </Head>
      <NavigationBar />
      <Flex textAlign="center" flexDir="column" alignItems="center" pb="2rem">
        <ImageHeader
          title="About"
          subtitle="30 years of FACT"
          imgSrc={BACKGROUND_SOURCE}
        />
        <Divider
          color="factturquoise"
          borderColor="factturquoise"
          borderWidth="1px"
          w={{ base: '50%', md: '30%' }}
          mb="2rem"
        />

        <Image
          src={FACT_FACEBOOK_LOGO_SOURCE}
          width={FACT_FACEBOOK_EVENT_HEADER_WIDTH}
          height={FACT_FACEBOOK_EVENT_HEADER_HEIGHT}
          placeholder="blur"
          blurDataURL={FACT_FACEBOOK_LOGO_SOURCE}
          alt="FACT 2022: Kaunlaran - Enrich our Growth"
          style={{ borderRadius: '10px', objectFit: 'cover', background: 'rgba(0, 0, 0, 0.0)'  }}
        />

        {/* Text */}
        <Flex
          flexDir="column"
          alignItems="center"
          mx={{ base: '5%', md: '10%', lg: '20%' }}
          my="2rem"
        >
          <Paragraph>
            FACT stands for <strong>Filipino Americans Coming Together</strong>{' '}
            and is a conference hosted annually by the Philippine Student
            Association at the University of Illinois at Urbana-Champaign. It is
            the largest Filipino-interest conference in the Midwest, bringing in
            about 1,300 delegates just last year. The conference works to
            empower young, rising professionals while simultaneously educating
            the delegates about Filipino culture, identity and issues. Despite
            the conference’s title, the conference is not limited to delegates
            of Filipino descent. The facilitators and delegates come from
            different backgrounds and ethnicities, and the workshops cover a
            wide array of topics. FACT’s mission is to build a community of
            leaders by uniting, enlightening and empowering the
            Filipino/Fil-Am/Non-Filipino youth nationwide. By exploring our
            interests, culture and identity as a rising generation, we hope that
            our delegates can take with them knowledge that they can apply
            beyond their college career as leaders in the professional world
            ready to give back to their community.
          </Paragraph>
          <Paragraph>
            The theme for the 30th annual Filipino Americans Coming Together
            Conference is <i>“Kaunlaran: Enrich Our Growth”.</i> The Tagalog
            word <i>kaunlaran</i> translates to “progress, development”. With
            this theme, the Philippine Student Association at the University of
            Illinois at Urbana-Champaign seeks to inspire delegates to look
            inward, acknowledge how far they have come, and enrich their own
            growth so that they can look outward and create a positive impact on
            their community.
          </Paragraph>
          <Paragraph>
            The Narra, or rosewood tree, is the national tree of the
            Philippines. It signifies the strength and resilience of the
            Filipino people. We were inspired to continue FACT’s enduring legacy
            by reflection on our roots. FACT has greatly evolved since its
            inception in 1992. We have faced many challenges over the years, but
            we prove time and again that our compassion for each other is what
            drives us to give back to our communities. As we get older, we
            celebrate our achievements, reflect on past strife, and use the
            wisdom and grace of our predecessors to look forward to the future.
            With this vision, we present FACT’s 30th anniversary as an
            opportunity to foster our delegates’ growth to strengthen ourselves
            and uplift those around us.
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

export default AboutPage;
