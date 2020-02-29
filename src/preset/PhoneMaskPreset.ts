import { MaskPresetConfig } from '../MaskPresetConfig'
import { InputMaskPatterns } from '../index'

export class PhoneMaskPreset extends MaskPresetConfig {
  get mask(): string | string[] {
    return [InputMaskPatterns.phone, InputMaskPatterns.phoneAlt]
  }
}
