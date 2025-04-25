import Image from 'next/image'

export default function AcercaDe() {
    return <main>
      <section className="text-center flex flex-col gap-5 px-10 md:px-20 xl:px-40 py-16 items-center">
        <h2 className='text-3xl font-bold'>🐾 Misión</h2>
        <p>Échame una pata SV es un proyecto de rescate animal basado en el voluntariado y el apadrinamiento responsable de personas comprometidas con el bienestar animal. Su objetivo principal es recaudar fondos y recursos para brindar atención y cuidado a los animales rescatados.</p>
<Image src="/equipo.jpg" alt="Logo" width={600} height={400} />      
      </section>
      <section className="bg-white text-center flex flex-col gap-5 px-10 md:px-20 xl:px-40 py-16 items-center" style={{backgroundImage: 'url("/paw-print.png")', backgroundRepeat:'repeat', backgroundPosition:'left top'}}>
        <h2 className='text-3xl font-bold'>🌟 Visión</h2>
        <p>La organización busca crear un entorno donde los animales rescatados reciban el amor y cuidado necesarios, promoviendo la adopción responsable y fomentando una cultura de respeto hacia los animales en la comunidad.</p>
        <Image src="/amor-cachorro.jpg" alt="Logo" width={400} height={200} />  
      </section>
      <section className="text-center flex flex-col gap-5 px-10 md:px-20 xl:px-40 py-16 items-center">
        <h2 className='text-3xl font-bold'>📖 Historia</h2>
        <p>Fundada por Silvia Ayala, Échame una pata SV comenzó como una iniciativa para rescatar y cuidar perros en situación de abandono en San Miguel. Con el tiempo, el refugio ha crecido y actualmente alberga a más de 120 perros en su sede ubicada en el barrio El Calvario del distrito de San Miguel Centro.​</p>
        <p>En marzo de 2025, la organización asumió la administración del refugio municipal de Ilopango, tras denuncias de maltrato animal en dicho lugar. Este paso representó un desafío significativo, pero también una oportunidad para mejorar las condiciones de vida de los animales allí alojados.</p>
        <Image src="/silvia.jpg" alt="Logo" width={400} height={200} />  
      </section>
    </main>;
  }
  