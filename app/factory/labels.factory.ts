import {getLabels} from '@cuteapp/factory/labels.service';
import {ActiveRepository} from '@cuteapp/screens/Home';

export async function factoryLabel({name, key}: ActiveRepository) {
  switch (name) {
    case 'all':
      const frontendLabels = await getLabels('frontendbr/vagas');
      const backendLabels = await getLabels('backend-br/vagas');
      return [frontendLabels, backendLabels];
    default:
      return !!key && (await getLabels(key));
  }
}
