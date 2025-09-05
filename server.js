const express = require('express');
const cors = require('cors'); // ✨ 요거 추가
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 10000;

app.use(cors()); // ✨ 모든 요청에 대해 CORS 허용

// 기존 API 경로
app.get('/api/land', async (req, res) => {
  try {
    const { sigunguCd, bjdongCd, bun, ji } = req.query;

    const url = 'https://apis.data.go.kr/1613000/BldRgstService_v2/getBrBasisOulnInfo';
    const response = await axios.get(url, {
      params: {
        serviceKey: process.env.SERVICE_KEY,
        numOfRows: 10,
        pageNo: 1,
        sigunguCd,
        bjdongCd,
        bun,
        ji,
        resultType: 'json'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('API 호출 실패:', error.message);
    res.status(500).json({ error: 'API 호출 실패' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// 1. 콘솔로 서비스 키 출력
console.log("Service Key:", serviceKey);


// 3. 오류 출력 자세히
.catch(error => {
  console.error("API 호출 중 오류:", error.response?.data || error.message);
  res.status(500).json({ error: "API 호출 실패", detail: error.message });
});

