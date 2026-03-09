
let allIssues = [];

const loadPost = async()=>{
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    const res = await fetch(url);
    const data = await res.json();

    allIssues = data.data;

    displayData(data.data);

    updateCounts();
}

const displayData = (info)=>{
    const cardDisplay = document.getElementById("main-card");
    cardDisplay.innerHTML = "";


    info.forEach((issue)=>{
         

    const borderTopcolor = issue.status === "open"
    ? "border-t-4 border-[#00A96E]"
    : "border-t-4 border-[#A855F7]";

    //time formate
    const timeFormate = new Date(issue.createdAt).toLocaleDateString("en-US");

    // priority color set
    const priorityStatus = {
        high: "bg-[#FEECEC]",
        medium: "bg-[#FFF6D1]",
        low: "bg-[#9CA3AF]"
    };
    const priorityStyle = priorityStatus[issue.priority.toLowerCase()];   
    
    const labelStyles = {
        bug: "badge badge-outline border-red-400 text-red-500",
        "help wanted": "badge badge-outline border-yellow-400 text-yellow-600",
        documentation:"badge badge-outline border-yellow-400 text-yellow-600",
       //good first issue : "badge badge-outline border-green-400 text-green-600"
        enhancement: "badge badge-outline border-green-400 text-green-600"
        };

    const labelshtml = issue.labels
        .map(label => `<span class="${labelStyles[label] || "badge"}">${label.toUpperCase()}</span>`)
        .join("");


    
 
        
const crateCard = document.createElement("div");

crateCard.innerHTML = `
<div onclick="openIssue(${issue.id})"
class="card ${borderTopcolor} py-4 bg-white shadow-lg p-4 w-full h-full mb-2 cursor-pointer">

    <div class="flex justify-between px-4">
        <img class="w-[20px]" src="./assets/Open-Status.png">
        <button class="btn ${priorityStyle}">${issue.priority}</button>
    </div>

    <h1 class="font-bold mt-2 mb-2 line-clamp-2">${issue.title}</h1>

    <p class="text-[#64748B] description">${issue.description}</p>

    <div class="flex gap-2 py-2 flex-wrap">
        ${labelshtml}
    </div>

    <div class="h-[1px] w-full bg-black"></div>

    <div class="flex flex-col gap-2 py-2">
        <p class="text-[#64748B]">#${issue.id} ${issue.author}</p>
        <p class="text-[#64748B]">${issue.createdAt}</p>
    </div>

</div>
`;

    cardDisplay.append(crateCard);

    });

    
   
};


// Total number jobs : open jobs and closed jobs count

const updateCounts = (issues)=>{
    const total = allIssues.length;
    const open = allIssues.filter(issue => issue.status === "open").length;
    const closed = allIssues.filter(issue => issue.status === "closed").length;

    //update the count 

    document.getElementById("total-count").innerText = total;
    document.getElementById("open-count").innerText = open;
    document.getElementById("closed-count").innerText = closed;

}

// chnae the color of the active button:::

const setActiveButton = (id)=>{
    document.getElementById("btn-all").classList.remove("btn-primary");
    document.getElementById("btn-open").classList.remove("btn-primary");
    document.getElementById("btn-closed").classList.remove("btn-primary");

    document.getElementById(id).classList.add("btn-primary");

};

// filter button

const showAll = ()=>{
    displayData(allIssues);
    updateCounts(allIssues);
    setActiveButton("btn-all");
    showCounts("all");

    currentFilter = "all";
    applyFilters();
    
};

const showOpen = () => {
    const openIssues = allIssues.filter(issue => issue.status=== "open");
    displayData(openIssues);
    updateCounts(openIssues);
    setActiveButton("btn-open");
    showCounts("open");

    currentFilter = "open";
    applyFilters();
};

const showClosed = ()=>{
    const closedIssues = allIssues.filter(issue => issue.status==="closed");
    displayData(closedIssues);
    setActiveButton("btn-closed")
    updateCounts(closedIssues);
    showCounts("closed");

    currentFilter = "closed";
    applyFilters();
};




const showCounts = (type) =>{
    document.getElementById("total-box").classList.add("hidden");
    document.getElementById("open-box").classList.add("hidden");
    document.getElementById("closed-box").classList.add("hidden");

    document.getElementById("allStatusIcon").classList.add("hidden");
    document.getElementById("openStatusIcon").classList.add("hidden");
    document.getElementById("closedStatusIcon").classList.add("hidden");
    
    
    

    if(type === "all"){
      document.getElementById("total-box").classList.remove("hidden");
       document.getElementById("allStatusIcon").classList.remove("hidden");

    }
    if(type==="open"){
        document.getElementById("open-box").classList.remove("hidden");
        document.getElementById("openStatusIcon").classList.remove("hidden");
    }

    if(type === "closed"){
        document.getElementById("closed-box").classList.remove("hidden");
        document.getElementById("closedStatusIcon").classList.remove("hidden");
    
    }

};


// modal funation
const openIssue = (id) => {
   

  const issue = allIssues.find(item => item.id === id);

  document.getElementById("modal-title").innerText = issue.title;
  document.getElementById("modal-description").innerText = issue.description;

  document.getElementById("modal-author").innerText =
    "Opened by " + issue.author;

  document.getElementById("modal-date").innerText =
    new Date(issue.createdAt).toLocaleDateString();

  document.getElementById("modal-status").innerText = issue.status;
  document.getElementById("modal-priority").innerText = issue.priority;

  document.getElementById("modal-assignee").innerText =
    issue.assignee || "Unassigned";

  const labelStyles = {
        bug: "badge badge-outline border-red-400 text-red-500",
        "help wanted": "badge badge-outline border-yellow-400 text-yellow-600",
        documentation: "badge badge-outline border-yellow-400 text-yellow-600",
        enhancement: "badge badge-outline border-green-400 text-green-600"
        };

        const labels = issue.labels
        .map(label => `
            <span class="${labelStyles[label] || "badge"}">
            ${label.toUpperCase()}
            </span>
        `)
        .join("");

  document.getElementById("modal-labels").innerHTML = labels;

  document.getElementById("issueModal").showModal();
};



// search bar 


const applyFilters = () => {
    const searchText = document.getElementById("search-input").value.toLowerCase();

    let filtered = allIssues;

    if(currentFilter === "open"){
        filtered = filtered.filter(issue => issue.status=="open");
    }
    if(currentFilter === "closed"){
        filtered = filtered.filter(issue => issue.status=="closed");
    }

    if(searchText){
        filtered = filtered.filter(issue=>

            issue.title.toLowerCase().includes(searchText) ||
            issue.description.toLowerCase().includes(searchText) ||
            issue.author.toLowerCase().includes(searchText) ||
            issue.labels.join(" ").toLowerCase().includes(searchText)


        );
    }

    displayData(filtered);

};

let currentFilter = "all";


loadPost();
showCounts("all");
setActiveButton("btn-all");
