<template>
  <h1>{{spell.name}}</h1>
</template>

<script>
export default {
  name: "active-spell",
  computed:{
    spell(){
      return this.$store.state.activeSpell
    }
  }
}
</script>

<style>

</style>