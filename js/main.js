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
            }
        ],
        // Contacts' array index starting value
        counter: 0,
        // Message input starting value linked to v-model
        newMessage : '',
        // Array of random, hardcoded replies
        randomReplies : [
            'Dammi 10 min 😊',
            "😒",
            "Sono d'accordo.",
            "Sì tutto a posto 👌",
            "Ci possiamo aggiornare domani? Volevo 😴",
            'Sto arrivando 😉',
            "Sappi che dopo ieri sera l'umore non è dei migliori 🤬😡👿",
            '😂😂😂🤣🤣',
            'Poi fammi sapere per quella cosa😜',
            'Ed io che ne so?',
            '🤷‍♂️🤷‍♂️🤷‍♂️',
            '🤬 vale come risposta?',
            'Lascia stare, ci penso io domani',
            'La mail è senza allegato, dai ragazzi i fondamentali!🤦‍♂️',
            'Sì ci siamo stati la settimana scorsa ma il cibo era 🤢',
            'Per questa volta ci penso io, tranquillo. Però devo ricordarti che sono in ferie fino al 10, non ci sarà una seconda volta',
            'Ok',
            'k',
            'Okay',
            'Sì',
            'No',
            'No!',
            'Nooooooooo',
            'Nooooooooooooooooooooo',
            'Scendi a darmi una mano?',
            '🍕?',
            '❤',
            '😭😭😭😭',
            'C\'è un po\' di traffico',
            '😁',
            '🤔',
            '😍',
            '😘💕',
            '😉',
            'Indovina chi ha trovato lavoro? 😎',
            '👍',
            '👏👏👏',
            'Buon compleanno 🎉!',
            'Hai mangiato tu i miei biscotti?',
            'Dì al capo che faccio qualche minuto di ritardo',
            'Mi presti la macchina per favore? Ho bucato una gomma',
            'Ti richiamo fra 10 min',
            'Sei già a casa?',
            'Richiamami',
            'Scrivi quando stai per imbarcarti',
            'Non so perché se la sia presa',
            'Stai esagerando',
            'Dimmi tutto',
            'Cominciamo domani',
            'Siamo davanti al cinema',
            'Mi passi gli appunti?',
            'Quelli al piano di sopra si sono lamentati',
            'Non mi interessa',
            'Che ti devo dire? Fallo fare a tuo cugino allora'
        ],
        // Search input starting value linked to v-model
        search : '',
        // Messages' array index starting value for message dropdown menu behaviour
        messageIndex : null

    },
    methods : {
        
        // changes contacts' array index in order to display every individual chat
        changeContact : function(index) {
            // takes same value as v-for index
            this.counter = index;
            // toggles off message dropdown menu if the selected chat is changed
            this.messageIndex = null;
        },

        randomNumber : function(min, max) {
            return Math.floor(Math.random() * ( (this.randomReplies.length - 1) - 0 + 1) ) + 0;
        },

        // it updates "Last seen" date and time of chosen contact, it returns index of last received message
        lastMessageIndex : function(array) {
            let biggestIndex = 0;
            // The value gets updated every time the loop finds a message with "received" status
            array.forEach((element, index) => {
                if ( element.status == 'received') {
                biggestIndex = index;
                }
            });
            return biggestIndex;
        },

        dateAndTime: function() {
            return dayjs().format('DD/MM/YYYY HH:mm:ss');
        },

        addMessage : function() {
            // If the message input is not empty 
            if ( this.newMessage != '') {
                // A new object is pushed into the messages array
                this.contacts[this.counter].messages.push({ date : this.dateAndTime() , message : this.newMessage, status : 'sent'});
                // The message input gets emptied
                this.newMessage = '';
                
                // After a second, a random message from the randomReplies array gets pushed into the messages array  
                setTimeout( () => {
                    this.contacts[this.counter].messages.push({ date : this.dateAndTime() , message : this.randomReplies[this.randomNumber()], status : 'received'})
                }, 1000);
            }
        },
        
        // It filters the contacts array by string
        viewContacts: function () {
            this.contacts.forEach((contact) => {
                // The contact names are converted to lowercase letters
                let lowerCaseName = contact.name.toLowerCase();
                // The contact names are converted to uppercase letters
                let upperCaseName = contact.name.toUpperCase();
                // If the string in the search input is included either in the lowercase or uppercase array
                // the contact's 'visible' property is set to true, meeting the condition set in the v-if directive 
                if  (lowerCaseName.includes(this.search) || upperCaseName.includes(this.search)) {
                    contact.visible = true;
                } else {
                    contact.visible = false;    
                }
            });
        },

        // It toggles a message's dropdown menu on click
        showMessageMenu : function(index) {
            // If the messages' array index is not already the same as the clicked message's index,
            if ( this.messageIndex != index) {
                // it takes its value and meets the condition set in the v-if directive,
                // showing the dropdown mewnu
                this.messageIndex = index;
            } else {
                // Otherwise it gets reinitialised and the dropdown menu disappears
                this.messageIndex = null;
            }
        },

        deleteMessage: function(index) {
            // It takes the v-for index of the message we click on
            // and deletes one element at said index 
            this.contacts[this.counter].messages.splice(index, 1);
        }
    }
});

