import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  DoorOpen, 
  Building, 
  ChefHat, 
  Armchair, 
  Settings, 
  Sparkles 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: DoorOpen,
      title: "Кованые ворота",
      description: "Эксклюзивные ворота и калитки с авторским дизайном для частных домов и усадеб",
      features: ["Индивидуальный дизайн", "Автоматика", "Антикоррозийная обработка"]
    },
    {
      icon: Building,
      title: "Перила и лестницы",
      description: "Изящные перила для лестниц, балконов и террас с элементами художественной ковки",
      features: ["Интерьерные решения", "Уличные конструкции", "Реставрация"]
    },
    {
      icon: ChefHat,
      title: "Мангалы и барбекю",
      description: "Стационарные и переносные мангалы, барбекю-комплексы для загородного отдыха",
      features: ["Авторский дизайн", "Функциональность", "Долговечность"]
    },
    {
      icon: Armchair,
      title: "Кованая мебель",
      description: "Эксклюзивная мебель: столы, стулья, кровати, скамейки для дома и сада",
      features: ["Садовая мебель", "Интерьерные решения", "Комплекты"]
    },
    {
      icon: Settings,
      title: "Реставрация",
      description: "Профессиональная реставрация антикварных кованых изделий и исторических элементов",
      features: ["Музейное качество", "Сохранение стиля", "Новые технологии"]
    },
    {
      icon: Sparkles,
      title: "Индивидуальные проекты",
      description: "Эксклюзивные изделия по вашим эскизам: от декоративных элементов до арт-объектов",
      features: ["Полная кастомизация", "3D-визуализация", "Авторский подход"]
    }
  ];

  return (
    <section className="py-20 bg-soft-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный спектр кузнечных работ премиум-класса от эскиза до установки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl smooth-transition bg-background border-0 elegant-shadow"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 smooth-transition">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="text-sm text-muted-foreground bg-accent/50 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;