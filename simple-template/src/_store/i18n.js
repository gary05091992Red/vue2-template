
const state = {
    lang: 'en',
    language: null
}
import i18n from '@/lang/index'


const actions = {
    async setLangNew({ commit }, payload) {
        // console.log(i18n)
        {
            try {
                const res = await import(`@/lang/${payload}.json`)
              
                i18n.setLocaleMessage(payload, res.default);
                i18n.locale = payload;
                // i18n.messages = {payload:{
                //     res
                // }}
                console.log(i18n);
                commit("SET_LANG", payload);
            }
            catch (e) {
                console.log(e)
            }
        }
    }
}

const mutations = {
    SET_LANG(state, payload) {
        // i18n.locale = payload
        state.language = payload;
    }
}

export {
    state,
    actions,
    mutations,
}