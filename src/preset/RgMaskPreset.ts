import { MaskPresetConfig } from '../MaskPresetConfig'
import { InputType } from '../InputType'
import { InputMaskPatterns } from '../index'

export class RgMaskPreset extends MaskPresetConfig {
  get mask(): string | string[] {
    return InputMaskPatterns.rg
  }

  setterTransform(input: InputType) {
    this.value = this.toString(input)

    if (this.value.length === 8 || this.value.length === 9) {
      this.isValid = true
      return this.value
    }

    this.isValid = this.value.length === 0 ? null : false
    return null
  }
}
