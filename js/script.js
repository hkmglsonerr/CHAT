//kullanıcı kaydetme fonksiyonu

function kullaniciKaydet(){
    let kullaniciAdi=document.getElementById("kullaniciAdi").value
    let email=document.getElementById("email").value
    let parola=document.getElementById("parola").value
    let biyografi=document.getElementById("biyografi").value
    let profilFoto=document.getElementById("profilFoto").files[0]

    const reader =new FileReader()
    reader.onload=function(e){

        const profilData=e.target.result

        let kullanici={
            kullaniciAdi:kullaniciAdi,
            email:email,
            parola:parola,
            biyografi:biyografi,
            profilFoto:profilData
        }

        let kullanicis=JSON.parse(localStorage.getItem("kullanicis"))||[]
        kullanicis.push(kullanici)

        localStorage.setItem("kullanicis",JSON.stringify(kullanicis))

        window.location.href="giris.html"
    }

    reader.readAsDataURL(profilFoto)


}


//giriş yapma fonksiyonu

function girisYap(){
    let girisKullaniciAdi=document.getElementById("girisKullaniciAdi").value
    let girisParola=document.getElementById("girisParola").value

    let storedUsers=JSON.parse(localStorage.getItem("kullanicis"))||[]

    let foundUsers=storedUsers.find(user=>user.kullaniciAdi===girisKullaniciAdi&&user.parola===girisParola)

    if(foundUsers){
        window.location.href="profil.html"
    }else{
        alert("giriş bilgileri hatalı tekrar deneyin")
    }
    // localStorage.clear()
}