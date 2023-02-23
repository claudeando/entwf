import Link from 'next/link'

import Ig from '../svgComponent/Ig'
import Fb from '../svgComponent/Fb'
import Yt from '../svgComponent/Yt'


const SocialIcons = () => {
    return (
        <ul className='socialIcons'>
            <li><Link href='https://instagram.com'><Ig color='red' width={50} height={50} /></Link></li>
            <li><Link href='https://facebook.com'><Fb width={50} height={50} /></Link></li>
            <li><Link href='https://youtube.com'><Yt width={50} height={50} /></Link></li>
        </ul>
    )
}

export default SocialIcons