<template>
  <div style="margin-top: 10%">
    <div class="login-box m-auto">
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <h2>Perpustakaan Sekolah</h2>
        </div>
        <div class="card-body">
          <p class="login-box-msg">Masukkan Email dan Password</p>

          <form @submit.prevent="login">
            <div class="input-group mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                v-model="account.email"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="account.password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-primary btn-block"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      account: {
        email: "",
        password: "",
      },
    };
  },
  created() {
    // if (this.$store.state.token !== "") {
    //   this.axios
    //     .post("http://localhost:8000/api/checkToken", {
    //       headers: { Authorization: `Bearer ` + this.$store.state.token },
    //     })
    //     .then((response) => {
    //       console.log(response);
    //       this.$router.push("/");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       this.$store.commit("clearToken");
    //     });
    // }
  },
  methods: {
    login() {
      axios
        .post("http://localhost:8000/api/login", this.account)
        .then((response) => {
          if(response.data.status == 'success') {
            alert(response.data.status);
            localStorage.setItem("Token", response.data.token);
            localStorage.setItem("Auth", true);
            // this.$router.push('/dashboard')
            location.href='/dashboard'
          }else{
            alert(response.data.error);
            localStorage.removeItem("Token");
            localStorage.setItem("Auth", false);

          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
