import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckIcon,
  TargetIcon,
  UsersIcon,
  BarChart3Icon,
  MousePointerClickIcon,
  UsersRoundIcon,
  FileTextIcon,
  TrophyIcon,
  ShieldCheckIcon,
  SendIcon,
  YoutubeIcon,
  KeyboardIcon,
  PenLineIcon,
  MonitorIcon,
  HeadphonesIcon,
  BarChart2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  QuoteIcon,
  StarIcon,
  CalendarCheckIcon } from
'lucide-react';
import { StudentLayout } from '../../components/student/StudentLayout';

// Hero slider images
const heroSlides = [
  {
    id: 1,
    title: "Master Typing & Stenography",
    subtitle: "India's Most Trusted Platform",
    description: "Practice with real exam patterns and compete with thousands of aspirants",
    bgImage: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1920&q=80",
    bgOverlay: "from-blue-900/85 via-blue-800/70 to-indigo-900/85"
  },
  {
    id: 2,
    title: "Live Tests & Rankings",
    subtitle: "Compete at All India Level",
    description: "Take live tests and see your real-time ranking among all participants",
    bgImage: "https://images.unsplash.com/photo-1560439514-e960a3ef5019?w=1920&q=80",
    bgOverlay: "from-purple-900/85 via-purple-800/70 to-pink-900/85"
  },
  {
    id: 3,
    title: "SSC, Court & Police Exams",
    subtitle: "Exam-Oriented Practice",
    description: "Prepare for SSC Steno, Court Steno, Delhi Police and State exams",
    bgImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80",
    bgOverlay: "from-green-900/85 via-teal-800/70 to-cyan-900/85"
  }
];

const heroFeatures = [
{ icon: TargetIcon, label: 'Real Exam Based Tests', bg: '#0D6EFD' },
{ icon: UsersIcon, label: 'Live Tests & All India Ranking', bg: '#6F42C1' },
{ icon: BarChart3Icon, label: 'Detailed Performance Analysis', bg: '#198754' },
{ icon: MousePointerClickIcon, label: 'User Friendly Interface', bg: '#FD7E14' }];


const prepareFor = [
'SSC Exams',
'Court Steno',
'Delhi Police',
'UP / State Exams',
'And Many More...'];


const primaryCards = [
{
  title: 'Typing Exam',
  text: 'Improve your typing speed and accuracy with exam oriented tests.',
  cta: 'Start Test',
  to: '/typing-exam',
  titleClass: 'text-primary',
  btnClass: 'bg-primary hover:bg-primary-700',
  bg: 'bg-[#EFF6FF]',
  ring: 'bg-[#DBEAFE]',
  icon: KeyboardIcon,
  iconClass: 'text-primary'
},
{
  title: 'English Steno Exam',
  text: 'Practice English Stenography dictations and enhance your skills.',
  cta: 'Start Test',
  to: '/english-steno',
  titleClass: 'text-success',
  btnClass: 'bg-success hover:bg-[#146c43]',
  bg: 'bg-[#F0FDF4]',
  ring: 'bg-[#DCFCE7]',
  icon: PenLineIcon,
  iconClass: 'text-success'
},
{
  title: 'Hindi Steno Exam',
  text: 'अभ्यास करें हिंदी स्टेनो के साथ और अपनी गति बढ़ाएं।',
  cta: 'Start Test',
  to: '/hindi-steno',
  titleClass: 'text-[#FD7E14]',
  btnClass: 'bg-[#FD7E14] hover:bg-[#e06f0f]',
  bg: 'bg-[#FFF7ED]',
  ring: 'bg-[#FFEDD5]',
  icon: PenLineIcon,
  iconClass: 'text-[#FD7E14]'
}];


const liveCards = [
{
  title: 'Live Test (Typing)',
  text: 'Participate in live typing tests and compete with aspirants across India.',
  cta: 'Join Live Test',
  to: '/live-test/typing',
  titleClass: 'text-primary',
  btnClass: 'bg-primary hover:bg-primary-700',
  bg: 'bg-[#EFF6FF]',
  icon: MonitorIcon
},
{
  title: 'Live Test (Steno)',
  text: 'Take live steno dictation tests and check your real-time rank.',
  cta: 'Join Live Test',
  to: '/live-test/steno',
  titleClass: 'text-[#6F42C1]',
  btnClass: 'bg-[#6F42C1] hover:bg-[#5c36a4]',
  bg: 'bg-[#F5F3FF]',
  icon: HeadphonesIcon
}];


