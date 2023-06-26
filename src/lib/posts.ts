import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { title } from "process";

interface AllPosts {
  id: string;
  title: string;
  date: string;
}

const postsDirectory = path.join(process.cwd(), "posts");

export const getSortedPostsData = (): AllPosts[] => {
  const fileNames = fs.readdirSync(postsDirectory); // Get file names under /posts

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); // Remove ".md" from file name to get id

    const fullPath = path.join(postsDirectory, fileName); //full path to the individual file
    const fileContents = fs.readFileSync(fullPath); //read contents of file

    const matterResult = matter(fileContents); // Use gray-matter to parse the post metadata section

    return {
      id,
      ...matterResult.data,
    } as AllPosts;
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getAllPostsId = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
};
