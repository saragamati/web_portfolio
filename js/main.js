function wheelRedirect(id) { 
    if(id == "card1button") {
        const link = "https://www.linkedin.com/in/leonardo-gassen-sobrinho-3837b6244/";
        window.open(link, "_blank", "noopener,noreferrer");
    }else if(id == "card2button") {
        const phoneNumber = "+5551998290607";
        const message = "Olá, estou entrando em contato através do seu site.";
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
    }else if(id == "card3button") {
        const link = "https://github.com/saragamati";
        window.open(link);
    }
    
}