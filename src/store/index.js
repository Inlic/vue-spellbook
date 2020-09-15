import Vue from 'vue'
import Vuex from 'vuex'
import { api } from "../services/AxiosService"

Vue.use(Vuex)

const spellkey = "spells"
const myspellkey = "ben/spells"

export default new Vuex.Store({
  state: {
    spellList: [],
    activeSpell: {},
    mySpellList: []
  },
  mutations: {
    setActiveSpell(state, spell){
      state.activeSpell = spell
    },
    setSpellList(state, spells){
      state.spellList = spells
    },
    setMySpells(state,spells){
      state.mySpellList = spells
    }
  },
  actions: {
    async setActiveSpell({commit},spell){
      let res = await api.get('spells/'+spell.id)
      commit("setActiveSpell",res.data)
      console.log(res.data)
    },
    async getSpells({commit}){
      let res = await api.get('spells')
      commit("setSpellList", res.data)
    },
    async getMySpells({commit}){
      let res = await api.get('ben/spells')
      commit("setMySpells", res.data.data)
    }
  },
  modules: {
  }
})

