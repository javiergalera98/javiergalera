import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

function Header() {
    const { t } = useTranslation('global')
    const router = useRouter()

    return (
        <header className="header">
            <div className="navbar">
                <div className="navbar-spacer"></div>
                <div className="navbar-logo">
                    <h1>JG</h1>
                </div>
                <div className="navbar-spacer"></div>
            </div>
        </header>
    )
}

export default Header