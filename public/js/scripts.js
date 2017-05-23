$("input").change(function(e) {
    sessionStorage.setItem(e.target.name, e.target.value);
    updateOutput();
});

$("#import").click(function() {
        var keys = ['image-type', 'build-process', 'header-font', 'align', 'header-size', 'bold-header', 'underline-header', 'set-format', 'font'];
        var values = ['icons', 'true', 'Arial', 'center', '3', 'false', 'false', 'importable', 'Arial'];

        sessionStorage.setItem('team', $('#team-input').val());
        for (var i = 0; i < values.length; i++) {
            sessionStorage.setItem(keys[i], values[i]);
        }

        $('#input-panel').toggleClass('hidden');
        $('#output-panel').toggleClass('hidden');
        updateOutput();
});

$("#export").click(function() {
    $.post("/rmt", {
        team: sessionStorage.getItem('team'),
        format: '',
        options: {
            imgFormat: sessionStorage.getItem('image-type'),
            process: sessionStorage.getItem('build-process'),
            processFormat: 'icons',
            tfont: sessionStorage.getItem('header-font'),
            align: sessionStorage.getItem('align'),
            size: sessionStorage.getItem('header-size'),
            bold: sessionStorage.getItem('bold-header'),
            underlined: sessionStorage.getItem('underline-header'),
            setFormat: sessionStorage.getItem('set-format'),
            font: sessionStorage.getItem('font')
        }
    },

    function(data, status) {
        $('#output-panel').toggleClass('hidden');
        $('#bbcode-panel').toggleClass('hidden');
        $('#bbcode-output').val(data);
    });
});

function updateOutput() {
    $.post("/rmt", {
        team: sessionStorage.getItem('team'),
        format: 'html',
        options: {
            imgFormat: sessionStorage.getItem('image-type'),
            process: sessionStorage.getItem('build-process'),
            processFormat: 'icons',
            tfont: sessionStorage.getItem('header-font'),
            align: sessionStorage.getItem('align'),
            size: sessionStorage.getItem('header-size'),
            bold: sessionStorage.getItem('bold-header'),
            underlined: sessionStorage.getItem('underline-header'),
            setFormat: sessionStorage.getItem('set-format'),
            font: sessionStorage.getItem('font')
        }
    },

    function(data, status){
        $('#team-output').html(data);
    });
}
