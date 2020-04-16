import $ from 'jquery';

let domUpdates = {

hideLoginWindow() {
  $(".neon-sign-login-container").slideUp(500)
},

addNavBar() {
  $('.nav-bar-container').prepend(`<nav>
      <div class="logo"><b>THE<span> UNDER</span>GROUND <span>INN</span></b></div>
    </nav>`).hide().show(750)
}

}

export default domUpdates;
