import SectionWrapper from './SectionWrapper'

export default function Parents() {
  return (
    <SectionWrapper className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#3E5B3A] mb-2">
          Con la bendición de
        </p>

        <h2 className="font-playfair text-3xl md:text-4xl text-[#2a2a2a] mb-12">
          Nuestras familias
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* NOVIA */}
          <div className="group relative p-8 rounded-2xl border border-[#D8A928]/20 hover:border-[#C93A8B]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#C93A8B]/10">

            {/* ICONO */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-[#F8F4EE] border border-[#D8A928]/30 flex items-center justify-center">
                <span className="text-[#C93A8B] text-lg">♀</span>
              </div>
            </div>

            <p className="font-cormorant text-sm tracking-[0.2em] uppercase text-[#C93A8B] mb-6 mt-2">
              Padres de la novia
            </p>

            {/* FOTOS */}
            <div className="flex justify-center gap-6 mb-5">

              <div className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#C93A8B]/30 shadow-md mx-auto mb-3">
                  <img
                    src="/images/familia/ivan.jpg"
                    alt="Iván Rojas"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="font-playfair text-lg text-[#2a2a2a]">
                  Iván Rojas
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#C93A8B]/30 shadow-md mx-auto mb-3">
                  <img
                    src="/images/familia/sandra.jpg"
                    alt="Sandra Pérez"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="font-playfair text-lg text-[#2a2a2a]">
                  Sandra Pérez
                </p>
              </div>

            </div>
          </div>

          {/* NOVIO */}
          <div className="group relative p-8 rounded-2xl border border-[#D8A928]/20 hover:border-[#3E5B3A]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#3E5B3A]/10">

            {/* ICONO */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-[#F8F4EE] border border-[#D8A928]/30 flex items-center justify-center">
                <span className="text-[#3E5B3A] text-lg">♂</span>
              </div>
            </div>

            <p className="font-cormorant text-sm tracking-[0.2em] uppercase text-[#3E5B3A] mb-6 mt-2">
              Padres del novio
            </p>

            {/* FOTOS */}
            <div className="flex justify-center gap-6 mb-5">

              <div className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#3E5B3A]/30 shadow-md mx-auto mb-3">
                  <img
                    src="/images/familia/luis-padre.jpg"
                    alt="Luis Ureta"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="font-playfair text-lg text-[#2a2a2a]">
                  Luis Ureta
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#3E5B3A]/30 shadow-md mx-auto mb-3">
                  <img
                    src="/images/familia/paola.jpg"
                    alt="Paola Macías"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="font-playfair text-lg text-[#2a2a2a]">
                  Paola Macías
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}