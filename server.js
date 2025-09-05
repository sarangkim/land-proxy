const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());

app.get('/api/building', async (req, res) => {
  const { sigunguCd, bjdongCd, bun, ji } = req.query;
  const serviceKey = process.env.SERVICE_KEY;

  const url = `https://apis.data.go.kr/1611000/BldRgstService_v2/getBrFlrOulnInfo?serviceKey=${serviceKey}&sigunguCd=${sigunguCd}&bjdongCd=${bjdongCd}&bun=${bun}&ji=${ji}&numOfRows=100&type=json`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: '데이터 요청 실패', details: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));