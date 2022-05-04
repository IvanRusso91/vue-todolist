
const app = new Vue({

  el:'#app',

  data:{
    Attrezzi:[
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

    nuoviAttrezzi : 0,
  }
})