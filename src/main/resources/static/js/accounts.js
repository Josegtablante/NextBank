const app = Vue.createApp({

    data() {
        return {
            cliente: [],
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
                this.cliente = data.data
                this.cuentas = this.cliente.accounts
                this.prestamos = this.cliente.loans
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