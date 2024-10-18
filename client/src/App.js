import React, { useState } from 'react';
import axios from 'axios';

function App() {
  // 状态变量
  const [url, setUrl] = useState('');
  const [key, setKey] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  // 更新配置
  const updateConfig = async () => {
    try {
      await axios.post('http://localhost:3001/config', { url, key });
      alert('Configuration updated successfully');
    } catch (error) {
      alert('Failed to update configuration');
    }
  };

  // 转换API
  const convertApi = async () => {
    try {
      const response = await axios.post('http://localhost:3001/convert', JSON.parse(input));
      setOutput(JSON.stringify(response.data, null, 2));
    } catch (error) {
      setOutput('Error: ' + error.message);
    }
  };

  // 渲染UI
  return (
    <div className="App">
      <h1>Midjourney API Converter</h1>
      {/* 配置部分 */}
      <div>
        <input 
          type="text" 
          placeholder="Target URL" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Linker Key" 
          value={key} 
          onChange={(e) => setKey(e.target.value)} 
        />
        <button onClick={updateConfig}>Update Config</button>
      </div>
      {/* 转换部分 */}
      <div>
        <textarea 
          placeholder="Input (API A format)" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
        <button onClick={convertApi}>Convert</button>
        <textarea 
          placeholder="Output (API A format)" 
          value={output} 
          readOnly 
        />
      </div>
    </div>
  );
}

export default App;
