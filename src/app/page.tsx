'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Film, Video, Tv, Check, Phone, Mail, Menu, X } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState<{ id: number; title: string; content: string; author: string; created_at: string; tags: string[] }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de posts do blog
    setTimeout(() => {
      setBlogPosts([
        {
          id: 1,
          title: "Novidades Netflix Janeiro 2025",
          content: "Confira os lançamentos mais esperados da Netflix para este mês. Séries exclusivas, filmes blockbuster e documentários imperdíveis chegam à plataforma.",
          author: "Admin",
          created_at: "2025-01-15",
          tags: ["Netflix", "Lançamentos", "Séries", "Filmes"]
        },
        {
          id: 2,
          title: "Melhores Séries de 2024",
          content: "Uma retrospectiva das séries que marcaram 2024. De dramas intensos a comédias hilariantes, relembre os melhores momentos do ano.",
          author: "Admin",
          created_at: "2024-12-30",
          tags: ["Séries", "2024", "Retrospectiva"]
        },
        {
          id: 3,
          title: "Como Configurar seu IPTV",
          content: "Guia completo para configurar seu serviço de IPTV em diferentes dispositivos. Passo a passo simples para você aproveitar ao máximo.",
          author: "Admin",
          created_at: "2024-12-20",
          tags: ["IPTV", "Tutorial", "Configuração"]
        }
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handlePlanClick = (planName: string, planPrice: string) => {
    const message = `Olá! Tenho interesse no plano ${planName} por R$ ${planPrice}. Gostaria de mais informações.`;
    const whatsappUrl = `https://wa.me/55?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-pink-500 to-purple-700 shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-white text-2xl font-bold">
              <Image src="/logo.png" alt="Logo" width={100} height={50} />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-yellow-300 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('planos')} className="text-white hover:text-yellow-300 transition-colors">
                Planos
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-yellow-300 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-white hover:text-yellow-300 transition-colors">
                Blog
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-white hover:text-yellow-300 transition-colors">
                Contato
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-white hover:text-yellow-300 transition-colors text-left">
                  Início
                </button>
                <button onClick={() => scrollToSection('planos')} className="text-white hover:text-yellow-300 transition-colors text-left">
                  Planos
                </button>
                <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-yellow-300 transition-colors text-left">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('blog')} className="text-white hover:text-yellow-300 transition-colors text-left">
                  Blog
                </button>
                <button onClick={() => scrollToSection('contato')} className="text-white hover:text-yellow-300 transition-colors text-left">
                  Contato
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-700 flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                Mundo IPTV
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-yellow-300">
                Acesso completo ao melhor do streaming
              </p>
              <p className="text-lg mb-8 leading-relaxed">
             Desfrute de milhares dos canais de notícias e esportes além de  filmes e séries com a melhor qualidade de imagem.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('planos')}
                  className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
                >
                  Ver Planos
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition-all"
                >
                  Fale Conosco
                </button>
              </div>
            </div>
            
            <div className="flex justify-center items-center">
              <div className="relative">
                <Tv size={200} className="text-white opacity-20 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Play size={40} className="text-yellow-300 animate-bounce" style={{ animationDelay: '0s' }} />
                    <Film size={40} className="text-yellow-300 animate-bounce" style={{ animationDelay: '0.5s' }} />
                    <Video size={40} className="text-yellow-300 animate-bounce" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section id="planos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent">
              Escolha o Seu Plano
            </h2>
            <p className="text-xl text-gray-600">
              Planos flexíveis para atender suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Plano Mensal */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-orange-500">
              <h3 className="text-2xl font-bold mb-4 text-center">Mensal</h3>
              <div className="text-center mb-6">
                <span className="text-lg">R$</span>
                <span className="text-4xl font-bold">24,90</span>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span className="font-semibold">CANAIS</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span className="font-semibold">FILMES</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span className="font-semibold">SÉRIES</span>
                </div>
              </div>
              <button 
                onClick={() => handlePlanClick('Mensal', '24,90')}
                className="w-full bg-gradient-to-r from-blue-500 to-orange-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Escolher Plano
              </button>
            </div>

            {/* Plano Trimestral */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-orange-500">
              <h3 className="text-2xl font-bold mb-4 text-center">Trimestral</h3>
              <div className="text-center mb-6">
                <span className="text-lg">R$</span>
                <span className="text-4xl font-bold">59,90</span>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span className="font-semibold">CANAIS</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span className="font-semibold">FILMES</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span className="font-semibold">SÉRIES</span>
                </div>
              </div>
              <button 
                onClick={() => handlePlanClick('Trimestral', '59,90')}
                className="w-full bg-gradient-to-r from-blue-500 to-orange-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Escolher Plano
              </button>
            </div>

            {/* Plano Semestral */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-orange-500">
              <h3 className="text-2xl font-bold mb-4 text-center">Semestral</h3>
              <div className="text-center mb-6">
                <span className="text-lg">R$</span>
                <span className="text-4xl font-bold">99,90</span>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span className="font-semibold">CANAIS</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span className="font-semibold">FILMES</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2" size={20} />
                  <span className="font-semibold">SÉRIES</span>
                </div>
              </div>
              <button 
                onClick={() => handlePlanClick('Semestral', '99,90')}
                className="w-full bg-gradient-to-r from-blue-500 to-orange-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Escolher Plano
              </button>
            </div>

            {/* Plano Anual - Destaque */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-700 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                Mais Popular
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Anual</h3>
              <div className="text-center mb-6">
                <span className="text-lg">R$</span>
                <span className="text-4xl font-bold">169,90</span>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="text-green-400 mr-2" size={20} />
                  <span className="font-semibold">CANAIS</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-400 mr-2" size={20} />
                  <span className="font-semibold">FILMES</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-400 mr-2" size={20} />
                  <span className="font-semibold">SÉRIES</span>
                </div>
              </div>
              <button 
                onClick={() => handlePlanClick('Anual', '169,90')}
                className="w-full bg-gradient-to-r from-blue-500 to-orange-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Escolher Plano
              </button>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg">
              Agora com 2 telas para todos os planos
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent">
              Sobre o Mundo IPTV
            </h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              O Mundo IPTV oferece a melhor experiência em streaming com acesso a milhares de canais, 
              filmes e séries em alta definição. Nossa plataforma garante estabilidade, qualidade e 
              variedade de conteúdo para toda a família.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-4xl mb-4 bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent">
                  📺
                </div>
                <h3 className="font-bold text-lg mb-2">Qualidade HD/4K</h3>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-4xl mb-4 bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent">
                  🌍
                </div>
                <h3 className="font-bold text-lg mb-2">Canais Internacionais</h3>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-4xl mb-4 bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent">
                  📱
                </div>
                <h3 className="font-bold text-lg mb-2">Multiplataforma</h3>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-4xl mb-4 bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent">
                  🎧
                </div>
                <h3 className="font-bold text-lg mb-2">Suporte 24/7</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent">
              Blog - Novidades
            </h2>
            <p className="text-xl text-gray-600">
              Fique por dentro das últimas novidades em filmes e séries
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Carregando posts...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post: any) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-700 text-white p-6">
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <div className="text-sm opacity-80">
                      Por {post.author} • {formatDate(post.created_at)}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {truncateText(post.content, 150)}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag: string, index: number) => (
                          <span key={index} className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-gradient-to-r from-pink-500 to-purple-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-xl mb-8">Estamos aqui para ajudar você</p>
          
          <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Phone className="text-yellow-300" size={24} />
              <span className="text-lg">71 98190-2254</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-yellow-300" size={24} />
              <span className="text-lg">contato@mundoiptv.com</span>
            </div>
          </div>

          <a 
            href="https://wa.me/5571981902254" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all hover:shadow-lg"
          >
            <Phone size={20} />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">Mundo IPTV</h3>
              <p className="text-gray-300">Streaming de qualidade para toda a família</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-300">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-yellow-300 transition-colors">Início</button></li>
                <li><button onClick={() => scrollToSection('planos')} className="text-gray-300 hover:text-yellow-300 transition-colors">Planos</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="text-gray-300 hover:text-yellow-300 transition-colors">Sobre</button></li>
                <li><button onClick={() => scrollToSection('blog')} className="text-gray-300 hover:text-yellow-300 transition-colors">Blog</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-300">Contato</h4>
              <p className="text-gray-300">WhatsApp: 71 7198190-2254</p>
              <p className="text-gray-300">Email: contato@mundoiptv.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Mundo IPTV. Todos os direitos reservados.</p>
            <a 
              href="https://www.vanderleidev.live/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-yellow-300 transition-colors"
            >
              Vanderlei Neto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// This code is a Next.js component for the home page of a streaming service called "Mundo IPTV".