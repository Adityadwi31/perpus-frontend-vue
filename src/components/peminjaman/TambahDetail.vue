<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Form Tambah Detail</h1>
                        </div>          
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Tambah Detail</h3><br>
                                    <h6 style="">ID Peminjaman anda <span>{{buatid.id_peminjaman}}</span></h6>
                                </div>
                                <form @submit.prevent="save">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label>Masukan ID Peminjaman</label>
                                            <input type="text" class="form-control" v-model="detail_peminjaman.id_peminjaman"  autocomplete="off" placeholder="Masukkan id anda sebelumnya..">
                                        </div>                                       
                                    </div>
                                    <!-- <div class="card-body">
                                        <div class="form-group">
                                            <label>Masukan id peminjaman</label>
                                            <select class="form-control" v-model="detail_peminjaman.id_peminjaman">                                                   
                                                <option v-for="d in peminjaman" :key="d.id_peminjaman" :value="d.id_peminjaman" >{{ d.id_peminjaman }}</option>
                                            </select>
                                        </div>                                       
                                    </div> -->
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary">Simpan</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    import Vue from 'vue';
    import axios from 'axios';
    
    Vue.use(axios);

export default {
    data(){
        return{
            // siswa:{},
            // buku:{},
            peminjaman:{},
            detail_peminjaman:{},
            buatid: {}
        }
    },
    mounted(){
        this.DataPinjam();
        // this.DataBuku();
        this.getid()
    },
    methods: {
        DataPinjam(){
            axios.get('http://127.0.0.1:8000/api/getPeminjaman')
            .then(
            ({data}) => {
                this.peminjaman = data
                }
            );
        },
        save(){
            this.save_data();
        },
        save_data(){
            axios.post('http://127.0.0.1:8000/api/createDetail', this.detail_peminjaman)
            .then(
                ({data}) => {
                    alert("Berhasil Tambah bro");
                    this.$router.push('/indexpeminjaman');
                    this.detail = data;
                    }
                )
            },
            getid(){
            axios.get('http://localhost:8000/api/getid')
            .then(
                ({data}) => {
                    this.buatid = data
                }
            )
        }
        },

    }
    </script>

