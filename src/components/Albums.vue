<template>
   <div class="columns">
      <div class="column is-4 is-offset-4">
         <button class="button is-primary is-rounded is-large is-focused" @click="fetch">Check Albums</button>
         <template>
            <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
               <template v-for="album in albums">
                  <div :key="album.id">
                     <tr>
                        <td>
                           <p class="title is-2">{{ album.userId}}</p>
                        </td>
                        <td>
                           <p class="title is-2">{{ album.id}}</p>
                        </td>
                        <td>
                           <p class="title is-2">{{ album.title}}</p>
                        </td>
                     </tr>
                  </div>
               </template>
            </table>
         </template>

  
                 
      </div>
   </div>
</template>
<script>
   import axios from 'axios'
   export default {
       data () {
           return {
               album: {
                   userId: "",
                   id: "",
                   title: ""
               },
           albums: []
           }
       },
       methods : {
           async fetch () {
               let {data} = await axios.get('https://jsonplaceholder.typicode.com/albums')
               console.log(data)
               this.albums = data

   
           }
       }
   }
</script>