function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!


const sign_in_btn = document.querySelector('#sign-in-btn')
const sign_up_btn = document.querySelector('#sign-up-btn')
const container = document.querySelector('.container')

sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign_up_mode')
})

sign_in_btn.addEventListener('click', () => {
  container.classList.remove('sign_up_mode')
})

  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //