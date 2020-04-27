import Vue from 'vue';
import Formcheckbox from '../components/form/FormCheckbox.vue';
import Formradio from '../components/form/FormRadio.vue';
import Forminput from '../components/form/FormInput.vue';
import Searchitem from '../components/ui/SearchItem.vue';
import Bonus from '../components/ui/Bonus.vue';
import { showModals, closeModals } from './modules/modals';

export default function partientsVue() {
  new Vue({
    el: '#patients',
    components: {
      Formcheckbox,
      Formradio,
      Forminput,
      Searchitem,
      Bonus,
    },
    data: {
      orderData: [],
      modals: {
        isModalOrder: false,
      },
    },
    created() {
      this.fetchOrderData();
    },
    methods: {
      async fetchOrderData() {
        try {
          const url = '/data/order.json';
          await fetch(url).then((response) => {
            const data = response.json().then((json) => {
              this.orderData = json;
            });
            return data;
          });
        } catch (error) {
          console.log(error);
        }
      },
      showModal(modal) {
        if (modal === 'modalOrder') {
          this.modals.isModalOrder = true;
        }
        showModals();
      },
      closeModal(modal) {
        if (modal === 'modalOrder') {
          this.modals.isModalOrder = false;
        }
        closeModals();
      },
      sendOrder() {
        this.modals.isModalOrder = false;
        closeModals();
      },
    },
  });
}
