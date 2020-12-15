document.getElementById('search-input').addEventListener('keyup', mostrar_opciones)

window.addEventListener('click', function (e) {
    var searchInput = document.getElementById('search-input')
    var searchOptions = document.getElementById('search-options')

    if (!searchInput.contains(e.target) && searchOptions.style.display != 'none') {
        searchOptions.style.display = 'none'
        searchInput.value = ''
        searchInput.placeholder = 'Buscar'
    }
});

function mostrar_opciones() {
    var searchInput = document.getElementById('search-input')
    var searchOptions = document.getElementById('search-options')
    searchOptions.style.display = 'block'

    filtrarOpciones(searchInput)
}

function filtrarOpciones(input) {
    var textoIngresado = input.value.toUpperCase()
    var listaOpciones = document.getElementById('list-options')

    for (var i = 0; i < listaOpciones.children.length; i++) {
        var elementoLista = listaOpciones.children[i]
        var enlace = elementoLista.firstChild

        if (enlace.innerText.toUpperCase().includes(textoIngresado)) {
            elementoLista.style.display = ""
        } else {
            elementoLista.style.display = "none"
        }
    };
}
