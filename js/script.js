var filter = document.getElementById("filter");
var iSearch = document.getElementById("iSearch")
var iconSearch = document.getElementById("iconSearch")
var cardCont = document.getElementById("cardCont")
var search = document.getElementById("search")
var logoimg = document.getElementById("logoimg")




iSearch.addEventListener("click", function () {

  filter.focus()

})

//
//window.onload = function() {
//  logoimg.style.width = "300px"
//};

logoimg.addEventListener("click", function () {

  //    window.scrollTo(0, 0)

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  iconSearch.classList.add("fa-search");
  iconSearch.classList.remove("fa-times");

  filter.value = "";
  for (i = 0; i < cards.length; i++) {
    cards[i].classList.remove("none")

  }

  lista.classList.remove("flex")



  //     window.location.reload()
})




var t = []

const base = 'https://docs.google.com/spreadsheets/d/10ZJUuhL0oLHDKkBTVkK_5oE8REf7_sRuaar3nFjomVE/gviz/tq?';

    fetch(base)
    .then(res => res.text())
    .then(rep =>{
        const data = JSON.parse(rep.substr(47).slice(0,-2));
        
        for(rows of data.table.rows){
          var newt = {
            nombre: rows.c[0].v,
            peso: rows.c[2].v,
            urlImg: rows.c[3].v
          }
          t.push(newt)
        }

        for(q of t){
          

            //        console.log(Tornillos[i].nombre)
            //        console.log(Tornillos[i].peso)
          
            var li = document.createElement("li")
            li.setAttribute("onclick",
          
              `   
                          swal({
          title: "Cantidad:", 
                                 
                                content: {
                                  element: "input",
                                  attributes: {
                                  type: "number",
                                  },
                                  },
          
                          })
                          .then((value) => {
                              swal(value + " ${q.nombre} son: " + Math.round(value * ${q.peso}) + " gr");
          
                              list.push(value + " ${q.nombre} son: " + Math.round(value * ${q.peso}) + " gr");
          
                              
                          });`
          
            )
          
          
            var p = document.createElement("p")
            var img = document.createElement("img")
            img.setAttribute("src", q.urlImg)
            var text = document.createTextNode(q.nombre)
          
            li.classList.add("card")
          
            p.appendChild(text)
            li.appendChild(img)
            li.appendChild(p)
            cardCont.appendChild(li)
          
          
            //            console.log(Tornillos[i].nombre)
          }
        
        
      })
      


// Por cada objeto se crea una tarjeta con su respectiva imagen y descripcion

var lista = document.getElementById("lista")
var listUl = document.getElementById("listUl")
var btnPlus = document.getElementById("btnPlus")
var btnErace = document.getElementById("btnErace")
var btnPlusI = document.getElementById("btnPlusI")
var btnEraceI = document.getElementById("btnEraceI")
var list = []


btnErace.addEventListener("click", function () {

  list = [];
  listUl.innerHTML = "";
  btnErace.classList.toggle("animate__backOutDown")

})


btnPlus.addEventListener("click", function () {
  //            lista.innerHTML = list
  //            console.log(list)
  //            btnErace.classList.toggle("block"); VER
  btnPlusI.classList.toggle("btnplusClick")
  listUl.innerHTML = "";
  for (i in list) {

    var listLi = document.createElement("li")
    //                var listUl = document.createElement("ul")
    var listLiText = document.createTextNode(list[i])
    listLi.appendChild(listLiText)
    //                listUl.appendChild(listLi)
    listUl.appendChild(listLi)
    //         console.log(list)

    //                lista.innerHTML += list[i] + "</br>"

  }
  lista.classList.toggle("flex")

})





// Filtra los objetos y reinicia el buscador


var cards = document.querySelectorAll(".card")
var p = document.querySelectorAll("p")
//        console.log(cards)

filter.addEventListener("keyup", function (e) {


  for (i = 0; i < cards.length; i++) {
    if (p[i].innerHTML.toLowerCase().includes(filter.value.toLowerCase())) {
      cards[i].classList.remove("none")
    } else {
      cards[i].classList.add("none")
    }
  }

  if (filter.value !== "") {
    iconSearch.classList.add("fa-times")
    iconSearch.classList.remove("fa-search")

    iSearch.addEventListener("click", function () {

      filter.value = ""
      for (i = 0; i < cards.length; i++) {
        cards[i].classList.remove("none")

      }
      iconSearch.classList.add("fa-search")
      iconSearch.classList.remove("fa-times")

    })


  } else {
    iconSearch.classList.add("fa-search")
    iconSearch.classList.remove("fa-times")
  }

})

document.body.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    iconSearch.classList.add("fa-search");
    iconSearch.classList.remove("fa-times");

    filter.value = "";
    for (i = 0; i < cards.length; i++) {
      cards[i].classList.remove("none")

    }
    filter.value = ""





    filter.focus();
  }
});






