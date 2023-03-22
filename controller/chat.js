const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config();
const config = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(config);

const Chat = async (req, res) => {
  const { prompt } = req.body;
  console.log(prompt);

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      max_tokens: 512,
      temperature: 0,
      prompt: prompt,
    });
    res.status(200).json({ msg: completion.data.choices[0].text });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error while adding flight data", error: error });
  }
};

module.exports = Chat;
