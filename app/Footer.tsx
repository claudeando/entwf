import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div className='copyright'>
                <div>@SKETCH MUCSIC 2021 ALL rights reserved.</div>
                <div>Design: entwurf</div>
            </div>
            <div className='footerLink'>
                <Link href='/terms'>Terms & conditions</Link>
                <Link href='/privacy'>Privacy policy</Link>
            </div>
        </footer>
    )
}

export default Footer