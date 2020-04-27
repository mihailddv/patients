<template lang="pug">
  .form-block
    input.form-input(
      :placeholder="text"
    )
</template>

<script>
export default {
  name: "FormInput",
  props: ['text'],
  data() {
    return {
    }
  },
}
</script>