import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import ironRailing from "@/assets/iron-railing.jpg";
import ironFurniture from "@/assets/iron-furniture.jpg";
import heroGates from "@/assets/hero-gates.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Кованые ворота \"Королевский сад\"",
      category: "Ворота и ограждения",
      image: heroGates,
      description: "Эксклюзивные ворота с элементами растительного орнамента для частной усадьбы"
    },
    {
      title: "Интерьерные перила \"Классика\"",
      category: "Перила и лестницы",
      image: ironRailing,
      description: "Элегантные перила для винтовой лестницы с традиционными мотивами"
    },
    {
      title: "Садовый комплект \"Прованс\"",
      category: "Мебель",
      image: ironFurniture,
      description: "Стол и стулья в стиле прованс с изящными растительными узорами"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Наши работы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Каждый проект — это уникальное произведение искусства, созданное с учетом ваших пожеланий и архитектурного стиля
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-0 elegant-shadow hover:shadow-2xl smooth-transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group/btn text-primary hover:text-primary-foreground hover:bg-primary"
                >
                  Подробнее
                  <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 smooth-transition" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            Смотреть всё портфолио
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;