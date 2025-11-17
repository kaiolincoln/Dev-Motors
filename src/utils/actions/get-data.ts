export async function getDataHome(){
    try{
        const url = `${process.env.NEXT_PUBLIC_COSMIC_BUCKET}/objects/69148677e7349beda29198ed?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`;

        const res = await fetch(url);

        if(!res.ok){
            throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        
        console.log("JSON de Sucesso Recebido:", data);

        return data;

    }catch(err){
        console.error("Erro em getDataHome:", err);
        throw new Error('Failed to fetch data');
    }
}

export async function getSubMenu(){
    try{
        const url = `${process.env.NEXT_PUBLIC_COSMIC_BUCKET}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.READ_KEY}&depth=1&props=slug,title`;
        
        const res = await fetch(url);

        if(!res.ok){
            throw new Error(`Failed to fetch menu data: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        
        console.log("Menu data:", data);

        return data;

    }catch(err){
        console.error("Erro em getSubMenu:", err);
        throw new Error("Failed to fetch menu data");
    }
}

