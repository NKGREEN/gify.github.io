buttonsArray = ["cat", "skunk", "fish", "koala", "tiger"];
console.log(buttonsArray)

window.onload = function () {
    for (var i = 0; i < buttonsArray.length; i++){
        $("#buttons").append(createButton(buttonsArray[i]));
    }
    
}

function createButton(buttonName) {
    return $("<button/>", {
        text: buttonName,
        id: buttonName,
        click: displayApi,
    })
};

function createImage(name, url) {
    return $("<img/>", {
        src: url,
        id: name,
    })
}



function displayApi() {
    var keyword = this.id
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=CUhNk6bmDCF9gMe7i7JTfSVnt3ZV8TkV&q="+ keyword +"&limit=10&offset=0&rating=G&lang=en"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#display").text("");
        for (var i = 0; i <10; i++) {
            $("#display").append(createImage(keyword, response.data[i].images.fixed_height.url));
        }
    });

}