function cacherbar() {
    // Sélectionne tous les éléments avec la classe .nav-items
    const navItems = document.querySelectorAll('.navbar-items');
    
    // Ajoute la classe .hidden à chaque élément pour les masquer
    navItems.forEach(item => {
        item.classList.remove('hidden');
    });

    // Cache aussi la barre latérale si nécessaire
    document.querySelector('.bar').classList.remove('active');
}

function montrebar() {
    // Sélectionne tous les éléments avec la classe .nav-items
    const navItems = document.querySelectorAll('.navbar-items');

    // Enlève la classe .hidden de chaque élément pour les afficher
    navItems.forEach(item => {
        item.classList.add('hidden');
    });

    // Affiche la barre latérale
    document.querySelector('.bar').classList.add('active');
}
