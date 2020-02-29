import { MaskPresetConfig } from '../MaskPresetConfig'
import { InputMaskPatterns } from '../index'

export class ZipcodeMaskPreset extends MaskPresetConfig {
  get mask(): string | string[] {
    return [InputMaskPatterns.zipcode, InputMaskPatterns.zipcodeAlt]
  }
}
