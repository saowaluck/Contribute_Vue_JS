<template>
  <div>
      <button @click="fetch">show data</button>
      <div v-for="photo in photos">
        <div class="columns">
        <div class="column">
            <img :src= "photo.thumbnailUrl"/>
            <h4>{{photo.title}}</h4>
        </div>
      </div>
</div>
      
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Photo",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      photos: []
    };
  },
  methods: {
    async fetch() {
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      console.log(data);
      this.photos = data;
    }
  }
};
</script>