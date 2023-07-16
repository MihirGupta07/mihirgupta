import React from 'react'
import { buttonGradientSnippet, experience, projects } from '../util/constants'
import { useThemeRendererContext } from '../contexts/ThemeContext'
import MyButton from './MyButton'
import { useContentControlContext } from '../contexts/ContentControlContext'

const Navbar = () => {
    const { colorNumber, updateColorNumber } = useThemeRendererContext()
    const { selectedTab, setSelectedTab, setcurrentContent } = useContentControlContext()
    const mountedStyle = { animation: "inAnimation 250ms ease-in" };
    const unmountedStyle = {
        animation: "outAnimation 270ms ease-out",
        animationFillMode: "forwards"
    };
    const handleTabSwitch = (idx) => {
        updateColorNumber()
        setcurrentContent("");
        setSelectedTab(idx)
    }
    const handleButtonClick = (name) => {
        setcurrentContent(name)
        updateColorNumber()
    }

    return (
        <div className='rightCardContainer'>
            <div className='navbarHeader'>
                <button className='navHeaderButton' onClick={() => handleTabSwitch(0)}>
                    Experience
                    <span className={selectedTab === 0 ? 'active' : ''} style={{ width: '100px' }}>
                        <hr className='tabIndicator' style={{ background: buttonGradientSnippet(colorNumber), border: 'none', padding: '.5px', borderRadius: '10px' }} />
                    </span>
                </button>

                <button className='navHeaderButton' onClick={() => handleTabSwitch(1)}>
                    Projects
                    <div className={selectedTab === 1 ? 'active' : ''}>
                        <hr className='tabIndicator' style={{ background: buttonGradientSnippet(colorNumber), border: 'none', padding: '.5px', borderRadius: '10px' }} />
                    </div>
                </button>
            </div>

            <div className='navbarBody'>
                <div className={selectedTab === 0 ? 'active' : ''} >
                    <div className='tabOptions' style={selectedTab === 0 ? mountedStyle : unmountedStyle} >
                        {
                            experience.map((item) => {
                                return (
                                    <MyButton text={item.companyName} onClick={() => handleButtonClick(item.companyName)} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className={selectedTab === 1 ? 'active' : ''} >
                    <div className='tabOptions' style={selectedTab === 1 ? mountedStyle : unmountedStyle} >
                        {projects.map((item) => {
                            return (
                                <MyButton text={item.name} onClick={() => handleButtonClick(item.name)} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar