
//  clearInput
document.getElementById("clearInput").onclick = function () {
    document.getElementById("number").innerHTML = ""
}

//   clearOutput
document.getElementById("ClearOutput").onclick = function () {
    document.getElementById("Output").innerHTML = ""
}
//Output Function
function showOutput(output){
    document.getElementById("Output").innerHTML = output
}

// Original String

  document.getElementById("originalString").innerHTML = new Date();

var dayNames = ["Sunday", "Monday", "Tuesday" , "Wednesday", "Thursday", "Friday", "Saturday"]

// getNameOfToday()
        function getNameOfToday() {
            let rigthNow= new Date()
            let theDay = rigthNow.getDay()
            let nameOFToday = dayNames[theDay]
            let html = "<h1 class='text-primary theme mb-0'>" + "Today is:" + "   " + nameOFToday + "</h1>";
             showOutput(html)
       
        }
        
// daysPassed()
        function daysPassed() {
            let dob = document.getElementById("number").value;
            if (!dob) {
                Toastify({
                    text: "Please Enter Your Date of Birth.",
                    duration: 3000,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "linear-gradient(to right, #F5DE09  , #F5DE09 )",
                        color :"black"
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
                return;
            }  
            let today = new Date();
          let bornDate = new Date(dob);
          let msDiff = today.getTime() - bornDate.getTime();
          let daysDiff = msDiff / (1000*60*60*24)
          let days = Math.floor(daysDiff)
            let html = "<h3 class='text-primary theme mb-0'>" + days + "  days have been passed since you Born" +"</h3>";
             showOutput(html)
             
        }


// nextBirthday()

function nextBirthday() {
    let dob = document.getElementById("number").value;
    if (!dob) {
        Toastify({
            text: "Please Enter Your Date of Birth.",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #F5DE09  , #F5DE09 )",
                color :"black"
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;
    }  
    // current date
    let today = new Date();
    // Convert the input to a Date object
  let birthDate = new Date(dob);
    // Determine the next birthday
  let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  // Calculate the difference in milliseconds
  let msDiff = nextBirthday.getTime() - today.getTime(); 
  // Convert milliseconds to days
  let daysDiff = msDiff / (1000*60*60*24)
  let days = Math.ceil(daysDiff)
    let html = "<h3 class='text-primary theme mb-0'>" + days + "  days are remaining in your Birthday" +"</h3>";
     showOutput(html)
}





// greetUser()
function greetUser(){
    
        let userName = prompt("Please enter your name:");
    
        if (!userName) {
            Toastify({
                text: "Please Enter your name.",
                duration: 3000,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #F5DE09  , #F5DE09 )",
                    color :"black"
                },
                onClick: function(){} // Callback after click
              }).showToast();
            return;
        }   
    
        let greetingMessage = "Hello, " + userName + "! Welcome to our site."; // Personalized greeting   
        showOutput(greetingMessage); 
    
}

// time1()
function time1(){
    let now = new Date()
    let currentTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    let html = "<h3 class='text-primary theme mb-0'>" + currentTime +"</h3>";
    showOutput(html)
}

// time2()
function time2(){
    let now = new Date()
    let currentTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    let html = "<h3 class='text-primary theme mb-0'>" + currentTime +"</h3>";
    showOutput(html)
}

// time3()
function time3(){
    let now = new Date()
    let currentTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    let html = "<h3 class='text-primary theme mb-0'>" + currentTime +"</h3>";
    showOutput(html)
}
// tax()
function tax(){
    let price = prompt ("Please Enter Price on which You want to find GST.");
    if (!price) {
        Toastify({
            text: "Please Enter Price on which You want to find Tax.",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #F5DE09  , #F5DE09 )",
                color :"black"
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;
    }   
    let tax = price * (18 / 100);
    let html = "<h3 class='text-primary theme mb-0'>"+"Amount of tax is :  " + tax + "</h3>" ;
    showOutput(html)
}


// Calculate Total()
function Total(){
    let price = prompt ("Please Enter Price on which You want to find GST.");
    if (!price) {
        Toastify({
            text: "Please Enter Price on which You want to find GST.",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #F5DE09  , #F5DE09 )",
                color :"black"
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;
    }  
   
    price = Number(price)
    let tax = price * 18 / 100;
     let Total = tax + price;   
    let html = "<h1 class='text-primary theme mb-0'>" + Total + "</h1>" ;
    showOutput(html)
}




//  Clear Output
document.getElementById("ClearOutput").onclick = function () {
    document.getElementById("Output").innerHTML = ""
    Toastify({
        text: "Output has been cleared",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    
}





       






