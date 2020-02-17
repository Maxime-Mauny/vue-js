
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
        lastname: '',
        infos: 'Maxime Mauny, maxime.mauny@cooperl.fr, 0672310070',
        demandInfos: '',
    },
/* Fonction qui permet de récupérer le Prénom et le Nom des input, pour créer l'adresse mail */
    computed: {
        mail: function () {
            return this.firstname + '.' + this.lastname + '@cooperl.fr'
        },
    },
    
    methods: {  
        close: function () {
            this.demandInfos = false
        },  
        open: function () {
            this.demandInfos = true
        },   
          
    }
    
})


/* Ce qu'il me reste à faire !!! */

/* A la validation du formulaire, le nouvel utilisateur doit arriver dans l'annuaire */

/* dans la div footer, ajouter un "count" du nombre d'utilisateurs se trouvant dans l'annuaire "VUEX ?" */

/* lien dynamique vers les autres pages avec "vue Router" */

/* Simuler un appel ajax avec le button "extract" (UTILISER AXIOS) */
