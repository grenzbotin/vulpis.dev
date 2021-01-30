import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Box, Container, Grid, Text } from 'theme-ui';
import dynamic from 'next/dynamic';

import { H2, H3 } from '../components/elements/Typography';
import List from '../components/elements/List';
import { fetchAPI, Project } from '../lib/api';
import ProjectCard from '../components/elements/ProjectCard';

const Heading = dynamic(() => import('../components/Heading'));
const Contact = dynamic(() => import('../components/Contact'));
const CustomImage = dynamic(() => import('../components/elements/CustomImage'));
const HtmlHeader = dynamic(() => import('../components/elements/HtmlHeader'));

interface HomeProps {
  headerElement: React.RefObject<HTMLDivElement>;
  projects: Array<Project>;
}

const Home: React.FC<HomeProps> = ({ headerElement, projects }) => {
  const { t } = useTranslation('home');

  return (
    <>
      <HtmlHeader
        title={t('meta.title')}
        description={t('meta.description')}
        keywords={t('meta.keywords')}
      />
      <Container
        title="Home page"
        sx={{ maxWidth: '1450px', mx: 'auto', padding: '5rem 0 2rem 0' }}
      >
        <Heading element={headerElement} />
        <main>
          <Box title={t('coding.title')} px={[4, 5, 6]} mb={5}>
            <H2>{t('coding.title')}</H2>
            <Text>
              <p>{t('coding.text_1')}</p>
              <CustomImage
                alt="Franziska Fieke"
                src="/images/profile.webp"
                rounded
                height={200}
                width={200}
              />
              <p>{t('coding.text_2')}</p>
              <p>
                {t('coding.text_3')}
                <br />
                {t('coding.text_4')} <i>{t('coding.text_5')}</i> {t('coding.text_6')}
              </p>
              <p style={{ marginTop: '2rem' }}>{t('coding.text_7')}</p>
            </Text>
          </Box>
          <Grid gap={[4, 5, 6]} mb={5} px={[4, 5, 6]} columns={[1, 1, 1, 2]}>
            <Box title={t('stack.title')}>
              <H2>{t('stack.title')}</H2>
              <Text>{t('stack.text')}</Text>
              <Box title={t('experience.private.title')}>
                <List
                  listElements={Array(11)
                    .fill(null)
                    .map((_, i) => ({ text: t(`stack.list_${i + 1}`) }))}
                />
              </Box>
            </Box>
            <Box title={t('offer.title')}>
              <H2>{t('offer.title')}</H2>
              <H3>{t('offer.subtitle_1')}</H3>
              <Text>{t('offer.text_1')}</Text>
              <H3>{t('offer.subtitle_2')}</H3>
              <Text>{t('offer.text_2')}</Text>
              <H3>{t('offer.subtitle_3')}</H3>
              <Text>{t('offer.text_3')}</Text>
            </Box>
          </Grid>
          <Box title={t('experience.title')} px={[4, 5, 6]} mb={5}>
            <H2>{t('experience.title')}</H2>
            <Text>
              {t('experience.text_1')}
              <br />
              {t('experience.text_2')}
            </Text>
            <H3>{t('experience.work_title')}</H3>
            <Grid gap={[4, 5, 6]} mt={3} columns={[1, 1, 2, 2]}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Grid>
          </Box>
          <Box px={[4, 5, 6]} mb={5}>
            <H2>{t('contact.title')}</H2>
            <Contact />
          </Box>
        </main>
      </Container>
    </>
  );
};

interface APIresponse {
  projects: Array<Project>;
}

interface ProjectsPromise {
  props: APIresponse;
  revalidate: number;
}

export const getStaticProps = async ({ locale }: { locale: string }): Promise<ProjectsPromise> => {
  const [projects] = await Promise.all([fetchAPI(`/projects?_locale=${locale}`)]);

  return {
    props: { projects },
    revalidate: 1
  };
};

export default Home;
