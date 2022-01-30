import {getLabels} from '@cuteapp/factory/labels.service';

export async function factoryLabel() {
  const frontendLabels = await getLabels('frontendbr/vagas');
  const backendLabels = await getLabels('backend-br/vagas');
  return [...frontendLabels, ...backendLabels];
}
