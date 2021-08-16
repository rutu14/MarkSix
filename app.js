var btnTranslate=document.querySelector("#btn-translate")
var txtarea=document.querySelector("#txt")
var outtxt=document.querySelector("#outtxt")

url_server="https://api.funtranslations.com/translate/minion.json"
function gettranslation(input){
    return url_server+"?"+"text="+input
}

btnTranslate.addEventListener("click",function clickEventHandler(){
    var input=txtarea.value
    fetch(gettranslation(input))
        .then(response => response.json())
        .then(json=>{
            outtxt.innerText=json.contents.translated})
        .catch(function errorHandler(error){
            console.log("Server Error.")
            alert("Server error!")
        })
})