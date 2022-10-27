/* eslint-disable import/no-anonymous-default-export */
import { Podcast } from './Podcast';
import { MDXRemoteProps } from 'next-mdx-remote';
import { PropsWithChildren } from 'react';

export default {
  h1: (props: PropsWithChildren) => <h1 className='red font-xl' {...props} />,
  Podcast,
};
