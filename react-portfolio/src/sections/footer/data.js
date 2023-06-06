import { AiOutlineInstagram } from 'react-icons/ai'
import { FaDev } from 'react-icons/fa'
import { SiFiverr } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'

export const links = [
    { id: 1, link: '#', title: 'Home' },
    { id: 2, link: '#about', title: 'About' },
    { id: 3, link: '#services', title: 'Services' },
    { id: 4, link: '#portfolio', title: 'Portfolio' },
    { id: 5, link: '#contact', title: 'Contact' }
]

export const socials = [
    { id: 1, link: 'https://www.instagram.com/norbertaugusztin/', icon: <AiOutlineInstagram /> },
    { id: 2, link: 'https://dev.to/anorbee95', icon: <FaDev /> },
    { id: 3, link: 'https://github.com/anorbee95', icon: <AiFillGithub /> },
    { id: 4, link: 'https://www.fiverr.com/norbertauguszti', icon: <SiFiverr /> }
]