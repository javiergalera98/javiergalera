import useTranslation from 'next-translate/useTranslation'

import Header from '../components/global/header'
export default function Home() {
  const { t } = useTranslation('global')

  return (
    <div>
      <Header />
      <h1>Hello</h1>
    </div>
  )
}
