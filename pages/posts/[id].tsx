import type { GetStaticPaths } from "next";
import type { FC } from "react";
import { getPostsIds } from "../../lib/api/posts";

const PostDetail: FC = () => {
  return <div>salve</div>;
};

export const getStaticPaths: GetStaticPaths = () => {
  const ptPostsIds = getPostsIds("pt-BR");
  const enPostsIds = getPostsIds("en");
  const paths = ptPostsIds.concat(enPostsIds);

  return {
    paths,
    fallback: false,
  };
};

export default PostDetail;
