$(function() {

    $('#enviarcorreo').click(function() {
        alert("El mensaje fue enviado correctamente...");
    });

    $('h2').on('dblclick', '.cambio-color', function() {
        $(this).css("color", "blue");
    })

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
}) 

});