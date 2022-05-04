
const app = new Vue({

  el:'#app',

  data:{
    attrezzi:[
      {
        text:'Martello',
        done: true,
      },
      {
        text:'Chiodi',
        done: false,
      },
      {
        text:'Viti',
        done: false,
      },
      {
        text:'Cacciaviti',
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
        this.nuoviAttrezzi= {text: ''};
      }
    },
    
    remove(index){
     if(confirm(`sei sicuro di volerlo eliminare?`)){
      this.attrezzi.splice(index, 1);
      }
    },
  }
});