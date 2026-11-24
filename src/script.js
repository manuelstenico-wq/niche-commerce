fetch("data.json")
    .then(Response=>{
        if(!Response.ok){
            throw new Error("caricamento della lista di prodotti fallita")
        }
        return Response.json();
    }).then(products=>{
        const list=document.getElementById("coffe-selection");
        products.bevande.forEach(bevanda=>{
            const list_obj=document.createElement("li");
            list_obj.textContent=bevanda.nome+" prezzo: "+bevanda.prezzo+"$"
            if(bevanda.caffeinato==true){
                list_obj.textContent+="(la bevanda contiene caffeina)";
            }
            list_obj.textContent+=bevanda.immagine;
        })
    })