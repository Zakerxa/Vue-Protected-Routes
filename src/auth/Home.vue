<template>
  <div class="container">
    <div class="row">
        <div class="col-12 text-start">
            <h3>Now you are admin of this site.</h3>
            <p class="text-danger">Protected Route</p>
            <p class="mb-1">We protected this route from public user.</p>
            <p class="mb-1">You can't also go back to the login page.</p>
        </div>
        <div class="col-12 text-start">
            <hr>
            <h5>My token</h5>
            <p>{{token}}</p>
            <hr>
            <button @click="logout()" class="btn btn-sm btn-danger">Del Token</button>
            <p class="pt-3">You will be logout if you delete this token.</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        token : localStorage.getItem('admin')
    }
  },
  methods:{
   logout(){
     localStorage.removeItem('admin');
     this.$router.push(this.$route.query.redirect || '/login');   
    }
  }
}
</script>

<style>

</style>