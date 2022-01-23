/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';
import {truncate} from 'lodash';
import {summarySentences} from '@cuteapp/utils/summarySentences';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  TitleJob,
  TitleTopics,
  Topics,
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
  const navigation = useNavigation();
  const text = summarySentences(job.body);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details' as never, {job} as never)}>
      <Container key={job.id}>
        <TitleJob>{job.title}</TitleJob>
        <TitleTopics>Introdução da Vaga</TitleTopics>
        <Topics>{truncate(text, {length: 250})}</Topics>
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
    </TouchableOpacity>
  );
};

export default JobCard;
