export default {
    namespaced: true,

    state: {
        user:'teste',
    },
    mutations: {
        eventoclick(state,payload){
            state.user = payload
            state.tarefas.push(payload)
        }
    },
    actions: {

    },
    getters: {

    }
}