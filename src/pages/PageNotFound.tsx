import React from 'react';
import ContentWrapper from '../components/common/ContentWrapper';
import Page from '../components/common/Page';

 const PageNotFound = () => {
  return (
    <div>
      <Page title="404 Not Found" titleBackground="rgb(148, 92, 209)">
        <ContentWrapper>
          <p>Page not found.</p>
        </ContentWrapper>
      </Page>
    </div>
  );
}

export default PageNotFound;