// if (You need a website) {
//     function Contact me() {
//
//         const Date = {
//             Whatsapp: 358731577,
//             Instagram: "Jc_Desarrollo",
//             Website: "jcdesarrollo.com",
//             Mail: "jcavitelli@gmail.com",
//         };
//     };
// } else {
//     Have a good day
// }



var ch = true



var cheked = document.querySelector(".cheked");
var nav = document.getElementById("nav");
var invert = document.getElementById("invert")

cheked.addEventListener("click", function () {

  document.body.classList.toggle("darkBody");
  filter.value = ""



  ch = !ch;

  //    console.log(ch)


  if (ch === false) {

    invert.innerHTML = "Gramos"

    cardCont.innerHTML = "";
    for (i of t) {

      //        console.log(Tornillos[i].nombre)
      //        console.log(Tornillos[i].peso)

      var li = document.createElement("li")
      li.setAttribute("onclick",

        `   
                swal({
title: "Gramos:", 
                       
                      content: {
                        element: "input",
                        attributes: {
                        type: "number",
                        },
                        },

                })
                .then((value) => {

                    swal(value + " gr son " + Math.round(value / ${i.peso}) + " Tornillos  ${i.nombre}");


                    list.push(value + " gr son " + Math.round(value / ${i.peso}) + " Tornillos  ${i.nombre}");
                    
                });`

      )


      var p = document.createElement("p")
      var img = document.createElement("img")
      img.setAttribute("src", i.urlImg)
      var text = document.createTextNode(i.nombre)

      li.classList.add("card")

      p.appendChild(text)
      li.appendChild(img)
      li.appendChild(p)
      cardCont.appendChild(li)


      //            console.log(Tornillos[i].nombre)
    }

    var cards = document.querySelectorAll(".card")
    var p = document.querySelectorAll("p")
    //        console.log(cards)

    filter.addEventListener("keyup", function (e) {


      for (i = 0; i < cards.length; i++) {
        if (p[i].innerHTML.toLowerCase().includes(filter.value.toLowerCase())) {
          cards[i].classList.remove("none")
        } else {
          cards[i].classList.add("none")
        }
      }

      if (filter.value !== "") {
        iconSearch.classList.add("fa-times")
        iconSearch.classList.remove("fa-search")

        iSearch.addEventListener("click", function () {

          filter.value = ""
          for (i = 0; i < cards.length; i++) {
            cards[i].classList.remove("none")

          }
          iconSearch.classList.add("fa-search")
          iconSearch.classList.remove("fa-times")

        })


      } else {
        iconSearch.classList.add("fa-search")
        iconSearch.classList.remove("fa-times")
      }

    })



  }

  if (ch === true) {

    invert.innerHTML = "Cantidad"
    cardCont.innerHTML = "";
    for (i of t) {

      //        console.log(Tornillos[i].nombre)
      //        console.log(Tornillos[i].peso)

      var li = document.createElement("li")
      li.setAttribute("onclick",

        `   
                swal({
title: "Cantidad:", 
                       
                      content: {
                        element: "input",
                        attributes: {
                        type: "number",
                        },
                        },

                })
                .then((value) => {
                    swal(value + " ${i.nombre} son: " + Math.round(value * ${i.peso}) + " gr");

                    list.push(value + " ${i.nombre} son: " + Math.round(value * ${i.peso}) + " gr");

                    
                });`

      )


      var p = document.createElement("p")
      var img = document.createElement("img")
      img.setAttribute("src", i.urlImg)
      var text = document.createTextNode(i.nombre)

      li.classList.add("card")

      p.appendChild(text)
      li.appendChild(img)
      li.appendChild(p)
      cardCont.appendChild(li)


      //            console.log(Tornillos[i].nombre)
    }
    var cards = document.querySelectorAll(".card")
    var p = document.querySelectorAll("p")
    //        console.log(cards)

    filter.addEventListener("keyup", function (e) {


      for (i = 0; i < cards.length; i++) {
        if (p[i].innerHTML.toLowerCase().includes(filter.value.toLowerCase())) {
          cards[i].classList.remove("none")
        } else {
          cards[i].classList.add("none")
        }
      }

      if (filter.value !== "") {
        iconSearch.classList.add("fa-times")
        iconSearch.classList.remove("fa-search")

        iSearch.addEventListener("click", function () {

          filter.value = ""
          for (i = 0; i < cards.length; i++) {
            cards[i].classList.remove("none")

          }
          iconSearch.classList.add("fa-search")
          iconSearch.classList.remove("fa-times")

        })


      } else {
        iconSearch.classList.add("fa-search")
        iconSearch.classList.remove("fa-times")
      }

    })



  }




})



