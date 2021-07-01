$(document).ready(function(){
$("#pbtn").click(function(event){
  event.preventDefault();
  var text =$("#text").val();
  var num =$("#num").val();
  var date =$("#date").val();
  var code =$("#code").val();
  var cvc =$("#cvc").val();
  if (!text || !num || !date || !code || !cvc) {
    alert("Please Enter Your Card Details!")
  } else if (!text) {
    alert("Please Enter Your Card Name!")
  }else if (!num) {
    alert("Please Enter Your Card Number!")

  }else if (!date) {
    alert("Please Enter Your Card Expiry Date!")

  }else if (!cvc) {
    alert("Please Enter Your Card CVC code!")

  }else if (!code) {
    alert("Please Enter Your Postal Code!")

  } else {
    alert("Invalid Card!")
    function pay(){
    }
  }
})
})

/* function Pay() {
    var text =document.getElementById('text');
    var num =document.getElementById('num');
    var date =document.getElementById('date');
    var code =document.getElementById('code');
    var cvc =document.getElementById('cvc');
    if (!text) {
      alert("Enter your Name!")
    } else {
      window.location.href = "https://dennis-tec.github.io/seenoi-shop/";
    }
  document.getElementById('pbtn').innerHTML =Pay();
  }
/*function pay(a, b, c, d, e) {
  var answer;
  switch (a, b, c, d, e) {
    case text:
    case num:
    case date:
    case cvc:
     answer = "Please Enter Your Postal Code!"
      break;
    case text:
    case num:
    case date:
    case code:
     answer = "Please Enter Your Card CVC code!"
      break;
    case text:
    case num:
    case code:
    case cvc:
     answer = "Please Enter Your Card Expiry Date!"
      break;
    case text:
    case code:
    case cvc:
    case date:
     answer = "Please Enter Your Card Number!"
      break;
    case date:
    case num:
    case code:
    case cvc:
     answer = "Please Enter Your Card Name!"
      break;
    };
  return answer;
document.getElementById('button').innerHTML = pay(a, b, c, d, e);
}
alert(pay(text, num, date, cvc, code))*/
