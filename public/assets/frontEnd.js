// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    //Function to add a new item/burger 
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".devour-burger").on("click", function () {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function () {
                console.log("updated burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function () {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burger/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("updated burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
