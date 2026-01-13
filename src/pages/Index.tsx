import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'FileText',
      title: 'Оформление ДТП',
      description: 'Быстрое и правильное оформление документов после аварии. Юридическая поддержка на всех этапах.',
      features: ['Выезд на место', 'Составление схемы', 'Помощь в оформлении', 'Юридическая консультация']
    },
    {
      icon: 'Shield',
      title: 'ОСАГО онлайн',
      description: 'Оформление полиса ОСАГО за 10 минут без визита в офис. Лучшие предложения от страховых компаний.',
      features: ['Онлайн оформление', 'Сравнение тарифов', 'Доставка полиса', 'Круглосуточная поддержка']
    },
    {
      icon: 'Car',
      title: 'КАСКО',
      description: 'Комплексное страхование автомобиля от любых рисков. Индивидуальный расчет и выгодные условия.',
      features: ['Защита от ущерба', 'Страхование от угона', 'Гибкие тарифы', 'Быстрые выплаты']
    }
  ];

  const faqItems = [
    {
      question: 'Что делать сразу после ДТП?',
      answer: 'Первым делом убедитесь в безопасности всех участников. Включите аварийную сигнализацию, выставьте знак аварийной остановки. Вызовите ГИБДД если есть пострадавшие или разногласия. При европротоколе – сфотографируйте место ДТП со всех сторон, зафиксируйте повреждения автомобилей, обменяйтесь данными со вторым участником.'
    },
    {
      question: 'Можно ли оформить ДТП без вызова ГИБДД?',
      answer: 'Да, по европротоколу можно оформить ДТП без ГИБДД, если: нет пострадавших, в аварии участвовало только 2 автомобиля, у обоих водителей есть действующие полисы ОСАГО, нет разногласий по обстоятельствам ДТП, ущерб не превышает 400 000 рублей (в некоторых регионах – до 100 000 рублей).'
    },
    {
      question: 'Сколько стоит полис ОСАГО?',
      answer: 'Стоимость ОСАГО рассчитывается индивидуально и зависит от: региона регистрации автомобиля, мощности двигателя, стажа и возраста водителя, коэффициента бонус-малус (история страхования), количества водителей в полисе. Базовые тарифы устанавливаются ЦБ РФ. В среднем полис обходится от 5 до 15 тысяч рублей в год.'
    },
    {
      question: 'В чем разница между ОСАГО и КАСКО?',
      answer: 'ОСАГО – обязательное страхование гражданской ответственности. Покрывает ущерб, который вы причинили другим участникам ДТП. КАСКО – добровольное страхование вашего автомобиля. Покрывает ущерб вашему авто независимо от того, кто виноват в ДТП, а также защищает от угона, стихийных бедствий и других рисков.'
    },
    {
      question: 'Как получить выплату по страховке после ДТП?',
      answer: 'Для получения выплаты: обратитесь в свою страховую компанию в течение 5 рабочих дней после ДТП, предоставьте извещение о ДТП, заявление на выплату, документы на автомобиль и водительское удостоверение. Страховая организует осмотр автомобиля и назначит независимую экспертизу. Выплата производится в течение 20 дней (возможен ремонт на СТОА или денежная компенсация).'
    },
    {
      question: 'Что такое коэффициент бонус-малус (КБМ)?',
      answer: 'КБМ – это скидка за безаварийную езду. Каждый год без страховых выплат КБМ снижается на 5%, что уменьшает стоимость полиса (максимальная скидка – 50%). Если вы попали в ДТП по своей вине и получили выплату, КБМ увеличивается, и полис становится дороже. История КБМ хранится в базе РСА и привязана к водителю, а не к автомобилю.'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="CarFront" size={32} className="text-primary" />
            <span className="text-2xl font-bold">АвтоПомощь</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            <Button>Позвонить</Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 -z-10" />
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Помощь автовладельцам <span className="text-primary">24/7</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Оформление ДТП, автострахование и юридическая поддержка. Быстро, профессионально, надёжно.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Вызвать помощь
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать ОСАГО
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Работаем круглосуточно</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">15 мин</div>
                  <div className="text-sm text-muted-foreground">Выезд на место</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5000+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-up lg:block hidden">
              <img 
                src="https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/dd4fe33e-5601-49ae-8e97-cf76225cc3af.jpg" 
                alt="Автопомощь" 
                className="rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для автовладельцев – от страхования до помощи при ДТП
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover-scale hover:shadow-xl transition-all duration-300 border-2 hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Подробнее
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Вопросы и ответы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на самые частые вопросы по страхованию и оформлению ДТП
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и мы перезвоним в течение 5 минут
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Отправить заявку</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Телефон" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card className="hover-scale">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Круглосуточно, без выходных</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@avtopomosh.ru</p>
                    <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, 123</p>
                    <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="CarFront" size={28} className="text-primary" />
                <span className="text-xl font-bold">АвтоПомощь</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональная помощь автовладельцам 24/7
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Оформление ДТП</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ОСАГО</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">КАСКО</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 АвтоПомощь. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
