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
document.getElementById('date0').checked = true;

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
        var currentDate = new Date(); // Get current date
        var currentYear = currentDate.getFullYear(); // Get current year
        
        // Parse the provided date string "Mon, Apr 29"
        var inputDateString =  `"${this.value} ` + currentYear;
        var inputDate = new Date(inputDateString);
        
        // Format the date to YYYY-MM-DD required by <input type="date">
        var formattedDate = inputDate.toISOString().slice(0, 10);
        document.getElementById("date_option").value = formattedDate;
        
        Search();
        
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



// // udate to ac class
// var ac_class = document.getElementById('ac_class');
// var class_of_train_name = document.getElementById('class_of_train_name');
// ac_class.addEventListener('change', function() {
// class_of_train_name.innerHTML = `${ac_class.value}`;
// });
// class_of_train_name.innerHTML = `${ac_class.value}`;






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




// train_data_random
function trin_detil() {

    // waek
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    function getRandomWeekSubset() {
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      shuffleArray(daysOfWeek); // Shuffle the array of days
    
      const subsetLength = Math.floor(Math.random() * (daysOfWeek.length + 1)); // Random number of days
      const subset = daysOfWeek.slice(0, subsetLength); // Select a subset of days
    
      return subset;
    }
    const departs_on_befor = getRandomWeekSubset();

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(document.getElementById("date_option").value);
    const dayOfWeekfilter = daysOfWeek[date.getDay()];

    if (departs_on_befor.includes(dayOfWeekfilter)) {} 
    else {return "";}

    // index for weeek
    const array_for_weeek_index=[]
    for (let i = 0; i < departs_on_befor.length; i++) {
        const index = daysOfWeek.indexOf(departs_on_befor[i]);
        array_for_weeek_index.push(index);
    }
    const w_array_1=["S","M","T","W","T","F","S"];
    const w_array_2=["<b>S</B>","<b>M</B>","<b>T</B>","<b>W</B>","<b>T</B>","<b>F</B>","<b>S</B>"];

    const departs_on=departs_on_befor.join(' ');


    // train no
    const train_no = Math.floor(1000 + Math.random() * 9000);;
  

  
    // get the train time  
    function getRandomTime12h() {
      const padZero = (num) => (num < 10 ? `0${num}` : num); 
    
      const randomHour = Math.floor(Math.random() * 12) + 1; 
      const randomMinute = Math.floor(Math.random() * 60);
    
      const hourString = padZero(randomHour);
      const minuteString = padZero(randomMinute);
    
      const amOrPm = Math.random() < 0.5 ? "AM" : "PM"; 
    
      return `${hourString}:${minuteString} ${amOrPm}`; 
    }
    const starting_time  = getRandomTime12h();
    const ending_time = getRandomTime12h();
   
  // total_time_taken
  function getRandomTimeDuration() {
    // Generate random hours between 6 and 23 (inclusive)
    const randomHours = Math.floor(Math.random() * (24 - 6)) + 6;
    const randomMinutes = Math.floor(Math.random() * 60);

    let durationString = `${randomHours}h ${randomMinutes}m`;
    return durationString; 
  }  

  const total_time_taken = getRandomTimeDuration();
    
    //distance 
    const distance =Math.floor(Math.random() * (2000 - 985 + 1)) + 985 + " kms";
  
    // class and train type
    const trainClasses = {
      "Rajdhani Express": [
          ["First AC", 1353],
          ["AC 2 Tier", 1949],
          ["AC 3 Tier", 3365]
      ],
      "Shatabdi Express": [
          ["Executive Chair Car", 484],
          ["Chair Car", 211]
      ],
      "Duronto Express": [
          ["First AC", 6422],
          ["AC 2 Tier", 3677],
          ["AC 3 Tier", 2448],
          ["Sleeper Class", 956]
      ],
      "Gatimaan Express": [
          ["Chair Car", 1125],
          ["Executive Car", 2280]
      ],
      "Tejas Express": [
          ["Executive Chair Car", 2322],
          ["Chair Car", 1034]
      ],
      "Garib Rath Express": [
          ["AC 3 Tier", 729]
      ],
      "Sampark Kranti Express": [
          ["AC 2 Tier", 3350],
          ["AC 3 Tier", 2265],
          ["Sleeper Class", 865],
          ["AC 1 Tier", 5935]
      ],
      "Jan Shatabdi Express": [
          ["AC Chair Car", 1800],
          ["Second Seating", 500]
      ],
      "Vande Bharat Express": [
          ["Executive Chair Car", 2299],
          ["Chair Car", 1262]
      ],
      "Kalka Mail": [
          ["First AC", 4595],
          ["AC 2 Tier", 2700],
          ["AC 3 Tier", 1875],
          ["Sleeper Class", 715]
      ],
      "Howrah Mail": [
          ["AC 2 Tier", 2935],
          ["AC 3 Tier", 2035],
          ["Sleeper Class", 1920],
          ["AC 1 Tier", 5005]
      ]
  };
    // train_type
    const train_type = Object.keys(trainClasses)[Math.floor(Math.random() * Object.keys(trainClasses).length)];
    // console.log(train_type);

    if (document.getElementById("Train_Name").value !== train_type && document.getElementById("Train_Name").value !== "All Train" ) {
      return "";
    }
    else{

  console.log("Train_Name pass");

    }


// edit
const trainTypeArray = trainClasses[train_type];
let hasAC2Tier = false;

for (let i = 0; i < trainTypeArray.length; i++) {
  if (document.getElementById("train_class").value === "All class") {
      hasAC2Tier = true;
      break; // No need to continue if "All class" is selected
  } else if (trainTypeArray[i][0] === document.getElementById("train_class").value) {
      hasAC2Tier = true;
      break;
  }
}

if (hasAC2Tier) {
  console.log("pass");
} else {
  return "";
}



    let html ="";
    for (let [className, fare] of trainClasses[train_type]) {

      html += `
      <a href="../pay/pay.html?${citySelect_1.value}&${city_station_1.value}&${citySelect_2.value}&${city_station_2.value}&${train_no}&${departs_on}&${train_type}&${starting_time}&${total_time_taken}&${distance}&${ending_time}&${className}&${fare}">
        <div class="price_cell">
          <div class="name_of_class">${className}</div>
          <div class="price">Rs. ${fare}</div>
        </div>
      </a>`;
    }
    const Train_class = html;
    const a= `
             <div class="train_card">
             <div class="Train_det">
                <div class="Train_name_no"><div class="Departs_On">${train_no} | ${departs_on} </div>${train_type}</div> 
                <div class="Time_in_card"> ${starting_time} <div class="Distance">${total_time_taken} <br>${distance}</div> ${ending_time}</div>
             </div>
                <div class="train_Classes">${Train_class}</div>
             </div>`;
    return a;
}



