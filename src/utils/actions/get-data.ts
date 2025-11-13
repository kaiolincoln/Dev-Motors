export async function getDataHome(){
    try{
        const url = `${process.env.NEXT_PUBLIC_COSMIC_BUCKET}/objects/69148677e7349beda29198ed?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`;
        console.log("URL da API Cosmic JS:", url);

        const res = await fetch(url);

        console.log("Status da Resposta da API:", res.status, res.statusText);

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
