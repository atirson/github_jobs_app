/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Input from '@cuteapp/components/Input';
import {
  Container,
  Title,
  ContainerRepository,
  SubTitle,
  ContainerJobs,
} from './styles';
import RepositoryCard from '@cuteapp/components/RepositoryCard';
import {FlatList} from 'react-native';
import JobCard from '@cuteapp/components/JobCard';

interface RepositoryCardProps {
  id?: string;
  uri?: string;
  name?: string;
  openIssues?: number;
}

const data: RepositoryCardProps[] = [
  {
    id: '1',
    uri: 'https://avatars.githubusercontent.com/u/30732658?v=4',
    name: 'Backend-Br/Vagas',
    openIssues: 500,
  },
  {
    id: '2',
    uri: 'https://avatars.githubusercontent.com/u/30732658?v=4',
    name: 'Backend-Br/Vagas',
    openIssues: 500,
  },
  {
    id: '3',
    uri: 'https://avatars.githubusercontent.com/u/30732658?v=4',
    name: 'Backend-Br/Vagas',
    openIssues: 500,
  },
  {
    id: '4',
    uri: 'https://avatars.githubusercontent.com/u/30732658?v=4',
    name: 'Backend-Br/Vagas',
    openIssues: 500,
  },
  {
    id: '5',
    uri: 'https://avatars.githubusercontent.com/u/30732658?v=4',
    name: 'Backend-Br/Vagas',
    openIssues: 500,
  },
];

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Github Jobs</Title>
      <Input placeholder="Pesquise por empresa, título..." iconName="search" />
      <ContainerRepository>
        <SubTitle>Repositórios com Vagas</SubTitle>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginBottom: 20}}
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <RepositoryCard repositoryData={item} />}
          // onEndReached={loadJobs}
          onEndReachedThreshold={0.1}
          // ListFooterComponent={<Loading loading={loading} />}
        />
      </ContainerRepository>
      <ContainerJobs>
        <SubTitle>Vagas Recentes</SubTitle>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={{marginBottom: 120}}
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <JobCard />}
          // onEndReached={loadJobs}
          onEndReachedThreshold={0.1}
          // ListFooterComponent={<Loading loading={loading} />}
        />
      </ContainerJobs>
    </Container>
  );
};

export default Home;
