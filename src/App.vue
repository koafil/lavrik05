<template>
  <form>
    <app-field
      v-for="(field, i) in info"
      :key="i"
      :title="field.label"
      :value="field.value"
      :valid="field.valid"

      @input="onInput1(i,$event)"

    ></app-field>

    <app-progress :progress="scrlVol" />
  </form>
  <hr>
  <button class="btn btn-primary" :disabled="!(scrlVol>=99.9)" @click="showTable=!showTable">Send Data</button>

  <div v-if="showTable">
    <table>
      <tbody>
      <tr
        v-for="(field, i) in info"
      >
        <th>{{ field.label }}</th>
        <td>{{ field.value }}</td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import AppField from './components/AppField'
import AppProgress from './components/AppProgress'

export default {
  components: {
    AppField, AppProgress
  },
  data() {
    return {
      showTable: false,
      info: [
        {
          label: 'Name',
          value: 'Начальное значение',
          pattern: /^[a-zA-Zа-яА-Я ]{5,30}$/
        },
        {
          label: 'Phone',
          value: '123',
          pattern: /^[0-9]{7,14}$/
        },
        {
          label: 'Email',
          value: '',
          pattern: /.+/
        },
        {
          label: 'Some Field 1',
          value: '',
          pattern: /.+/
        },
        {
          label: 'Some Field 2',
          value: '',
          pattern: /.+/
        }
      ]
    }
  },
  methods: {
    onInput1(i, val) {
      this.info[i].value = val;
      this.info[i].valid = this.info[i].pattern.test(val.trim());
      console.log(val);
    }
  },
  computed: {
    fieldsDone() {
//        return this.info.reduce((total,field)=>total+(field.valid? 1: 0),0);
      return this.info.filter(field => field.valid).length;
    },
    scrlVol() {
      return this.fieldsDone / this.info.length * 100;
    }
  },
  created() {
    this.info.forEach(item => {
      item.valid = item.pattern.test(item.value.trim());
    })
  }
}
</script>

<style>
.wrapper {
  max-width: 800px;
  margin: 1em auto;
  background-color: #91c1cc;
  padding: 1em;
}

.content {
  height: 300px;
  overflow: auto;
  background-color: #d7ecf3;
}
</style>
