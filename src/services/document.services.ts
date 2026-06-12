import { collection } from "../config/couch.config.ts";
import type { Document } from "../interfaces/document.interface.ts";

//CREATE
export const createDocument = async (document: Document) => {
  const doc = await collection.insert(document.id, {
    id: document.id,
    title: document.title,
    pages: document.pages,
  });
  console.log("Data Inserted in CouchBase");
  return doc;
};

//READ by ID
export const readDocumentById = async (id:string) => {
  const docs = await collection.get(id);
  return docs.content;
};

//UPDATE by ID

export const updateDocumentById= async(id:string,document:Document)=>{

    const result = await collection.upsert(id, {
        id:id,
        title:document.title,
        pages:document.pages

    })

}

//DELETE BY ID 

export const deleteByid=async(id:string)=>{
    await collection.remove(id)
}

