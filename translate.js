/* dynamic loaded content */
function getLangResources(){
    
    /* dynamic translations */
    var es = new Array();
    var fr = new Array();

    es['works'] = "OBRAS"; 
    es['research'] = "INVESTIGACIÓN"; 
    es['bio_contact'] = "BIO - CONTACTO"; 
    fr['works'] = "CRÉATION"; 
    fr['research'] = "RECHERCHE"; 
    fr['bio_contact'] = "BIO - CONTACT"; 

    var resources = new Array();
    resources['fr'] = fr;
    resources['es'] = es;
    
    return resources;
}

function loadContent(language, active_page){
    $("#exhibit").load(language + '/' + active_page + '.html');
}
    
function translateIndex(language){
    $("p[data-include][name='pindex']").each(function(){
        $(this).text(getLangResources()[language][$(this).data('include')])
    }); 
}

    
$(function(){ 

    // defaults
    language = 'fr'
    active_page = "home_page"

    // load first content
    translateIndex(language);
    loadContent(language, active_page)

    // add load context callbacks
    $("[data-include]").on("click", function(){
        active_page = $(this).data('include')
        loadContent(language, active_page);
    });
    
    // add translations callbacks
    $("p[name='lng']").on("click", function(){
        language = $(this).attr('id')
        translateIndex(language, active_page)
        loadContent(language, active_page);
    });
});
