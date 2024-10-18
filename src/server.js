const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { convertAToB, convertBToA } = require('./converter');

const app = express();
app.use(cors());
app.use(express.json());

// 默认目标URL和API密钥
let targetUrl = 'https://mj.linkerai.top/v2/imagine';
let linkerKey = '';

// 处理API转换请求
app.post('/convert', async (req, res) => {
  try {
    // 获取输入数据并转换格式
    const dataA = req.body;
    const dataB = convertAToB(dataA);
    
    // 添加 linker_key 到请求中
    dataB.linker_key = linkerKey;
    
    // 发送请求到目标API
    const response = await axios.post(targetUrl, dataB, {
      headers: { 
        'Content-Type': 'application/json'
      }
    });
    
    // 将响应转换回原始格式
    const resultB = response.data;
    const resultA = convertBToA(resultB);
    
    // 发送转换后的响应
    res.json(resultA);
  } catch (error) {
    // 错误处理
    res.status(500).json({ 
      status: 'error',
      message: error.message
    });
  }
});

// 更新配置
app.post('/config', (req, res) => {
  const { url, key } = req.body;
  if (url) targetUrl = url;
  if (key) linkerKey = key;
  res.json({ message: 'Configuration updated successfully' });
});

// 启动服务器
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
