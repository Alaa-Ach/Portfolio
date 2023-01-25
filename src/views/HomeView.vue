<template>
  <div class="home ">

  <div class="flex flex-col   md:flex-row place-items-center ">
    <div  v-motion-slide-visible-right class="rounded-full w-80 h-80 border-[#392d23] border-[10px] flex  justify-center   place-items-center  mr-7  bg-cover bg-[url('https://scontent.frba3-1.fna.fbcdn.net/v/t39.30808-6/325733654_1113412926222210_1486666554000206233_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEDNZ-ThXq3wRqvgJuNKy8LEf7aKT9F104R_topP0XXTliiE2OdByzADtLffZ_jdQuHn3_btO4rQlLSOJbDIdpj&_nc_ohc=MoRW_vhv0GAAX-H-ann&_nc_ht=scontent.frba3-1.fna&oh=00_AfCqjmxRzSO56oGm4A9SupXyLcLT_uWwu5nr4boA88Ztkw&oe=63D62307')] ">
    </div>

    <!-- <div   class=" text-gray-400 text-5xl  md:text-6xl lg:text-7xl  flex flex-wrap flex-1 font-bold font-sans"
    v-motion-slide-visible-left >{{desc}} </div> -->
    <typewriter class=" text-gray-400 text-5xl  md:text-6xl lg:text-7xl  flex flex-wrap flex-1 font-bold font-sans"
    v-motion-slide-visible-left  :typeInterval=80 ref="typewriter">
      <div>I'm Alaa Achouairi ,I Hate Design , In Love With Back-End Crushing on Front-End</div>
    </typewriter>


  </div>
 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Typewriter from "typewriter-vue";

export default {
  name: 'HomeView',
  components: {

    Typewriter
  },
  data(){
    return {
  
  
    }
  },
 
   mounted()  {




  },
}
</script>
