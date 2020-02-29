import { MaskPresetConfig } from '../MaskPresetConfig'
import { InputType } from '../InputType'
import moment, { Moment } from 'moment'
import { InputMaskPatterns } from '../index'

export class DateMaskPreset extends MaskPresetConfig {
  get mask(): string | string[] {
    return InputMaskPatterns.date
  }

  masked = true

  getterTransform(input: InputType) {
    if (input) {
      const value = this.toString(input)
      return this.toDate(value)
    }
    return this.value
  }

  setterTransform(input: InputType) {
    this.value = this.toString(input)
    const date = moment(this.value, InputMaskPatterns.dateFormat)

    if (this.value.length < 10) {
      this.isValid = this.value.length === 0 ? null : false
      return null
    } else if (date.isValid()) {
      this.isValid = true
      return date.format()
    }
  }

  toDate(date?: string | Date | Moment | null) {
    return date && moment(date).isValid() ? moment(date).format(InputMaskPatterns.dateFormat) : ''
  }
}
