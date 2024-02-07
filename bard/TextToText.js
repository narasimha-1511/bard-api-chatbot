const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// ...

const model = genAI.getGenerativeModel({ model: process.env.MODEL_NAME });

async function TextToText(prompt) {
  // For text-only input, use the gemini-pro model ..

  //   const prompt = "Write a story about a magic backpack.";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  //   console.log(text);
  return text;
}

// ...
module.exports = TextToText;
