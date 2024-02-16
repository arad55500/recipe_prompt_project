const openai = require('openai');

const configuration = new openai.Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new openai.OpenAIApi(configuration);

module.exports = openai