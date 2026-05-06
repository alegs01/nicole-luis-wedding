import Hero from '@/components/Hero'
import MusicPlayer from '@/components/MusicPlayer'
import Countdown from '@/components/Countdown'
import Message from '@/components/Message'
import PhotoHero from '@/components/PhotoHero'
import Parents from '@/components/Parents'
import Padrinos from '@/components/Padrinos'
import TheDay from '@/components/TheDay'
import Itinerary from '@/components/Itinerary'
import DressCode from '@/components/DressCode'
import GiftTable from '@/components/GiftTable'
import RSVP from '@/components/RSVP'
import NoKids from '@/components/NoKids'
import Closing from '@/components/Closing'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <MusicPlayer />
      <Hero />
      <Countdown />
      <Message />
      <PhotoHero />
      <Parents />
      <Padrinos />
      <TheDay />
      <Itinerary />
      <DressCode />
      <GiftTable />
      <RSVP />
      <NoKids />
      <Closing />
    </main>
  )
}
