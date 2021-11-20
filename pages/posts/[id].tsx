import type { GetStaticPaths, GetStaticProps } from "next";
import type { FC } from "react";
import { getPost, getPostsIds } from "../../lib/api/posts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

interface PostDetailProps {
  content: string;
}

const PostDetail: FC<PostDetailProps> = ({ content }) => {
  const { t } = useTranslation("common");
  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  let props = {};
  const { id = "" } = params || {};

  if (locale) {
    const translations = await serverSideTranslations(locale, ["common"]);
    const content = getPost(params?.id as string, locale as any);
    props = { content, ...translations };
  }

  return { props };
};

export const getStaticPaths: GetStaticPaths = () => {
  const ptPostsIds = getPostsIds("pt-BR").map((postId) => ({
    params: {
      id: postId,
    },
    locale: "pt-BR",
  }));
  const enPostsIds = getPostsIds("en").map((postId) => ({
    params: {
      id: postId,
    },
    locale: "en",
  }));
  const paths = ptPostsIds.concat(enPostsIds);

  return {
    paths,
    fallback: false,
  };
};

export default PostDetail;
