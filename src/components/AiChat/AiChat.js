import React, { useState, useEffect } from 'react';
import { CreateMLCEngine } from '@mlc-ai/web-llm';

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [engine, setEngine] = useState(null);
  const [loadingMsg, setLoadingMsg] = useState('初始化 AI 中...');
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'assistant', content: 'Hi! 我是 Joey 的 AI 助手。你想了解他为什么适合这份工作吗？' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // 设定系统提示词
// 设定系统提示词（为 AI 注入你的真实简历数据）
const systemPrompt = `你是 Joey (Yepeng Zhu) 的专属 AI 面试助手。你的任务是向 HR 或访客推销 Joey，解答他为什么适合这份工作。
请严格基于以下真实事实回答，绝对不能捏造任何未提及的经历（例如绝不能提 Java、C++ 或硬件开发）。

【Joey 的硬核背景】：
- 学历：University of Nottingham 计算机科学硕士 (2023-2024, Merit)；Beijing Union University 软件工程学士 (2019-2023, GPA: 83)。
- 现任工作：SpinnrTech 后端工程师 (2025年7月至今)，使用 Node.js, Go, Lua 开发高并发微服务和 RESTful APIs。
- 曾任工作：Everbridge QA/测试开发工程师 (2022-2023)，使用 Postman 和 Selenium 完成自动化测试，提升35%效率。
- 核心技术栈：React, Node.js, Go, AWS (持有 SAA 认证), Python, Docker。
- 个人亮点：是个疯狂的全栈开发者。曾在两周内写 Python Selenium 脚本抢英美签证 slot 赚了 2000 多英镑。知道伦敦排名前十的中餐厅。

【回答风格】：
自信、幽默、专业。尽量简短（控制在100字以内）。如果用户问到上述简历以外的问题，请回答：“关于这点，建议您直接发邮件 (joey.yepeng@gmail.com) 和 Joey 本人聊聊哦！”。`;

// 1. 替换成你刚才在 AWS 拿到的那个完整 URL 
const AWS_API_URL = 'https://8012tocp49.execute-api.us-east-1.amazonaws.com/chat';

// 不需要本地加载模型了，直接干掉 useEffect 里的 WebLLM 逻辑
useEffect(() => {
  if (isOpen) {
    setLoadingMsg('AI 助手已连接！⚡ (Powered by AWS Serverless)');
    setEngine(true); // 假装 engine 已经 ready，为了复用你之前的判断逻辑
  }
}, [isOpen]);

// 2. 极其轻量的云端请求逻辑
const handleSend = async () => {
  if (!chatInput.trim()) return;
  
  const newUserMsg = { role: 'user', content: chatInput };
  const newHistory = [...chatHistory, newUserMsg];
  setChatHistory(newHistory);
  setChatInput('');
  setIsTyping(true);

  try {
    // 向你的 AWS API Gateway 发送请求
    const response = await fetch(AWS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: chatInput }) // 把用户输入传给 Lambda
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    // 把云端返回的答案加入聊天框
    setChatHistory([...newHistory, { role: 'assistant', content: data.reply }]);

  } catch (err) {
    console.error("API Call failed:", err);
    setChatHistory([...newHistory, { role: 'assistant', content: '抱歉，云端大脑网络连接失败，请稍后再试。' }]);
  } finally {
    setIsTyping(false);
  }
};

  // 悬浮窗样式
  const widgetStyle = {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    zIndex: 9999,
    fontFamily: '"Montserrat", sans-serif' // 贴合你项目的字体
  };

  const chatBoxStyle = {
    display: isOpen ? 'flex' : 'none',
    flexDirection: 'column',
    width: '350px', // 默认稍微加宽一点
    height: '500px', // 默认加高
    minWidth: '280px',
    minHeight: '400px',
    maxWidth: '80vw',
    maxHeight: '80vh',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    marginBottom: '15px',
    resize: 'both', // 👈 允许用户拖动调整大小
    overflow: 'auto' // 必须配合 overflow 才能 resize
  };

  return (
    <div style={widgetStyle}>
      {/* 聊天框本体 */}
      <div style={chatBoxStyle}>
        <div style={{ backgroundColor: '#55198b', color: 'white', padding: '15px', fontWeight: 'bold', flexShrink: 0 }}>
          Ask AI Joey 🤖 
          <span style={{fontSize: '12px', fontWeight: 'normal', display: 'block'}}>支持拖拽右下角调整大小</span>
        </div>
        
        {/* 对话历史记录区 */}
        <div style={{ flex: 1, padding: '15px', overflowY: 'auto', backgroundColor: '#f9f9f9' }}>
          <div style={{ fontSize: '12px', color: '#888', textAlign: 'center', marginBottom: '15px' }}>
            {loadingMsg}
          </div>
          {chatHistory.map((msg, idx) => (
            <div key={idx} style={{ 
              marginBottom: '15px', 
              textAlign: msg.role === 'user' ? 'right' : 'left' 
            }}>
              <span style={{ 
                display: 'inline-block',
                padding: '10px 14px', 
                borderRadius: msg.role === 'user' ? '15px 15px 0 15px' : '15px 15px 15px 0',
                backgroundColor: msg.role === 'user' ? '#e3f2fd' : '#fff',
                border: msg.role === 'user' ? 'none' : '1px solid #eee',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                maxWidth: '85%',
                fontSize: '14px',
                color: '#333',
                lineHeight: '1.4',
                textAlign: 'left',
                whiteSpace: 'pre-wrap' // 允许换行
              }}>
                {msg.content}
              </span>
            </div>
          ))}
          {isTyping && <div style={{ fontSize: '12px', color: '#888' }}>Joey 正在光速思考...</div>}
        </div>

        {/* 输入区 */}
        <div style={{ padding: '12px', borderTop: '1px solid #eee', display: 'flex', backgroundColor: '#fff', flexShrink: 0 }}>
          <textarea 
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => {
              // 允许 Shift+Enter 换行，纯 Enter 发送
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="问问 Joey 为什么适合这个岗位..."
            disabled={!engine || isTyping}
            style={{ 
              flex: 1, 
              padding: '10px', 
              border: '1px solid #ccc', 
              borderRadius: '8px',
              resize: 'none', // 禁止单独调整输入框大小
              height: '50px', // 加大输入框高度
              fontFamily: 'inherit',
              outline: 'none'
            }}
          />
          <button 
            onClick={handleSend} 
            disabled={!engine || isTyping || !chatInput.trim()}
            style={{ 
              marginLeft: '10px', 
              padding: '0 18px', 
              backgroundColor: (!engine || isTyping || !chatInput.trim()) ? '#ccc' : '#55198b', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: (!engine || isTyping || !chatInput.trim()) ? 'not-allowed' : 'pointer',
              fontWeight: 'bold'
            }}
          >
            发送
          </button>
        </div>
      </div>

      {/* 悬浮按钮 */}
      <div style={{ textAlign: 'right' }}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '60px', height: '60px', borderRadius: '30px', backgroundColor: '#55198b',
            color: 'white', border: 'none', fontSize: '24px', cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(85, 25, 139, 0.4)',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {isOpen ? '✕' : '🤖'}
        </button>
      </div>
    </div>
  );
}