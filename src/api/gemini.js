const API_KEY = "AIzaSyAHN8rAu4zUO20J0WVtWEoTDUkJP5VyhL8"; // Use your own key in production

const generateGeminiResponse = async (prompt) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  const body = {
    contents: [
      {
        parts: [{ text: prompt }]
      }
    ]
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response from Gemini";
  } catch (err) {
    console.error("Gemini API error:", err);
    return "❌ Error connecting to Gemini API";
  }
};

export default generateGeminiResponse;
