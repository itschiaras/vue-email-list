/* 
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const {createApp} = Vue;

createApp({
    data() {
        return {
            randomEmails: [],
            basePath: 'https://flynn.boolean.careers/exercises/api/'
        }
    },
    methods: {
        getRandomEmails() {
            this.randomEmails = [];
            for (let i = 0; i < 10; i++) {
                axios.get(`${this.basePath}random/mail`).then((result) => {
                    console.log(result.data.response)
                    this.randomEmails.push(result.data.response)
                });
                
            }         
        }
    }

}).mount('#app')