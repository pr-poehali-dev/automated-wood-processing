const specs = [
  {
    category: "Производительность",
    items: [
      { label: "Производительность линии", value: "до 15 м³/смену (8 часов)" },
      { label: "Утилизация древесных отходов", value: "90%" },
      {
        label: "Точность геометрии блоков",
        value: "отклонение по высоте макс. 3мм",
      },
    ],
  },
  {
    category: "Параметры оборудования",
    items: [
      { label: "Площадь линии", value: "не более 15 м.кв." },
      { label: "Общий вес", value: "1,2 тонны" },
      { label: "Потребление электроэнергии", value: "до 10 кВт/час" },
    ],
  },
  {
    category: "Требования к помещению",
    items: [
      { label: "Производственная площадь", value: "от 300 м.кв." },
      { label: "Высота помещения", value: "от 3,5 м" },
      { label: "Мобильность", value: "легкая установка и перемещение" },
    ],
  },
  {
    category: "Готовая продукция",
    items: [
      { label: "Размеры блоков", value: "500×250×300 мм / 500×250×400 мм" },
      { label: "Качество поверхности", value: "высокое, готовое к отделке" },
      {
        label: "Автоматизация процесса",
        value: "100% автоматизированные процессы",
      },
    ],
  },
];

const SpecsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Подробные спецификации
          </h2>
          <p className="text-xl text-gray-600">
            Полная техническая информация о линии ЛИГА-8П
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {specs.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {section.category}
              </h3>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-start py-3 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="text-gray-700 font-medium flex-1 pr-4">
                      {item.label}
                    </span>
                    <span className="text-green-600 font-semibold text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">🎯 Ключевые преимущества</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <div className="text-3xl font-bold mb-2">90%</div>
              <div className="text-green-100">утилизация отходов</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Все процессы</div>
              <div className="text-green-100">автоматизация</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3мм</div>
              <div className="text-green-100">макс. отклонение</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