function Search(){
  document.getElementById('cityNamesDataBase1').innerHTML = `${citySelect_1.value}<p>${city_station_1.value}</p>`;
  document.getElementById('cityNamesDataBase2').innerHTML = `${citySelect_2.value}<p>${city_station_2.value}</p>`;
  const date = new Date(document.getElementById('date_option').value);
  const weekdays  = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayOfWeek = date.getDay();
  
  // surch date
  const dayName = weekdays[dayOfWeek];

  var a = "";  
  for (let i = 0; i < 40; i++) {
    a += trin_detil();
  }

  document.getElementById("train_card_cu").innerHTML = a;

}




// #region map
const radioButtons = document.querySelectorAll('input[type="radio"]');
const booking_card_option = document.querySelector('.booking_card_option');
const remove_file = document.querySelector('.remove_file');

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', function() {
        if (this.checked) {
          if (this.value=="option1") {booking_card_option.classList.remove('remove');remove_file.classList.remove('remove');}
          if (this.value=="option2") {
            booking_card_option.classList.add('remove');
            remove_file.classList.add('remove');
        
            

            
            
            
            
            

            
        
        
        
        
        }
          // if (this.value=="option3") {booking_card_option.classList.add('remove');}
        }
    });
});


// pnr
function processDigits() {
  const digits = document.getElementById('digitsInput').value;


  const filePath = '../data_base/user_data.json';

  fetch(filePath)
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(jsonData => {



    if (digits==jsonData.PNR_Number) {
        const reservationDetailsDiv_str=`
        <b>Name:</b> ${jsonData.firstname} ${jsonData.lastname} <br>
        <b>email:</b> ${jsonData.email}  <br>
        <b>phone:</b> ${jsonData.phone}  <br>
        <b>Train Name:</b> ${jsonData.Train_Name} <br>
        <b>Departure Station:</b> ${jsonData.Departure_Station} <br>
        <b>Arrival Station:</b> ${jsonData.Arrival_Station} <br>
        <b>Duration:</b> ${jsonData.Duration} 

        <!--<b>PNR Number:</b> ${jsonData.PNR_Number} <br>-->

        `
        document.getElementById("reservationDetails").innerHTML = reservationDetailsDiv_str;

    }
  
  
  
    })
  .catch(error => {
      console.error('Error fetching the file:', error);
  });










}
