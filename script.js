let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector('main');


function calculateCount() {
    total.innerText = allCardSection.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}

calculateCount()

function toggleStyle(id){
   allFilterBtn.classList.remove("text-white", "bg-[#3B82F6]");
    interviewFilterBtn.classList.remove("text-white", "bg-[#3B82F6]");
    rejectedFilterBtn.classList.remove("text-white", "bg-[#3B82F6]");
    

    allFilterBtn.classList.add("text-[#64748B]", "bg-white");
    interviewFilterBtn.classList.add("text-[#64748B]", "bg-white");
    rejectedFilterBtn.classList.add("text-[#64748B]", "bg-white");

    const selected = document.getElementById(id);

    selected.classList.remove("text-[#64748B]", "bg-white");    
    selected.classList.add("text-white", "bg-[#3B82F6]");
}


mainContainer.addEventListener ("click", function(event) { 
      const parentNode = event.target.parentNode.parentNode;
      const jobName = parentNode.querySelector(".jobName").innerText;
})  ;