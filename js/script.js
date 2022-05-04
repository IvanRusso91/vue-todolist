
const app = new Vue({

  el:'#app',

  data:{
    attrezzi:[
      {
        text:'martello',
        done: false,
      },
      {
        text:'chiodi',
        done: false,
      },
      {
        text:'viti',
        done: false,
      },
      {
        text:'cacciaviti',
        done: false,
      },
    ],

    nuoviAttrezzi :{ text:'',
      done:false,
  },

    
  },
  
  methods:{
    aggiunti(){  
      if(this.nuoviAttrezzi.text.length > 1){
        this.attrezzi.push(this.nuoviAttrezzi);
        this.nuoviAttrezzi.text= '';
      }
    },
    

    
  }
})