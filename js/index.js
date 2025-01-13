gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.from('#logo', {
    opacity: 0,
    x: "-10rem",
    duration: 2
});

gsap.from('.social-networks', {
    opacity: 0,
    x: "20rem",
    duration: 2
});



gsap.from('.banniere', {
    opacity: 0,  
    duration: 3, 
    ease: "power2.out"
});

gsap.from('.title', {
    scale: 0,
    stagger: 1,
    duration: 1.5
});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro-for-photos",
        start: "top bottom", 
        end: "bottom center",  
        scrub: true,            
    }
});


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#jda",
        start: "top bottom", 
        end: "bottom center",  
        scrub: true,            
    }
});

tl.from("#jda > h1", { 
    opacity: 0,     
    duration: 1, 
    ease: "power1.out", 
    stagger: 0.2 
});
tl.from('#jda > .img-section', {
    opacity: 0,
    y: "-25%",
    duration: 2
});



var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#cotedor",
        start: "top bottom", 
        end: "bottom center",  
        scrub: true,            
    }
});

tl.from("#cotedor", { 
    opacity: 0,     
    duration: 1, 
    ease: "power1.out", 
    stagger: 0.2 
});
tl.from('#cotedor > .img-section', {
    opacity: 0,
    y: "-25%",
    duration: 2
});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#nature",
        start: "top bottom", 
        end: "bottom center",  
        scrub: true,            
    }
});

tl.from("#nature", { 
    opacity: 0,     
    duration: 1, 
    ease: "power1.out", 
    stagger: 0.2 
});
tl.from('#nature > .img-section', {
    opacity: 0,
    y: "50%",
    x: "50%",
    duration: 2
});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".personne",
        start: "top bottom", 
        end: "bottom center",  
        scrub: true,            
    }
});
tl.from('.personne', {
    opacity: 0,
    x: "50%",
    duration: 2
});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro-for-photos",
        start: "top bottom", 
        end: "center center",  
        scrub: true,            
    }
});
tl.from('.intro-for-photos', {
    opacity: 0,
    x: "-50%",
    duration: 2
});


/********************FORM CONTACT************************************************** */

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupère les valeurs du formulaire
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;
    const email = document.getElementById('email').value;
    // URL du Webhook Discord
    const webhookUrl = "https://discordapp.com/api/webhooks/1328416459025547315/7QvldFLZMk62BSdvR7c2VJqlkM7KOGC2YbQvU2NwUm3Ewa0oGxZdp9nszfjuj9Hkef2j"; // Remplacez par votre URL de webhook

    // Crée le contenu du message
    const message = {
        content: `**Nouvelle soumission de formulaire**** :**\n Email : **${email}**\n**Sujet :** ${subject}\n**Message :** ${body}`,
    };

    // Envoie le message au Webhook Discord
    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
    })
    .then(response => {
        if (response.ok) {
            // Masque le formulaire et affiche le message de remerciement
            document.getElementById('emailForm').style.display = 'none';
            const thankYouMessage = document.getElementById('thankYouMessage');
            thankYouMessage.style.display = 'block';
        } else {
            console.error("Erreur lors de l'envoi :", response.statusText);
            alert("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.");
        }
    })
    .catch(error => {
        console.error("Erreur lors de la connexion au webhook :", error);
        alert("Une erreur réseau est survenue. Veuillez réessayer.");
    });
});


