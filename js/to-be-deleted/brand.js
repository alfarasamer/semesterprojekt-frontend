/*$(document).ready(function() {
    $('#message').hide();
    listAllBrands();
});
*/

$( window ).on( "load",function() {
    $('#message').hide();
    listAllBrands();
});

function listAllBrands() {
        $('.output').replaceWith('<tbody class="output"></tbody>')
    $.getJSON('http://localhost:8080/brands', function (data) {
        $.each(data, function (index, brand) {
            var id = brand.id;
            var brandName = brand.brandName;
            $('.output').append('<tr><th class="brand-id" scope="row">' + id +
                '</th><td class="brand-name">'
                + brandName +
                '</td><td><ul class="list-inline m-0"><li class="list-inline-item"><button class="btn btn-success btn-sm rounded-0"  onclick="showEditModal('+id+')" type="button" data-toggle="tooltip" data-placement="top" data-bs-toggle="modal" data-bs-target="#editModal" title="Bearbeiten"><ion-icon name="create-outline"></ion-icon></button></li><li class="list-inline-item">'+
                '<button class="btn btn-danger btn-sm rounded-0" onclick="deleteBrandById('+id+')" type="button" data-toggle="tooltip" data-placement="top" title="Löschen"><ion-icon name="trash-outline"></ion-icon></button></li></ul></td>');
            });
    });
}

function showEditModal(id) {
    getBrandById(id).then((data)=>{
    $('#brand-id-edit').val(data.id),
    $('#brand-name-edit').val(data.brandName)
}).catch((err)=>{
    console.log(err)
})
 
var myModalEl = document.querySelector('#editModal')
var modal = bootstrap.Modal.getOrCreateInstance(myModalEl)


     $('#editModal').modal('show');
}


function getBrandById(id) {
    return new Promise((resolve, reject) => {
        resolve(
            $.getJSON('http://localhost:8080/brands/'+id, function (data) {
                console.log("this is Data Promise",data)
                    }),
                    );
      })       
}

function deleteBrandById(id) {
    $.ajax({
        type: "DELETE",
        url: 'http://localhost:8080/brands/'+id,
        dataType: "json",
        statusCode: {
            200: function() {
            $('.output').replaceWith('<tbody class="output">'+listAllBrands()+'</tbody>')            
            },
            500: function () {
                $('#cannotDeleteModal').modal('show');
            }
          }
    })
}

$(document).ready(function() {
    $('#brand').submit(function(e) {
        e.preventDefault();
        brand = {"brandName":$("#brand-name").val()};
        $.ajax({
            type: "POST",
            url: 'http://localhost:8080/brands',
            dataType: "json",
            //contentType: 'application/x-www-form-urlencoded',
            data: {brandName:$("#brand-name").val()},
            statusCode: {
                200: function() {
                $('#brand')[0].reset();
                $('.output').replaceWith('<tbody class="output">'+listAllBrands()+'</tbody>');
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
        })
    })
})
$(document).ready(function() {
    $('#brand-edit').submit(function(e) {
        e.preventDefault();
        brandToEdit = {"id":$("#brand-id-edit").val(),
                "brandName":$("#brand-name-edit").val()};
                console.log("Here We are",brandToEdit)
        $.ajax({
            type: "PUT",
            url: 'http://localhost:8080/brands/'+brandToEdit.id,
            dataType: "json",
            data: {brandName:brandToEdit.brandName},
            statusCode: {
                200: function() {
                    $('#brand-edit')[0].reset();
                    $('.output').replaceWith('<tbody class="output">'+listAllBrands()+'</tbody>')
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


