import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

function Footer() {
    const { t } = useTranslation('global')
    const router = useRouter()

    return (
        <footer className="footer">
            <div className="footer-legal">
                <p>Made with love</p>
            </div>
        </footer>
    )
}

export default Footer