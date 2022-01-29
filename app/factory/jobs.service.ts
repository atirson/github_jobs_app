import api from '@cuteapp/services/api';

export async function getJobs(repository: string, page: number) {
  const response = await await api.get(
    `/repos/${repository}/issues?per_page=10&page=${page}`,
  );

  return response.data;
}
