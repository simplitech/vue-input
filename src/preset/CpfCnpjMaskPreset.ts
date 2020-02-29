import { MaskPresetConfig } from '../MaskPresetConfig'
import { InputType } from '../InputType'
import { InputMaskPatterns } from '../index'

export class CpfCnpjMaskPreset extends MaskPresetConfig {
  get mask(): string | string[] {
    return [InputMaskPatterns.cpf, InputMaskPatterns.cnpj]
  }

  setterTransform(input: InputType) {
    this.value = this.toString(input)

    if (this.value.length === 11 || this.value.length === 14) {
      this.isValid = true
      return this.value
    }

    this.isValid = this.value.length === 0 ? null : false
    return null
  }
}
