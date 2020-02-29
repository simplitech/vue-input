import Vue from 'vue'
import { InputCheckbox } from './InputCheckbox'
import { InputDate } from './InputDate'
import { InputSelect } from './InputSelect'
import { InputText } from './InputText'
import { MaskPatternConfig } from './MaskPatternConfig'

let InputMaskPatterns: MaskPatternConfig = {
  cnpj: '##.###.###/####-##',
  cpf: '###.###.###-##',
  date: '##/##/####',
  dateFormat: 'DD/MM/YYYY',
  datetime: '##/##/#### ##:##',
  datetimeFormat: 'DD/MM/YYYY HH:mm',
  phone: '(##) ####-####',
  phoneAlt: '(##) #####-####',
  rg: '##.###.###-#',
  zipcode: '#####-###',
  zipcodeAlt: '#####-###',
}

export default class ModalWrapper {
  static install(maskPatterns?: MaskPatternConfig) {
    if (maskPatterns) {
      InputMaskPatterns = maskPatterns
    }

    Vue.component(InputCheckbox.name, InputCheckbox)
    Vue.component(InputDate.name, InputDate)
    Vue.component(InputSelect.name, InputSelect)
    Vue.component(InputText.name, InputText)
  }
}

export { InputCheckbox, InputDate, InputSelect, InputText, InputMaskPatterns, MaskPatternConfig }
