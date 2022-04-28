const template = `
  <div class="input-group input-group--text" :class="{ 'input-group--required': required,
   'input-group--invalid': isInvalid }">
    <label :for="\`input-text\${_uid}\`" class="input-group__label">
      {{ label }}
      <slot></slot>
    </label>
    <div class="input-group__input-container" :class="containerClass">
      <input :id="\`input-text\${_uid}\`"
             type="datetime-local"
             v-model="valueAsInput"
             v-validate="validation"
             :name="computedName"
             class="input-group__input input-group__input--date"
             :class="inputClass"
             :min="min"
             :max="max"
             v-bind="vBind"
             v-on="vOn"
             @focus="focusEvent"
             @blur="blurEvent"
             pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" required
      />
      <a class="input-group__clear" v-show="cleanable && valueAsInput" @click="emitEmpty"></a>
    </div>
    <transition name="slide">
      <div class="input-group__error-message" v-if="isInvalid">{{ errors.first(label) }}</div>
    </transition>
  </div>
`

import { Component, Prop, Vue, Model, Emit, Inject } from 'vue-property-decorator'
import moment from 'moment'

@Component({ template })
export class InputDateTime extends Vue {
  @Prop({ type: String, default: null })
  value!: string | null

  @Prop({ type: String, default: null })
  label!: string | null

  @Prop({ type: String })
  name?: string

  @Prop({ type: Boolean, default: false })
  required!: boolean

  @Prop({ type: String, default: '' })
  inputClass!: string

  @Prop({ type: String, default: '' })
  containerClass!: string

  @Prop({ type: String, default: null })
  min!: string

  @Prop({ type: String, default: null })
  max!: string

  @Prop({ type: Boolean, default: true })
  cleanable!: boolean

  @Prop({ default: null })
  validation!: any

  @Inject({ from: 'validator', default: null })
  validator: any

  inputFromDatetime(datetime: string | null) {
    if (!datetime) return null

    const datetimeInputFormat = moment(datetime).format('YYYY-MM-DDTHH:mm')

    return datetimeInputFormat
  }

  datetimeFromInput(datetime: string | null) {
    if (!datetime) return null

    const datetimeMoment = moment(datetime)

    if (datetimeMoment.year() < 1000 || datetimeMoment.year() > 9999) return null

    return datetimeMoment
  }

  get valueAsInput() {
    return this.value ? this.inputFromDatetime(this.value) : null
  }

  set valueAsInput(val) {
    if (!val) return

    const datetime = this.datetimeFromInput(val)

    const datetimeRequestFormat = moment(datetime).format()

    if (datetime) this.$emit('input', datetimeRequestFormat)
  }

  get isInvalid() {
    // @ts-ignore
    return this.errors.first(this.label)
  }

  get computedName() {
    return this.name || this.label || '-'
  }

  created() {
    if (this.validator) {
      // @ts-ignore
      this.$validator = this.validator
    }
  }

  get listeners() {
    const listeners = { ...this.$listeners }
    delete listeners.input
    return listeners
  }

  get vBind() {
    return { ...this.$attrs }
  }

  get vOn() {
    return { ...this.listeners }
  }

  emitEmpty() {
    this.$emit('input', null)
  }

  focusEvent() {
    this.$emit('focus')
  }

  blurEvent() {
    this.$emit('blur')
  }
}
