import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 只在開發模式下啟動 MSW
if (process.env.NODE_ENV === "development") {
  import("./mocks/browser").then(({ worker }) => {
    // worker.start();
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
