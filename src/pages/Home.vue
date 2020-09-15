<template>
  <div id="home" class="container">
    <div class="row">
      <div class="col-3">
        <spell-list/>
      </div>
      <div class="col-6">
        <active-spell/>
      </div>
      <div class="col-3">
        <my-spells/>
      </div>
    </div>
  </div>
</template>

<script>
import SpellList from "../components/SpellList.vue"
import ActiveSpell from "../components/ActiveSpell.vue"
import MySpells from "../components/MySpells.vue"
export default {
  name: "home",
  mounted(){
    this.$store.dispatch("getSpells")
    this.$store.dispatch("getMySpells")
  },
  computed: {
    spells(){
      return this.$store.state.spellList
    },
    myspells(){
      return this.$store.state.mySpellList
    }
  },
  components: {
    MySpells,
    ActiveSpell,
    SpellList
  }

}
</script>

<style>

</style>