import { Button } from "@/components/ui/button";
import { ArrowRight, Award, MapPin, Users } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              Мастерство с 2006 года
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Сергей Урбанович
              <span className="block text-primary">мастер-кузнец</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              18 лет опыта в создании эксклюзивных кованых изделий. Наша мастерская в Гродно 
              работает по всей Беларуси, создавая уникальные проекты для самых взыскательных клиентов.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Мы специализируемся на премиум-сегменте, где каждое изделие — это произведение искусства, 
              созданное с любовью к мастерству и вниманием к деталям.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Премиум качество</h4>
                  <p className="text-sm text-muted-foreground">Только лучшие материалы</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">По всей Беларуси</h4>
                  <p className="text-sm text-muted-foreground">Доставка и установка</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Репутация</h4>
                  <p className="text-sm text-muted-foreground">Работаем через сарафан</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Индивидуальность</h4>
                  <p className="text-sm text-muted-foreground">Каждый проект уникален</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="group">
              Узнать больше о процессе
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden elegant-shadow">
              <img
                src={workshopImage}
                alt="Кузнечная мастерская Сергея Урбановича"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-digital-sage/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;