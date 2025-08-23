import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-serif font-bold text-center mb-8">
            Контакты
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения вашего проекта
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;