import angular from 'angular';

class ListClientController {
  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
    this.newClient = {
      name: '',
      lastName:'',
      phoneNumber:''
    };
    this.listClients=[];
  }

  $onInit() {
    this.$http.get('/api/clients')
      .then(response => {
        this.listClients = response.data;
      });
  }

  destroyClient(){
    alert("You're about to delete this client");
  }

  changeClient(){
    alert("You're about to update this client");
  }

  createClient(){
    this.$http.post('/api/clients',this.newClient)
      .then((res) => {
        alert(JSON.stringify(res))
      })

  }

}//FIN DE LA CLASE CLIENTCONTROLLER

export default angular.module('ClientsApp.clients:list',[])
  .component('listClients', {
    template: require('./listClients.html'),
    controller: ListClientController
  }).name
