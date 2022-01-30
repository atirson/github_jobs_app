/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useMemo, useEffect} from 'react';
import {MultiSelectComponent} from '@cuteapp/components/MultiSelect';
import {Container, Title, ContainerRepository, SubTitle} from './styles';
import {RepositoryCard} from '@cuteapp/components/RepositoryCard';
import {Alert, FlatList, TouchableOpacity, LogBox} from 'react-native';
import {JobCard} from '@cuteapp/components/JobCard';
import Loading from '@cuteapp/components/Loading';
import api from '@cuteapp/services/api';
import {factory} from '@cuteapp/factory/jobs.factory';
import {factoryLabel} from '@cuteapp/factory/labels.factory';

interface RepositoryCardProps {
  id: string;
  owner: {
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

export type ActiveRepository = {
  name: 'all' | 'frontend' | 'backend';
  key?: 'frontendbr/vagas' | 'backend-br/vagas';
};

const Home = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [repositories] = useState<RepositoryCardProps[]>([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(false);
  const [isLoadingRepositories, setIsLoadingRepositories] = useState(false);
  const [page, setPage] = useState(1);
  const [activeRepositories, setActiveRepositories] =
    useState<ActiveRepository>({name: 'all'});
  const [labels, setLabels] = useState<Labels[]>([]);

  useEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, []);

  useMemo(() => {
    loadJobs();
  }, [activeRepositories]);

  useMemo(() => {
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
        response.map(repository => {
          const isExist = repositories.findIndex(
            repo => repo.id === repository.data.id,
          );

          if (isExist === -1) {
            return repositories.push(repository.data);
          }

          return;
        });
      })
      .catch((err: Error) => {
        setIsLoadingRepositories(false);
        console.log(err.message);
        Alert.alert(
          'Erro',
          'Erro ao carregar as vagas, tente novamente mais tarde.',
        );
      })
      .finally(() => {
        setIsLoadingRepositories(false);
      });
  }

  async function loadJobs(): Promise<void> {
    // eslint-disable-next-line curly
    if (isLoadingJobs) return;
    setIsLoadingJobs(true);

    const getLabels = await factoryLabel();
    const getJobs = await factory(activeRepositories, page);

    setLabels([...labels, ...getLabels]);

    setJobs(
      [...jobs, ...getJobs].sort((a, b) => {
        if (a.updated_at < b.updated_at) {
          return 1;
        }
        if (a.updated_at > b.updated_at) {
          return -1;
        }
        return 0;
      }),
    );
    setPage(page + 1);
    setIsLoadingJobs(false);
  }

  function handleActiveRepository(nameRepository: string) {
    if (nameRepository === activeRepositories.key) {
      nameRepository = 'all';
    }

    setJobs([]);
    setLabels([]);
    setPage(1);

    switch (nameRepository) {
      case 'frontendbr/vagas':
        setActiveRepositories({name: 'frontend', key: nameRepository});
        break;
      case 'backend-br/vagas':
        setActiveRepositories({name: 'backend', key: nameRepository});
        break;
      default:
        setActiveRepositories({name: 'all'});
        break;
    }
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
            <MultiSelectComponent
              displayKey="name"
              items={labels}
              searchInputPlaceholderText="Filtrar vagas por Labels"
              selectText="Selecione as labels"
              uniqueKey="id"
              key={labels.length}
            />
            <ContainerRepository>
              <SubTitle>Repositórios com Vagas</SubTitle>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginBottom: 20}}
                data={repositories}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => handleActiveRepository(item.full_name)}>
                    <RepositoryCard
                      repositoryData={item}
                      active={activeRepositories}
                    />
                  </TouchableOpacity>
                )}
                onEndReachedThreshold={0.1}
                ListFooterComponent={
                  <Loading loading={isLoadingRepositories} />
                }
              />
            </ContainerRepository>
            <SubTitle>Vagas Recentes - {activeRepositories.name}</SubTitle>
          </>
        }
        ListFooterComponent={<Loading loading={isLoadingJobs} />}
      />
    </Container>
  );
};

export default Home;
