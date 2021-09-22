const app = new Vue({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        counter: 0,
        newMessage : {
            message : '',
            status : 'sent' 
        },
        randomReplies : [
            'Dammi 10 min 😊',
            "😒",
            "Sono d'accordo.",
            "Sì tutto a posto 👌",
            "Ci possiamo aggiornare domani? Volevo 😴",
            'Sto arrivando 😉',
            "Sappi dopo ieri sera l'umore non è dei migliori 🤬😡👿",
            '😂😂😂🤣🤣',
            'Poi fammi sapere per quella cosa😜',
            'Ed io che ne so?',
            '🤷‍♂️🤷‍♂️🤷‍♂️',
            '🤬 vale come risposta?',
        ]

    },
    methods : {
        
        changeContact : function(index) {
            this.counter = index;
        },

        randomNumber : function(min, max) {
            return Math.floor(Math.random() * ( (this.randomReplies.length - 1) - 0 + 1) ) + 0;
        },

        addMessage : function() {
            if ( this.newMessage.message != '') {
                let newObj = { message : this.newMessage.message, status : 'sent'}
                this.contacts[this.counter].messages.push(newObj);
                this.newMessage.message = '';
                let reply = { message : this.randomReplies[this.randomNumber()], status : 'received'};
                setTimeout( () => this.contacts[this.counter].messages.push(reply), 1000);
                
            }
        }
    }
});
