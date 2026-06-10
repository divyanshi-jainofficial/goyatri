// FAQ

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});


// COUNTERS

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target =
+counter.getAttribute("data-target");

const current =
+counter.innerText;

const increment =
target/100;

if(current<target){

counter.innerText =
Math.ceil(current+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

};

updateCounter();

});


// BACK TO TOP

const topBtn =
document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});


// SEARCH DESTINATION

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{

const filter =
searchInput.value.toLowerCase();

const cards =
document.querySelectorAll(".destination-card");

cards.forEach(card=>{

const text =
card.innerText.toLowerCase();

card.style.display =
text.includes(filter)
? "block"
: "none";

});

});


// CONTACT TO WHATSAPP

document
.getElementById("contactForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        destination: "Custom",

        message: document.getElementById("message").value

    };

    try {

        const response = await fetch(
            "https://goyatri.onrender.com/api/inquiry",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        alert("Inquiry Submitted Successfully!");

        document
        .getElementById("contactForm")
        .reset();

    } catch (error) {

        alert("Something went wrong!");

        console.log(error);

    }

});

// FLOATING WHATSAPP

document
.getElementById("whatsappBtn")
.addEventListener("click",()=>{

window.open(
"https://wa.me/917678659108",
"_blank"
);

});