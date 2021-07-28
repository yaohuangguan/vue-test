import Vue from 'vue';
import Vuetify, {
  VRow,
  VCol,
  VTextField,
  VTooltip,
  VCheckbox,
  VSelect,
  VAutocomplete,
  VCombobox,
  VDatePicker,
  VTimePicker,
} from 'vuetify/lib';
import {
  Ripple, Intersect, Touch, Resize,
} from 'vuetify/lib/directives';


Vue.use(Vuetify, {
  components: {
    VRow,
    VCol,
    VTextField,
    VTooltip,
    VCheckbox,
    VSelect,
    VAutocomplete,
    VCombobox,
    VDatePicker,
    VTimePicker,
  },
  directives: {
    Ripple, Intersect, Touch, Resize,
  },
});

export default new Vuetify({
  theme: {},
});
