<template>
  <ul>
    <li @click="setActive(spell)" v-for="spell in myspells" :key="spell._id">{{spell.name}}</li>
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
    myspells(){
      return this.$store.state.mySpellList
    }
  }
  
}
</script>

<style>

</style>