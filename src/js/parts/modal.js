function modal(){

    let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    descr = document.querySelectorAll('.description-btn');

    for(let a=0;a<descr.length;a++){
        descr[a].addEventListener('click', function(){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
        
        close.addEventListener('click', function(){
            overlay.style.display = 'none';
            descr.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
       }


    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

close.addEventListener('click', function(){
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});

}

module.exports = modal;