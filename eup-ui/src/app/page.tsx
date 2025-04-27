import FormasAyudar from '@/components/FormasAyudar';
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return <main className="font-[family-name:var(--font-geist-sans)] overflow-hidden">
    <section className='relative' style={{ position: 'relative', width: '100%', height: '80vh', backgroundImage: 'url("/cover-light.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='text-white pl-5 pt-[50vh] flex flex-col gap-5 inset-0'>
        <h1 className='text-4xl text-shadow-lg/30 font-semibold'>¿Nos echás una pata?</h1>
        <div className='flex flex-col gap-5'>
          <p className='pt-0'><span className='bg-white text-(--brand) opacity-95 p-1'>
            Con tu ayuda, nuestras colitas seguirán moviéndose de felicidad.
          </span></p>
          <div className='pt-4'>
            <Link href="/donaciones" className="bg-(--brand) rounded-full p-4 mt-1 hover:bg-(--info) hover:text-white transition ease-in-out duration-300">
            Dona felicidad</Link>
          </div>
        </div>
      </div>
    </section>
    <section className='bg-white text-center flex flex-col gap-5 px-10 md:px-20 xl:px-40 py-16'>
      <p className='px-4 md:px-20 xl:px-40'>En El Salvador y en el mundo, millones de animales viven en situación de abandono, enfrentando hambre, enfermedades y peligros constantes.</p>
      <p className='px-4 md:px-20 xl:px-50'><span className='text-2xl font-bold'>200 millones</span><br/>de perros viven en las calles a nivel mundial, según estimaciones de la Organización Mundial de la Salud (OMS)</p>
      <p className='px-4 md:px-20 xl:px-50'><span className='text-2xl font-bold'>75% de los perros</span><br/>en países en desarrollo son callejeros o no tienen dueño, aproximadamente.</p>
    </section>
    <div className="overflow-hidden -mt-1 bg-(--white)">
      <svg
        viewBox="0 0 1440 320"
        className="block w-full h-24 transform scale-y-[-1]"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,128L60,138.7C120,149,240,171,360,186.7C480,203,600,213,720,181.3C840,149,960,75,1080,58.7C1200,43,1320,85,1380,106.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
    <section className='bg-(--light) text-(--dark) text-center flex flex-col gap-5 px-10 md:px-20 xl:px-40 py-16 ' style={{backgroundImage: 'url("/chocar-pata-blanco.png")', backgroundSize: '60vh', backgroundRepeat:'no-repeat', backgroundPosition:'right bottom'}}>
      <h2 className='text-2xl font-bold pb-4'>Manos que ayudan, patas que agradecen</h2>
      <p className='px-4 md:px-40'><span className='font-semibold'> Cada rescatado tiene una historia, y con tu ayuda podemos cambiar su final.</span> En Échame una pata SV dedicamos nuestros días a rescatar, alimentar, sanar y dar una segunda oportunidad a más de 120 lomitos que alguna vez fueron olvidados. No somos una gran organización, somos personas con un gran corazón que creen que cada vida importa.</p>
      <p className='px-4 md:px-40'><span className='font-semibold'>Necesitamos de ti para seguir luchando.</span> Nuestra misión no sería posible sin las manos solidarias que nos acompañan con donaciones, alimentos, medicinas o simplemente compartiendo nuestra causa. Aquí, cada granito de ayuda cuenta y cada pata agradece. Sé parte del cambio.
        <span className='font-semibold'> Échanos una pata. 🐾</span></p>
        <div className='pt-10'>
            <Link href="/donaciones" className="bg-white rounded-full p-4 mt-1 hover:bg-(--brand) hover:text-white transition ease-in-out duration-300">
            Dona felicidad</Link>
          </div>
        
    </section>
    {/* <section className='bg-(--secondary)'>
    <h2 className='text-2xl font-bold pb-4'>Haz la diferencia hoy</h2>
    <p className='px-4 md:px-40'></p>
    </section> */}
    <FormasAyudar/>
  </main>;
}
