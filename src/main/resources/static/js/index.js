Vue.createApp({

    data() {
        return {
            email: "",
            password: "",

            email_registro: "",
            password_registro: "",
            firstName: "",
            lastName: "",
        };
    },



    created() {

    },

    methods: {
        Login() {
            axios.post('/api/login', `email=${this.email}&password=${this.password}`, { headers: { 'content-type': 'application/x-www-form-urlencoded' } })
                .then(response => window.location.href = "/web/accounts.html")
        },

        signUp() {
            axios.post('/api/clients', `firstName=${this.firstName}&lastName=${this.lastName}&email=${this.email_registro}&password=${this.password_registro}`, { headers: { 'content-type': 'application/x-www-form-urlencoded' } })
            .then(response => console.log("registrado"))
            .then(response=> { 
            this.email = this.email_registro 
            this.password = this.password_registro
            this.Login()
            })    
        }

        




    },
    computed: {



    },




}).mount('#app');