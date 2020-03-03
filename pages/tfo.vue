<template>
  <div class="container">
    <navi />
    <section class="section">
      <button class="button is-primary is-large" v-on:click="choiceChord">EXEC</button>
      <div class="options is-size-4">
        <p class="button is-text is-size-4" v-on:click="toggleOptions">
          <span v-if="isShowOptions">▼</span><span v-else="isShowOptions">▲</span>Options
        </p>
        <div class="append" v-if="isShowOptions">
          <label class="">
            Length:
            <input type="number" name="length" v-model="length" class="input length">
          </label>
        </div>
      </div>
      <div class="columns is-multiline results">
        <div class="column is-one-third" v-for="chord in chords">
          <p class="notification is-info is-size-3">{{ chord }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navi from '~/components/Navi.vue'

const circleOfFifth= ['F', 'C', 'G', 'D', 'A', 'E', 'B', 'G♭', 'D♭', 'A♭', 'E♭', 'B♭'];
const alias = {7: 'F♯', 8: 'C♯', 9: 'G♯', 10: 'D♯', 11: 'A♯'};
const types = ['m7', '7', '△'];

export default {
  components: {
    Navi
  },
  data: function () {
    return {
      chords: [],
      kinds: {
      },
      isShowOptions: false,
      length: 4
    }
  },
  methods: {
    choiceChord: function () {
      this.chords.length = 0;
      for (let i = 0; i < this.length; i++) {
        const results = this.makeChordList();
        this.chords = this.chords.concat(results);
      }
    },
    toggleOptions: function () {
      this.isShowOptions = !this.isShowOptions;
    },
    makeChordList: function () {
      const startIndex = Math.floor(Math.random() * circleOfFifth.length);
      const results = [];
      console.log(startIndex);
      for (let i = 0; i < 3; i++) {
        let index = startIndex - i;
        if (index < 0) {
          index += circleOfFifth.length;
        }
        const note = circleOfFifth[index];
        const type = types[i];
        console.log(note, type);
        results.push(note + type);
      }

      return results;
    }
  },
}
</script>

<style>
.results {
  padding-top: 16px;
}
.append {
  margin-left: 1em;
}
label:nth-of-type(n+2) {
  margin-left: 1em;
}
sup {
  line-height: 0;
}
.length {
  width: 5em;
}
</style>
