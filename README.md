# Vue-Input

Vue Input with multiple functionality

# Install
```
npm i @simpli/vue-input moment class-transformer vue-multiselect
```

## Import
```typescript
import Vue from 'vue'
import VueInput from '@simpli/vue-input'

Vue.use(VueInput)
```
On your Scss:
```scss
@import "~@simpli/vue-input/scss/input";
```

## Basic InputText
Type can be 'text', 'mask', 'currency', 'textarea' or any other [HTML's input type](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input)
```html
<input-text
  v-model="myValue"
  type="text"
/>
```

## Other InputText properties
```html
<input-text
  v-model="myValue"
  type="text"
  label="Input Label"
  name="input-name"
  :required="ifTrueWillShowAnAsterisk"
  :selectall="ifTrueWillSelectTheTextOnFocus"
  inputClass="aClassToDecorateTheInput"
  mask="###/###.###-###"
  validation="required|email"
  @focus="focusEvent"
  @blur="BlurEvent"
/>
```
You can define the label as a Slot aswell

## Using a MaskPreset with InputText
Use one of the following on the property `maskPreset`:
- cnpj
- cpf
- date
- datetime
- phone
- phoneAlt
- rg
- zipcode
- zipcodeAlt

```html
<input-text
  v-model="myValue"
  type="text"
  maskPreset="phone"
/>
```

## Basic InputCheckbox
```html
<input-checkbox
  v-model="myValue"
/>
```

## Other InputCheckbox properties
```html
<input-checkbox
  v-model="myValue"
  label="Checkbox Label"
  labelClass="aClassForTheLabel"
  inputClass="aClassForTheInput"
  radio="ifTrueTheInputWillBeARadioButton"
  @focus="focusEvent"
  @blur="BlurEvent"
/>
```
You can define the label as a Slot aswell

## InputDate
TODO documentation

## InputSelect
TODO documentation
