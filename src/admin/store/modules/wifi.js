import { getWifis, createWifi, updateWifi, deleteWifi } from '@/admin/api/wifi'

const wifiStoreModule = {
  state: {
    wifis: [],
    meta: {
      pagination: {}
    }
  },
  actions: {
    GetWifis: async ({ commit }, filterQuery) => {
      const res = await getWifis(filterQuery)

      commit('SET_WIFIS', res.data)
      commit('SET_WIFI_META', res.meta)
    },
    CreateWifi: async ({ commit }, wifiParams) => {
      await createWifi(wifiParams)
    },
    UpdateWifi: async ({ commit }, wifiParams) => {
      await updateWifi(wifiParams)
    },
    DeleteWifi: async ({ commit }, id) => {
      await deleteWifi(id)
    }
  },
  mutations: {
    SET_WIFIS: (state, wifis) => {
      state.wifis = wifis
    },
    SET_WIFI_META: (state, meta) => {
      state.meta = meta
    }
  }
}

export default wifiStoreModule