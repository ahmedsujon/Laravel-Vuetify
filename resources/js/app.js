window.Vue = require('vue');
import vuetify from './vuetify';
import router from './router';


Vue.component('example-component', require('./components/app.vue').default);


const app = new Vue({
    el: '#app',
    vuetify,
    router,
});
