import Link from 'next/link'
import HeaderLogo from '../svgComponent/headerlogo'

const Header = () => {
    return (
        <header>
            <HeaderLogo className='logo' width={175} height={175} />
            <nav>
                <ul className='nav'>
                    <li><Link href='#about'>about</Link></li>
                    <li><Link href='#contact'>contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header