/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Linking, View} from 'react-native';
import Markdown from 'react-native-showdown';

import {Container, Title, ContainerTags, Tags, TitlePage} from './styles';

const Details = ({route}: any) => {
  const {job} = route.params || {};

  const css = `
    h1, h2, h3, h4, h5, h6 {
      font-size: 1em;
    }
    * {
      background-color: #2E3138;
      color: #fff;
      margin-bottom: 40px;
      overflow-wrap: break-word;
    }
  `;

  return job ? (
    <View
      style={{
        flex: 1,
        backgroundColor: '#171A22',
        padding: 10,
      }}>
      <TitlePage>Detalhes</TitlePage>
      <Container key={job.id}>
        <ContainerTags>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {job.labels.map((label: any) => (
              <Tags key={label.id} color={`#${label.color}`}>
                {label.name}
              </Tags>
            ))}
          </View>
        </ContainerTags>
        <Title>{job.title}</Title>
        <Markdown
          onShouldStartLoadWithRequest={event => {
            if (!/^[data:text, about:blank]/.test(event.url)) {
              Linking.openURL(event.url);
              return false;
            }
            return true;
          }}
          markdown={job.body}
          css={css}
        />
      </Container>
    </View>
  ) : (
    <Container style={{flex: 1, borderRadius: 0, marginBottom: 0}}>
      <Title>Click em uma vaga para ver os Detalhes</Title>
    </Container>
  );
};

export default Details;
