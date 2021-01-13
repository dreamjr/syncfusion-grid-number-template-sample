<template>
  <div class="hello">
    {{numberData}}
    <br>
    <input-number v-model="numberData" width="100px"></input-number>
  </div>
</template>

<script>
  import InputNumber from './common/InputNumber';

export default {
  name: 'Main',
  components: {InputNumber},
  data () {
    return {
      numberData: 111
    }
  }
}
</script>
