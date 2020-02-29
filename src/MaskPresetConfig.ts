import { Dictionary } from './Dictionary'
import { InputType } from './InputType'
import { MaskToken } from './MaskToken'

export abstract class MaskPresetConfig {
  abstract mask: string | string[]
  masked?: boolean
  tokens?: Dictionary<MaskToken>

  isValid: boolean | null = null
  value: string | null = null

  getterTransform(input: InputType) {
    return input || this.value
  }

  setterTransform(input: InputType): InputType | undefined {
    this.value = this.toString(input)
    this.isValid = this.value.length === 0 ? null : true
    return input
  }

  toString(val?: string | number | null): string {
    return val !== null && val !== undefined ? String(val) : ''
  }
}
