export interface MaskToken {
  pattern?: RegExp
  transform?: (v: string) => string
  escape?: boolean
}
