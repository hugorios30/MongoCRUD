'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('clients:list', {
    url: '/clients',
    template: '<list-clients></list-clients>'
  });

  $stateProvider.state('clients:new', {
    url: '/clients/new',
    template: '<detail-client></detail-client>'
  });

  $stateProvider.state('clients:update', {
    url: '/clients/:clientId',
    template: '<detail-client></detail-client>'
  });
}
