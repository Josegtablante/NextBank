const app = Vue.createApp({

    data() {
        return {
            cliente: [], //PROPIEDADES
            cuentas: [],
            prestamos: [],

            cantidades: [],
            ballance: [],
            number: [],
            createAccount: [],



            accountNumber: "",
            payments: 0.00,
            amount: 0.00,

            loanSeleccionado: [],
            loan: [],
            loans: [],
            nombrePrestamo: [],

        };
    },



    created() {
        axios.get('/api/clients/current') //clientess registrados
            .then(data => {
                this.cliente = data.data //este muestra toda la data o Json
                this.cuentas = this.cliente.accounts
                this.prestamos = this.cliente.loans
                // console.log(this.cliente)
                // console.log(this.prestamos)
                // console.log(this.cuentas)
                // console.log("hola mundo")

            })



    },

    methods: {

        signOut() {
            axios.post('/api/logout')
                .then(response => console.log('signed out!!!'))
                .then(response => window.location.href = "/web/index.html")
        },


        crearCuenta() {
            axios.post('/api/clients/current/accounts')
                .then(response => { console.log("registrado") })
                .then(response => { if (this.crearCuenta.length >= 3) { window.alert("no puedes crear mas de tres cuentas") } })
                .then(response => { location.reload() }) //como hacer para limitar la cuenta a solo 3 . pensar
        },



    },

    computed: {

    },




}).mount('#app');