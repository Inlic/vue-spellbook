<template>
<div id="active-spell">
  <h1>{{spell.name}}</h1>
  <p>{{spell.desc}}</p>
  </div>
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