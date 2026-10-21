// selectionner le formulaire
let form=document.querySelector("form")

// selectionner les valeurs dans inpiut
form.addEventListener('submit', async(e) => {
    e.preventDefault()

    //MANIPULATION DES DONNEES DU FORMULAIRE AVANT L'ENVOI AU SERVEUR
    let nomInput = document.querySelector('#nomFiliere').value;
    let codeInput = document.querySelector('#codeFiliere').value;
    let effectifInput = document.querySelector('#effectifFiliere').value;
    let responsableInput = document.querySelector('#responsableFiliere').value;
    let descriptionInput = document.querySelector('#descriptionArea').value;


    //ENVOI DES DONNEES AU SERVEUR NODES.JS AVEC AXIOS

    // let data = {
    //     nom: nomInput,
    //     code: codeInput,
    //     effectif: effectifInput,
    //     responsable: responsableInput,
    //     description: descriptionInput,
    //     besoinProjecteur: projecteurB,
    //     besoinPrise: priseB
    // };

    // let response = await axios.post('http://localhost:3000/filiere', data);
    // console.log(response.data);

    

    // REINITIALISATION DU FORMULAIRE APRES L'ENVOI DES DONNEES AU SERVEUR

    form.reset();

        

})


const affiche = document.querySelector('#btn');

affiche.addEventListener('click', () => {
    btn.classlist.toggle('active');


});


