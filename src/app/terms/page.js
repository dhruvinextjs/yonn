import ContactSection from '@/components/ContactSection'
import DownloadSection from '@/components/DownloadSection'
import FooterSection from '@/components/FooterSection'
import Terms from '@/components/Terms'
import React from 'react'

export default function page() {
  return (
    <div>
        <section id='terms'>
            <Terms/>
        </section>
        <DownloadSection/>
        <ContactSection/>
        <FooterSection/>
    </div>
  )
}
