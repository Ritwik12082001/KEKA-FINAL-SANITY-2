import client from './sanityClient';

export const duplicateDocuments = async (query) => {
  try {
    
    const documents = await client.fetch(query);
    if (!documents.length) throw new Error("No documents found");

    // Creating a new client configured for the target dataset 'migrate'
    const targetDatasetClient = client.withConfig({ dataset: 'migrate' });

    
    const duplicatedDocs = await Promise.all(
      documents.map((doc) => targetDatasetClient.create({ ...doc, _id: `${doc._id}-copy` }))
    );

    return duplicatedDocs;
  } catch (error) {
    console.error("Error duplicating documents:", error);
    throw error;
  }
};
