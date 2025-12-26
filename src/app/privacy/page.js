import ContactSection from '@/components/ContactSection'
import DownloadSection from '@/components/DownloadSection'
import FooterSection from '@/components/FooterSection'
import PrivacyPolicy from '@/components/Privacy'
import React from 'react'

export default function page() {
  return (
    <div>
     <section id='privacy'>
       <PrivacyPolicy/>
     </section>
     <DownloadSection/>
     <ContactSection/>
     <FooterSection/>
    </div>
  )
}
