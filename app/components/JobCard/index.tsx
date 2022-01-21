/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';

import {
  Container,
  TitleJob,
  TitleTopics,
  Topics,
  ContainerTags,
  Tags,
  DateText,
} from './styles';

interface Labels {
  id: string;
  name: string;
  color: string;
}

export interface Job {
  id: string;
  url: string;
  state: string;
  title: string;
  body: string;
  labels: [Labels];
  updated_at: string;
}

interface JobCardProps {
  job: Job;
}

const labels: Labels[] = [
  {
    id: '1',
    name: 'Frontend',
    color: 'FF0000',
  },
  {
    id: '2',
    name: 'Backend',
    color: 'dd1223',
  },
  {
    id: '3',
    name: 'PJ',
    color: 'f2d000',
  },
  {
    id: '4',
    name: 'Frontend',
    color: 'FF0000',
  },
];

const JobCard = ({job}: JobCardProps) => {
  return (
    <Container>
      <TitleJob>[REMOTO] Back-end Software Engineer na Pier</TitleJob>
      <TitleTopics>Resumo da Vaga</TitleTopics>
      <FlatList
        data={[
          {
            key: 'Devin component displays a scrolling list of changing content.',
          },
          {key: 'Dan'},
        ]}
        renderItem={({item, index}) => (
          <Topics>
            {index + 1} - {item.key}
          </Topics>
        )}
      />
      <ContainerTags>
        <View style={{flexDirection: 'row'}}>
          {labels.slice(0, 3).map(label => (
            <Tags key={label.id} color={`#${label.color}`}>
              {label.name}
            </Tags>
          ))}
        </View>
        <DateText>
          {/* {formatDistance(parseISO(job.updated_at), new Date(), {
            addSuffix: true,
          })} */}
          22/22/2021
        </DateText>
      </ContainerTags>
    </Container>
  );
};

export default JobCard;
