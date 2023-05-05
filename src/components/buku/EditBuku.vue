<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Edit Buku</h1>
                        </div>          
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-success">
                                <form @submit.prevent="save_edit">
                                    <div class="card-body">
                                        <input type="hidden" v-model="id_buku">
                                        <div class="form-group">
                                            <label>Judul Buku</label>
                                            <input type="text" class="form-control" v-model="judul_buku">
                                        </div>
                                        <div class="form-group">
                                            <label>Nama Pengarang</label>
                                            <input type="text" class="form-control" v-model="pengarang">
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
import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)

export default {
    data : function () {
        return {
            buku : [],
            id_buku : "",
            judul_buku : "",
            pengarang : "",
        }
    },
    methods : {
        getBuku : function(){
            axios.get('http://localhost:8000/api/getBuku')
            .then(
                response => {
                this.buku = response.data
                }
            )
        },  
        getDetail(id_buku){
            axios.get('http://localhost:8000/api/getBukuId/' + id_buku)
            .then(
                (response) => {
                    console.log(response.data[0])
                    this.id_buku = response.data[0].id_buku
                    this.judul_buku = response.data[0].judul_buku
                    this.pengarang = response.data[0].pengarang

                }
            );
        },
        save_edit : function(){
            let dataBuku =
            {
                id_buku : this.id_buku,
                judul_buku : this.judul_buku,
                pengarang : this.pengarang,
            }
            axios.put('http://localhost:8000/api/updateBuku/' + this.id_buku , dataBuku)
            .then(
            (response)=>{
                alert('Sukses Mengubah Data Buku')
                console.log(response)
                this.$router.push('/indexbuku')
                }
            )
        }
    },
    mounted(){
    this.getBuku()
    this.getDetail(this.$route.params.id)
    }
}
</script>