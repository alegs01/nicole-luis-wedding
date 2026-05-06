import SectionWrapper from './SectionWrapper'

export default function Padrinos() {

  // ✏️ EDITA nombres + fotos aquí
  const padrinos = [
    {
      rol: 'Padrino de honor',
      nombre: 'Nombre Aquí',
      foto: '/images/padrinos/padrino1.jpg',
    },
    {
      rol: 'Madrina de honor',
      nombre: 'Nombre Aquí',
      foto: '/images/padrinos/madrina1.jpg',
    },
    {
      rol: 'Padrino',
      nombre: 'Nombre Aquí',
      foto: '/images/padrinos/padrino2.jpg',
    },
    {
      rol: 'Madrina',
      nombre: 'Nombre Aquí',
      foto: '/images/padrinos/madrina2.jpg',
    },
  ]

  return (
    <SectionWrapper className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#3E5B3A] mb-2">
          Quienes nos acompañan
        </p>

        <h2 className="font-playfair text-3xl md:text-4xl text-[#2a2a2a] mb-12">
          Padrinos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {padrinos.map(({ rol, nombre, foto }) => (

            <div
              key={rol}
              className="p-8 rounded-2xl bg-white border border-[#D8A928]/20 text-center hover:shadow-lg transition-all duration-300"
            >

              {/* FOTO */}
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-5 border-2 border-[#D8A928]/20 shadow-md">
                <img
                  src={foto}
                  alt={nombre}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ROL */}
              <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#F26A4B] mb-2">
                {rol}
              </p>

              {/* NOMBRE */}
              <p className="font-playfair text-xl text-[#2a2a2a]">
                {nombre}
              </p>

            </div>

          ))}

        </div>

      </div>
    </SectionWrapper>
  )
}