import React from 'react';

import {Container, Avatar, NameRepository, OpenIssues} from './styles';

interface RepositoryCardProps {
  owner: {
    id: string;
    avatar_url: string;
  };
  full_name: string;
  open_issues_count: number;
}

interface RepositoryCard {
  repositoryData: RepositoryCardProps;
}

const RepositoryCard = ({repositoryData}: RepositoryCard) => {
  return (
    <Container>
      <Avatar source={{uri: repositoryData.owner.avatar_url}} />
      <NameRepository>{repositoryData.full_name}</NameRepository>
      <OpenIssues>
        Vagas Abertas - {repositoryData.open_issues_count}
      </OpenIssues>
    </Container>
  );
};

export default RepositoryCard;
