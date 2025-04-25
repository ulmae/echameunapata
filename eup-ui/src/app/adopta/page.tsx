import Image from 'next/image'
import Link from 'next/link'

export default function Adopta() {
    return <div className="font-[family-name:var(--font-geist-sans)]">
        <div className='relative' style={{ position: 'absolute', width: '100%', height: '80vh', backgroundImage: 'url("/cover-light.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='text-white pl-5 pt-[50vh] flex flex-col gap-5 inset-0'>
                <h1 className='text-4xl text-shadow-lg/30 font-semibold'>¿Nos echás una pata?</h1>
                <div className='flex flex-col gap-5'>
                    <p className='pt-0'><span className='bg-white text-(--dark) opacity-95 p-1'>
                        Con tu ayuda, nuestras colitas seguirán moviéndose de felicidad.
                    </span></p>
                    <div className='pt-4'>
                        <Link href="/" className="bg-(--dark) rounded-full p-4 mt-1">Dona felicidad</Link>
                    </div>
                </div>
            </div>


        </div>
    </div>;
}
