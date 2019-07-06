function formataMoeda(valor){
    var moeda = parseFloat(valor).toFixed(2).replace(".", ",");
return "R$ " + moeda        
}