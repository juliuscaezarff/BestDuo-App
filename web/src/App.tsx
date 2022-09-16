import { MagnifyingGlassPlus } from 'phosphor-react'
import { GameBanner } from './components/GameBanner'

import './styles/main.css'

import logo from './assets/logo-nlw-esports.svg'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="Logo NLW eSports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner bannerUrl='/game-1.png' title="league of legends" adsCount={5} />
        <GameBanner bannerUrl='/game-2.png' title="Dota 2" adsCount={5} />
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
            <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou o seu duo?</strong>
            <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
            </div>
            <button className='py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center gap-3'>
              <MagnifyingGlassPlus size={24}/>
              Publicar anúncio
            </button>
        </div>
      </div>
    </div>
  )
}

export default App
