import api from '@cuteapp/services/api';

export async function getLabels(repository: string) {
  const response = await await api.get(
    `/repos/${repository}/labels?per_page=1000&page=1`,
  );

  return response.data;
}
