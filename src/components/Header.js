import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import { HeadingGradientSnippet, githubURL, linkedInURL, myEmail } from '../util/constants';
import { useThemeRendererContext } from '../contexts/ThemeContext';
const Header = () => {
    const { colorNumber, updateColorNumber } = useThemeRendererContext()
    const openLink = (linkURL) => {
        window.open(
            linkURL,
            '_blank'
        )
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div onClick={() => updateColorNumber()} className='animate-charcter' style={{ backgroundImage: HeadingGradientSnippet(colorNumber) }}>{`<MihirGupta/>`}
            </div>
            <div style={{ textAlign: 'end', padding: '20px' }}>
                <IconButton onClick={() => window.location.href = `mailto:${myEmail}`}>
                    <MailOutlineIcon className='icon' />
                </IconButton>
                <IconButton onClick={() => openLink(githubURL)} >
                    <GitHubIcon className='icon' />
                </IconButton>
                <IconButton onClick={() => openLink(linkedInURL)} >
                    <LinkedInIcon className='icon' />
                </IconButton>


            </div></div>
    )
}

export default Header