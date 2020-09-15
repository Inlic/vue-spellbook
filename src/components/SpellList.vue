<template>
  <ul>
    <li @click="setActive(spell)" v-for="spell in spells" :key="spell.id">{{spell.name}}</li>
  </ul>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  methods: {
    setActive(spell){
      this.$store.dispatch("setActiveSpell", spell)
    }
  },
  computed: {
    spells(){
      return this.$store.state.spellList
    }
  }
  
}
</script>

<style>

</style>