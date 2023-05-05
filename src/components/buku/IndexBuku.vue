<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">            
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Data Buku</h1>
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
                                    <router-link class="btn btn-info mb-2" to="/tambahbuku">
                                        <i class="fas fa-plus"></i> Tambah
                                    </router-link>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th style="width: 10px">No</th>
                                            <th>Judul Buku</th>
                                            <th>Nama Pengarang</th>
                                            <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(b, index) in buku" :key="b.id_buku">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ b.judul_buku }}</td>
                                                <td>{{ b.pengarang }}</td>
                                                <td>
                                                    <div class="btn-group">                                                   
                                                        <router-link :to="{path : '/Editbuku/' + b.id_buku}" class="btn btn-primary">Edit</router-link>
                                                        <button type="button" @click="hapus(b)" class="btn btn-danger">Hapus</button>                                                      
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
                buku: {},
                // message: {}
            }
        },
        created() {
            this.GetBuku()
        },
        methods: {
            GetBuku(){
                var page = "http://127.0.0.1:8000/api/getBuku";
                axios.get(page).then(
                    ({data})=>{
                        console.log(data)
                        this.buku    = data
                    }
                )
            },
            hapus(b){
                var url = 'http://127.0.0.1:8000/api/deleteBuku/'+ b.id_buku;
                axios.delete(url)
                alert("Sukses delete ");
                location.reload()
            }
        }
    }
    </script>
