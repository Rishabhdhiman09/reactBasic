import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

  const onClick = () => {
    console.log("Clicked")
  }
  
  return (
    <div className='header'>
      <h1>{props.title}</h1>
      <Button color = 'green' text = 'Add' onClick = {onClick}/>
    </div>
  )
}

Header.defaultProps = {
    title : 'Task Tracker'
}

Header.propTypes = {
    title : PropTypes.string
}

// CSS in js
// const headerStyle = {
//     color : 'green'
// }



export default Header
