<template>
  <section class="section">
    <div class="container">
      <button class="button is-primary is-large" v-on:click="choiceChord">EXEC</button>
      <div class="options is-size-4">
        <p class="button is-text is-size-4" v-on:click="toggleOptions">
          <span v-if="isShowOptions">▼</span><span v-else="isShowOptions">▲</span>Options
        </p>
        <div class="append" v-if="isShowOptions">
          <label class="checkbox">
            Triad:
            <input type="checkbox" id="is-triad" v-model="kinds.isTriad">
          </label>
          <label class="checkbox">
            Seventh:
            <input type="checkbox" id="is-seventh" v-model="kinds.isSeventh">
          </label>
          <label class="">
            Length:
            <input type="number" name="length" v-model="length" class="input length">
          </label>
        </div>
      </div>
      <div class="columns is-multiline results">
        <div class="column is-one-quarter" v-for="chord in chords">
          <p class="notification is-info is-size-3" v-if="chord.length == 2">{{ chord[0] }}<sup>{{ chord[1] }}</sup></p>
          <p class="notification is-info is-size-3" v-else>{{ chord[0] }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Hero from '~/components/Hero.vue'

const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const triadTypes = ['', 'm', 'aug', 'dim'];
const seventhTypes = ['△7', 'm7', '7', 'm7^(♭5)']
const accidentals = ['', '♯', '♭'];


export default {
  components: {
    Hero
  },
  data: function () {
    return {
      chords: [],
      kinds: {
        isTriad: true,
        isSeventh: true,
      },
      isShowOptions: false,
      length: 4
    }
  },
  methods: {
    choiceChord: function () {
      this.chords.length = 0;
      for (let i = 0; i < this.length; i++) {
        let chord = this.makeChord();
        while (this.chords.includes(chord)) {
          chord = this.makeChord();
        }
        // パース
        chord = chord.split('^');
        this.chords.push(chord);
      }
    },
    toggleOptions: function () {
      this.isShowOptions = !this.isShowOptions;
    },
    makeChord: function () {
      const note = notes[Math.floor(Math.random() * notes.length)]
                   + accidentals[Math.floor(Math.random() * accidentals.length)];
      let types = [];
      if (this.kinds.isTriad) {
        types = types.concat(triadTypes);
      }
      if (this.kinds.isSeventh) {
        types = types.concat(seventhTypes);
      }
      const type = types[Math.floor(Math.random() * types.length)];

      return note + type;
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
