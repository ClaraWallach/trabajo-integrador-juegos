document.addEventListener('DOMContentLoaded', function () {

/* JS para juegos */
        const items = document.querySelectorAll('.opcion')
        items.forEach(function (item) {
            item.addEventListener('click', function () {
                this.classList.toggle('opcion');
                console.log(this)
            })
        })
        
/* JS para menu movil */        
        const botonMenu = document.querySelector('#menu-hamburguesa-toggler')
        botonMenu.addEventListener('click', function () {
            document.body.classList.toggle('abierto');
        });


})