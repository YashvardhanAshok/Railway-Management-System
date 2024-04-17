// #region menu

const menuCheckbox = document.querySelector('.menu');
const menuContainer = document.querySelector('.menucontanerbox');
const loginId = document.querySelector('.loginId');
const menu_text = document.querySelector('.menu_text');
const txt_menu = document.querySelector('.txt_menu');

menuCheckbox.addEventListener('change', function() {
  const isChecked = this.checked;
  if (isChecked==true) {menuContainer.style.display = 'block';
const root = document.documentElement;

// Change the value of the --c variable
root.style.setProperty('--c', 'black');


  
  }
  else{menuContainer.style.display = 'none';}
});

const headOfSigningUp = document.querySelector('.head_of_signing_up');
const signingUpText = document.querySelector('.SIGNING_UP__text');
const loginText = document.querySelector('.LOGIN__text');

// #region web_val
window.onload = function() {
  var url = window.location.href;
  var queryString = url.split('?')[1];
  var valuesArray = queryString.split('&');
  for (var i = 0; i < valuesArray.length; i++) {
      valuesArray[i] = decodeURIComponent(valuesArray[i]);
  }
  console.log(valuesArray);

  document.getElementById('cityNamesDataBase1').innerHTML = `${valuesArray[0]}<p>${valuesArray[1]}</p>`;
  document.getElementById('cityNamesDataBase2').innerHTML = `${valuesArray[2]}<p>${valuesArray[3]}</p>`;
  document.getElementById('cityNamesDataBase2').innerHTML = `${valuesArray[2]}<p>${valuesArray[3]}</p>`;
  document.getElementById('Time_in_card').innerHTML =   `${valuesArray[7]} <div class="Distance">${valuesArray[8]} <br>${valuesArray[9]}</div> ${valuesArray[10]}`



  document.getElementById('table').innerHTML =`
    <table>
    <tr>
        <td>Base fare per adult</td>
        <td>${valuesArray[12]}</td>
    </tr>

    <tr>
        <td>Dynamic fare</td>
        <td>RS. 238</td>
    </tr>

    <tr>
        <td>Tax-18%</td>
        <td>RS. ${parseFloat(valuesArray[12].replace("Rs. ", "")) * 0.18}</td>
    </tr>

    <tr>
        <td>Reservation charge</td>
        <td>RS. 40</td>
    </tr>  

    <tr>
        <td>Superfast charge</td>
        <td>RS. 40</td>
    </tr>  

    <tr>
        <td><b>Total Price per adult</b></td>
        <td><b>RS. ${parseFloat(valuesArray[12].replace("Rs. ", "")) + (parseFloat(valuesArray[12].replace("Rs. ", "")) * 0.18) + 40 + 40 + 250}</b></td>
        
        </tr>
    
    `

     

};