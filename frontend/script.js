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

if(target === 500){

    counter.innerText = target + "+";

}

else if(target === 50){

    counter.innerText = target + "+";

}

else if(target === 24){

    counter.innerText = target + "/7";

}

else if(target === 98){

    counter.innerText = target + "%";

}

else{

    counter.innerText = target;

}

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



const bookButtons =
document.querySelectorAll(".package-book-btn");

bookButtons.forEach(button => {

    button.addEventListener("click", () => {

        const packageName =
        button.dataset.package;

        document
        .getElementById("message")
        .value =
        `I want to book the ${packageName} package. Please contact me.`;

        document
        .getElementById("contact")
        .scrollIntoView({
            behavior:"smooth"
        });

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

    const submitBtn =
document.querySelector(
"#contactForm button"
);

try {

    submitBtn.innerText =
    "Sending...";

    submitBtn.disabled = true;

    const response = await fetch(
        "https://goyatri.onrender.com/api/inquiry",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
    );

    const result =
    await response.json();

    document
    .getElementById("successPopup")
    .style.display = "flex";

    document
    .getElementById("contactForm")
    .reset();

}
catch(error){

    console.error("FULL ERROR:", error);

    alert(error.message);

}
finally{

    submitBtn.innerText =
    "Send Inquiry";

    submitBtn.disabled = false;

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


const packageData = {

    Bali: {
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
        duration: "5 Nights / 6 Days",
        price: "₹49,999",
        features: [
            "✈ Flights Included",
            "🏨 Premium Hotel",
            "🍽 Breakfast Included"
        ]
    },

    Dubai: {
        image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
        duration: "4 Nights / 5 Days",
        price: "₹39,999",
        features: [
            "✈ Flights Included",
            "🏨 Luxury Stay",
            "🚘 Airport Transfer"
        ]
    },

    Maldives: {
        image: "https://digital.ihg.com/is/image/ihg/intercontinental-raa-atoll-10344480213-2x1",
        duration: "5 Nights / 6 Days",
        price: "₹34,999",
        features: [
            "🏝 Beach Resort",
            "🍽 Breakfast Included",
            "🚤 Water Activities"
        ]
    },

    Kashmir: {
        image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/7/2024/01/15134608/kashmir-deepanshu-nayak-1600x900.jpeg",
        duration: "6 Nights / 7 Days",
        price: "₹24,999",
        features: [
            "🏔 Sightseeing",
            "🏨 Hotel Stay",
            "🚖 Transport Included"
        ]
    },

    Goa: {
        image: "https://clubmahindra.gumlet.io/blog/media/section_images/shuttersto-6d71496a31ac52b.jpg",
        duration: "3 Nights / 4 Days",
        price: "₹18,000",
        features: [
            "🏖 Beach Resort",
            "🍽 Breakfast",
            "🎉 Nightlife Tour"
        ]
    },

    Ladakh: {
        image: "https://grandholidayparkvacation.com/uploads/62208357b184e_1646297943.jpg",
        duration: "5 Nights / 6 Days",
        price: "₹20,999",
        features: [
            "🏍 Adventure Tour",
            "🏔 Sightseeing",
            "🏨 Hotel Stay"
        ]
    }

};

const modal =
document.getElementById("packageModal");

const modalTitle =
document.getElementById("modalTitle");

const modalDuration =
document.getElementById("modalDuration");

const modalFeatures =
document.getElementById("modalFeatures");

const modalPrice =
document.getElementById("modalPrice");

document
.querySelectorAll(".package-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        const place =
        button.dataset.package;

        const data =
        packageData[place];

        modalTitle.innerText = place;

        document.getElementById("modalImage").src =
        data.image;

        modalDuration.innerText =
        data.duration;

        modalPrice.innerText =
        data.price;

        modalFeatures.innerHTML =
        data.features
        .map(item => `<p>${item}</p>`)
        .join("");

        modal.style.display = "flex";

    });

});

document
.querySelector(".close-modal")
.addEventListener("click", () => {

    modal.style.display = "none";

});

document
.getElementById("modalBookBtn")
.addEventListener("click", () => {

    const selectedPackage =
    modalTitle.innerText;

    document.getElementById("message").value =
    `I want to book the ${selectedPackage} package. Please contact me.`;

    modal.style.display = "none";

    document
    .getElementById("contact")
    .scrollIntoView({
        behavior:"smooth"
    });

});

const searchBtn =
document.querySelector(".search-box button");

searchBtn.addEventListener("click", () => {

    const destination =
    document
    .getElementById("searchInput")
    .value
    .toLowerCase();

    const card =
    document.getElementById(
        destination + "-card"
    );

    if(card){

        card.scrollIntoView({
            behavior:"smooth",
            block:"center"
        });

        card.classList.add("highlight");

        setTimeout(() => {

            card.classList.remove("highlight");

        }, 2500);

    }

    else{

        alert("Destination not found");

    }

});

document.getElementById("closeSuccessPopup")
.addEventListener("click", () => {

document.getElementById("successPopup")
.style.display = "none";


});


const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

});