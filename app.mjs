function startApp() {
  let input_number = document.getElementById("number");

  let mtn_prefix =
    /^(\+234803|\+234806|\+234703|\+234706|\+234810|\+234813|\+234814|\+234816|\+234903|\+234906|0803|0806|0703|0706|0810|0813|0814|0816|0903|0906)\d{7}$/;
  let glo_prefix =
    /^(\+234805|\+234807|\+234811|\+234705|\+234815|\+234905|0805|0807|0811|0705|0815|0905)\d{7}$/;
  let nine_mobile =
    /^(\+234809|\+234817|\+234818|\+234908|\+234909|0809|0817|0818|0908|0909)\d{7}$/;
  let airtel_prefix =
    /^(\+234802|\+234808|\+234812|\+234701|\+234708|\+234902|\+234907|\+234901|\+234912|0802|0808|0812|0701|0708|0902|0907|0901|0912)\d{7}$/;

  input_number.addEventListener("keyup", () => {
    
    if (mtn_prefix.test(input_number.value)) {
      document.querySelector(".phone-logo").src = "logos/mtn.png";
      console.log(input_number);
    } else if (glo_prefix.test(input_number.value)) {
      document.querySelector(".phone-logo").src = "logos/glo.jpg";
      console.log(input_number);
    } else if (airtel_prefix.test(input_number.value)) {
      document.querySelector(".phone-logo").src = "logos/airtel.png";
      console.log(input_number);
    } else if (nine_mobile.test(input_number.value)) {
      document.querySelector(".phone-logo").src = "logos/9mobile.png";
      console.log(input_number);
    } else {
    }
  });
}

// Your entire app should not necessarily be coded inside this 
// single function (though there's no penalty for that), 
// so create and use/call additional functions from here

// pls remove the below and make some magic in here!




// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //