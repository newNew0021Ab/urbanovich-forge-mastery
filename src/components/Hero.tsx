import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import heroGates from "@/assets/hero-gates.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroGates}
          alt="Кованые ворота в саду"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 leaf-pattern opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Кузнечное
              <span className="block text-digital-sage">мастерство</span>
              с 2006 года
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Создаём эксклюзивные кованые изделия премиум-класса в Гродно. 
              Ворота, перила, мебель и индивидуальные проекты для самых взыскательных клиентов.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="hero-gradient text-white border-0 hover:scale-105 smooth-transition">
                Смотреть портфолио
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-charcoal smooth-transition"
              >
                Заказать проект
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-digital-sage mr-2" />
                  <span className="text-2xl font-bold">18+</span>
                </div>
                <p className="text-sm text-gray-300">лет опыта</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-digital-sage mr-2" />
                  <span className="text-2xl font-bold">200+</span>
                </div>
                <p className="text-sm text-gray-300">проектов</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-digital-sage mr-2" />
                  <span className="text-2xl font-bold">100%</span>
                </div>
                <p className="text-sm text-gray-300">довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;