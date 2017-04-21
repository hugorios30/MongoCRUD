'use strict';

import angular from 'angular';

export default angular.module('clientsAppApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
