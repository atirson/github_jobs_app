import {ActiveRepository} from '@cuteapp/screens/Home';
import api from '@cuteapp/services/api';

export async function getJobs({name}: ActiveRepository, page: number) {
  const response = await await api.get(`/devjobs?per_page=10&page=${page}`);

  if (name === 'backend') {
    return [...response.data.backends];
  } else if (name === 'frontend') {
    return [...response.data.frontends];
  } else if (name === 'react') {
    return [...response.data.react];
  }

  return [
    ...response.data.backends,
    ...response.data.frontends,
    ...response.data.react,
  ];
}
