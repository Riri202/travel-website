import { Link } from 'react-router-dom'
import './Button.css'

const STYLES = ['btn--primary' , 'btn-outline']
const SIZES = ['btn-medium', 'btn-large']

function Button({ children, type, onClick, buttonStyle, buttonSize }) {

    
const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    return (
        <Link to={'/sign-up'} className='btn-mobile'>
           <button onClick={onClick} type = {type} className={`btn ${checkButtonSize} ${checkButtonStyle}`}>{children}</button> 
        </Link>
    )
}

export default Button
