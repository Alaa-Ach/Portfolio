<template >
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>  -->

<!-- on mobile -->
  <nav class="sm:hidden   flex justify-end text-center space-x-4 py-2 elevation-3 bg-[#1c1c1c] px-5 ">

    <button class="text-[#a3a2a2] w-10 h-10 relative focus:outline-none bg-[#1c1c1c]" @click="showDropDown = !showDropDown">
      <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
          <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': showDropDown,' -translate-y-1.5': !showDropDown }"></span>
          <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out" :class="{'opacity-0': showDropDown } "></span>
          <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': showDropDown, ' translate-y-1.5': !showDropDown}"></span>
      </div>
  </button>
    
   </nav>
   <Transition name="scale">
     <div v-if="showDropDown" class="sm:hidden flex flex-col space-y-3 z-10  text-white bg-[#323131] p-2  w-full absolute  rounded-b-md ">
      <router-link  to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link  to="/contact">Contact</router-link>
    </div>
  </Transition>

   

  <div class="bg-[#1c1c1c]  h-screen inset-x-0 inset-y-0 z-[-1]  fixed" ></div>

<!-- on desktop -->
   <nav class="hidden relative z-5   sm:flex  text-center sm:text-xl  elevation-3  px-5 bg-[#1c1c1c]  mx-auto">
   <div class=" max-w-6xl w-full mx-auto">
    <div class=" h-full flex flex-row place-items-center ">
      <router-link class="inline-block py-7 px-3"  to="/">Home</router-link>
      <router-link class="inline-block  py-7 px-3" to="/about">About</router-link>
       <router-link class="inline-block py-7 px-3"  to="/contact">Contact</router-link>
   </div>
   </div>
  </nav>
  
 
  
<div class=" px-2 py-5 ">
  <router-view class=" max-w-6xl w-full mx-auto   "/> 
</div>

</template>
<script>
export default {
  name: 'App',
  data(){
return {
  showDropDown :false,
}
  },
   mounted(){
   



  },
  watch: { 
  '$route.path': {
    handler: function(search) {
      console.log(search)
    },
 
  }
}
}
</script>

<style>



.scale-enter-active,
.scale-leave-active {
  transform-origin: top;
  transition: transform 0.3s ease-in-out;
}

.scale-enter-to,
.scale-leave-from {
  transform: scaleY(1);
}

.scale-enter-from,
.scale-leave-to {
  transform: scaleY(0);
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
}
nav a {

  color: #656464;
}

nav a.router-link-exact-active {
  @apply border-b-4 border-b-slate-600;
 
}
</style>
