import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Л</span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-green-600 uppercase tracking-wide">
                  ЛИГА-АРБОЛИТ
                </h3>
                <p className="text-xs text-gray-500">
                  Технологии и оборудование
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                ЛИНИЯ <span className="text-green-600">«ЛИГА-8П»</span>
              </h1>
              <p className="text-xl text-orange-500 font-medium mb-6">
                (ПОЛУАВТОМАТ)
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Мобильная производственная линия для изготовления арболитовых
                блоков с высокой производительностью и минимальными требованиями
                к площади
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                <div className="text-2xl font-bold text-green-600">
                  15 м³/смену
                </div>
                <div className="text-sm text-gray-600">Производительность</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <div className="text-2xl font-bold text-blue-600">15 м.кв.</div>
                <div className="text-sm text-gray-600">Площадь линии</div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              Получить консультацию
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://cdn.poehali.dev/files/3c02d8fb-f6a7-4f19-8830-cd1197d60877.png"
                alt="Схема производственной линии ЛИГА-8П"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border">
              <div className="text-xs text-gray-500">Срок изготовления</div>
              <div className="text-lg font-bold text-gray-900">60 дней</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
