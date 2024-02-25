import Vue from 'vue';
import { VueEditor } from "vue2-editor";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import VueScrollTo from 'vue-scrollto'
import dragVerify from 'vue-drag-verify'

Vue.use(VueScrollTo)
Vue.use(VueEditor);
Vue.use(DatePicker);
Vue.component('drag-verify', dragVerify);