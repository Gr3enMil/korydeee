import ReactDOM from 'react-dom/client'
import App from "./jsx/App"
import { BrowserRouter } from 'react-router-dom';
import './index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
