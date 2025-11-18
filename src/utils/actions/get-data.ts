import { redirect, notFound } from "next/navigation"; 

export async function getDataHome() {
    try {
        const url = `${process.env.NEXT_PUBLIC_COSMIC_BUCKET}/objects/69148677e7349beda29198ed?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`;

        const res = await fetch(url, { 
            next: { revalidate: 120 } 
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        
        console.log("JSON de Sucesso Recebido:", data);

        return data;

    } catch (err) {
        console.error("Erro em getDataHome:", err);
        throw new Error('Failed to fetch data');
    }
}

export async function getSubMenu() {
    try {
        const url = `${process.env.NEXT_PUBLIC_COSMIC_BUCKET}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.READ_KEY}&depth=1&props=slug,title`;
        
        const res = await fetch(url, { 
            next: { revalidate: 120 }
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch menu data: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        
        console.log("Menu data:", data);

        return data;

    } catch (err) {
        console.error("Erro em getSubMenu:", err);
        throw new Error("Failed to fetch menu data");
    }
}

export async function getItemBySlug(itemSlug: string) {
    const baseUrl = `${process.env.NEXT_PUBLIC_COSMIC_BUCKET}/objects`;

    const queryParams = new URLSearchParams({
        query: JSON.stringify({
            slug: itemSlug
        }),
        props: 'slug,title,content,metadata,type', 
        read_key: process.env.READ_KEY as string
    });

    const url = `${baseUrl}?${queryParams.toString()}`;

    try {
        const res = await fetch(url, { 
            next: { revalidate: 120 } 
        });

        if (!res.ok) {
            throw new Error(`Failed to get item by slug: ${res.status}`);
        }

        const data = await res.json();
        
        if (!data.objects || data.objects.length === 0) {
            throw new Error("Item não encontrado");
        }

        return data;

    } catch (err) {
        console.error("Erro em getItemBySlug:", err);
        throw err; 
    }
}