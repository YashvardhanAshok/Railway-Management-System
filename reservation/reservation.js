// menu date 
  const todayabc = new Date().toISOString().split('T')[0];
  document.getElementById('date_option').value = todayabc;





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

// #region animations
var scroll_bar=true
function handleScroll() {
    const scrollPositionInt = window.scrollY || window.pageYOffset;
  
    const booking_card = document.querySelector('.booking_card');
    
  
  
    if (scrollPositionInt >= 20 ) {
      booking_card.classList.add('active');
    } else {
  
      booking_card.classList.remove('active');
    }
  }
  
  window.addEventListener("scroll", handleScroll);
  

//#region  date
var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function getFormattedDate(date) {
  const day = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  return `${day}, ${month} ${dayOfMonth}`;
}

// Get today's date
var date_sring="";
const today = new Date();
for (let i = 0; i <= 11; i++) {
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + i);
  date_sring +=`<input type="radio" id="date${i}" name="date" value="${getFormattedDate(nextDay)}" class="date_inside_layout">
              <label for="date${i}" >${getFormattedDate(nextDay)} </label>`
}
document.getElementById('date-selector').innerHTML =date_sring ; 
document.getElementById('date1').checked = true;

// events
function change_date(selectedDate,pointer_add) {
  const currentDate = new Date(selectedDate);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let date_string_fu = '';
  if (pointer_add) {
    for (let i = 0; i < 11; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(nextDate.getDate() + i);
      const day = daysOfWeek[nextDate.getDay()];
      const month = months[nextDate.getMonth()];
      const dayOfMonth = nextDate.getDate();
      const dates =`${day}, ${month} ${dayOfMonth}`;
      date_string_fu += `<input type="radio" id="date${i+1}" name="date" value="${dates}" class="date_inside_layout">
      <label for="date${i+1}" >${dates} </label>`;
  }
  }
  else{
  for (let i = 12; i > 1; i--) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(nextDate.getDate() - i);
      const day = daysOfWeek[nextDate.getDay()];
      const month = months[nextDate.getMonth()];
      const dayOfMonth = nextDate.getDate();
      const dates =`${day}, ${month} ${dayOfMonth}`;
      date_string_fu += `<input type="radio" id="date${i-1}" name="date" value="${dates}" class="date_inside_layout">
      <label for="date${i-1}" >${dates} </label>`;
  }
  }
  
  return date_string_fu;

}

document.querySelectorAll('.date_inside_layout').forEach(input => {
    input.addEventListener('click', function() {
        // const selectedDate = this.value;
        console.log(this.value);
        // const namePropertyValue  = this.id;
        // console.log(namePropertyValue);
        // if (namePropertyValue == 'date9') {
        //   document.getElementById('date-selector').innerHTML = change_date(selectedDate); 
        //   document.getElementById('date1').checked = true;
        // }
    });
});
// next
document.querySelectorAll('.next_date').forEach(input => {
    input.addEventListener('click', function() {
          const pointer_add =true;
          document.getElementById('date-selector').innerHTML = change_date(document.getElementById('date11').value , pointer_add); 
          document.getElementById('date1').checked = true;
    });
});

// pre_date
document.querySelectorAll('.pre_date').forEach(input => {
  input.addEventListener('click', function() {
        const pointer_add =false;
        document.getElementById('date-selector').innerHTML = change_date(document.getElementById('date11').value , pointer_add); 
        document.getElementById('date11').checked = true;
  });
});



// udate to ac class
var ac_class = document.getElementById('ac_class');
var class_of_train_name = document.getElementById('class_of_train_name');
ac_class.addEventListener('change', function() {
class_of_train_name.innerHTML = `${ac_class.value}`;
});
class_of_train_name.innerHTML = `${ac_class.value}`;






// #region surch_mNu
// Get the select element
var citySelect_1 = document.getElementById('citySelect_1');
var city_station_1 = document.getElementById('city_station_1');

var citySelect_2 = document.getElementById('citySelect_2');
var city_station_2 = document.getElementById('city_station_2');

var city_options = '';
var station_options = '';
var city_array = [];

