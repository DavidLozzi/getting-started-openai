require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);
let prompt = 'write a whimsical poem about darth vader'

const doIt = async () => {
  try {
    const completion = await openai.createCompletion({
      model: 'text-ada-001',
      max_tokens: 250,
      prompt
    });
    console.log(completion.data.choices);

  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
}

doIt();