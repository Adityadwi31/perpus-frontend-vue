<template>
  <div>
    <navbar-component></navbar-component>
    <sidebar-component></sidebar-component>
    <div class="content-wrapper">
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Form Tambah Peminjaman</h1>
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
                  <h3 class="card-title">Tambah Peminjaman</h3>
                </div>
                <form @submit.prevent="save">
                  <div class="card-body">
                    <div class="form-group">
                      <label>Nama Siswa</label>
                      <select
                        class="form-control"
                        v-model="peminjaman.id_siswa"
                      >
                        <option
                          v-for="s in siswa"
                          :key="s.id_siswa"
                          :value="s.id_siswa"
                        >
                          {{ s.nama_siswa }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="form-group">
                      <label>Buku Yang mau dipinjam</label>
                      <select class="form-control" v-model="peminjaman.id_buku">
                        <option
                          v-for="b in buku"
                          :key="b.id_buku"
                          :value="b.id_buku"
                        >
                          {{ b.judul_buku }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                      Simpan
                    </button>
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
import Vue from "vue";
import axios from "axios";

Vue.use(axios);

export default {
  data() {
    return {
      siswa: {},
      buku: {},
      peminjaman: {},
    };
  },
  mounted() {
    this.DataSiswa();
    this.DataBuku();
  },
  methods: {
    DataSiswa() {
      axios.get("http://127.0.0.1:8000/api/getSiswa").then(({ data }) => {
        this.siswa = data;
      });
    },
    DataBuku() {
      axios.get("http://127.0.0.1:8000/api/getBuku").then(({ data }) => {
        this.buku = data;
      });
    },
    save() {
      this.save_data();
    },
    save_data() {
      axios
        .post("http://127.0.0.1:8000/api/createPeminjaman", this.peminjaman)
        .then((response) => {
          console.log(response);
          alert("Berhasil Tambah bro");
          this.$router.push("/tambahdetail");
        });
    },
  },
};
</script>

