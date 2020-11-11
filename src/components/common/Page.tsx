import React from 'react';
import Header from './Header';
import PageTitle from './PageTitle';

type PageProps = {
  /** page header text */
  readonly title: string;
  /** background of the page header. Can be a path to an image or a color */
  readonly titleBackground: string;
}

const Page: React.FC<PageProps> = ({ title, titleBackground, children }) => {
  return (
    <div>
      <Header></Header>
      <PageTitle title={title} background={titleBackground}></PageTitle>
      {children}
    </div>
  );
}

export default Page;
