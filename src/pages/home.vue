<template>
<div class="container-home">
    <div class="center">
        <div id="show" v-show="ativo"><span>Não foi possivel encontrar !!!</span></div>
        <Title/>
        <Search/>
    </div>
</div>
</template>

<script>
import Title from '../components/Title'
import Search from '../components/Search'
export default {
    data() {
        return {
            ativo:false,

        }
    },
    components: {
        Title,
        Search,
    },

}
</script>

<style scoped>
.container-home {
    margin: auto;
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.title {
    text-align: center;
    display: flex;
    margin: auto;
}
.center {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 50%;
}
@media screen and (max-width: 425px) {
    .center{
        width: 90%;
    }
}
.mystyle {
    display: block
}

</style>