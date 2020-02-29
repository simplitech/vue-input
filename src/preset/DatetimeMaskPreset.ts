import { MaskPresetConfig } from '../MaskPresetConfig'
import { InputType } from '../InputType'
import moment, { Moment } from 'moment'
import { InputMaskPatterns } from '../index'

export class DatetimeMaskPreset extends MaskPresetConfig {
  get mask(): string | string[] {
    return InputMaskPatterns.datetime
  }

  masked = true

  isDatetime: boolean | null = null

  getterTransform(input: InputType) {
    if (input) {
      const value = this.toString(input)
      if (this.isDatetime === false) {
        return this.toDate(value)
      } else {
        return this.toDatetime(value)
      }
    }
    return this.value
  }

  setterTransform(input: InputType) {
    this.value = this.toString(input)
    const date = moment(this.value, InputMaskPatterns.datetimeFormat)

    if (this.value.length !== 10 && this.value.length !== 11 && this.value.length < 16) {
      this.isValid = this.value.length === 0 ? null : false
      this.isDatetime = null
      return null
    } else if (date.isValid()) {
      this.isDatetime = !(this.value.length === 10 || this.value.length === 11)
      this.isValid = true
      return date.format()
    }
  }

  toDate(date?: string | Date | Moment | null) {
    return date && moment(date).isValid() ? moment(date).format(InputMaskPatterns.dateFormat) : ''
  }

  toDatetime(date?: string | Date | Moment | null) {
    return date && moment(date).isValid() ? moment(date).format(InputMaskPatterns.dateFormat) : ''
  }
}
