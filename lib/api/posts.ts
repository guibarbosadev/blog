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
  const postsDirectory = getPostsDirectory(locale);
  const fileNames = fs.readdirSync(postsDirectory);
  const posts: Post[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullpath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(fullpath, "utf8");
    type ParsedResult = { content: string; data: Omit<Post, "id" | "url"> };
    const parsedResult: ParsedResult = matter(fileContent) as any;

    return {
      id,
      url: `/${parsedResult.data.title.split(" ").join("-").toLowerCase()}`,
      ...parsedResult.data,
    };
  });
  const sortedPosts = sortPosts(posts);

  return sortedPosts;
}