const analysisRows = [
{ title: 'Typing', text: 'View detailed typing performance', tone: 'text-primary' },
{ title: 'Eng. Steno', text: 'Analyze your English Steno tests', tone: 'text-success' },
{ title: 'Hindi Steno', text: 'Analyze your Hindi Steno tests', tone: 'text-danger' }];


const stats = [
{ icon: UsersRoundIcon, title: 'Registered Users', sub: '1,50,000+ Happy Users', color: '#0D6EFD', bg: '#DBEAFE' },
{ icon: FileTextIcon, title: 'Test Attempted', sub: '5,00,000+ Tests', color: '#198754', bg: '#D1FAE5' },
{ icon: TrophyIcon, title: 'Top Ranks', sub: 'All India Level', color: '#D97706', bg: '#FEF3C7', to: '/leaderboard' },
{ icon: ShieldCheckIcon, title: '100% Secure & Accurate', sub: 'Safe & Reliable', color: '#7C3AED', bg: '#EDE9FE' },
{ icon: BarChart3Icon, title: 'Progress Reports (with AI analysis)', sub: 'Track Your Performance', color: '#0EA5E9', bg: '#CFFAFE' },
{ icon: CalendarCheckIcon, title: 'Exam Patterns', sub: '(Feel like Real exam, Reduce Exam anxiety)', color: '#DB2777', bg: '#FCE7F3' }];


const quickLinks = [
{ label: 'Terms & Conditions', href: '#terms' },
{ label: 'Privacy Policy', href: '#privacy' },
{ label: 'Refund & Cancellation Policy', href: '#refund' },
{ label: 'Contact Us', href: '#contact' }];


const testimonials = [
{
  name: 'Rakesh',
  role: 'Stenographer, Delhi High Court',
  avatarBg: '#FDE68A',
  rating: 5,
  text: 'This platform gave me the exact exam-like pressure I needed. My typing speed improved by 12 WPM in just two months of daily practice.'
},
{
  name: 'Arpita',
  role: 'Stenographer, Registrar General of India',
  avatarBg: '#FBCFE8',
  rating: 5,
  text: 'SSC test simulator on this site is just like the actual exam. It made me comfortable with the pattern and improved my speed under pressure.'
},
{
  name: 'Kundan',
  role: 'Stenographer, Central Vigilance Commission',
  avatarBg: '#BFDBFE',
  rating: 4,
  text: 'Sir, aapka platform best hai. Mujhe ab typing mistakes bahut kam hoti hai aur outline practice bhi easily ho jati hai.'
},
{
  name: 'Gautam',
  role: 'Stenographer, M.E.A.',
  avatarBg: '#DDD6FE',
  rating: 5,
  text: "I was struggling with accuracy, but after using Stenoshala's instant result and detailed feedback, I improved a lot. Cleared my exam in second attempt."
},
{
  name: 'Priyanka',
  role: 'Stenographer, Rajasthan High Court',
  avatarBg: '#BBF7D0',
  rating: 5,
  text: "The mistake pattern analysis helped me understand exactly where I was losing marks. It's the closest thing to having a personal typing coach."
},
{
  name: 'Suresh',
  role: 'Stenographer, UP Police',
  avatarBg: '#FECACA',
  rating: 4,
  text: 'The live tests feel exactly like the real exam hall. Competing with other aspirants in real time pushed me to practice every single day.'
},
{
  name: 'Neha',
  role: 'Stenographer, Income Tax Department',
  avatarBg: '#FDE68A',
  rating: 5,
  text: 'Hindi typing practice ke liye ye best platform hai. Font aur keyboard layout options ne mujhe bahut help ki.'
},
{
  name: 'Vikas',
  role: 'Stenographer, Railway Recruitment Board',
  avatarBg: '#BFDBFE',
  rating: 5,
  text: "I could track my WPM growth week by week. Seeing the graph go up kept me motivated to keep practicing."
},
{
  name: 'Sunita',
  role: 'Stenographer, Punjab & Haryana High Court',
  avatarBg: '#FBCFE8',
  rating: 4,
  text: 'The steno dictation library covers every difficulty level. I started with easy dictations and gradually moved to pro level before my exam.'
},
{
  name: 'Manoj',
  role: 'Stenographer, CBI',
  avatarBg: '#DDD6FE',
  rating: 5,
  text: 'Customer support replied within minutes when I had a doubt about the result pattern. That kind of support is rare on other platforms.'
},
{
  name: 'Deepika',
  role: 'Stenographer, Supreme Court of India',
  avatarBg: '#BBF7D0',
  rating: 5,
  text: 'The self assessment mode let me practice without pressure while the live tests gave me the real exam feel. Both together made a huge difference.'
},
{
  name: 'Amit',
  role: 'Stenographer, SSC CGL',
  avatarBg: '#FECACA',
  rating: 5,
  text: 'Mera accuracy 85% se 96% tak pahunch gaya sirf 6 hafton mein. Yahan ke practice tests bahut realistic hain.'
},
{
  name: 'Kavita',
  role: 'Stenographer, Delhi Police HCM',
  avatarBg: '#FDE68A',
  rating: 4,
  text: "Leaderboard ranking motivated me to practice daily. Watching my rank climb every week was the best feeling."
},
{
  name: 'Rohit',
  role: 'Stenographer, Rajya Sabha Secretariat',
  avatarBg: '#BFDBFE',
  rating: 5,
  text: 'The detailed mistake analysis broke down exactly which words I kept getting wrong. Fixing those specific words fixed my whole score.'
},
{
  name: 'Anjali',
  role: 'Stenographer, State Bank of India',
  avatarBg: '#FBCFE8',
  rating: 5,
  text: "I recommend this to every steno aspirant I know. It's the only platform that actually matches the real exam software."
}];


