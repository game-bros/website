import React from 'react';
import styled from 'styled-components';
import Bro from '../components/Bro';
import ContentWrapper from '../components/common/ContentWrapper';
import Page from '../components/common/Page';

const BroContainer = styled.div`
  display: flex;
  margin: 0 -10px;
  flex-flow: row wrap;

  > div {
    flex: 0 1 38%;
    margin: 10px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

function Bros() {
  return (
    <Page title="Bros" titleBackground="rgb(148, 92, 209)">
      <ContentWrapper>
        <main>
          <p>GameBros is an independent game studio founded in 2007 by two brothers, Sensei and Batzy.</p>
          <BroContainer>
            <Bro name="Tero Malkki"
                  alias="Sensei"
                  role="Developer"
                  avatar="/img/sensei.png"
                  backgroundColor="rgb(209, 92, 92)"/>
            <Bro name="Toni Malkki"
                  alias="Batzy"
                  role="Artist"
                  avatar="/img/batzy.png"
                  backgroundColor="rgb(94, 92, 209)" />
            <Bro name="Rasmus Malkki"
                  alias="Kai"
                  role="Tester"
                  backgroundColor="rgb(142, 209, 92)" />
          </BroContainer>
        </main>
      </ContentWrapper>
    </Page>
  );
}

export default Bros;
