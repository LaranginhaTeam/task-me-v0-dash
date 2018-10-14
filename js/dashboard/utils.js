try{
  var table = $(".table-datatable").DataTable({
      "info" : false,
      "language":{
          "emptyTable": "Nenhum dado encontrado.",
          "search":     "Procurar:",
          "lengthMenu": "Mostrar _MENU_ registros",
          "processing":     "Aguarde...",
          "zeroRecords": "Nenhum registro encontrado",
          "info": "Página _PAGE_ de _PAGES_",
          "infoEmpty": "Nenhum registro encontrado",
          "paginate": {                                        
                  "first":      "Primeiro",
                  "last":       "Último",
                  "next":       "Próximo",
                  "previous":   "Anterior"
              }
      }
  });
}catch(err){
  console.log(err);
}