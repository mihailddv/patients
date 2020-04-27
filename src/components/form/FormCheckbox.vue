<template lang="pug">
  label.form-checkbox
    input.form-checkbox__input(type="checkbox" name="men")
    .form-checkbox__btn
    .form-checkbox__text {{ text }}
</template>

<script>
export default {
  name: "FormCheckbox",
  props: ['text'],
  data() {
    return {
    }
  },
}
</script>