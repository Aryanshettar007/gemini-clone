const APi_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const generateGeminiResponse = async (prompt) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${APi_KEY}`;

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
