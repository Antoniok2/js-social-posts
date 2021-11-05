// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// nome autore,
// foto profilo,
// data,
// testo del post,
// immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
// numero di likes.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.

// VARIABILI
const container = document.getElementById("container");
let postTag = "";

const post = [
    {
        "Autore": "Phil Mangione",
        "FotoProfilo": "https://unsplash.it/300/300?image=15",
        "Data": "4 mesi fa",
        "TextPost": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "Image": "https://unsplash.it/600/300?image=171",
        "Like": "80"
    },
    {
        "Autore": "Antonio Piazza",
        "FotoProfilo": "https://i.picsum.photos/id/51/300/300.jpg?hmac=DE65R3LIyroy_bfw9ECgckaCT6Y1ebB6Rc2PcqF--mM",
        "Data": "5 mesi fa",
        "TextPost": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto.",
        "Like": "140"
    },
    {
        "Autore": "Tizio Caio",
        "FotoProfilo": "https://i.picsum.photos/id/51/300/300.jpg?hmac=DE65R3LIyroy_bfw9ECgckaCT6Y1ebB6Rc2PcqF--mM",
        "Data": "6 mesi fa",
        "TextPost": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto.",
        "Image": "https://picsum.photos/id/1060/536/354?blur=2",
        "Like": "140"
    }
];

for (let i = 0; i < post.length; i++) {

// QUI TROVO LA VECCHIA MANIERA DI RICHIAMARE GLI OGGETTI DANDO UNA VARIABILE
    // let nameAutore = "";
    // let photoProfile = "";
    // let dataPost = "";
    // let TextPost = "";
    // let imagePost = "";
    // let likePost = "";
// E ASSEGNADO ALLA VARIABILE CREATA OGNI SINGOLO OGGETTO
    // for (let key in post){
    //     nameAutore = post[i].Autore;
    //     photoProfile = post[i].FotoProfilo;
    //     dataPost = post[i].Data;
    //     TextPost = post[i].TextPost;
    //     imagePost = post[i].Image;
    //     likePost = post[i].Like;
    // }

// IN QUESTO MODO RICHIAMO GLI OGGETTI CON UNA SINGOLA VARIABILE IL CHE RENDE TUTTO PIù VELOCE
    const {Autore, FotoProfilo, Data, TextPost, Image, Like} = post[i];

// QUI ALLA VARIABILE CREATA SOPRA DICO COSA DEVE INSERIRE ALL'INTERNO PER POI VISUALIZZARLA NELL'HTML 
    postTag += `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${FotoProfilo}" alt="${Autore}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${Autore}</div>
                        <div class="post-meta__time">${Data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${TextPost}</div>
            <div class="post__image">
                <img src="${Image}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${Like}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`

// IN QUESTO MODO DICO DI INSERIRE SU HTML IL DOCUMENTO CREATO SOPRA
    container.innerHTML = postTag;  
}