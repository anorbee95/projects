import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className='cta'>
      <a href="#szabalyok" className='btn'>SZABÁLYOK</a>
      <Link to="/vedd-meg" className='btn btn-primary'>VEDD MEG MOST!</Link>
    </div>
  )
}

export default CTA;
