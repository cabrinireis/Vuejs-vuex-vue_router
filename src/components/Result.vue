<template>
<div id="container-result">
<div class="page">
	<div class="item logo" >
        <router-link to="/">
        <Title  />
        </router-link>
    </div>
	<div class="item header">
        <Search />
    </div>
    <div class="item photo">
	<div  v-if="user">
        <img :src="user.data.avatar_url" alt="">
        <ul class="list-icon">
        <li> <i class="material-icons">business_center</i><span>{{user.data.company}}</span></li>
        <li><i class="material-icons">edit_location</i><span>{{user.data.location}}</span> </li>
        <li><i class="material-icons">all_inclusive</i><span>{{user.data.followers}}</span> </li>
        <li><i class="material-icons">insert_drive_file</i><span>{{user.data.public_repos}}</span> </li>
        </ul>
        
    </div>
        
    </div>
	<div class="item main list-repo "   >
        <ul  v-for="(item, index) in Repogithub" :key="index">
            <li class="item main title-repo"  >
                {{ item.name }}
                </li>
                <li>  <span>{{item.description}}  </span>   </li>
                <span><i class="large material-icons">star</i>{{item.stargazers_count}}  </span>
        </ul>
    </div>
</div>
</div>
</template>

<script>
import Search from './Search';
import Title from './Title'
import { mapGetters } from "vuex";

export default {
    components: {
        Search,
        Title
    },
    data() {
        return {
            message: '',
            detalhes: [] 
        }
    },
     computed: {
        ...mapGetters(['Repogithub']),
        ...mapGetters(['user']),
    },
    
}
</script>

<style scoped>
#container-conteudo,
.conteudo {
    align-items: center;
}
.container-grid {
    display: grid;
}
.conteudo {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.grid-a{
    background-color: aliceblue;
    width: 300px;
    height: 300px;
}



.page {
	display: grid;
	padding: 10px;
	font-family: Arial, sans-serif;
	grid-gap: 10px;
	grid-template-areas:
		' logo logo header header header header'
		'photo main main main main main';
	/* background-color: #eee; */
}
@media screen and (max-width: 425px) {
    .page {
        grid-template-areas:
        'logo logo logo logo logo logo'
        ' header header header header header header'
        'photo photo photo photo photo photo'
		'main main main main main main';
    }
}
.item {
	padding: 10px 0;
	text-align: center;
	/* background-color: #ccc; */
}

.logo { 
    grid-area: logo;
    text-align: left; 
    }
.header { grid-area: header;
          margin: auto 30px; }
.photo { 
    grid-area: photo;
    width: 200px;
    height: 200px; }
.main { grid-area: main; }

img{
    width: 100%;
    height: auto;
}
.list-repo {
    margin: 0 30px;
}
.list-repo ul> li{
    text-align: left;
}
ul {
    text-align: left;
}
.title-repo {
    font-size: 2rem;
}
.list-icon {
    display: inline-flex;
    flex-direction: column;
    margin: 29px auto;
}
i {
    padding: 0 10px;
}
.logo > a {
    color: initial;
}
.logo,
.photo {
    margin: 0 30px;
}

@media screen and (max-width: 425px) {
    .header{
        margin: 0;
    }
    .photo{
        width: 100%;
        height: auto;
        margin: 0;
    }
    .list-icon{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .list-icon > li,
    span{
        display: flex;
        align-items: center;
    }
}
</style>