<template>
  <div>get</div>
</template>

<script>
import axios from "axios";
export default {
          data(){return{
                    news:{
                              name:'',
                              id:'',
                              city:''
                    }
          }},
  created: {
    delete() {
      axios
        .post("path",{name:this.news.name,id:this.news.id,city:this.news.city} )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>