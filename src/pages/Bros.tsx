import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Bro, { BroProps } from '../components/bros/Bro';
import ContentWrapper from '../components/common/ContentWrapper';
import Page from '../components/common/Page';
import client from '../ContentfulClient';
import { IBroFields } from '../schema/generated/contentful';

const BroContainer = styled.div`
  display: flex;
  margin: 0 -10px;
  flex-direction: column;

  > div {
    flex: 0 1 calc(50% - 70px);
    margin: 10px;
  }

  @media only screen and ${props => props.theme.mediaQueries.tablet} {
    flex-flow: row wrap;
  }
`;

function Bros() {
  const [bros, setBros] = useState<BroProps[]>([]);

  useEffect(() => {
    const fetchBros = async () => {
      const response = await client.getEntries<IBroFields>({
        content_type: 'bro'
      });

      const entries = response.items
        .map(bro => ({
          name: bro.fields.name,
          alias: bro.fields.alias,
          role: bro.fields.role,
          backgroundColor: bro.fields.color,
          avatar: bro.fields.avatar?.fields.file.url
        }))
        .sort();

      setBros(entries);
    };

    fetchBros();
  }, []);

  return (
    <Page title="Bros" titleBackground="rgb(148, 92, 209)">
      <ContentWrapper>
        <main>
          <p>GameBros is an independent game studio founded in 2007 by two brothers, Sensei and Batzy.</p>
          <BroContainer>
            {bros.map(bro => <Bro key={bro.alias} {...bro} />)}
          </BroContainer>
        </main>
      </ContentWrapper>
    </Page>
  );
}

export default Bros;
