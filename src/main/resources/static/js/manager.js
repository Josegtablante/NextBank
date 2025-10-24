Vue.createApp({

  data() {
    return {
      loadData: [],
      Clientes: [],
      cliente: [], //revisar
      Json: [],

      firstName: "",
      lastName: "",
      email: "",
      //aca pongo las variables que voy a invocar
    }
  },

  created() {
    axios.get("/rest/clients")
      .then(data => {
        this.loadData = data.data._embedded.cliente
        this.Json = data.data
      })
  },

  methods: {
    enviarCliente() {
      axios.post(`/rest/clients`, {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        id: this.id,
      })
    },

    eliminarCliente(id){
      axios.delete(id)
      //  .then(function () {
      //    location.reload()
      //      .catch(error => console.log(error))
       // })
    },

    editarCliente(){
    },

    computed: {
    },
  }
}).mount('#app')