import { NextPage } from 'next';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react';
import { getFileBySlug, getFiles } from '../../lib/mdx';
import { PostMetaData } from '../../models/post';
import { AppProps } from 'next/app';
import MDXComponents from '../../components/Markdown/MDXComponents';

interface BlogPage extends AppProps {
  source: MDXRemoteProps;
  frontMatter: PostMetaData;
}

const Blog = ({ source}: BlogPage) => (
  <MDXRemote {...source} lazy components={MDXComponents} />
);

export default Blog;

export async function getStaticProps({ params }: Params) {
  const { mdxSource, frontMatter } = await getFileBySlug(params.slug);
  return {
    props: {
      source: mdxSource,
      frontMatter,
    },
  };
}

export async function getStaticPaths() {
  const posts = getFiles();
  const paths = posts.map((post: string) => ({
    params: { slug: post.replace('.mdx', ''), },
  }));
  return {
    paths,
    fallback: false,
  };
}
