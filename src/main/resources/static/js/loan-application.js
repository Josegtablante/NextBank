const app = Vue.createApp({

    data() {
        return {
            cliente: [], //PROPIEDADES
            cuentas: [],
            prestamos: [],

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
        axios.get('/api/clients/current/') //clientess registrados
            .then(data => {
                this.cliente = data.data //este muestra toda la data o Json
                this.cuentas = this.cliente.accounts
                this.prestamos = this.cliente.loans
            })
        axios.get('/api/loan')
            .then(data => {
                this.loans = data.data
                this.prestamos = this.loans
            })
    },

    methods: {
        signOut() {
            axios.post('/api/logout')
                .then(response => console.log('signed out!!!'))
                .then(response => window.location.href = "/web/index.html")
        },

        createLoan() {
            axios.post('/api/loans', { id: this.loanSeleccionado.id, amount: this.amount, payments: this.payments, accountNumber: this.accountNumber })
                .then(response => console.log("create"))
                .then(response => window.location.href = "/web/accounts.html")
        }
    },

    computed: {
    },

}).mount('#app');