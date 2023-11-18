
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import {
//   RouterProvider,
// } from "react-router-dom";
// import router from './routes/routes';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
</BrowserRouter>,
document.getElementById('root')
)
