import OpenAI from "openai";

const openai = new OpenAI(
  process.env.OPENAI_ORGANIZATION ? {
    organization: process.env.OPENAI_ORGANIZATION,
    project: process.env.OPENAI_PROJECT,
    apiKey: process.env.OPENAI_API_KEY,
  } : {
    apiKey: process.env.OPENAI_API_KEY,
  }
);

export const createEmbedding = async (input: string): Promise<Array<number>> => {
  const embeddings = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input,
    encoding_format: "float",
  });

  return embeddings.data[0].embedding;
}
