import angular from 'angular';
import uiRouter from 'angular-ui-router';
import listClient from './list/listclient.component';
import detailClient from './detail/detail.component';
import routing from './client.routes';



export default angular.module('ClientsApp.client', [uiRouter, listClient,detailClient])
  .config(routing)
  .name;
