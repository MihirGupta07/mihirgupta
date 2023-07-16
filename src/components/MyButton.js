import React from 'react'
import './style.css'
import { buttonGradientSnippet } from '../util/constants'
import { useThemeRendererContext } from '../contexts/ThemeContext'
const MyButton = ({
    text = ' MyButton',
    onClick = () => { },

}) => {
    const { colorNumber } = useThemeRendererContext()
    return (
        <div>
            <button className={'myButton'} onClick={onClick} >
                {text}
                <hr style={{ background: buttonGradientSnippet(colorNumber), border: 'none', padding: '.5px', borderRadius: '10px' }} />
            </button>

        </div>
    )
}

export default MyButton