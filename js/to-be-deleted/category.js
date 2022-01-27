/*$(document).ready(function() {
    $('#message').hide();
    listAllCategories();
});
*/

$( window ).on( "load",function() {
    $('#message').hide();
    listAllCategories();
});

function listAllCategories() {
    $('.output').replaceWith('<tbody class="output"></tbody>')
    $.getJSON('http://localhost:8080/categories', function (data) {
        $.each(data, function (index, category) {
            var id = category.id;
            var categoryName = category.categoryName;
            $('.output').append('<tr><th class="category-id" scope="row">' + id + 
            '</th><td class="category-name">'
            + categoryName + 
            '</td><td><ul class="list-inline m-0"><li class="list-inline-item"><button class="btn btn-success btn-sm rounded-0"  onclick="showCategoryEditModal('+id+')" type="button" data-toggle="tooltip" data-placement="top"  data-bs-toggle="modal" data-bs-target="#editModal" title="Bearbeiten"><ion-icon name="create-outline"></ion-icon></button></li><li class="list-inline-item">'+
            '<button class="btn btn-danger btn-sm rounded-0" onclick="deleteCategoryById('+id+')" type="button" data-toggle="tooltip" data-placement="top" title="Löschen"><ion-icon name="trash-outline"></ion-icon></button></li></ul></td>');            
        });
    });
}

function showCategoryEditModal(id) {
        getCategoryById(id).then((data)=>{
        $('#category-id-edit').val(data.id),
        $('#category-name-edit').val(data.categoryName)
    }).catch((err)=>{
        console.log(err)
    })
     
    var myModalEl2 = document.querySelector('#editBrandModal')
var modal = bootstrap.Modal.getOrCreateInstance(myModalEl2)

   
         $('#editBrandModal').modal('show');
 }


 function getCategoryById(id) {
    return new Promise((resolve, reject) => {
        resolve(
            $.getJSON('http://localhost:8080/categories/'+id, function (data) {
                console.log("this is Data Promise",data)
                    }),
                    );
      })       
}

function deleteCategoryById(id) {
    $.ajax({
        type: "DELETE",
        url: 'http://localhost:8080/categories/'+id,
        dataType: "json",
        statusCode: {
            200: function() {
            $('.output').replaceWith('<tbody class="output">'+listAllCategories()+'</tbody>')
            },
            500: function () {
                $('#cannotDeleteModal').modal('show');
            }
          }
    })
}

$(function() {
    $('#category').submit(function(e) {
        debugger;
        e.preventDefault();
        category = {"categoryName":$("#category-name").val()};
        $.ajax({
            type: "POST",
            url: 'http://localhost:8080/categories',
            dataType: "json",
            //contentType: 'application/x-www-form-urlencoded',
            data: {categoryName:$("#category-name").val()},
            statusCode: {
                200: function() {
                    $('#category')[0].reset();
                    $('.output').replaceWith('<tbody class="output">'+listAllCategories()+'</tbody>')
                    $('#message').hide();    
            },
                400 : () => {
                    $('#message').show();
                    $('.message-placeholder').replaceWith('<div id="message" class="message-placeholder">Etwas ist schief gelaufen, bitte überprüfen Sie Ihre Eingaben und versuchen Sie es erneut.</div>');
            },
                500 : ()=> {
                    $('#message').show();
                    $('.message-placeholder').replaceWith('<div id="message" class="message-placeholder">Diese Kategorie gibt es bereits! Bitte überprüfen Sie Ihre Eingabe und versuchen Sie es erneut</div>');
                }
              }
        })
    })
})


$(document).ready(function() {
    $('#category-edit').submit(function(e) {
        e.preventDefault();
        categoryToEdit = {"id":$("#category-id-edit").val(),
                "categoryName":$("#category-name-edit").val()};
                console.log("Here We are",categoryToEdit)
        $.ajax({
            type: "PUT",
            url: 'http://localhost:8080/categories/'+categoryToEdit.id,
            dataType: "json",
            data: {categoryName:categoryToEdit.categoryName},
            statusCode: {
                200: function() {
                    $('#category-edit')[0].reset();
                    $('.output').replaceWith('<tbody class="output">'+listAllCategories()+'</tbody>')
                    $('#message').hide();    
            },
                400 : () => {
                    $('#message').show();
                    $('.message-placeholder').replaceWith('<div id="message" class="message-placeholder">Etwas ist schief gelaufen, bitte überprüfen Sie Ihre Eingaben und versuchen Sie es erneut.</div>');
            },
                500 : ()=> {
                    $('#message').show();
                    $('.message-placeholder').replaceWith('<div id="message" class="message-placeholder">Diese Marke gibt es bereits! Bitte überprüfen Sie Ihre Eingabe und versuchen Sie es erneut</div>');
                }
              }
        });
    });
});


