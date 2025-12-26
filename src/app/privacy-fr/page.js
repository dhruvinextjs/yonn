import ContactFR from '@/components/FR sections/ContactFR'
import DownloadFR from '@/components/FR sections/DownloasFR'
import FooterFR from '@/components/FR sections/FooterFR'
import PrivacyPolicy from '@/components/FR sections/PrivacyFR'
import React from 'react'

export default function page() {
  return (
    <div>
        <section id='privacy-fr'>
            <PrivacyPolicy/>
        </section>
        <DownloadFR/>
        <ContactFR/>
        <FooterFR/>
    </div>
  )
}
