<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">            
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Data Peminjaman</h1>
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
                                    <router-link class="btn btn-info mb-2" to="/tambahpeminjaman">
                                        <i class="fas fa-plus"></i> Tambah
                                    </router-link>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th style="width: 10px">No</th>
                                            <th>Nama Siswa</th>
                                            <th>Judul Buku</th>
                                            <th>Tanggal Pinjam</th>
                                            <th>tanggal kembali</th>
                                            <th>Status</th>
                                            <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(p, index) in pinjam" :key="p.id_detail">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ p.nama_siswa }}</td>
                                                <td>{{ p.judul_buku }}</td>
                                                <td>{{ p.tgl_pinjam }}</td>
                                                <td>{{ p.tgl_kembali }}</td>
                                                <td>{{ p.status }}</td>
                                                <td>
                                                    <span v-if="p.status == 'dipinjam'"><button class="btn btn-warning"
                                                                @click="kembali(p)">Kembalikan</button></span>
                                                </td>
                                                <!-- <td>
                                                    <div class="btn-group">                                                   
                                                        <router-link :to="{path : '/Editbuku/' + p.id_buku}" class="btn btn-warning">Kembalikan</router-link>
                                                        <button type="button" @click="hapus(p)" class="btn btn-danger">Hapus</button>                                                      
                                                    </div>
                                                </td> -->
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
                pinjam: {},
                siswa: {},
                buku: {},
                // kelas: {},
                // message: {}
                    // peminjaman: {
                    //     // id_siswa:"",
                    //     // id_buku:"",
                    //     // nama_siswa:"",
                    //     // judul_buku:"",
                    // },
            }

        },
        created() {

            this.getPeminjaman()
        },
        methods: {
        //     getSiswa() {
        //     axios.get('http://localhost:8000/api/getSiswa')
        //         .then(
        //             ({ data }) => {
        //                 this.siswa = data
        //             }
        //         )
        // },
        // getBuku() {
        //     axios.get('http://localhost:8000/api/getBuku')
        //         .then(
        //             ({ data }) => {
        //                 this.buku = data
        //             }
        //         )
        // },
        getPeminjaman() {
            axios.get('http://localhost:8000/api/getDetail')
                .then(
                    ({ data }) => {
                        this.pinjam = data
                    }
                )
        },
        // kembali(p){
        //         axios.put('http://localhost:8000/api/pengembalian/' + p.id_peminjaman)
        //         .then(
        //     (response)=>{
        //         // alert('Sukses Mengubah Data Buku')
        //         console.log(response)
        //         this.$router.push('/indexpeminjaman')
        //         }
        //     )
        //     },
        kembali(p){
            axios.put('http://localhost:8000/api/pengembalian/' + p.id_detail)
            .then(
                (response) => {
                    console.log(response)
                    alert('Sukses kembalikan buku')
                    setTimeout(() => {
                        location.reload()
                    }, 1100);
                }
            )
        }
        }
    }
    </script>