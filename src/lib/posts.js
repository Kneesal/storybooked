import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory); // Get file names under /posts

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); // Remove ".md" from file name to get id

    const fullPath = path.join(postsDirectory, fileName); //full path to the individual file
    const fileContents = fs.readFileSync(fullPath); //read contents of file

    const matterResult = matter(fileContents); // Use gray-matter to parse the post metadata section
  });
};
