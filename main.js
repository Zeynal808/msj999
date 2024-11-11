const firebaseConfig = {
    apiKey: "AIzaSyA5C2_y3Yi7EnjxGeBZtqb0zBa0MPrYq3E",
    authDomain: "front079.firebaseapp.com",
    projectId: "front079",
    storageBucket: "front079.firebasestorage.app",
    messagingSenderId: "779094346780",
    appId: "1:779094346780:web:61fe5af61c0684072da3d9"
};
firebase.initializeApp(firebaseConfig)
let db = firebase.database().ref()
const users = [{ ad: "zarema", sifre: "zarema111" }, { ad: "gunel", sifre: "gunel222" }, { ad: "zeynal", sifre: "zeynal333" }]
var ad = ""
var sifre = ""
$("form").on("submit", (e) => {
    e.preventDefault()
    ad = $("#name").val().toLowerCase()
    sifre = $("#password").val()
    for (const user of users) {
        if (user.ad == ad && user.sifre == sifre) {


            $(".message-area").css({ display: "block" })
            $(".container").css({ display: "none" })
            return
        }

    }
    $(".error-message").css({ display: "block" })

})
$(".gonder").on("click", () => {
    let msj = $("#msj").val()
    db.set({
        ad,
        msj
    })
    $("#msj").val("")
})
db.on("value",(snapshot)=>{
    let obj=snapshot.val()
    let p=$(`<p>${obj.ad} : ${obj.msj}</p>`)
    $(".message-box").append(p)
    console.log(obj)
})