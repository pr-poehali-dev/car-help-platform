import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const PHONE_NUMBER = '+79234756365';
const PHONE_DISPLAY = '+7 (923) 475-63-65';

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
      features: ['Выезд на место', 'Составление схемы', 'Помощь в оформлении', 'Юридическая консультация'],
      image: 'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/d8777bec-5934-423f-a81f-ea38927a96a1.jpg'
    },
    {
      icon: 'Shield',
      title: 'ОСАГО онлайн',
      description: 'Оформление полиса ОСАГО за 10 минут без визита в офис. Лучшие предложения от страховых компаний.',
      features: ['Онлайн оформление', 'Сравнение тарифов', 'Доставка полиса', 'Круглосуточная поддержка'],
      image: 'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/8e6445f1-5032-4c17-a6eb-6e70c717ce79.jpg'
    },
    {
      icon: 'Car',
      title: 'КАСКО',
      description: 'Комплексное страхование автомобиля от любых рисков. Индивидуальный расчет и выгодные условия.',
      features: ['Защита от ущерба', 'Страхование от угона', 'Гибкие тарифы', 'Быстрые выплаты'],
      image: 'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/dd4fe33e-5601-49ae-8e97-cf76225cc3af.jpg'
    }
  ];

  const insuranceCompanies = [
    { name: 'Росгосстрах', url: 'https://www.rgs.ru', description: 'Крупнейшая страховая компания России с широкой сетью офисов' },
    { name: 'РЕСО-Гарантия', url: 'https://www.reso.ru', description: 'Надежная компания с быстрыми выплатами и онлайн-оформлением' },
    { name: 'Альфастрахование', url: 'https://www.alfastrah.ru', description: 'Входит в топ-3 страховых компаний, удобное мобильное приложение' },
    { name: 'ВСК', url: 'https://www.vsk.ru', description: 'Специализируется на автостраховании, выгодные тарифы' },
    { name: 'Ингосстрах', url: 'https://www.ingos.ru', description: 'Одна из старейших страховых компаний с отличной репутацией' }
  ];

  const faqItems = [
    {
      question: 'Что делать сразу после ДТП?',
      answer: 'Первым делом убедитесь в безопасности всех участников. Включите аварийную сигнализацию, выставьте знак аварийной остановки. Вызовите ГИБДД если есть пострадавшие или разногласия. При европротоколе – сфотографируйте место ДТП со всех сторон, зафиксируйте повреждения автомобилей, обменяйтесь данными со вторым участником.',
      hasPhone: true
    },
    {
      question: 'Можно ли оформить ДТП без вызова ГИБДД?',
      answer: 'Да, по европротоколу можно оформить ДТП без ГИБДД, если: нет пострадавших, в аварии участвовало только 2 автомобиля, у обоих водителей есть действующие полисы ОСАГО, нет разногласий по обстоятельствам ДТП, ущерб не превышает 400 000 рублей (в некоторых регионах – до 100 000 рублей).',
      hasDownload: true
    },
    {
      question: 'Сколько стоит полис ОСАГО?',
      answer: 'Стоимость ОСАГО рассчитывается индивидуально и зависит от: региона регистрации автомобиля, мощности двигателя, стажа и возраста водителя, коэффициента бонус-малус (история страхования), количества водителей в полисе. Базовые тарифы устанавливаются ЦБ РФ. В среднем полис обходится от 5 до 15 тысяч рублей в год.',
      hasInsurance: true
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
            <Button asChild>
              <a href={`tel:${PHONE_NUMBER}`}>
                <Icon name="Phone" size={18} className="mr-2" />
                Позвонить
              </a>
            </Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-6 mt-8">
                <a href="#services" className="text-lg hover:text-primary transition-colors">Услуги</a>
                <a href="#faq" className="text-lg hover:text-primary transition-colors">FAQ</a>
                <a href="#contact" className="text-lg hover:text-primary transition-colors">Контакты</a>
                <Button asChild className="mt-4">
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Icon name="Phone" size={18} className="mr-2" />
                    {PHONE_DISPLAY}
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
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
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-6 sm:px-8" asChild>
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Icon name="Phone" size={20} className="mr-2" />
                    <span className="hidden sm:inline">Позвонить:</span> {PHONE_DISPLAY}
                  </a>
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

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша работа</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Фотографии с мест оформления ДТП – профессиональный подход к каждому случаю
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/d8777bec-5934-423f-a81f-ea38927a96a1.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/48db8517-04e2-4eb9-8c8c-6670186782d0.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/cbef0ef6-aa32-4ed5-9253-a552505f7d9d.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/fa474c6a-5652-45b3-b25f-334da81e8b5a.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/1a66850b-ae14-4000-9afd-6dc0aaf0f96e.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/b2465854-5fba-4b56-bef5-88b042550c9e.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/8e6445f1-5032-4c17-a6eb-6e70c717ce79.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/dd4fe33e-5601-49ae-8e97-cf76225cc3af.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/d8777bec-5934-423f-a81f-ea38927a96a1.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/48db8517-04e2-4eb9-8c8c-6670186782d0.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/cbef0ef6-aa32-4ed5-9253-a552505f7d9d.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/fa474c6a-5652-45b3-b25f-334da81e8b5a.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/1a66850b-ae14-4000-9afd-6dc0aaf0f96e.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/b2465854-5fba-4b56-bef5-88b042550c9e.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/8e6445f1-5032-4c17-a6eb-6e70c717ce79.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/dd4fe33e-5601-49ae-8e97-cf76225cc3af.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/d8777bec-5934-423f-a81f-ea38927a96a1.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/48db8517-04e2-4eb9-8c8c-6670186782d0.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/cbef0ef6-aa32-4ed5-9253-a552505f7d9d.jpg',
              'https://cdn.poehali.dev/projects/382109ac-9f7d-4924-86d7-d960c849e2c7/files/fa474c6a-5652-45b3-b25f-334da81e8b5a.jpg'
            ].map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg hover-scale cursor-pointer group">
                <img 
                  src={img} 
                  alt={`Фото с места ДТП ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a href={`tel:${PHONE_NUMBER}`}>
                <Icon name="Phone" size={20} className="mr-2" />
                Вызвать специалиста: {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Полный спектр услуг для автовладельцев – от страхования до помощи при ДТП
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href={`tel:${PHONE_NUMBER}`}>
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить: {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover-scale hover:shadow-xl transition-all duration-300 border-2 hover:border-primary overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3">
                    <Button className="w-full" asChild>
                      <a href={`tel:${PHONE_NUMBER}`}>
                        <Icon name="Phone" size={18} className="mr-2" />
                        {PHONE_DISPLAY}
                      </a>
                    </Button>
                    <Button className="w-full" variant="outline">
                      Подробнее
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Вопросы и ответы</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ответы на самые частые вопросы по страхованию и оформлению ДТП
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href={`tel:${PHONE_NUMBER}`}>
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить: {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 rounded-lg px-4 md:px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-6 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground pb-6 space-y-4">
                  <p>{item.answer}</p>
                  {item.hasPhone && (
                    <Button asChild className="w-full sm:w-auto">
                      <a href={`tel:${PHONE_NUMBER}`}>
                        <Icon name="Phone" size={18} className="mr-2" />
                        Позвонить сейчас: {PHONE_DISPLAY}
                      </a>
                    </Button>
                  )}
                  {item.hasDownload && (
                    <div className="space-y-2">
                      <Button asChild className="w-full sm:w-auto" variant="outline">
                        <a href="https://www.autoins.ru/files/documents/blank-evroprotokola.pdf" target="_blank" rel="noopener noreferrer">
                          <Icon name="Download" size={18} className="mr-2" />
                          Скачать бланк европротокола
                        </a>
                      </Button>
                    </div>
                  )}
                  {item.hasInsurance && (
                    <div className="space-y-3 mt-4">
                      <p className="font-semibold">Популярные страховые компании:</p>
                      <div className="grid gap-3">
                        {insuranceCompanies.map((company, idx) => (
                          <Card key={idx} className="hover:border-primary transition-colors">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1">
                                  <h4 className="font-semibold mb-1">{company.name}</h4>
                                  <p className="text-sm text-muted-foreground">{company.description}</p>
                                </div>
                                <Button size="sm" variant="outline" asChild>
                                  <a href={company.url} target="_blank" rel="noopener noreferrer">
                                    <Icon name="ExternalLink" size={16} />
                                  </a>
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Оставьте заявку и мы перезвоним в течение 5 минут
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href={`tel:${PHONE_NUMBER}`}>
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас: {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
          <div className="text-center my-8">
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full">
              <span className="text-sm text-muted-foreground">или</span>
            </div>
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
                    <a href={`tel:${PHONE_NUMBER}`} className="text-primary hover:underline font-medium">{PHONE_DISPLAY}</a>
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
                    <a href="mailto:info@dorozhnyj-komissar.ru" className="text-primary hover:underline font-medium">info@dorozhnyj-komissar.ru</a>
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
                    <p className="text-muted-foreground">г. Новосибирск, ул. Большевистская, 103</p>
                    <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-12">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  Мы на карте
                </CardTitle>
                <CardDescription>г. Новосибирск, ул. Большевистская, 103</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-[400px] md:h-[500px]">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=82.920430%2C55.030204&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjgyNzU3NRJb0KDQvtGB0YHQuNGPLCDQndC-0LLQvtGB0LjQsdC40YDRgdC6LCDRg9C70LjRhtCwINCR0L7Qu9GM0YjQtdCy0LjRgdGC0YHQutCw0Y8sIDEwMyIKDdaQXUIV6bxhQg%2C%2C&z=17"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
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