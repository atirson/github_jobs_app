import React from 'react';

import {Container, Avatar, NameRepository, OpenIssues} from './styles';

interface RepositoryCardProps {
  id?: string;
  uri?: string;
  name?: string;
  openIssues?: number;
}

interface RepositoryCard {
  repositoryData: RepositoryCardProps;
}

const RepositoryCard = ({repositoryData}: RepositoryCard) => {
  return (
    <Container>
      <Avatar source={{uri: repositoryData.uri}} />
      <NameRepository>{repositoryData.name}</NameRepository>
      <OpenIssues>Vagas Abertas - {repositoryData.openIssues}</OpenIssues>
    </Container>
  );
};

export default RepositoryCard;
