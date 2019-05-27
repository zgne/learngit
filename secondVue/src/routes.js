import AddBlog from './components/AddBlog.vue'
import ShowBlog from './components/ShowBlogs.vue'
import SingleBlog from './components/SingleBlog.vue'
import EditBlog from './components/EditBlog.vue'
import Test from './components/Test.vue'

export default [
  {path: "/", component: ShowBlog},
  {path: "/add", component: AddBlog},
  {path:"/blog/:id",component:SingleBlog},
  {path:"/edit/:id",component:EditBlog},
  {path:"/test",component:Test}
]
