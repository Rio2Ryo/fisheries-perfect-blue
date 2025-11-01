import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './components/LanguageToggle.jsx'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Building2, Waves, Ship, Truck, Leaf, MapPin, Phone, Mail, ArrowRight, ChevronRight, Factory, Users, Target, Menu, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import heroBg from './assets/hero-bg.jpg'
import sfcLogo from './assets/sfc-logo-test.png'
import './App.css'

// ページコンポーネント
const HomePage = () => {
  const { t } = useTranslation() // ★ これを忘れずに

  return (
  <div className="bg-black">
    {/* Hero Section */}
    <section 
      className="relative overflow-hidden min-h-[70vh] md:min-h-[80vh] mt-16 md:mt-20"
    >
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.55) contrast(1.1)'
        }}
      ></div>
      
      {/* ラジアルグラデーション - 中央から外側へ自然にフェード */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.9) 100%)'
        }}
      ></div>
      
      {/* 上下のグラデーション - より自然なフェード */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.45) 20%, transparent 50%, rgba(0,0,0,0.45) 80%, rgba(0,0,0,1) 100%)'
        }}
      ></div>
      
      {/* 左右のグラデーション */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.8) 100%)'
        }}
      ></div>
      
      {/* 全体のオーバーレイ - テキスト視認性を確保しつつ画像を暗く */}
      <div className="absolute inset-0 bg-black/35"></div>
      
      <div className="relative container-page flex items-center justify-center min-h-[70vh] md:min-h-[80vh] py-20 md:py-32 text-center">
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#4CAF50] mb-6 md:mb-8 tracking-tight">
            REBONE THE SEA
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 md:mb-8 font-light">
            {t('hero.subtitle')}
          </p>
          <p className="text-base sm:text-lg text-white max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
            {t('hero.description')}
          </p>
          <Link
            to="/contact"
            className="btn-primary"
          >
            <span>{t('hero.cta')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Business Overview */}
    <section className="section bg-black">
      <div className="text-center mb-10 md:mb-14">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-3 md:mb-4">{t('business.title')}</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
        {/* Marine Business */}
        <Card className="card-neutral !bg-black">
          <CardHeader className="p-6 md:p-8 pb-5 md:pb-6">
            <div className="w-10 h-10 bg-[#4CAF50] flex items-center justify-center mb-5 md:mb-6">
              <Waves className="w-5 h-5 text-black" />
            </div>
            <CardTitle className="text-xl md:text-2xl font-normal text-white mb-3 md:mb-4">{t('business.marine.title')}</CardTitle>
          </CardHeader>
          <CardContent className="px-6 md:px-8 pb-6 md:pb-8 space-y-5 md:space-y-6">
            <p className="text-white leading-relaxed text-sm md:text-base">
              {t('business.marine.description')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm md:text-base text-white">
                <div className="w-1.5 h-1.5 bg-[#4CAF50]"></div>
                <span>{t('business.marine.items.tourism')}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm md:text-base text-white">
                <div className="w-1.5 h-1.5 bg-[#4CAF50]"></div>
                <span>{t('business.marine.items.rv')}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm md:text-base text-white">
                <div className="w-1.5 h-1.5 bg-[#4CAF50]"></div>
                <span>{t('business.marine.items.jtb')}</span>
              </div>
            </div>
            <Link
              to="/marine"
              className="btn-primary mt-6 md:mt-8"
            >
              <span>{t('business.marine.cta')}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </CardContent>
        </Card>

        {/* Seaweed Cultivation */}
        <Card className="card-neutral !bg-black">
          <CardHeader className="p-8 pb-6">
            <div className="w-10 h-10 bg-[#4CAF50] flex items-center justify-center mb-6">
              <Leaf className="w-5 h-5 text-black" />
            </div>
            <CardTitle className="text-xl md:text-2xl font-normal text-white mb-4">{t('seaweed.title')}</CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8 space-y-6">
            <p className="text-white leading-relaxed text-sm md:text-base">
              {t('seaweed.description')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm md:text-base text-white">
                <div className="w-1.5 h-1.5 bg-[#4CAF50]"></div>
                <span>{t('seaweed.items.mother')}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm md:text-base text-white">
                <div className="w-1.5 h-1.5 bg-[#4CAF50]"></div>
                <span>{t('seaweed.items.factory')}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm md:text-base text-white">
                <div className="w-1.5 h-1.5 bg-[#4CAF50]"></div>
                <span>{t('seaweed.items.approval')}</span>
              </div>
            </div>
            <Link
              to="/mothervegetable"
              className="btn-primary mt-8"
            >
              <span>{t('seaweed.cta')}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section bg-black">
        <div className="text-center mb-10 md:mb-14">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-3 md:mb-4">
            {t('whyChooseUs.title')}
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
        {/* 全国ネットワーク */}
        <div className="text-center">
          <div className="w-14 h-14 bg-[#4CAF50] flex items-center justify-center mx-auto mb-4 md:mb-5">
            <Users className="w-7 h-7 text-black" />
          </div>
          <h4 className="text-lg md:text-xl font-normal text-white mb-3 md:mb-4">
            {t('whyChooseUs.network.title')}
          </h4>
          <p className="text-white leading-relaxed text-sm md:text-base">
            {t('whyChooseUs.network.description')}
          </p>
        </div>

        {/* 独自技術 */}
        <div className="text-center">
          <div className="w-14 h-14 bg-[#4CAF50] flex items-center justify-center mx-auto mb-6">
            <Factory className="w-7 h-7 text-black" />
          </div>
          <h4 className="text-lg md:text-xl font-normal text-white mb-4">
            {t('whyChooseUs.technology.title')}
          </h4>
          <p className="text-white leading-relaxed text-sm md:text-base">
            {t('whyChooseUs.technology.description')}
          </p>
        </div>

        {/* 多角的事業展開 */}
        <div className="text-center">
          <div className="w-14 h-14 bg-[#4CAF50] flex items-center justify-center mx-auto mb-6">
            <Target className="w-7 h-7 text-black" />
          </div>
          <h4 className="text-lg md:text-xl font-normal text-white mb-4">
            {t('whyChooseUs.diversity.title')}
          </h4>
          <p className="text-white leading-relaxed text-sm md:text-base">
            {t('whyChooseUs.diversity.description')}
          </p>
        </div>
      </div>
    </section>


    {/* Company Overview Card */}
    <section className="section bg-black">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-normal mb-8 md:mb-10 text-white">{t('company.title')}</h3>
            <div className="space-y-4 text-white text-sm md:text-base">
              <div className="flex items-start space-x-3">
                <Building2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#4CAF50]" />
                <div>
                  <span className="mr-3">{t('company.labels.name')}</span>
                  <span className="text-white">{t('company.name')}</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Building2 className="w-5 h-5 invisible flex-shrink-0" />
                <div>
                  <span className="mr-3">{t('company.labels.ename')}</span>
                  <span className="text-white">{t('company.ename')}</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#4CAF50]" />
                <div>
                  <span className="mr-3">{t('company.labels.address')}</span>
                  <span className="text-white">{t('company.address')}</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 invisible flex-shrink-0" />
                <div>
                  <span className="mr-3">{t('company.labels.eaddress')}</span>
                  <span className="text-white">{t('company.eaddress')}</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Waves className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#4CAF50]" />
                <div>
                  <span className="mr-3">{t('company.labels.business')}</span>
                  <span className="text-white">{t('company.business')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Link
              to="/company"
              className="btn-primary"
            >
              <span>{t('company.cta')}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>

  </div>
  )
}

// 他のページコンポーネントは簡易版として作成
// ここから置換
const MarinePage = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-12 md:space-y-16 bg-black pt-12 md:pt-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4CAF50] mb-6 md:mb-8 title-with-underline">{t('marinePage.title')}</h2>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
          {t('marinePage.lead')}
        </p>
      </div>

      {/* 海業事業 */}
      <div className="bg-black border border-[#2E7D32] rounded-2xl p-6 md:p-8">
          <div className="flex items-center space-x-4 mb-5 md:mb-6">
            <Waves className="w-7 h-7 md:w-8 md:h-8 text-[#4CAF50]" />
            <h3 className="text-xl md:text-2xl font-bold text-[#4CAF50]">{t('marinePage.biz.title')}</h3>
          </div>
        
        <p className="text-white text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
          {t('marinePage.biz.paragraph')}
        </p>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          <Card className="border border-[#2E7D32] bg-black shadow-md">
            <CardContent className="p-5 md:p-6 text-center">
              <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Ship className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-base md:text-lg font-semibold text-[#4CAF50] mb-2 md:mb-3">
                {t('marinePage.biz.cards.tourism.title')}
              </h4>
              <p className="text-white text-sm leading-relaxed">
                {t('marinePage.biz.cards.tourism.desc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[#2E7D32] bg-black shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-lg font-semibold text-[#4CAF50] mb-3">
                {t('marinePage.biz.cards.exchange.title')}
              </h4>
              <p className="text-white text-sm leading-relaxed">
                {t('marinePage.biz.cards.exchange.desc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[#2E7D32] bg-black shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-lg font-semibold text-[#4CAF50] mb-3">
                {t('marinePage.biz.cards.edu.title')}
              </h4>
              <p className="text-white text-sm leading-relaxed">
                {t('marinePage.biz.cards.edu.desc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* RV事業 */}
      <div className="bg-black border border-[#2E7D32] rounded-2xl p-6 md:p-8">
        <div className="flex items-center space-x-4 mb-6">
          <Truck className="w-8 h-8 text-[#2E7D32]" />
          <h3 className="text-2xl font-bold text-[#4CAF50]">{t('marinePage.rv.title')}</h3>
        </div>
        
        <p className="text-white text-lg mb-8 leading-relaxed">
          {t('marinePage.rv.paragraph')}
        </p>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          <Card className="border border-[#2E7D32] bg-black shadow-md">
            <CardContent className="p-5 md:p-6">
              <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <Building2 className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-base md:text-lg font-semibold text-[#4CAF50] mb-2 md:mb-3">
                {t('marinePage.rv.cards.hotel.title')}
              </h4>
              <p className="text-white text-sm leading-relaxed mb-3 md:mb-4">
                {t('marinePage.rv.cards.hotel.desc')}
              </p>
              <div className="inline-block bg-[#2E7D32] text-black px-3 py-1 rounded-full text-xs font-medium">
                {t('marinePage.rv.cards.hotel.badge')}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-[#2E7D32] bg-black shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-lg font-semibold text-[#4CAF50] mb-3">
                {t('marinePage.rv.cards.park.title')}
              </h4>
              <p className="text-white text-sm leading-relaxed mb-4">
                {t('marinePage.rv.cards.park.desc')}
              </p>
              <div className="inline-block bg-[#2E7D32] text-black px-3 py-1 rounded-full text-xs font-medium">
                {t('marinePage.rv.cards.park.badge')}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-[#2E7D32] bg-black shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-lg font-semibold text-[#4CAF50] mb-3">
                {t('marinePage.rv.cards.disaster.title')}
              </h4>
              <p className="text-white text-sm leading-relaxed mb-4">
                {t('marinePage.rv.cards.disaster.desc')}
              </p>
              <div className="inline-block bg-[#2E7D32] text-black px-3 py-1 rounded-full text-xs font-medium">
                {t('marinePage.rv.cards.disaster.badge')}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* JTB総研との連携 */}
      <div className="bg-black border border-[#2E7D32] rounded-2xl p-6 md:p-8">
        <div className="flex items-center space-x-4 mb-6">
          <Target className="w-8 h-8 text-[#4CAF50]" />
          <h3 className="text-2xl font-bold text-[#4CAF50]">{t('marinePage.partnership.title')}</h3>
        </div>
        
        <div className="bg-black border border-[#2E7D32] rounded-xl p-5 md:p-6">
          <h4 className="text-lg md:text-xl font-bold text-[#4CAF50] mb-3 md:mb-4">
            {t('marinePage.partnership.jtb.title')}
          </h4>
          <p className="text-white mb-4">
            {t('marinePage.partnership.jtb.p1')}
          </p>
          <p className="text-white">
            {t('marinePage.partnership.jtb.p2')}
          </p>
        </div>
      </div>
    </div>
  );
};
// ここまで置換


// ここから置換
const SeaweedPage = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-12 md:space-y-16 bg-black pt-12 md:pt-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#4CAF50] mb-8 title-with-underline">{t('seaweedPage.title')}</h2>
        <p className="text-xl text-white max-w-3xl mx-auto">
          {t('seaweedPage.lead')}
        </p>
      </div>

      {/* Mother Vegetables Section */}
      <div className="bg-black border border-[#2E7D32] rounded-2xl p-6 md:p-8">
        <div className="flex items-center space-x-4 mb-6">
          <Leaf className="w-8 h-8 text-[#4CAF50]" />
          <h3 className="text-2xl font-bold text-[#4CAF50]">
            {t('seaweedPage.mother.title')}
          </h3>
        </div>

        <p className="text-white text-lg mb-8 leading-relaxed">
          {t('seaweedPage.mother.p1')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border border-[#2E7D32] bg-black shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-lg font-semibold text-[#4CAF50] mb-3">
                {t('seaweedPage.mother.cards.food.title')}
              </h4>
              <p className="text-white text-sm leading-relaxed">
                {t('seaweedPage.mother.cards.food.desc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[#2E7D32] bg-black shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-lg font-semibold text-[#4CAF50] mb-3">
                {t('seaweedPage.mother.cards.cosmetics.title')}
              </h4>
              <p className="text-white text-sm leading-relaxed">
                {t('seaweedPage.mother.cards.cosmetics.desc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[#2E7D32] bg-black shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Waves className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-lg font-semibold text-[#4CAF50] mb-3">
                {t('seaweedPage.mother.cards.ecosystem.title')}
              </h4>
              <p className="text-white text-sm leading-relaxed">
                {t('seaweedPage.mother.cards.ecosystem.desc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[#2E7D32] bg-black shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Factory className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-lg font-semibold text-[#4CAF50] mb-3">
                {t('seaweedPage.mother.cards.industry.title')}
              </h4>
              <p className="text-white text-sm leading-relaxed">
                {t('seaweedPage.mother.cards.industry.desc')}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-black border border-[#2E7D32] rounded-xl p-5 md:p-6">
          <h4 className="text-lg md:text-xl font-bold text-[#4CAF50] mb-3 md:mb-4">
            {t('seaweedPage.mother.features.title')}
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-[#4CAF50] mb-2">
                {t('seaweedPage.mother.features.items.env.title')}
              </h5>
              <p className="text-white text-sm">
                {t('seaweedPage.mother.features.items.env.desc')}
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-[#4CAF50] mb-2">
                {t('seaweedPage.mother.features.items.forms.title')}
              </h5>
              <p className="text-white text-sm">
                {t('seaweedPage.mother.features.items.forms.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MV Factory Section */}
      <div className="bg-black border border-[#2E7D32] rounded-2xl p-6 md:p-8">
        <div className="flex items-center space-x-4 mb-6">
          <Factory className="w-8 h-8 text-[#4CAF50]" />
          <h3 className="text-2xl font-bold text-[#4CAF50]">
            {t('seaweedPage.factory.title')}
          </h3>
        </div>

        <p className="text-white text-lg mb-8 leading-relaxed">
          {t('seaweedPage.factory.p')}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-black border border-[#2E7D32] rounded-xl p-6">
            <h4 className="text-xl font-bold text-[#4CAF50] mb-4">
              {t('seaweedPage.factory.tech.title')}
            </h4>
            <ul className="space-y-3 text-white">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2"></div>
                <span>{t('seaweedPage.factory.tech.list1')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2"></div>
                <span>{t('seaweedPage.factory.tech.list2')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2"></div>
                <span>{t('seaweedPage.factory.tech.list3')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2"></div>
                <span>{t('seaweedPage.factory.tech.list4')}</span>
              </li>
            </ul>
          </div>

          <div className="bg-black border border-[#2E7D32] rounded-xl p-6">
            <h4 className="text-xl font-bold text-[#4CAF50] mb-4">
              {t('seaweedPage.factory.locations.title')}
            </h4>
            <ul className="space-y-3 text-white">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2"></div>
                <span>{t('seaweedPage.factory.locations.list1')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2"></div>
                <span>{t('seaweedPage.factory.locations.list2')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2"></div>
                <span>{t('seaweedPage.factory.locations.list3')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2"></div>
                <span>{t('seaweedPage.factory.locations.list4')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-black border border-[#2E7D32] rounded-xl p-5 md:p-6">
          <h4 className="text-lg md:text-xl font-bold text-[#4CAF50] mb-3 md:mb-4">
            {t('seaweedPage.factory.achievements.title')}
          </h4>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            <div>
              <h5 className="font-semibold text-[#4CAF50] mb-2">
                {t('seaweedPage.factory.achievements.items.fisheries.title')}
              </h5>
              <p className="text-white text-sm">
                {t('seaweedPage.factory.achievements.items.fisheries.desc')}
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-[#4CAF50] mb-2">
                {t('seaweedPage.factory.achievements.items.malaysia.title')}
              </h5>
              <p className="text-white text-sm">
                {t('seaweedPage.factory.achievements.items.malaysia.desc')}
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-[#4CAF50] mb-2">
                {t('seaweedPage.factory.achievements.items.international.title')}
              </h5>
              <p className="text-white text-sm">
                {t('seaweedPage.factory.achievements.items.international.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className="bg-black border border-[#2E7D32] rounded-2xl p-4 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-[#4CAF50] mb-6 text-center">
          {t('seaweedPage.compare.title')}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full bg-black border border-[#2E7D32] rounded-lg shadow-md">
            <thead className="bg-black border-b border-[#2E7D32]">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">
                  {t('seaweedPage.compare.table.headers.item')}
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">
                  {t('seaweedPage.compare.table.headers.mv')}
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-white">
                  {t('seaweedPage.compare.table.headers.conv')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2E7D32]">
              <tr>
                <td className="px-4 py-3 font-medium text-sm text-white">
                  {t('seaweedPage.compare.rows.speed.label')}
                </td>
                <td className="px-4 py-3 text-[#4CAF50] text-sm">
                  {t('seaweedPage.compare.rows.speed.mv')}
                </td>
                <td className="px-4 py-3 text-red-400 text-sm">
                  {t('seaweedPage.compare.rows.speed.conv')}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-sm text-white">
                  {t('seaweedPage.compare.rows.environment.label')}
                </td>
                <td className="px-4 py-3 text-[#4CAF50] text-sm">
                  {t('seaweedPage.compare.rows.environment.mv')}
                </td>
                <td className="px-4 py-3 text-red-400 text-sm">
                  {t('seaweedPage.compare.rows.environment.conv')}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-sm text-white">
                  {t('seaweedPage.compare.rows.variety.label')}
                </td>
                <td className="px-4 py-3 text-[#4CAF50] text-sm">
                  {t('seaweedPage.compare.rows.variety.mv')}
                </td>
                <td className="px-4 py-3 text-red-400 text-sm">
                  {t('seaweedPage.compare.rows.variety.conv')}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-sm text-white">
                  {t('seaweedPage.compare.rows.area.label')}
                </td>
                <td className="px-4 py-3 text-[#4CAF50] text-sm">
                  {t('seaweedPage.compare.rows.area.mv')}
                </td>
                <td className="px-4 py-3 text-red-400 text-sm">
                  {t('seaweedPage.compare.rows.area.conv')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
// ここまで置換


// ここから置換
const CompanyPage = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-12 md:space-y-16 bg-black pt-12 md:pt-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#4CAF50] mb-8 title-with-underline">{t('companyPage.title')}</h2>
      </div>

      <div className="bg-black border border-[#2E7D32] rounded-2xl p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* 左カラム：企業情報 */}
          <div>
            <h3 className="text-2xl font-bold text-[#4CAF50] mb-6">{t('companyPage.info.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Building2 className="w-5 h-5 text-[#4CAF50] mt-1" />
                <div>
                  <dt className="font-semibold text-[#4CAF50]">{t('companyPage.info.labels.name')}</dt>
                  <dd className="text-white">{t('company.name')}</dd>
                  <dt className="font-semibold text-[#4CAF50]">{t('companyPage.info.labels.ename')}</dt>
                  <dd className="text-white">{t('company.ename')}</dd>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-[#4CAF50] mt-1" />
                <div>
                <dt className="font-semibold text-[#4CAF50]">{t('companyPage.info.labels.rep')}</dt>
                <dd className="text-white">{t('companyPage.info.values.rep')}</dd>
                  <dt className="font-semibold text-[#4CAF50]">{t('companyPage.info.labels.intlDir')}</dt>
                  <dd className="text-white">Michael Choong Liat Lee</dd>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#4CAF50] mt-1" />
                <div>
                  <dt className="font-semibold text-[#4CAF50]">{t('companyPage.info.labels.address')}</dt>
                  <dd className="text-white">{t('company.address')}</dd>
                  <dt className="font-semibold text-[#4CAF50]">{t('companyPage.info.labels.eaddress')}</dt>
                  <dd className="text-white">{t('company.eaddress')}</dd>
                </div>
              </div>


              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#4CAF50] mt-1" />
                <div>
                  <dt className="font-semibold text-[#4CAF50]">{t('companyPage.info.labels.email')}</dt>
                  <dd className="text-white">contact@sfcpc.co.jp</dd>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Waves className="w-5 h-5 text-[#4CAF50] mt-1" />
                <div>
                  <dt className="font-semibold text-[#4CAF50]">{t('companyPage.info.labels.business')}</dt>
                  <dd className="text-white">{t('company.business')}</dd>
                </div>
              </div>
            </div>
          </div>

          {/* 右カラム：企業理念 */}
          <div>
            <h3 className="text-2xl font-bold text-[#4CAF50] mb-6">{t('companyPage.philosophy.title')}</h3>
            <p className="text-white leading-relaxed mb-4">
              {t('companyPage.philosophy.p1')}
            </p>
            <p className="text-white leading-relaxed">
              {t('companyPage.philosophy.p2')}
            </p>
          </div>
        </div>
      </div>

      {/* About us */}
      <div className="bg-black border border-[#2E7D32] rounded-2xl p-6 md:p-8">
        <div className="flex items-center space-x-4 mb-6">
          <Waves className="w-8 h-8 text-[#4CAF50]" />
          <h3 className="text-2xl font-bold text-[#4CAF50]">{t('companyPage.about.title')}</h3>
        </div>

        <div className="prose prose-lg max-w-none text-white">
          <p className="mb-6">{t('companyPage.about.p1')}</p>
          <p className="mb-6">{t('companyPage.about.p2')}</p>
          <p className="mb-6">{t('companyPage.about.p3')}</p>
          <p className="mb-6">{t('companyPage.about.p4')}</p>
        </div>
      </div>
    </div>
  )
}
// ここまで置換


// ===== ここから ContactPage 丸ごと差し替え =====
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // ★ 追加：この行を必ず入れる（ContactPage でも t() を使うため）
  const { t } = useTranslation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('送信エラー:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12 md:space-y-16 bg-black pt-12 md:pt-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#4CAF50] mb-8 title-with-underline">{t('contact.title')}</h2>
      </div>

      <div className="bg-black border border-[#2E7D32] rounded-2xl p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#4CAF50] mb-6">{t('contact.subtitle')}</h3>
            <p className="text-white leading-relaxed">
              {t('contact.description')}
            </p>
          </div>

          <div className="bg-black border border-[#2E7D32] rounded-xl p-6 shadow-md">
            <h4 className="text-lg font-semibold text-[#4CAF50] mb-4">{t('contact.form.title')}</h4>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {submitStatus === 'success' && (
                <div className="p-4 bg-[#2E7D32] text-black rounded-md mb-4">
                  {t('contact.form.success')}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-600 text-white rounded-md mb-4">
                  {t('contact.form.error')}
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                  {t('contact.form.name')} <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-black border border-[#2E7D32] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent placeholder:text-gray-600"
                  placeholder={t('contact.form.placeholders.name')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                  {t('contact.form.email')} <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-black border border-[#2E7D32] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent placeholder:text-gray-600"
                  placeholder={t('contact.form.placeholders.email')}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-black border border-[#2E7D32] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent placeholder:text-gray-600"
                  placeholder={t('contact.form.placeholders.phone')}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">
                  {t('contact.form.subject')} <span className="text-red-400">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-black border border-[#2E7D32] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                >
                  <option value="" className="bg-black text-white">{t('contact.form.placeholders.select')}</option>
                  <option value="marine" className="bg-black text-white">{t('contact.form.options.marine')}</option>
                  <option value="seaweed" className="bg-black text-white">{t('contact.form.options.seaweed')}</option>
                  <option value="partnership" className="bg-black text-white">{t('contact.form.options.partnership')}</option>
                  <option value="other" className="bg-black text-white">{t('contact.form.options.other')}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                  {t('contact.form.message')} <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-black border border-[#2E7D32] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent placeholder:text-gray-600"
                  placeholder={t('contact.form.placeholders.message')}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 rounded-md transition-colors duration-200 font-medium ${
                  isSubmitting 
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                    : 'btn-primary'
                }`}
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
// ===== ここまで差し替え =====


function App() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useTranslation()

  const navigationItems = [
    { id: 'home', label: 'ホーム', path: '/' },
    { id: 'marine', label: '海業', path: '/marine' },
    { id: 'seaweed', label: '藻の養殖', path: '/mothervegetable' },
    { id: 'company', label: '会社概要', path: '/company' },
    { id: 'contact', label: 'お問い合わせ', path: '/contact' }
  ]

  // ページ遷移時に自動的にトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black border-b border-[#2E7D32] sticky top-0 z-50">
        <div className="container-page">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="block">
                <img 
                  src={sfcLogo} 
                  alt="SFC - Sisters Fisheries Cooperative Promotion Council" 
                  className="h-8 md:h-10 w-auto brightness-0 invert"
                  style={{ filter: 'brightness(0) invert(1) sepia(100%) saturate(10000%) hue-rotate(80deg)' }}
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:!flex flex-1 justify-end items-center">
              <nav role="navigation" aria-label="メインナビゲーション">
                <ul className="flex items-center space-x-10">
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.path}
                        className={`text-sm font-normal tracking-wide ${
                          location.pathname === item.path
                            ? 'text-[#4CAF50]'
                            : 'text-white hover:text-[#4CAF50]'
                        }`}
                        aria-current={location.pathname === item.path ? 'page' : undefined}
                      >
                        {t(`nav.${item.id}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <LanguageToggle className="ml-8" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex-shrink-0">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-[#4CAF50] transition-colors rounded-md"
                aria-label="メニューを開く"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden bg-black border-t border-[#2E7D32] transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav role="navigation" aria-label="モバイルナビゲーション">
            <ul className="px-4 pt-4 pb-6 space-y-1">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full text-left px-3 py-2.5 text-base font-normal ${
                      location.pathname === item.path
                        ? 'text-[#4CAF50]'
                        : 'text-white hover:text-[#4CAF50]'
                    }`}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                  >
                    {t(`nav.${item.id}`)}
                  </Link>
                </li>
              ))}
              <li>
                <LanguageToggle className="block w-full text-left px-3 py-2.5 text-base font-normal text-white hover:text-[#4CAF50]" />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-page bg-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marine" element={<MarinePage />} />
          <Route path="/mothervegetable" element={<SeaweedPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-[#2E7D32]">
        <div className="container-page py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* 左側 */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <img 
                  src={sfcLogo} 
                  alt="SFC - Sisters Fisheries Cooperative Promotion Council" 
                  className="h-10 md:h-12 w-auto brightness-0 invert"
                  style={{ filter: 'brightness(0) invert(1) sepia(100%) saturate(10000%) hue-rotate(80deg)' }}
                />
              </div>
              <p className="text-white leading-relaxed text-sm md:text-base">
                {t('footer.description')}
              </p>
            </div>

            {/* 右側 */}
            <div>
              <h4 className="text-sm font-medium mb-6 tracking-wide uppercase text-white">
                {t('footer.businessTitle')}
              </h4>
              <div className="space-y-3">
                <Link 
                  to="/marine"
                  className="block text-white hover:text-[#4CAF50] text-sm md:text-base transition-colors"
                >
                  {t('nav.marine')}
                </Link>
                <Link 
                  to="/mothervegetable"
                  className="block text-white hover:text-[#4CAF50] text-sm md:text-base transition-colors"
                >
                  {t('nav.seaweed')}
                </Link>
                <Link 
                  to="/company"
                  className="block text-white hover:text-[#4CAF50] text-sm md:text-base transition-colors"
                >
                  {t('nav.company')}
                </Link>
                <Link 
                  to="/contact"
                  className="block text-white hover:text-[#4CAF50] text-sm md:text-base transition-colors"
                >
                  {t('nav.contact')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
