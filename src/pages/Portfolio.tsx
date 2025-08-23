import Navigation from "@/components/Navigation";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-serif font-bold text-center mb-8">
            Портфолио
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Наши лучшие работы - от изящных перил до монументальных ворот
          </p>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;