export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [brokenSlides, setBrokenSlides] = useState<Record<number, boolean>>({});
  const testimonialTrackRef = React.useRef<HTMLDivElement>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonialCardWidth = 356;

  const scrollTestimonialsTo = (index: number) => {
    const el = testimonialTrackRef.current;
    if (!el) return;
    const clamped = (index + testimonials.length) % testimonials.length;
    el.scrollTo({ left: clamped * testimonialCardWidth, behavior: 'smooth' });
    setTestimonialIndex(clamped);
  };

  const scrollTestimonials = (dir: 'left' | 'right') => {
    scrollTestimonialsTo(testimonialIndex + (dir === 'left' ? -1 : 1));
  };

  const handleTestimonialScroll = () => {
    const el = testimonialTrackRef.current;
    if (!el) return;
    setTestimonialIndex(Math.round(el.scrollLeft / testimonialCardWidth));
  };

  // Auto advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        testimonialTrackRef.current?.scrollTo({ left: next * testimonialCardWidth, behavior: 'smooth' });
        return next;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Auto advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <StudentLayout showDownloadApp>
      {/* Hero Slider */}
      <section className="mb-4 relative overflow-hidden rounded-xl">
        {/* Slider Container */}
        <div className="relative h-[320px] lg:h-[360px]">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Background Image */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgOverlay}`}>
                {/* Fallback pattern shown if the photo fails to load (e.g. blocked by an extension or offline) */}
                {brokenSlides[slide.id] &&
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                    backgroundSize: '28px 28px'
                  }}
                  aria-hidden="true" />

                }
                {!brokenSlides[slide.id] &&
                <img
                  src={slide.bgImage}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={() => setBrokenSlides((prev) => ({ ...prev, [slide.id]: true }))} />

                }
                <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgOverlay}`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-6">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                    {/* Left Content */}
                    <div className="flex-1 text-white">
                      <p className="font-display text-[14px] md:text-[15px] font-semibold text-yellow-300 mb-1.5 animate-fade-in">
                        {slide.subtitle}
                      </p>
                      <h2 className="font-display text-[32px] md:text-[38px] lg:text-[42px] font-extrabold leading-tight tracking-tight mb-3 animate-slide-up">
                        {slide.title}
                      </h2>
                      <p className="text-[13px] md:text-[14px] text-white/90 mb-4 max-w-xl animate-fade-in-delay">
                        {slide.description}
                      </p>
                      <div className="inline-block rounded-lg bg-yellow-400 px-4 py-2 font-display text-[12px] font-bold text-gray-900 shadow-lg hover:bg-yellow-300 transition-all animate-bounce-subtle">
                        Practice | Improve | Succeed
                      </div>
                      
                      {/* Features List */}
                      <ul className="mt-5 grid grid-cols-2 gap-2 max-w-lg">
                        {heroFeatures.map((f, idx) => (
                          <li 
                            key={f.label} 
                            className="flex items-center gap-2 animate-slide-in"
                            style={{ animationDelay: `${idx * 100}ms` }}
                          >
                            <span
                              className="grid h-6 w-6 place-items-center rounded-md text-white shadow-md shrink-0"
                              style={{ backgroundColor: f.bg }}
                            >
                              <f.icon className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                            <span className="text-[12px] text-white/95 font-medium leading-tight">
                              {f.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Side - Prepare For Box */}
                    <div className="w-full lg:w-[280px] shrink-0">
                      <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-5 shadow-2xl">
                        <p className="font-display text-[15px] font-bold text-yellow-300 mb-3 flex items-center gap-2">
                          <TrophyIcon className="h-5 w-5" />
                          Prepare For
                        </p>
                        <ul className="space-y-2.5">
                          {prepareFor.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-[13px] text-white font-medium">
                              <CheckIcon className="h-4 w-4 text-green-400 shrink-0" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex justify-center">
                          <TrophyIcon className="h-16 w-16 text-yellow-400 drop-shadow-lg" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-2.5 transition-all duration-200 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-2.5 transition-all duration-200 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-yellow-400' 
                  : 'w-2.5 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Course cards */}
      <div className="mb-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {primaryCards.map((card) =>
        <article
          key={card.title}
          className={`flex flex-col rounded-xl border border-slate-200 ${card.bg} p-5 shadow-card`}>
          
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <h3 className={`font-display text-[19px] font-bold ${card.titleClass}`}>
                  {card.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{card.text}</p>
              </div>
              <span className={`grid h-[74px] w-[74px] shrink-0 place-items-center rounded-full ${card.ring}`}>
                <card.icon className={`h-8 w-8 ${card.iconClass}`} aria-hidden="true" />
              </span>
            </div>
            <Link
            to={card.to}
            className={`mt-auto inline-flex w-fit rounded-md px-4 py-2 text-[12.5px] font-semibold text-white transition-colors duration-150 ${card.btnClass}`}>
            
              {card.cta}
            </Link>
          </article>
        )}
      </div>

      {/* Live tests + analysis */}
      <div className="mb-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {liveCards.map((card) =>
        <article
          key={card.title}
          className={`flex flex-col rounded-xl border border-slate-200 ${card.bg} p-5 shadow-card`}>
          
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className={`font-display text-[19px] font-bold ${card.titleClass}`}>
                    {card.title}
                  </h3>
                  <span className="rounded bg-danger px-1.5 py-[1px] text-[9px] font-bold text-white">
                    LIVE
                  </span>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{card.text}</p>
              </div>
              <span className="grid h-[74px] w-[74px] shrink-0 place-items-center rounded-lg bg-white">
                <card.icon className="h-8 w-8 text-slate-500" aria-hidden="true" />
              </span>
            </div>
            <Link
            to={card.to}
            className={`mt-auto inline-flex w-fit rounded-md px-4 py-2 text-[12.5px] font-semibold text-white transition-colors duration-150 ${card.btnClass}`}>
            
              {card.cta}
            </Link>
          </article>
        )}

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
          <h3 className="font-display text-[19px] font-bold text-primary">Test Analysis (Results)</h3>
          <div className="mt-3 flex items-start gap-4">
            <ul className="min-w-0 flex-1 space-y-2.5">
              {analysisRows.map((row) =>
              <li key={row.title} className="flex items-start gap-2">
                  <BarChart2Icon className={`mt-[2px] h-4 w-4 ${row.tone}`} aria-hidden="true" />
                  <span className="leading-tight">
                    <span className="block text-[13px] font-semibold text-navy-800">{row.title}</span>
                    <span className="block text-[11.5px] text-slate-500">{row.text}</span>
                  </span>
                </li>
              )}
            </ul>
            <div className="grid h-[86px] w-[110px] shrink-0 place-items-center rounded-lg bg-slate-50">
              <BarChart3Icon className="h-10 w-10 text-slate-400" aria-hidden="true" />
            </div>
          </div>
        </article>
      </div>

      {/* Why Choose Us */}
      <section className="mb-4 rounded-xl border border-primary-100 bg-gradient-to-b from-primary-50/70 to-white p-6 shadow-card">
        <h2 className="text-center font-display text-[20px] font-bold text-navy-800">
          Why Choose Balaji Typing &amp; Steno College
        </h2>
        <p className="mx-auto mt-1 max-w-2xl text-center text-[12.5px] text-slate-500">
          We provide the best and 100% Accurate software to help you improve your typing &amp;
          Stenography Skills for Competitive Exams.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
          {stats.map((s, i) => {
            const content = (
              <div
                className={`flex h-full flex-col items-center gap-2 rounded-xl bg-white p-4 text-center shadow-card transition-colors duration-150 xl:rounded-none xl:bg-transparent xl:p-0 xl:shadow-none ${
                i > 0 ? 'xl:border-l xl:border-slate-200 xl:pl-4' : ''}`
                }>

                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full"
                  style={{ backgroundColor: s.bg, color: s.color }}>

                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="font-display text-[13px] font-bold leading-snug text-navy-800">{s.title}</p>
                <p className="text-[11.5px] leading-snug text-primary-600">{s.sub}</p>
              </div>);

            return s.to ?
            <Link key={s.title} to={s.to} className="block hover:-translate-y-0.5 transition-transform duration-150">
                {content}
              </Link> :

            <div key={s.title}>{content}</div>;

          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative mb-4 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-b from-primary-50/50 to-white p-6 shadow-card">
        <h2 className="mb-5 text-center font-display text-[20px] font-bold text-navy-800">
          What Our Users Say
        </h2>

        <button
          type="button"
          onClick={() => scrollTestimonials('left')}
          aria-label="Previous testimonials"
          className="absolute left-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white shadow-card transition-all duration-150 hover:scale-110 hover:bg-primary hover:text-white">

          <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollTestimonials('right')}
          aria-label="Next testimonials"
          className="absolute right-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white shadow-card transition-all duration-150 hover:scale-110 hover:bg-primary hover:text-white">

          <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
        </button>

        <div
          ref={testimonialTrackRef}
          onScroll={handleTestimonialScroll}
          className="scroll-thin flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2">

          {testimonials.map((t) =>
          <article
            key={t.name}
            className="w-[340px] shrink-0 snap-start rounded-xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex items-center justify-between">
                <QuoteIcon className="h-6 w-6 text-rose-300" aria-hidden="true" />
                <div className="flex items-center gap-[2px]">
                  {Array.from({ length: 5 }, (_, i) =>
                  <StarIcon
                    key={i}
                    className={`h-3.5 w-3.5 ${
                    i < t.rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`
                    }
                    aria-hidden="true" />

                  )}
                </div>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">{t.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-[15px] font-bold text-navy-800"
                  style={{ backgroundColor: t.avatarBg }}>

                  {t.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[13.5px] font-bold text-navy-800">{t.name}</span>
                  <span className="block truncate text-[11.5px] text-slate-500">{t.role}</span>
                </span>
              </div>
            </article>
          )}
        </div>

        <div className="mt-3 flex justify-center gap-1.5">
          {testimonials.map((t, i) =>
          <button
            key={t.name}
            type="button"
            onClick={() => scrollTestimonialsTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
            i === testimonialIndex ? 'w-6 bg-primary' : 'w-1.5 bg-slate-200 hover:bg-slate-300'}`
            } />

          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="mb-4 rounded-xl border border-slate-200 bg-white p-5 shadow-card">
        <h2 className="mb-3.5 flex items-center gap-2 font-display text-[15px] font-bold text-navy-800">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" /> Quick Links
        </h2>
        <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
          {quickLinks.map((l) =>
          <a
            key={l.label}
            href={l.href}
            className="flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-3 text-[13px] font-medium text-navy-800 transition-colors duration-150 hover:bg-primary-50 hover:text-primary">

              <ChevronRightIcon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" /> {l.label}
            </a>
          )}
        </div>
      </section>

      {/* Channel banners */}
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="flex items-center gap-3 rounded-xl bg-[#229ED9] p-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/20">
            <SendIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-[14px] font-semibold text-white">Join Our Telegram Channel</p>
            <p className="text-[11.5px] text-white/85">
              Get instant updates, live test alerts, study material &amp; more.
            </p>
          </div>
          <a
            href="#telegram"
            className="ml-auto shrink-0 rounded-md bg-white px-4 py-2 text-[12.5px] font-semibold text-[#0b7cad] transition-colors duration-150 hover:bg-slate-100">

            Join Now
          </a>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-[#E62117] p-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/20">
            <YoutubeIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-[14px] font-semibold text-white">Subscribe Our YouTube Channel</p>
            <p className="text-[11.5px] text-white/85">
              Learn tips &amp; tricks, watch tutorials and improve your speed.
            </p>
          </div>
          <a
            href="#youtube"
            className="ml-auto shrink-0 rounded-md bg-white px-4 py-2 text-[12.5px] font-semibold text-[#c2160e] transition-colors duration-150 hover:bg-slate-100">

            Subscribe Now
          </a>
        </div>
      </div>
    </StudentLayout>);

}