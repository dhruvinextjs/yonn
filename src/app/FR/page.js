import ContactFR from '@/components/FR sections/ContactFR'
import DownloadFR from '@/components/FR sections/DownloasFR'
import FeaturesFR from '@/components/FR sections/FeaturesFR'
import FooterFR from '@/components/FR sections/FooterFR'
import HeroFR from '@/components/FR sections/HeroFR'
import React from 'react'

export default function page() {
  return (
    <div>
      <div id='home'>
        <HeroFR/>
      </div>
      <div id='features'>
        <FeaturesFR/>
      </div>
      <DownloadFR/>
     <div id='contact'>
       <ContactFR/>
     </div>
      <FooterFR/>
    </div>
  )
}
