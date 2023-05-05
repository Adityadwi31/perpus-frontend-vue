<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">            
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Data Anggota</h1>
                        </div>          
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-primary card-outline">
                                <div class="card-body">
                                    <router-link class="btn btn-info mb-2" to="/tambahsiswa">
                                        <i class="fas fa-plus"></i> Tambah
                                    </router-link>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th style="width: 10px">NO</th>
                                            <th>Nama Lengkap</th>
                                            <th>Kelas</th>
                                            <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(s, index) in siswa" :key="s.id_siswa">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ s.nama_siswa }}</td>
                                                <td>{{ s.nama_kelas }}</td>
                                                <td>
                                                    <div class="btn-group">                                                   
                                                        <router-link :to="{path : '/editsiswa/' + s.id_siswa}" class="btn btn-primary">Edit</router-link>
                                                        <button type="button" @click="hapus(s)" class="btn btn-danger">Hapus</button>                                                      
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Vue from 'vue'
    import axios from 'axios'
    Vue.use(axios)

export default {
    data() {
            return{
                siswa: {}
            }
        },
        created() {
            this.GetSiswa()
        },
        methods: {
            GetSiswa(){
                // var page = "http://127.0.0.1:8000/api/getSiswa", {headers : {'Authorization' : 'Bearer' + localStorage.getItem('Token')}}
                axios.get("http://127.0.0.1:8000/api/getSiswa" ,  {headers : {'Authorization' : 'Bearer' + localStorage.getItem('Token')}}).then(
                    ({data})=>{
                        console.log(data)
                        this.siswa = data
                    }
                )
            },
            hapus(s){
                // var url = 'http://127.0.0.1:8000/api/deleteSiswa/'+ s.id_siswa;
                axios.delete('http://127.0.0.1:8000/api/deleteSiswa/' + s.id_siswa,  {headers : {'Authorization' : 'Bearer' + localStorage.getItem('Token')}})
                alert("Sukses delete User");
                location.reload()
            }
        }
    }
    </script>
