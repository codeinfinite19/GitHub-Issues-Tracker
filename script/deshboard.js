
let allIssues = [];
const loadPost = async()=>{
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data);
}

const displayData = (info)=>{
    const cardDisplay = document.getElementById("main-card");
    cardDisplay.innerHTML = "";



    
  

    info.forEach((issue)=>{
         

    const borderTopcolor = issue.status === "open"
    ? "border-t-4 border-[#00A96E]"
    : "border-t-4 border-[#A855F7]";

    // const op=0;
    // const cl =0;
    // const totalJobsNumber = data.lenth();

    // if(issue.status === "open"){
    //     op++;
    // } 
    // else if(issue.status === "closed"){
    //     cl++;
    // }
        
        const crateCard = document.createElement("div");
        
         crateCard.innerHTML = `
                

                <div class="card ${borderTopcolor}  py-4 bg-white shadow-lg p-4  w-full h-full mb-2">

                    <div class="flex justify-between px-4">
                        <img class= "w-[20px]" src="./assets/Open-Status.png" alt="">
                        <button class="btn btn-soft btn-secondary" >${issue.priority}</button>
                    </div>
                    
                    <h1 class="font-bold mt-2 mb-2"> ${issue.title} </h1>
                    <p class="text-[#64748B]"> ${issue.description} </p>

                    <div class="flex gap-2 py-2">
                        <button class="btn btn-primary">BUG</button>
                        <button class="btn btn-soft btn-secondary">HELP WANTED</Button>
                        <button class="btn btn-soft btn-secondary">Enhancement</Button>

                    </div>
                    <div class="h-[1px] w-[100%] bg-black"></div>
                    <div class="flex flex-col gap-2 py-2">
                        <p class="text-[#64748B]">#${issue.id} ${issue.author} </p>
                        <p class="text-[#64748B]"> ${issue.createdAt} </p>
                    </div>

                </div>
    
    `;

    cardDisplay.append(crateCard);

    });

    
   
}

loadPost();