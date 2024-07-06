const express = require('express');
const { YoutubeTranscript } = require('youtube-transcript');

const app = express();
const port = process.env.PORT || 3000;

app.get('/transcript', async (req, res) => {
    const videoUrl = req.query.url;

    if (!videoUrl) {
        return res.status(400).send({ error: 'URL is required' });
    }

    try {
        const transcript = await YoutubeTranscript.fetchTranscript(videoUrl);
        const fullText = transcript.map(entry => entry.text).join(' ');
        res.send({ transcript: fullText });
    } catch (error) {

        res.status(500).send({ error: 'Failed to fetch transcript', message: error.message, video: videoUrl});
    }
});

app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
