<template>
   <div class="title" >
        <span>Github</span>
        <span>Search</span>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.title span {
  font-family: Roboto Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 44px;
    line-height: 75px;
    padding: 0 10px 0 0;
}
.title span:nth-last-child(1){
  font-family: 'Roboto Mono', monospace;
    font-weight: 300;
    font-style: italic;
}
@media screen and (max-width: 425px) {
  .title > span {
    font-size: 30px;
  }
}
.show {
    display: block !important;
    text-align: center;
    font-size: 1em;
    color: rgb(104, 6, 6);
    font-weight: bold;
}
</style>