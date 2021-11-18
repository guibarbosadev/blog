import type { GetStaticPaths, GetStaticProps } from "next";
import type { FC } from "react";
import { getPostsIds } from "../../lib/api/posts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const PostDetail: FC = () => {
  const { t } = useTranslation("common");
  return <div>{t("hi")}</div>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let props = {};

  if (locale) {
    const translations = await serverSideTranslations(locale, ["common"]);
    props = { ...translations };
  }

  return { props };
};

export const getStaticPaths: GetStaticPaths = () => {
  const ptPostsIds = getPostsIds("pt-BR");
  const enPostsIds = getPostsIds("en");
  const postIds = ptPostsIds.concat(enPostsIds);
  const paths = postIds.map((postName) => ({
    params: {
      id: postName,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default PostDetail;
