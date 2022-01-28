/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Input from '@cuteapp/components/Input';
import {Container, Title, ContainerRepository, SubTitle} from './styles';
import RepositoryCard from '@cuteapp/components/RepositoryCard';
import {Alert, FlatList} from 'react-native';
import JobCard from '@cuteapp/components/JobCard';
import Loading from '@cuteapp/components/Loading';
import api from '@cuteapp/services/api';
import {AxiosResponse} from 'axios';

interface RepositoryCardProps {
  owner: {
    id: string;
    avatar_url: string;
  };
  full_name: string;
  open_issues_count: number;
}

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
  const [repositories] = React.useState<RepositoryCardProps[]>([]);
  const [isLoadingJobs, setIsLoadingJobs] = React.useState(false);
  const [isLoadingRepositories, setIsLoadingRepositories] =
    React.useState(false);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    loadJobs();
  }, []);

  React.useEffect(() => {
    loadRepositoriesInfo();
  }, []);

  async function loadRepositoriesInfo(): Promise<void> {
    // eslint-disable-next-line curly
    if (isLoadingRepositories) return;
    setIsLoadingRepositories(true);

    Promise.all([
      api.get<RepositoryCardProps>('/repos/frontendbr/vagas'),
      api.get<RepositoryCardProps>('/repos/backend-br/vagas'),
    ])
      .then(response => {
        response.map(repository => repositories.push(repository.data));
      })
      .catch((err: Error) => {
        setIsLoadingRepositories(false);
        console.log(err.message);
        Alert.alert(
          'Erro',
          'Erro ao carregar as vagas, tente novamente mais tarde.',
        );
      }).finally(() => {
        setIsLoadingRepositories(false);
      });
  }

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
                data={repositories}
                keyExtractor={item => String(item.owner.id)}
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
      />
    </Container>
  );
};

export default Home;
