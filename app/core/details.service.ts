import api from '@cuteapp/services/api';

export async function getDetails() {
  const response = await api
    .get('/devjobs/details')
    .then(result => result)
    .catch(error => console.log(error));

  return response?.data === []
    ? 'Error'
    : [
        response?.data.backendsDetails,
        response?.data.frontendsDetails,
        response?.data.reactDetails,
      ];
}
