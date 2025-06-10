import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Готовы начать производство блоков?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Получите персональную консультацию по линии ЛИГА-8П и рассчитайте
              рентабельность вашего производства
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={20} className="text-green-400" />
                <span>Бесплатная консультация по технологии</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={20} className="text-green-400" />
                <span>Расчет окупаемости инвестиций</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={20} className="text-green-400" />
                <span>Помощь в подборе сырья и поставщиков</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={20} className="text-green-400" />
                <span>Обучение персонала и пуско-наладка</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
              ></Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать каталог
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold"></div>
                  <div className="text-gray-300"></div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">Телефон</div>
                  <div className="text-gray-300">+7 (495) 123-45-67</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300">info@liga-arbolit.ru</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">Режим работы</div>
                  <div className="text-gray-300">Пн-Пт: 9:00-18:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
