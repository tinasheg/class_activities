$("#search-button").click(function () {
    
    let searchPhrase = $("#search-term").val();
    let numberOfRecords = $("#number-selection").val();
    let startYear = $("#start-year").val() === "" ? $("#start-year").attr("defaultValue") : $("#start-year").val();
    let endYear = $("#end-year").val() === "" ? $("#end-year").attr("defaultValue") : $("#end-year").val();
    
    const queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + 
    startYear + "0101&end_date=" + endYear + "0101&q=" + searchPhrase + "&sort=relevance&api-key=mZCM50DRRAOa4wRJRllF1OVqYhSwKdF1"

    $.ajax({
        url : queryUrl,
        method : "GET"
    }).then (function(response) {
        console.log(response)
    })


})
// console.log(searchPhrase);
//     console.log(startYear);
//     console.log(endYear);