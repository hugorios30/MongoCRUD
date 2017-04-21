import _ from 'lodash';

class DetailClientController {
  /*@ngInject*/
  constructor($http, $state, $stateParams) {
    this.$http = $http;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.isUpdate = false;
    this.clientId = this.$stateParams.clientId;
    this.client = {
      name: '',
      lastName:'',
      phoneNumber:''
    };
  }

  $onInit() {
    const { clientId } = this;
    if(clientId){
      this.isUpdate = true;
      this.$http.get(`/api/clients/${clientId}`)
        .then((response) => {
          _.merge(this.client, response.data)
        });
    }

  }

  updateClient(){
    const { clientId } = this;
    this.$http.put('/api/clients/' + clientId, this.client)
      .then((res) => {
        this.$state.go('clients:list')
      })
  }

  saveClient(){
    if(this.isUpdate){
      this.updateClient();
    }else{
      this.createClient();
    }
  }

  createClient(){
    this.$http.post('/api/clients',this.client)
      .then((res) => {
        this.$state.go('clients:list')
      })

  }

}//FIN DE LA CLASE CLIENTCONTROLLER

export default angular.module('ClientsApp.client:detail',[]).component('detailClient', {
  template: require('./detailClient.html'),
  controller: DetailClientController
}).name
