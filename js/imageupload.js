$(document).ready(function() {
    $('.dominik').submit(function(e) {
        e.preventDefault();

        var form = $('.dominik')[0];
    //console.log("Form is",form)
        var data = new FormData(form);
      //  console.log("Data is",data);  

        $.ajax({
            
            type: "POST",
            url: 'http://localhost:8080/uploadMultiFiles',
            data: data,
            processData:false,
            contentType:false,
            cache: false,
            timeOut: 1000000
        });
        
    }
    );
})


