import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../types/post";
import { Locale } from "../types/locale";

function getPostsDirectory(locale: Locale) {
  return path.join(process.cwd(), "posts", locale);
}

function sortPosts(posts: Post[]) {
  return posts.sort((previousPost, currentPost) => {
    const MOVE_TO_FRONT = 1;
    const MOVE_TO_BACK = -1;

    if (previousPost.date < currentPost.date) {
      return MOVE_TO_FRONT;
    }

    return MOVE_TO_BACK;
  });
}

export function getPosts(locale: Locale): Post[] {
  type ParsedResult = { content: string; data: Omit<Post, "id" | "url"> };
  const postsDirectory = getPostsDirectory(locale);
  const fileNames = fs.readdirSync(postsDirectory);

  const posts: Post[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullpath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(fullpath, "utf8");
    const parsedResult: ParsedResult = matter(fileContent) as any;
    const { data: postData } = parsedResult;
    const url = `/posts/${postData.title
      .split(" ")
      .join("-")
      .replace(/(?![À-ú]|-)(\W)/g, "")
      .toLowerCase()}`;

    return {
      id,
      url,
      ...postData,
    };
  });
  const sortedPosts = sortPosts(posts);

  return sortedPosts;
}

export function getPostsIds(locale: Locale): string[] {
  const postsDirectory = getPostsDirectory(locale);
  const fileNames = fs.readdirSync(postsDirectory);
  const ids = fileNames.map((fileName) => fileName.replace(/(\.md)|(\W)$/, ""));

  return ids;
}
