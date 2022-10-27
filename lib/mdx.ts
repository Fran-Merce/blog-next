import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';


const root = process.cwd();

export const getFiles = () => fs.readdirSync(path.join(root, 'data'));

export const getFileBySlug = async (slug: string) => {
  const source = fs.readFileSync(path.join(root, 'data', `${slug}.mdx`), 'utf8');
  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {});
  return {
    mdxSource,
    frontMatter: {
      slug,
      ...data,
    },
  };
};

export const getAllFilesMetaData = () => {
  const files = getFiles();
  // todo  type any to be fixed
  return files.reduce((allPosts: any, postSlug: string) => {
    const source = fs.readFileSync(path.join(root, 'data', postSlug), 'utf8');
    const { data } = matter(source);
    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, []);
};


