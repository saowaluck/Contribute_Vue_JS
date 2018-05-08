<template>
  <div>
    <div>
      <template>
        <button @click="feth">todos</button>
      </template>
    </div>
    <div class="columns is-multiline ">
      <template v-if="todos"  v-for="todo in todos">
        <div class="column is-2" :class="todo.color" :key="todo.id">
          U.{{todo.userId}}[{{todo.id}}]
          <br>{{todo.title}}
        </div>
      </template>
    </div>

  </div>
</template>
<script>
import axios from 'axios'
export default{
  data (){
    return {
      item: null,
      todos: []
    }
  },
  methods: {
    async feth(){
      let {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
      for (let index = 0; index < data.length; index++) {
        const element = data[index]
        if(element.completed === false)
          element.color = {'has-text-danger':true}
        else
          element.color = {'has-text-success':true}
        this.todos.push(element)
      }

    }
  }
}
</script>
