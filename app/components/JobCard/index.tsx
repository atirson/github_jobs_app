/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';

import {
  Container,
  TitleJob,
  TitleTopics,
  // Topics,
  ContainerTags,
  Tags,
  DateText,
} from './styles';

type Labels = {
  id: string;
  name: string;
  color: string;
};

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

const JobCard = ({job}: JobCardProps) => {
  return (
    <Container key={job.id}>
      <TitleJob>{job.title}</TitleJob>
      <TitleTopics>Resumo da Vaga</TitleTopics>
      <ContainerTags>
        <View style={{flexDirection: 'row'}}>
          {job.labels.slice(0, 3).map(label => (
            <Tags key={label.id} color={`#${label.color}`}>
              {label.name}
            </Tags>
          ))}
        </View>
        <DateText>
          {formatDistance(parseISO(job.updated_at), new Date(), {
            addSuffix: true,
          })}
        </DateText>
      </ContainerTags>
    </Container>
  );
};

export default JobCard;
