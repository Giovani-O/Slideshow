let seasons = [
    {name:"Summer", 
        picture1:"https://images.unsplash.com/photo-1586902197503-e71026292412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80", 
        picture2:"https://images.unsplash.com/photo-1541417904950-b855846fe074?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80", 
        picture3:"https://images.unsplash.com/photo-1551897729-68abc4a461eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", 
        caption1:'Photo by <a href="https://unsplash.com/@mateo_giraud?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mateo Giraud</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>', 
        caption2:'Photo by <a href="https://unsplash.com/@reallynattu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nattu Adnan</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>', 
        caption3:'Photo by <a href="https://unsplash.com/@annafisker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anna Rasmussen</a> on <a href="https://unsplash.com/s/photos/californian-palm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},
    {name:"Autumn", 
        picture1:"https://images.unsplash.com/photo-1615549782867-5951ae74acb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", 
        picture2:"https://images.unsplash.com/photo-1453959022778-cfda85dbe0f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", 
        picture3:"https://images.unsplash.com/photo-1562781105-f979fe8560f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", 
        caption1:'Photo by <a href="https://unsplash.com/@sergio_rota?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sergio Rota</a> on <a href="https://unsplash.com/s/photos/autumn-forest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>', 
        caption2:'Photo by <a href="https://unsplash.com/@jeremythomasphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jeremy Thomas</a> on <a href="https://unsplash.com/s/photos/autumn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>', 
        caption3:'Photo by <a href="https://unsplash.com/@myr0326?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">natsuki</a> on <a href="https://unsplash.com/s/photos/autumn-leaves?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},
    {name:"Winter", 
        picture1:"https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1383&q=80", 
        picture2:"https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80", 
        picture3:"https://images.unsplash.com/photo-1545905191-30ff191ca5c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", 
        caption1:'Photo by <a href="https://unsplash.com/@sametomorrow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Adam Chang</a> on <a href="https://unsplash.com/s/photos/winter?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>', 
        caption2:'Photo by <a href="https://unsplash.com/@mike?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mike Kotsch</a> on <a href="https://unsplash.com/s/photos/winter?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>', 
        caption3:'Photo by <a href="https://unsplash.com/@photoripey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ibrahim Rifath</a> on <a href="https://unsplash.com/s/photos/winter?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},
    {name:"Spring", 
        picture1:"https://images.unsplash.com/photo-1525276894205-27b055a29c6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", 
        picture2:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", 
        picture3:"https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", 
        caption1:'Photo by <a href="https://unsplash.com/@manucosen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Manuel Cosentino</a> on <a href="https://unsplash.com/s/photos/spring-japan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>', 
        caption2:'Photo by <a href="https://unsplash.com/@monstercritic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sergey Shmidt</a> on <a href="https://unsplash.com/s/photos/spring?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>', 
        caption3:'Photo by <a href="https://unsplash.com/@joelholland?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joel Holland</a> on <a href="https://unsplash.com/s/photos/spring?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'}
];

var slideIndex = 1;
showSlides(slideIndex);

function changePicture(n){
    showSlides(slideIndex += n);
}

function selectSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active"
}

function selectSeason(id){
    selectSlide(1);
    document.getElementById("title").innerHTML = seasons[id].name;
    document.getElementById("pic-1").src = seasons[id].picture1;
    document.getElementById("pic-2").src = seasons[id].picture2;
    document.getElementById("pic-3").src = seasons[id].picture3;
    document.getElementById("cap-1").innerHTML = seasons[id].caption1;
    document.getElementById("cap-2").innerHTML = seasons[id].caption2;
    document.getElementById("cap-3").innerHTML = seasons[id].caption3;
}
