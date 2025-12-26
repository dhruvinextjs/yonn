import ContactFR from '@/components/FR sections/ContactFR'
import DownloadFR from '@/components/FR sections/DownloasFR'
import FooterFR from '@/components/FR sections/FooterFR'
import TermsFR from '@/components/FR sections/TermsFR'
import React from 'react'

export default function page() {
  return (
    <div>
        <section id='terms-fr'>
            <TermsFR/>
        </section>
        <DownloadFR/>
        <ContactFR/>
        <FooterFR/>
    </div>
  )
}
