
new Vue({
/* Effectif sur l'ID "header" */
    el: '#header',

    data: {
        index: 'ANNUAIRE COOPERL',
        newUser: 'NOUVEL UTILISATEUR'
    }
})

new Vue({
/* Effectif sur l'ID "app" */
    el: '#app',

    data: {
        link1: 'http://localhost/vue-js/new-user.html',
        link2: 'http://localhost/vue-js/index.html',
        link3: 'https://www.google.com/',
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

/* Bulle d'infos en cliquant sur un utilisateur, s'ouvrant sur la droite de la page */

/* A la validation du formulaire, le nouvel utilisateur doit arriver dans l'annuaire */

/* dans la div footer, ajouter un "count" du nombre d'utilisateurs se trouvant dans l'annuaire */

/* lien dynamique vers les autres pages avec "vue Router" */