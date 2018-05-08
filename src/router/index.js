import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Posts from '@/components/Posts'
// import Comments from '@/components/Comments'
import Albums from '@/components/Albums'
// import Photos from '@/components/Photos'
// import Todos from '@/components/Todos'
// import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/posts',
    //   name: 'Posts',
    //   component: Posts
    // },
    // {
    //   path: '/comments',
    //   name: 'Comments',
    //   component: Comments
    // },
    {
      path: '/albums',
      name: 'Albums',
      component: Albums
    },
    // {
    //   path: '/photos',
    //   name: 'Photos',
    //   component: Photos
    // },
    // {
    //   path: '/todos',
    //   name: 'Todos',
    //   component: Todos
    // },
    // {
    //   path: '/users',
    //   name: 'Users',
    //   component: Users
    // }
  ]
})
