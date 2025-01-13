'use client'

import { useEffect, useState } from 'react'
import { getCookie, setCookie } from 'cookies-next/client'

const GT = 'googtrans',
  languages = ['auto', 'vi', 'fr', 'de', 'es', 'ja', 'ko', 'hi', 'ru'],
  Translate = () => {
    const [lang, setLang] = useState('')
    useEffect(() => setLang(getCookie(GT)?.split('/')[2] ?? ''), [])
    return languages.map(l => (
      <p className='notranslate' key={l}>
        <input
          checked={lang === l}
          onChange={() => {
            setCookie(GT, `/auto/${l}`)
            window.location.reload()
          }}
          type='radio'
        />
        {l === 'auto' ? '⭐' : l}
      </p>
    ))
  }

export default Translate
