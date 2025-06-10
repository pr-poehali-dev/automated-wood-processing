import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Home",
    title: "Занимаемая площадь",
    description: "линии - не более 15 м.кв.",
    highlight: "15 м.кв.",
  },
  {
    icon: "Building2",
    title: "Требуемая производственная площадь",
    description: "от 300 м.кв. Высота помещения от 3,5 м.",
    highlight: "300 м.кв.",
  },
  {
    icon: "Cog",
    title: "Производительность",
    description: "линии до 15 м.куб. в смену (8 часов)",
    highlight: "15 м³",
  },
  {
    icon: "Weight",
    title: "Вес оборудования",
    description: "- 1,2 тн",
    highlight: "1,2 тн",
  },
  {
    icon: "Wrench",
    title: "Срок изготовления оборудования",
    description: "-60 рабочих дней",
    highlight: "60 дней",
  },
  {
    icon: "Package",
    title: "Размер блоков",
    description: "500x250x300 мм, 500x250x400 мм",
    highlight: "2 типа",
  },
  {
    icon: "Zap",
    title: "Потребление электроэнергии",
    description: "до 10 кВт/час",
    highlight: "10 кВт/час",
  },
  {
    icon: "Users",
    title: "Обучение и пуско-наладка",
    description: "- до 3-х дней",
    highlight: "3 дня",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Технические характеристики
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Компактное оборудование с высокой производительностью и минимальными
            требованиями к установке
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon} size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {feature.highlight}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
