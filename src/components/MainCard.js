import React from 'react'
import MyButton from './MyButton'
import { useThemeRendererContext } from '../contexts/ThemeContext'
import { gradientSnippet, gradients } from '../util/constants'
import Header from './Header'
import LeftCard from './LeftCard'
import { Grid } from '@mui/material'
import Navbar from './Navbar'

const MainCard = () => {
    const { colorNumber } = useThemeRendererContext()

    return (
        <div className="App" style={{ backgroundColor: "#001C30", height: '100vh' }}>
            <div className='border' style={{ background: gradientSnippet(colorNumber) }}>
                <div className='innerbox' style={{ backgroundColor: '#001C30' }}>
                    <div>
                        <Header />
                    </div>
                    <div className='cardContainer'>
                        <LeftCard />
                        <div className='navbarBorder' style={{ background: gradientSnippet(colorNumber), margin: '30px' }}>
                            <div className='navbarInnerbox' style={{
                                backgroundColor: '#001C30', height: '100% '
                            }}>
                                <Navbar />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >



    )
}

export default MainCard