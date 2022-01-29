import React, {memo} from 'react';
import {theme} from '@cuteapp/constants/theme';
import {ActiveRepository} from '@cuteapp/screens/Home';
import {Container, Avatar, NameRepository, OpenIssues} from './styles';

interface RepositoryCardProps {
  id: string;
  owner: {
    avatar_url: string;
  };
  full_name: string;
  open_issues_count: number;
}

interface RepositoryCard {
  repositoryData: RepositoryCardProps;
  active: ActiveRepository;
}

const RepositoryCardComponent = ({repositoryData, active}: RepositoryCard) => {
  return (
    <Container
      style={
        active.key === repositoryData.full_name
          ? {
              backgroundColor: theme.colors.opposity,
            }
          : {}
      }>
      <Avatar source={{uri: repositoryData.owner.avatar_url}} />
      <NameRepository>{repositoryData.full_name}</NameRepository>
      <OpenIssues>
        Vagas Abertas - {repositoryData.open_issues_count}
      </OpenIssues>
    </Container>
  );
};

export const RepositoryCard = memo(
  RepositoryCardComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.active, nextProps.active);
  },
);
