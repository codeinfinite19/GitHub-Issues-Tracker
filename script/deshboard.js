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
        
        const crateCard = document.createElement("div");
         crateCard.innerHTML = `
                

                <div class="card border-sky-100 py-4 bg-white shadow-lg p-4 mt-2 ml-2 min-w-72">
                    <div class="flex justify-between px-4">
                        <img class= "w-[20px]" src="./assets/Open-Status.png" alt="">
                        <button class="btn btn-soft btn-secondary" >${issue.priority}</button>
                    </div>
                    
                    <h1 class="font-bold mt-2 mb-2"> ${issue.title} </h1>
                    <p class="text-[#64748B]"> ${issue.description} </p>

                    <div class="flex gap-2 py-2">
                        <button class="btn btn-primary">BUG</button>
                        <button class="btn btn-soft btn-secondary">HELP WANTED</Button>
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