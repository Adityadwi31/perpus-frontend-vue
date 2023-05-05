import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// dashboard
import Dashboard from '../views/VueDashboard.vue'
// siswa
import IndexSiswa from '../components/siswa/IndexSiswa.vue'
import TambahSiswa from '../components/siswa/TambahSiswa.vue'
import EditSiswa from '../components/siswa/EditSiswa.vue'
// buku
import IndexBuku from '../components/buku/IndexBuku.vue'
import TambahBuku from '../components/buku/TambahBuku.vue'
import EditBuku from '../components/buku/EditBuku.vue'
// peminjaman
import IndexPeminjaman from '../components/peminjaman/IndexPeminjaman.vue'
import TambahPeminjaman from '../components/peminjaman/TambahPeminjaman.vue'
// detail peminjaman
import TambahDetail  from '../components/peminjaman/TambahDetail.vue'
// login
import Login from '../views/LoginView.vue'


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
  },
  {
    name: 'siswa',
    path: '/indexsiswa',
    component: IndexSiswa
  },
  {
    name: 'tambahsiswa',
    path: '/tambahsiswa',
    component: TambahSiswa
  },
  {
    name: 'editsiswa',
    path: '/editsiswa/:id',
    component: EditSiswa
  },
  {
    name: 'buku',
    path: '/indexbuku',
    component: IndexBuku
  },
  {
    name: 'tambahbuku',
    path: '/tambahbuku',
    component: TambahBuku
  },
  {
    name: 'editbuku',
    path: '/editbuku/:id',
    component: EditBuku
  },
  {
    name: 'peminjaman',
    path: '/indexpeminjaman',
    component: IndexPeminjaman
  },
  {
    name: 'tambahpeminjaman',
    path: '/tambahpeminjaman',
    component: TambahPeminjaman
  },
  {
    name: 'tambahdetail',
    path: '/tambahdetail',
    component: TambahDetail 
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const Auth = JSON.parse(localStorage.getItem('Auth'));
router.beforeEach((to,from,next) => {
if(to.name !=='login' && !Auth) next({ name: 'login' })
if(to.name =='login' && Auth) next({ name: 'dashboard' })
else next()
});

export default router

