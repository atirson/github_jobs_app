import {ActiveRepository} from '@cuteapp/screens/Home';
import api from '@cuteapp/services/api';

export async function getLabels({name}: ActiveRepository) {
  const response = await await api.get('/devjobs/labels');

  if (name === 'backend') {
    return [...response.data.backendsLabels];
  } else if (name === 'frontend') {
    return [...response.data.frontendsLabels];
  } else if (name === 'react') {
    return [...response.data.reactLabels];
  }

  return [
    ...response.data.backendsLabels,
    ...response.data.frontendsLabels,
    ...response.data.reactLabels,
  ];
}
