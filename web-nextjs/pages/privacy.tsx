import React from "react";
import useTranslation from "next-translate/useTranslation";
import { Box, Container, Text, Link } from "theme-ui";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";

import { H2, H3 } from "../components/elements/Typography";

const HtmlHeader = dynamic(() => import("../components/elements/HtmlHeader"));

// TO BE CLEANED WITH NEXT UPDATE
export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

const Privacy: React.FC = () => {
  const { t } = useTranslation("privacy");

  return (
    <>
      <HtmlHeader
        title={t("meta.title")}
        description={t("meta.description")}
        keywords={t("meta.keywords")}
        noRobots
      />
      <main>
        <Container
          title="Disclosure"
          sx={{ maxWidth: "1450px", mx: "auto", padding: "5rem 0 2rem 0" }}
        >
          <Box px={[4, 5, 6]} mb={5} mt={5}>
            <H2>{t("title")}</H2>
            <Text>
              {t("intro")}
              <br />
              {t("accepting")}
            </Text>
            <H3>{t("section_1.title")}</H3>
            <Text>
              <p>{t("section_1.text")}</p>
            </Text>
            <H3>{t("section_2.title")}</H3>
            <Text>
              {t("section_2.text_1")}
              <br />
              {t("section_2.text_2")}
              <br />
              {t("section_2.text_3")}&nbsp;
              <Link
                href="https://www.digitalocean.com/legal/data-processing-agreement/"
                target="_blank"
                rel="noreferrer"
              >
                {t("section_2.text_link")}
              </Link>{" "}
              {t("section_2.text_4")}
            </Text>
            <H3>{t("section_3.title")}</H3>
            <Text>
              <p>{t("section_3.text_1")}</p>
              <p>{t("section_3.text_2")}</p>
            </Text>
            <H3>{t("section_4.title")}</H3>
            <Text>{t("section_4.text")}</Text>
            <H3>{t("section_5.title")}</H3>
            <Text>{t("section_5.text")}</Text>
            <H3>{t("section_6.title")}</H3>
            <Text>{t("section_6.text")}</Text>
            <H3>{t("section_7.title")}</H3>
            <Text>
              {t("section_7.text_1")}
              <br />
              {t("section_7.text_2")}
              <br />
              {t("section_7.text_3")}&nbsp;
              <Link
                href="https://www.namecheap.com/legal/universal/data-processing-addendum/"
                target="_blank"
                rel="noreferrer"
              >
                {t("section_7.text_link")}
              </Link>{" "}
              {t("section_2.text_4")}
              <br />
            </Text>
            <H3>{t("section_8.title")}</H3>
            <Text>{t("section_8.text")}</Text>
            <H3>{t("section_9.title")}</H3>
            <Text>{t("section_9.text")}</Text>
          </Box>
        </Container>
      </main>
    </>
  );
};

export default Privacy;
