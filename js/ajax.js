$(document).ready(function () {
    $("#fetch").click(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            type: "GET",
            dataType: "json",
            success: function (data) {
                $("#fetchs").html("<pre>" + JSON.stringify(data, null, 5) + "</pre>");
            }
        });
    });

    $('#myForm').submit(function (e) {
        e.preventDefault();
        $('#loading').show();
        $('#responseMessage').empty();
        const formData = {
            userId: $('#userids').val(),
            id: $('#ids').val(),
            title: $('#titles').val(),
            body: $('#bodies').val()
        };
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            type: 'POST',
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function (response) {
                $('#loading').hide();
                $('#responseMessage').html('<p>Form submitted successfully!</p>');
            },
            error: function (xhr, status, error) {
                $('#loading').hide();
                $('#responseMessage').html('<p>Error submitting the form. Please try again later.</p>');
            }
        });
    });
});
