<template lang="pug">
  label.form-radio
    input.form-radio__input(type="radio" name="smoking")
    .form-radio__btn
    .form-radio__text {{ text }}
</template>

<script>
export default {
  name: "FormRadio",
  props: ['text'],
  data() {
    return {
    }
  },
}
</script>