document.addEventListener('DOMContentLoaded', () => {
    // 1. Gestion du toggle de la barre latérale sur mobile
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const dashboardContainer = document.querySelector('.dashboard-container');

    if (menuToggle && sidebar && dashboardContainer) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            // Optionnel: Décaler le contenu principal quand la sidebar est active
            // if (sidebar.classList.contains('active')) {
            //     dashboardContainer.style.transform = 'translateX(280px)'; // Largeur de la sidebar
            // } else {
            //     dashboardContainer.style.transform = 'translateX(0)';
            // }
        });

        // Fermer la sidebar si on clique en dehors (uniquement sur mobile)
        dashboardContainer.addEventListener('click', (event) => {
            // Vérifie si le clic n'est pas sur la sidebar ou le bouton de toggle
            if (sidebar.classList.contains('active') &&
                !sidebar.contains(event.target) &&
                !menuToggle.contains(event.target) &&
                window.innerWidth <= 1024) // S'applique uniquement si l'écran est petit
            {
                sidebar.classList.remove('active');
                // dashboardContainer.style.transform = 'translateX(0)';
            }
        });

        // Fermer la sidebar si la taille de l'écran redevient grande
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024) {
                sidebar.classList.remove('active');
                // dashboardContainer.style.transform = 'translateX(0)';
            }
        });
    }

    // 2. Alertes de clique pour les boutons "Voir tout" et icônes d'action
    const seeAllButtons = document.querySelectorAll('.see-all-btn');
    seeAllButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Empêche le comportement par défaut si c'est un lien
            alert("Action 'Voir tout' cliquée !");
        });
    });

    const customerActionIcons = document.querySelectorAll('.customer-actions i');
    customerActionIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            if (icon.classList.contains('fa-phone')) {
                alert("Appel téléphonique simulé !");
            } else if (icon.classList.contains('fa-envelope')) {
                alert("Envoi d'e-mail simulé !");
            }
        });
    });

    // 3. Animation de chargement des éléments
    // Quand le DOM est entièrement chargé, on peut démarrer les animations CSS
    // Nous n'avons pas besoin de JS pour "déclencher" l'animation d'entrée CSS
    // si les classes animées sont déjà sur les éléments et que les keyframes sont définies.
    // Cependant, si on voulait une animation qui se déclenche après un délai DOM-ready, on ferait ceci :
    // const animatedElements = document.querySelectorAll('.animated-header, .animated-item, .animated-card, .animated-section');
    // animatedElements.forEach(el => {
    //     el.style.animationPlayState = 'running'; // S'assure que l'animation se joue
    // });
    console.log("Tableau de bord JavaScript chargé !");
});
