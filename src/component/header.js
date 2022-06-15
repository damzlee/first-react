
import PropTypes from 'prop-types'
import {FaHome} from 'react-icons/fa'
import Sidebar from './sidebar'




const Header = ({title, opt , }) => {
  
  return (
    <header className="header"> 
      <div className='bm-burger-button' ><FaHome />
      <Sidebar/>
      </div>
      <h1 className='tit'>My Profile</h1>
    </header>
  )

}

  Header.defaultProps={
      title:'My Profile'
  }
  Header.propTypes={
      title: PropTypes.string.isRequired,
  }
export default Header
