import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <div className='circle-1'></div>
        <div className='circle-2'></div>
        <App />
    </>
)
