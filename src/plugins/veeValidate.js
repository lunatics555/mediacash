import Vue from 'vue'
import {
  extend,
  ValidationProvider,
  ValidationObserver,
  localize,
  validate,
} from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import * as rules from 'vee-validate/dist/rules'
import fr from 'vee-validate/dist/locale/fr.json'

extend('email', {
  ...email,
  message: "L'email n'est pas valide",
})

extend('required', {
  ...required,
  message: 'Ce champ est obligatoire',
})

extend('confirmedBy', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
  message: 'le mot de passe confirmé incorrect',
})

// install rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})

localize('fr', fr)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
