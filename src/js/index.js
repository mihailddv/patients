import Vue from 'vue';
import partientsVue from './patients';

require('es6-promise').polyfill();
require('isomorphic-fetch');
require('nodelist-foreach-polyfill');

Vue.component('modal', {
  template: '#modal-template',
});

partientsVue();
