/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Input from '@cuteapp/components/Input';
import {Container, Title, ContainerRepository, SubTitle} from './styles';
import RepositoryCard from '@cuteapp/components/RepositoryCard';
import {FlatList} from 'react-native';
import JobCard from '@cuteapp/components/JobCard';
import Loading from '@cuteapp/components/Loading';
import api from '@cuteapp/services/api';

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

const Home: React.FC = () => {
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [isLoadingJobs, setIsLoadingJobs] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoadingRepositories, setIsLoadingRepositories] =
    React.useState(false);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    loadJobs();
  }, []);

  async function loadJobs(): Promise<void> {
    // eslint-disable-next-line curly
    if (isLoadingJobs) return;
    setIsLoadingJobs(true);

    const response = await api.get(
      `/repos/backend-br/vagas/issues?per_page=10&page=${page}`,
    );

    setJobs([...jobs, ...response.data]);
    setPage(page + 1);
    setIsLoadingJobs(false);
  }

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={jobs}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <JobCard job={item} />}
        onEndReached={loadJobs}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={
          <>
            <Title>Github Jobs</Title>
            <Input
              placeholder="Pesquise por empresa, título..."
              iconName="search"
            />
            <ContainerRepository>
              <SubTitle>Repositórios com Vagas</SubTitle>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginBottom: 20}}
                data={data}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => (
                  <RepositoryCard repositoryData={item} />
                )}
                // onEndReached={loadJobs}
                onEndReachedThreshold={0.1}
                ListFooterComponent={
                  <Loading loading={isLoadingRepositories} />
                }
              />
            </ContainerRepository>
            <SubTitle>Vagas Recentes</SubTitle>
          </>
        }
        ListFooterComponent={<Loading loading={isLoadingJobs} />}
        // ListEmptyComponent={<Loading loading={isLoadingJobs} />}
      />
    </Container>
  );
};

export default Home;
