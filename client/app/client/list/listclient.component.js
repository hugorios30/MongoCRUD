import angular from 'angular';
import DeleteModalController from './deleteModal.controller'

class ListClientController {
  /*@ngInject*/
  constructor($http,$uibModal) {
    this.$http = $http;
    this.$uibModal = $uibModal;
    this.listClients=[];
  }

  $onInit() {
    this.$http.get('/api/clients')
      .then(response => {
        this.listClients = response.data;
      });
  }

  deleteClient(clientId){
    this.$uibModal.open({
      template: require('./deleteModal.html'),
      controller: DeleteModalController,
    })
  }


}//FIN DE LA CLASE CLIENTCONTROLLER

export default angular.module('ClientsApp.clients:list',[])
  .component('listClients', {
    template: require('./listClients.html'),
    controller: ListClientController
  }).name
