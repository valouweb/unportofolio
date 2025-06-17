let image = document.getElementById("presentation-image");
function validerFormulaire() {
    const form = document.forms.contactForm;
if (form.prenom.value === "") {
    alert("Veuillez entrer votre prénom");
    form.prenom.focus();
    return false;
}
if  (form.nom.value === "") {
    alert("Veuillez entrer votre nom");
    form.nom.focus();
    return false;
}
if (form.projet.value === "") {
    alert("Veuillez entrer votre projet");
    form.projet.focus();
    return false;
}
if (form.message.value === "") {
    alert("Veuillez entrer votre message");
    form.message.focus();
    return false;
}
// Si tout est valide
alert("formulaire validé avec succés !");
return true
}
