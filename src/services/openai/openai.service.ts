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

export const generateChatCompletion = async (input: string): Promise<string | null> => {
  if (!input.length) return '';

  const completion = await openai.chat.completions.create({
    messages: [{
      role: "user",
      content: input,
    }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}

export const generateProjectResponse = async (context: string, input: string): Promise<string> => {
  console.log({ context, input });
  const errorText = "Can't find similar projects for provided input";
  if (!context.length || !input.length) {
    return errorText;
  }

  const company = process.env.COMPANY_NAME;

  const completion = await openai.chat.completions.create({
    messages: [{
      role: "system",
      content: `You are a helpful assistant for outsource company,
        that will promote a solution from scratch or improve existing product for client based on company previous projects.
        ONLY use next ${company} projects as a context for giving response:
        ${context}

        Also, for responses should be close to this structure (you can fix text formating) and fill gaps in brackets,
        and keep in mind comments (# comment):
        "We, ${company},
        # skip this part, and came up with better introduction if there's no similar projects in context
        already had experience with those type of projects before, like in [Enter similar project names from context projects].
        
        # Completely skip next paragraph if context has no tech stack provided
        For this project we suggest those technologies:
        - [list should be at least 2 tech stack entries from previous projects, you will use ONLY tech stack that is from ${company}'s previous projects,
          do NOT generate suggestions not from context].

        [Generate polite ending of work suggestion]"`,
    }, {
      role: "user",
      content: `Please, generate response for this client request: ${input}`,
    }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content || errorText;
}
