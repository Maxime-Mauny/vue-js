new Vue({

    el: '#header',

    data: {
        index: 'ANNUAIRE COOPERL',
        newUser: 'NOUVEL UTILISATEUR'
    }
})

new Vue({

    el: '#app',

    data: {
        link1: 'http://localhost/vue-js/new-user.html',
        link2: 'http://localhost/vue-js/index.html',
        firstname: '',
        lastname: ''
    },
/* Fonction qui permet de récupérer le Prénom et le Nom des input, pour créer l'adresse mail */
    computed: {
        mail: function () {
            return this.firstname + '.' + this.lastname + '@cooperl.fr'
        }
    }
})

