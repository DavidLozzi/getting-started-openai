require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);
const messages = [
  { role: 'system', content: 'you are short and quick with your responses and do not explain yourself'},
  { role: 'user', content: 'who are the best jedi' },
  { role: 'assistant', content: 'Luke Skywalker, Yoda, Qi-gon' },
  { role: 'user', content: 'who are the best sith' }
];

const doIt = async () => {
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages
    });
    console.log(completion.data);
    console.log(completion.data.choices[0].message);

  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
}

doIt();