const filePath2 = '../data_base/rail_way_name.json';
fetch(filePath2)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(jsonData => {
    const { cities_and_stations } = jsonData;
    
    // Iterate over cities and their stations to populate city_array
    for (const city in cities_and_stations) {
      if (cities_and_stations.hasOwnProperty(city)) {
        const stations = cities_and_stations[city];
        city_array.push([city, stations]);
      }
    }

    // Generate options for cities
    for (let i = 0; i < city_array.length; i++) {
      const city = city_array[i][0];
      city_options += `<option value="${city}">${city}</option>`;
    }


    // Set options for the city select element
    citySelect_1.innerHTML = city_options;
    citySelect_2.innerHTML = city_options;
    citySelect_2.innerHTML = city_options;
    citySelect_2.selectedIndex = 1;
    
    city_station_1.innerHTML = `<option value="${city_array[0][1][0]}">${city_array[0][1][0]}</option><option value="${city_array[0][1][1]}">${city_array[0][1][1]}</option>`;
    city_station_2.innerHTML = `<option value="${city_array[1][1][0]}">${city_array[1][1][0]}</option>`;
    Search();



    function station_options_name(selectedCity) {
      const stations = cities_and_stations[selectedCity];
      let station_options = '';
      stations.forEach(station => {
        station_options += `<option value="${station}">${station}</option>`;
      });
      return station_options;
    }
    
    citySelect_1.addEventListener('change', function() {
      const selectedCity = this.value;
      city_station_1.innerHTML = station_options_name(selectedCity);
      // document.getElementById('cityNamesDataBase1').innerHTML = `${citySelect_1.value}<p>${city_station_1.value}</p>`;
    });
    
    citySelect_2.addEventListener('change', function() {
      const selectedCity = this.value;
      city_station_2.innerHTML = station_options_name(selectedCity);
      // document.getElementById('cityNamesDataBase2').innerHTML = `${citySelect_2.value}<p>${city_station_2.value}</p>`;
});
 
    

})
.catch(error => {
  console.error('Error fetching JSON:', error);
});




 

var button = document.getElementById("but_option_CU_id");
button.addEventListener("click", function() {
  Search();
});

// #region surch
function Search(){
  // udate_the_name
  document.getElementById('cityNamesDataBase1').innerHTML = `${citySelect_1.value}<p>${city_station_1.value}</p>`;
  document.getElementById('cityNamesDataBase2').innerHTML = `${citySelect_2.value}<p>${city_station_2.value}</p>`;

  // filter_date
  const date = new Date(document.getElementById('date_option').value);
  const weekdays  = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayOfWeek = date.getDay();
  const dayName = weekdays[dayOfWeek];
  // console.log(dayName);


  //class price
  function objectToDiv(obj,data) {
    let html = '';
    for (const key in obj) {
        const value = obj[key];
        const className = key.replace('_price', '');
        if (value !== "") {
            html += `<a href="../pay/pay.html?${citySelect_1.value}&${city_station_1.value}&${citySelect_2.value}&${city_station_2.value}&${data.train_no}&${data.departs_on}&${data.train_type}&${data.starting_time}&${data.total_time_taken}&${data.distance}&${data.ending_time}&${className}&${value}"><div class="price_cell"><div class="name_of_class">${className}</div><div class="price">${value}</div></div></a>`;
        }
    }
    return html;
  }

  // main_card
  const filePath = '../data_base/data_base.json';
  var a = "";
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(jsonData => {
      jsonData.forEach((data, index) => {
        const Train_class = objectToDiv(data.classes,data);

        // filter 

        
        if (citySelect_1.value!= data.starting_city || city_station_1.value!=data.starting_city_station
          ||citySelect_2.value!= data.ending_city || city_station_2.value!=data.ending_city_station) {
            return;
        }


        a += `
          <div class="train_card">
          <div class="Train_det">
            <div class="Train_name_no"><div class="Departs_On">${data.train_no} | ${data.departs_on} </div>${data.train_type}</div> 
            <div class="Time_in_card"> ${data.starting_time} <div class="Distance">${data.total_time_taken} <br>${data.distance}</div> ${data.ending_time}</div>
          </div>
          <div class="train_Classes">${Train_class}</div>
          </div>
              `;
      });
      // display
      document.getElementById("train_card_cu").innerHTML = a;
    })
    .catch(error => {
      console.error('Error fetching the file:', error);
    });
  }




// #region map
const radioButtons = document.querySelectorAll('input[type="radio"]');
const booking_card_option = document.querySelector('.booking_card_option');
radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', function() {
        if (this.checked) {
          if (this.value=="option1") {booking_card_option.classList.remove('remove');}
          if (this.value=="option2") {booking_card_option.classList.add('remove');}
          if (this.value=="option3") {booking_card_option.classList.add('remove');}
        }
    });
});
