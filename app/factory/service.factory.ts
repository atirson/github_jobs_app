import {getJobs} from '@cuteapp/factory/jobs.service';
import {ActiveRepository} from '@cuteapp/screens/Home';

export async function factory({name, key}: ActiveRepository, page: number) {
  switch (name) {
    case 'all':
      const frontendJobs = await getJobs('frontendbr/vagas', page);
      const backendJobs = await getJobs('backend-br/vagas', page);
      return [...frontendJobs, ...backendJobs];
    default:
      return !!key && (await getJobs(key, page));
  }
}
