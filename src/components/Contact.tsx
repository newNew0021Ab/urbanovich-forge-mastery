import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      content: "+375 (29) 123-45-67",
      description: "Звоните в любое время"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@urbanovich-forge.by",
      description: "Ответим в течение часа"
    },
    {
      icon: MapPin,
      title: "Адрес",
      content: "г. Гродно, ул. Мастеров, 15",
      description: "Работаем по всей Беларуси"
    },
    {
      icon: Clock,
      title: "Режим работы",
      content: "Пн-Пт: 8:00-18:00, Сб: 9:00-15:00",
      description: "Воскресенье — выходной"
    }
  ];

  return (
    <section className="py-20 bg-soft-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Готовы обсудить ваш проект? Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Контактная информация
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Мы всегда готовы ответить на ваши вопросы и обсудить детали будущего проекта. 
                Выберите удобный способ связи.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    <p className="text-foreground font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-8 p-6 bg-background rounded-xl elegant-shadow">
              <h4 className="font-serif font-semibold text-foreground mb-4">
                Быстрая связь
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1">
                  <Phone className="mr-2 h-4 w-4" />
                  Позвонить
                </Button>
                <Button variant="outline" className="flex-1">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 elegant-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">
                Заказать консультацию
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Имя *
                  </label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Телефон *
                  </label>
                  <Input placeholder="+375 (XX) XXX-XX-XX" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Тип проекта
                </label>
                <Input placeholder="Ворота, перила, мебель..." />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Описание проекта *
                </label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте: размеры, стиль, особые пожелания..."
                  rows={4}
                />
              </div>
              
              <Button size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Отправить заявку
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;