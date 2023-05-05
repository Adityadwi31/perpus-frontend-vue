<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Form Tambah Buku</h1>
                        </div>          
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-success">
                                <div class="card-header">
                                    <h3 class="card-title">Tambah buku</h3>
                                </div>
                                <form @submit.prevent="save">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label>Judul Buku</label>
                                            <input type="text" class="form-control" v-model="buku.judul_buku" autocomplete="off" placeholder="Masukkan nama..">
                                        </div>                                        
                                        <div class="form-group">
                                            <label>Nama Pengarang</label>
                                            <input type="text" class="form-control" v-model="buku.pengarang" autocomplete="off" placeholder="Masukkan nama..">
                                        </div>                                        
                                    </div>
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
            buku:{}
        }
    },
    methods: {
        save(){
            this.save_data();
        },
        save_data(){
            axios.post('http://127.0.0.1:8000/api/createBuku', this.buku)
            .then(
                ({data}) => {
                    alert("Berhasil Tambah Buku");
                    this.$router.push('/indexbuku');
                    this.buku = data;
                }
            )
        },
    }
    
    }
</script>

