/*
    This service will take in a video transcript.
    It takes an API key from the environment variables for authorization.
    The request can take up to 20 seconds to come back in sometimes.
    The "Temperature" parameter in the request to be sent controls the predictability of the generated response - 
    0 for the most consistent response, all the way up to 1 for the most randomness / variability.
*/

const OPENAI_CHAT_API_URL = "https://api.openai.com/v1/chat/completions";
const { OPENAI_API_KEY } = process.env;

const systemMessage = `You are an assistant designed to generate multiple-choice quizzes based on the transcripts of videos. When prompted with a transcript, you create a quiz that will test the user's knowledge of the topics covered. Quizzes should always have five questions, and each question should always have four possible answers. Your responses should be formatted as JSON. This is the shape the object should take: {question X: {
"question": (question text here), "options": (add the options in an array here), "answer": (insert the index of the correct option here),}}. Do not include anything in your response other than the JSON formatted object.`;

async function generate(transcript) {
  try {
    const response = await fetch(OPENAI_CHAT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        temperature: "0.3",
        messages: [
          { role: "system", content: systemMessage },
          { role: "user", content: transcript },
        ],
      }),
    });

    const json = response.json();
    const { content } = json.choices[0].message; // The message property here is where the actual response string from ChatGPT resides.
    const iterableContent = JSON.parse(content); // Parsing the string so that we can iterate through it as an object.

    // Then we can create an array of conveniently shaped objects for use on the frontend.
    const questions = [];
    for (let value of Object.values(iterableContent)) {
      questions.push(value);
    }

    res.send(questions);
  } catch (error) {
    throw error;
  }
}

module.exports = generate;
