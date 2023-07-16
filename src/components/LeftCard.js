
import React from 'react'
import { DescriptionGradientSnippet, aboutMe, experience, projects } from '../util/constants'
import { useThemeRendererContext } from '../contexts/ThemeContext'
import { useContentControlContext } from '../contexts/ContentControlContext'
import { Typography } from '@mui/material'
import MyButton from './MyButton'

const LeftCard = () => {
    const { colorNumber } = useThemeRendererContext()
    const { currentContent, selectedTab } = useContentControlContext()

    let result = selectedTab ? projects.find(item => item.name === currentContent) : experience.find(item => item.companyName === currentContent);
    const openLink = (linkURL) => {
        window.open(
            linkURL,
            '_blank'
        )
    }
    return (

        result ?
            <div className='leftCardContainer'>
                <span className='contentHeading'>
                    {selectedTab ? result.name : result.companyName}
                </span>
                <div className='descrptionBorder' style={{ background: DescriptionGradientSnippet(colorNumber) }}>
                    <div className='description'>
                        <Typography>{result.description}</Typography>
                        <div style={{ display: 'flex', marginTop: '20px' }}>{result?.links?.map((link) => {
                            return <MyButton text={link.text} onClick={() => openLink(link.url)} />
                        })}</div>

                    </div>
                </div>
            </div>

            :

            <div className='leftCardContainer'>
                <span className='welcomeText'>
                    Welcome.
                </span>
                <div className='descrptionBorder' style={{ background: DescriptionGradientSnippet(colorNumber) }}>
                    <div className='description'>
                        {aboutMe}

                    </div>
                </div>
            </div>

    )
}

export default LeftCard 