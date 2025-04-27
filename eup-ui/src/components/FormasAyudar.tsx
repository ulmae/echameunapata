export default function FormasAyudar() {
  const waysToHelp = [
    {
      icon: "🦴",
      title: "Donaciones",
      text: "Cada dólar alimenta, vacuna o salva una vida.",
    },
    {
      icon: "🧼",
      title: "Voluntariado",
      text: "Ven a jugar, bañar o simplemente dar amor.",
    },
    {
      icon: "🏠",
      title: "Adopta o apadrina",
      text: "Dales un hogar, aunque sea a distancia.",
    },
    {
      icon: "📣",
      title: "Comparte",
      text: "Tu voz puede llegar donde sus patitas no.",
    },
  ];

  return (
    <section className="bg-white text-(--dark) py-16 px-8 md:px-20 xl:px-40 text-center" style={{backgroundImage: 'url("/paw-print.png")', backgroundRepeat:'repeat', backgroundPosition:'left top'}}>
      <h2 className="text-3xl font-bold mb-12">Haz la diferencia</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {waysToHelp.map(({ icon, title, text }, i) => (
          <div
            key={i}
            className="bg-(--info) inset-ring-blue-500 text-(--dark) rounded-2xl p-6 shadow-lg flex flex-col items-center text-center gap-3 hover:shadow-2xl"
          >
            <div className="text-4xl transform-none bg-white px-4 py-5 rounded-full">{icon}</div>
            <h3 className="text-xl font-semibold transform-none">{title}</h3>
            <p className="text-sm transform-none">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
