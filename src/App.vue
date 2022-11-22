<template>
  <template v-if="!allDone">

    <form>
      <app-field
        v-for="(field, i) in info"
        :key="i"
        :title="field.label"
        :value="field.value"
        :valid="field.valid"

        @input="onInput1(i,$event)"

      ></app-field>

      <app-progress :progress="scrlVol"/>
    </form>
    <hr>
    <button class="btn btn-primary" :disabled="!(scrlVol>=99.9)" @click="showDialog=true;">Send Data</button>
  </template>
  <h2 v-else>All done</h2>

  <vue-final-modal v-model="showDialog" classes="modal d-block" content-class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Data is correct?</h5>
        <button type="button" class="btn-close" @click="showDialog=false"></button>
      </div>
      <div class="modal-body">
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
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="showDialog=false">Canel</button>
        <button type="button" class="btn btn-primary" @click="showDialog=false; allDone=true;">Ok</button>
      </div>
    </div>
  </vue-final-modal>

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
      showDialog: false,
      allDone: false,
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
