import { Facebook, MessageCircleMore } from "lucide-react";

export default function Contactanos() {
  return <main>
    <section className="text-center flex flex-col gap-5 px-10 md:px-20 xl:px-40 py-16 items-center">
      <h2 className="text-3xl font-bold">☎️ Contáctanos</h2>
      <p>Para consultas sobre campañas, adopciones y donaciones puedes contactarnos a  </p>
      <a
        href="https://wa.me/50379291589"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-[--primary] transition-colors"
      >
        <MessageCircleMore className="w-5 h-5" />
        <span>WhatsApp</span>
      </a>
      <p>Para información general sobre el refugio y campañas activas, puedes revisar nuestras redes sociales en </p>
      <a
        href="https://www.facebook.com/echameunapatasv"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-[--primary] transition-colors"
      >
        <Facebook className="w-5 h-5" />
        <span>Facebook</span>
      </a>
    </section>
    <section className="bg-(--brand) text-white text-center flex flex-col gap-5 px-10 md:px-20 xl:px-40 py-10 items-center">
      <h2 className="text-3xl font-bold">📍 Visítanos</h2>
    </section>
    <section className="bg-white text-center flex flex-col gap-5 px-10 md:px-20 xl:px-40 py-16 items-center">
      <h2 className="text-xl font-bold">Refugio San Miguel</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.8825317063975!2d-88.17428432491464!3d13.481335286882945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7b2b12813a41cd%3A0x139b141e7ef0ddf4!2sEchame%20una%20pata%20sv!5e0!3m2!1sen!2ssv!4v1745563059913!5m2!1sen!2ssv" width="500" height="400" loading="lazy"></iframe>
      <p>o llega con <a href="https://ul.waze.com/ul?ll=13.48152245%2C-88.17166686&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" className="font-bold">Waze</a></p>
    </section>
    <section className="text-center flex flex-col gap-5 px-10 md:px-20 xl:px-40 py-16 items-center">
    <h2 className="text-xl font-bold">Refugio San Miguel</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.2793965820247!2d-89.12530229259643!3d13.701520714497772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633700077a9149%3A0xca932ede4aa22c5c!2sRefugio%20Ilopango%20-%20Refugio%20de%20Animales!5e0!3m2!1sen!2ssv!4v1745563377957!5m2!1sen!2ssv" width="500" height="400" loading="lazy"></iframe>
      <p>o llega con <a href="https://ul.waze.com/ul?ll=13.70265564%2C-89.12257433&navigate=yes&zoom=16&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank" className="font-bold">Waze</a></p>
    </section>
  </main>;
}
