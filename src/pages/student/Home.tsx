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
  ChevronRightIcon } from
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
    bgOverlay: "from-blue-900/95 via-blue-800/90 to-indigo-900/95"
  },
  {
    id: 2,
    title: "Live Tests & Rankings",
    subtitle: "Compete at All India Level",
    description: "Take live tests and see your real-time ranking among all participants",
    bgImage: "https://images.unsplash.com/photo-1560439514-e960a3ef5019?w=1920&q=80",
    bgOverlay: "from-purple-900/95 via-purple-800/90 to-pink-900/95"
  },
  {
    id: 3,
    title: "SSC, Court & Police Exams",
    subtitle: "Exam-Oriented Practice",
    description: "Prepare for SSC Steno, Court Steno, Delhi Police and State exams",
    bgImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80",
    bgOverlay: "from-green-900/95 via-teal-800/90 to-cyan-900/95"
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
{ icon: UsersRoundIcon, value: '1,50,000+', label: 'Registered Users', color: '#0D6EFD' },
{ icon: FileTextIcon, value: '5,00,000+', label: 'Tests Attempted', color: '#198754' },
{ icon: TrophyIcon, value: 'Top Ranks', label: 'All India Level', color: '#FFC107' },
{ icon: ShieldCheckIcon, value: '100% Secure', label: 'Safe & Reliable', color: '#6F42C1' }];


export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
              <div className="absolute inset-0">
                <img 
                  src={slide.bgImage} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
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

      {/* Stats strip */}
      <div className="mb-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) =>
        <div
          key={s.label}
          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card">
          
            <s.icon className="h-7 w-7 shrink-0" style={{ color: s.color }} aria-hidden="true" />
            <div>
              <p className="font-display text-[17px] font-bold text-navy-800">{s.value}</p>
              <p className="text-[12px] text-slate-500">{s.label}</p>
            </div>
          </div>
        )}
      </div>

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