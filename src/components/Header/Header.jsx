'use client';
import Button from '../Button'

export default function Header() {
  return (
    <div className="flex w-10/12 h-28 bg-white/30 mx-auto mt-10 rounded-full justify-around items-center">
      <Button>
        <img className='h-12' src="/back.svg" alt="icone de seta que indica a volta para a sessão anterior do site" />
      </Button>
      <h1 className='font-semibold text-4xl'>Betagera Notes</h1>
      <Button>
        <img className='h-12' src="/plus.svg" alt="" />
      </Button>
    </div>
  )
}
