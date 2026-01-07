export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { image, classLevel } = req.body;

    if (!image || !classLevel) {
      return res.status(400).json({ 
        error: 'Missing image or class level',
        success: false 
      });
    }

    const KEY = process.env.GEMINI_API_KEY;

    if (!KEY) {
      return res.status(500).json({ 
        error: 'API key not configured',
        success: false 
      });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent?key=${KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [
              {
                text: `You are helping a class ${classLevel} student with their homework. Analyze the questions in the image and provide clear, grade-appropriate answers. Format your response as if writing on lined paper with "Q1:", "Q2:", etc. Use vocabulary and explanations suitable for their grade level.`
              },
              {
                inline_data: {
                  mime_type: "image/jpeg",
                  data: image
                }
              }
            ]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048,
          }
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API error:', data);
      throw new Error(JSON.stringify(data));
    }

    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No answer generated';

    return res.status(200).json({ 
      success: true,
      answer: answer 
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Failed to generate answer',
      details: error.message,
      success: false 
    });
  }
}
