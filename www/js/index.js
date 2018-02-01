document.addEventListener("deviceready", onDevice, false);

function onDevice() {

document.getElementById("cameraButton").addEventListener("click", takePicture);
document.getElementById("galleryButton").addEventListener("click", openGallery);


//Camera API and function
function takePicture() {

    navigator.camera.getPicture(success,error, {

        quality:50,
        destinationType:Camera.DestinationType.DATA_URL
    });
}

function success(imageData) {
    var img = document.getElementById("image1");
    img.src = "data:image/jpeg; base64,"+ imageData;

}

function error(err) {

    console.log("errorhappened" + err);
}





//Gallery functions
function openGallery() {

    navigator.camera.getPicture(

function (result){

        console.log(result);
        var img = document.getElementById("image1");
        img.src = "data:image/jpeg; base64," + result;

},

function (error){

    console.log(error);
},

{
    sourceType:Camera.PictureSourceType.SAVEDPHOTOALBUM
});

}
}
