import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedSoftware, setSelectedSoftware] = useState("");
  const [generatedKey, setGeneratedKey] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const softwareOptions = [
    { id: "photoshop", name: "Adobe Photoshop", icon: "Camera" },
    { id: "lightroom", name: "Adobe Lightroom", icon: "Sun" },
    { id: "gimp", name: "GIMP", icon: "Palette" },
    { id: "canva", name: "Canva Pro", icon: "Sparkles" },
    { id: "sketch", name: "Sketch", icon: "Pen" },
    { id: "figma", name: "Figma", icon: "Layers" },
  ];

  const generateKey = async () => {
    if (!selectedSoftware) return;

    setIsGenerating(true);

    // Имитация генерации ключа
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const segments = [];

    for (let i = 0; i < 4; i++) {
      let segment = "";
      for (let j = 0; j < 4; j++) {
        segment += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      segments.push(segment);
    }

    setGeneratedKey(segments.join("-"));
    setIsGenerating(false);
  };

  const copyToClipboard = async () => {
    if (generatedKey) {
      await navigator.clipboard.writeText(generatedKey);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-navy via-turquoise to-coral overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/img/3495a82a-b550-40d2-b232-14b8e695e424.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" size={32} className="text-white animate-glow" />
            <h1 className="text-2xl font-futura font-bold text-white">
              PHOTO MASTER KEYS
            </h1>
          </div>
          <div className="flex space-x-6">
            <a
              href="#generator"
              className="text-white hover:text-coral transition-colors font-inter"
            >
              Генератор
            </a>
            <a
              href="#about"
              className="text-white hover:text-coral transition-colors font-inter"
            >
              О сервисе
            </a>
            <a
              href="#contact"
              className="text-white hover:text-coral transition-colors font-inter"
            >
              Контакты
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-6xl font-futura font-bold text-white mb-6 animate-float">
            Генератор ключей для фоторедакторов
          </h2>
          <p className="text-xl text-light-blue mb-8 font-inter">
            Получите мгновенный доступ к лучшим инструментам для обработки
            фотографий
          </p>
          <div className="flex justify-center space-x-4">
            <Icon
              name="Camera"
              size={48}
              className="text-coral animate-float"
            />
            <Icon
              name="Zap"
              size={48}
              className="text-turquoise animate-float"
              style={{ animationDelay: "0.5s" }}
            />
            <Icon
              name="Sparkles"
              size={48}
              className="text-white animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </section>

      {/* Key Generator Section */}
      <section
        id="generator"
        className="relative z-10 container mx-auto px-4 py-20"
      >
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-futura text-white">
                Генератор ключей
              </CardTitle>
              <CardDescription className="text-light-blue font-inter">
                Выберите программу и получите активационный ключ
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-white font-inter mb-3 block">
                  Выберите программу:
                </Label>
                <div className="grid grid-cols-2 gap-3">
                  {softwareOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedSoftware(option.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        selectedSoftware === option.id
                          ? "border-coral bg-coral/20 text-white"
                          : "border-white/20 bg-white/5 text-light-blue hover:border-turquoise hover:bg-turquoise/10"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon name={option.icon} size={24} />
                        <span className="font-inter">{option.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={generateKey}
                disabled={!selectedSoftware || isGenerating}
                className="w-full bg-gradient-to-r from-coral to-turquoise hover:from-coral/80 hover:to-turquoise/80 text-white font-futura text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <div className="flex items-center space-x-2">
                    <Icon name="Loader2" size={20} className="animate-spin" />
                    <span>Генерация ключа...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Icon name="Key" size={20} />
                    <span>Сгенерировать ключ</span>
                  </div>
                )}
              </Button>

              {generatedKey && (
                <div className="space-y-4 animate-fade-in">
                  <Label className="text-white font-inter">
                    Ваш ключ активации:
                  </Label>
                  <div className="flex space-x-2">
                    <Input
                      value={generatedKey}
                      readOnly
                      className="bg-white/10 border-white/20 text-white font-mono text-center text-lg"
                    />
                    <Button
                      onClick={copyToClipboard}
                      variant="outline"
                      className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                    >
                      <Icon name="Copy" size={16} />
                    </Button>
                  </div>
                  <Badge className="bg-turquoise/20 text-turquoise border-turquoise/40">
                    <Icon name="CheckCircle" size={16} className="mr-1" />
                    Ключ успешно сгенерирован
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 container mx-auto px-4 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-futura font-bold text-white text-center mb-12">
            О сервисе
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Zap"
                  size={48}
                  className="text-coral mx-auto mb-4"
                />
                <h4 className="text-xl font-futura text-white mb-2">
                  Мгновенная генерация
                </h4>
                <p className="text-light-blue font-inter">
                  Получите ключ активации за секунды
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Shield"
                  size={48}
                  className="text-turquoise mx-auto mb-4"
                />
                <h4 className="text-xl font-futura text-white mb-2">
                  Безопасность
                </h4>
                <p className="text-light-blue font-inter">
                  Все ключи проходят проверку
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Sparkles"
                  size={48}
                  className="text-white mx-auto mb-4"
                />
                <h4 className="text-xl font-futura text-white mb-2">
                  Поддержка 24/7
                </h4>
                <p className="text-light-blue font-inter">
                  Всегда готовы помочь
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 container mx-auto px-4 py-20"
      >
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-futura text-white">
                Связаться с нами
              </CardTitle>
              <CardDescription className="text-light-blue font-inter">
                Есть вопросы? Мы всегда готовы помочь
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-white font-inter">Имя</Label>
                  <Input
                    placeholder="Ваше имя"
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
                <div>
                  <Label className="text-white font-inter">Email</Label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
              </div>
              <div>
                <Label className="text-white font-inter">Сообщение</Label>
                <Textarea
                  placeholder="Ваше сообщение..."
                  className="bg-white/10 border-white/20 text-white placeholder-white/50 min-h-[100px]"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-coral to-turquoise hover:from-coral/80 hover:to-turquoise/80 text-white font-futura text-lg py-6">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить сообщение
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-4 py-12 border-t border-white/20">
        <div className="text-center">
          <p className="text-light-blue font-inter">
            © 2024 Photo Master Keys. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
