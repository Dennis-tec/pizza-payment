$("#pbtn").click(function(event){
  event.preventDefault();
  var text =$("#text").val();
  var num =$("#num").val();
  var date =$("#date").val();
  var code =$("#code").val();
  var cvc =$("#cvc").val();
  if (!text|| !num || !date || !code || !cvc) {
    alert("Please Enter Your Card Name!")
  } else if (!num) {
    alert("Please Enter Your Card Number!")

  }else if (!date) {
    alert("Please Enter Your Card Expiry Date!")

  }else if (!cvc) {
    alert("Please Enter Your Card CVC code!")

  }else if (!code) {
    alert("Please Enter Your Postal Code!")

  } else {
    alert("Your payment has been sent succefuly")
  }
})
