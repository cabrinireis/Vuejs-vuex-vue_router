import Axios from "axios";
import { vm } from '@/main'

// yourMutation (state, someRouteName) {
//   vm.$router.push({name: someRouteName})
// }

export default {
    state: {
        user:'',
        Repogithub: [],
        git: {
            nome:'tst'
        }
    },
    actions: {
        async addData ({commit}, data ) {
            console.log('c', data.gituser)
            commit('ADD_DATA',data);
            let user = data.gituser
            console.log('usuario',user)
            try {
                const Details = await Axios.get(`https://api.github.com/users/${user}`);
                const Reposgithub = await Axios.get(`https://api.github.com/users/${user}/repos`)
                commit('SET_Details',await Details);
                commit('SET_Reposgithub',await Reposgithub);
                vm.$router.push({name: 'result'})
                // console.log("V", this.$router)
            }catch (error) {
                document.getElementById('show').classList.add("show");
                console.error(error);
                console.log(error)
              }
            // console.log('repositorio',Reposgithub.data)
            // console.log('detalhesUsuario',Details.data)
            
        }
    },
    mutations: {
        SET_Reposgithub(state, Reposgithub){
            state.Repogithub = Reposgithub
            let ref = Reposgithub
            let prov = new Array
            ref.data.forEach(element => {
                if(element){
                    prov.push( element.description )
                    console.log('prov', prov.push( element.description ) )
                }
            });
            let arr = state.Repogithub.data
            arr.sort(function(a,b){
                if(a.stargazers_count < b.stargazers_count){
                    return 1
                }if( a.stargazers_count > b.stargazers_count){
                    return -1
                }
                return 0
            })
            state.Repogithub = arr
            console.log('arr', arr)

            // state.Repogithub = prov
            console.log(prov)
            console.log('j',state.Repogithub)
        },
        SET_Details(state, Details){
            state.user = Details
            // let refs = state.user.data
            state.user.data.name
                console.log(state.git)
                
                // state.user.avatar = refs.avatar_url,
                // state.user.organizations = refs.organizations_url,
                // state.user.localization = refs.localization,
                // state.user.followers = refs.followers

        },
        ADD_DATA(state, payload) {
            console.log('entrada',payload.user)
            // state.jokes.jokes.push(joke);
            console.log('trasff',state.user = payload.user);
        },
    },
    getters: {
        Repogithub: state =>state.Repogithub,
        user: state => state.user
    }
}