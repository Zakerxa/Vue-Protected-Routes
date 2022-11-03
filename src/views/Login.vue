<template>
  <div class="container">
    <div class="row justify-content-center d-flex align-items-center" style="min-height:80vh">
        <form @submit.prevent="login" class="col-11 col-sm-8 col-md-6 col-lg-4 card shadow pb-5">
            <div class="p-3">
              <p class="text-primary text-start">We only protected this route form admin user.</p>
                <h3>Login</h3>
            </div>
            <div v-if="error" class="alert alert-danger p-1" role="alert">
                  {{error}}
            </div>
            <div class="form-floating mb-3">
              <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>
            <div class="pt-4">
              <button type="submit" class="btn btn-dark w-100 fw-bold">Login</button>
            </div>
          </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      email : 'admin@gmail.com',
      password : 'helloworld',
      error : ''
    }
  },
  methods:{
    login(){
      if(this.email == 'admin@gmail.com' && this.password == 'helloworld') this.authUser();
      else this.error = "Credential Error . . .";
    },
    authUser(){
      localStorage.setItem('admin',this.makeToken(25));
      let token = localStorage.getItem('admin');
      if(token){
         this.$router.push(this.$route.query.redirect || '/admin');
         this.email = '';
         this.password = '';
      }else this.error = "Something went wrong !";
    },
    makeToken(length) {
       var result           = '';
       var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
       var charactersLength = characters.length;
       for ( var i = 0; i < length; i++ ) result += characters.charAt(Math.floor(Math.random() * charactersLength));
       return result;
    }
  }
}
</script>

<style>

</style>