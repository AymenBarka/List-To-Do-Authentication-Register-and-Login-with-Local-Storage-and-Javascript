function enregistrer(){
    var userConnecter = JSON.parse(localStorage.getItem('tabUsers'))
    var index = localStorage.getItem('indexConnecte')
    let Taches = JSON.parse(localStorage.getItem('Taches'));
    if(!Taches) {
        Taches = [];
    }
    let New = {
        Debut: document.getElementById('debut').value,
        Fin: document.getElementById('fin').value,
        Tache: document.getElementById('tache').value,
        Description: document.getElementById('description').value,
        User: userConnecter[index].Email,
    }
    Taches.push(New);
    localStorage.setItem('Taches', JSON.stringify(Taches))
}

