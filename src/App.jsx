import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './components/LanguageToggle.jsx'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Building2, Waves, Ship, Truck, Leaf, MapPin, Phone, Mail, ArrowRight, ChevronRight, Factory, Users, Target, Menu, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import heroBg from './assets/hero-bg.jpg'
import sfcLogo from './assets/sfc-logo-new.svg'
import './App.css'

// ページコンポーネント
const HomePage = () => {
  const { t } = useTranslation() // ★ これを忘れずに

  return (
  <div className="space-y-16">
    {/* Hero Section */}
    <section 
      className="relative rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-blue-900/60"></div>
      <div className="relative px-8 py-16 sm:px-16 sm:py-24 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          REBONE THE SEA
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          {t('hero.subtitle')}
        </p>
        <p className="text-lg text-blue-50 max-w-4xl mx-auto mb-12 leading-relaxed">
        {t('hero.description')}
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg"
        >
          <span>{t('hero.cta')}</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>

    {/* Business Overview */}
    <section>
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('business.title')}</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Marine Business */}
        <Card className="group hover:shadow-xl transition-all duration-300 border border-blue-200 bg-white">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-xl text-gray-900">{t('business.marine.title')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
            {t('business.marine.description')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>{t('business.marine.items.tourism')}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>{t('business.marine.items.rv')}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>{t('business.marine.items.jtb')}</span>
              </div>
            </div>
            <Link
              to="/marine"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 mt-8 font-medium"
            >
              <span>{t('business.marine.cta')}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </CardContent>
        </Card>

        {/* Seaweed Cultivation */}
        <Card className="group hover:shadow-xl transition-all duration-300 border border-green-200 bg-white">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-xl text-gray-900">{t('seaweed.title')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
            {t('seaweed.description')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>{t('seaweed.items.mother')}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>{t('seaweed.items.factory')}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>{t('seaweed.items.approval')}</span>
              </div>
            </div>
            <Link
              to="/seaweed"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2 mt-8 font-medium"
            >
              <span>{t('seaweed.cta')}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Why Choose Us */}
<section className="bg-white rounded-2xl p-8 sm:p-12">
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-gray-900 mb-4">
      {t('whyChooseUs.title')}
    </h3>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {/* 全国ネットワーク */}
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
        <Users className="w-8 h-8 text-white" />
      </div>
      <h4 className="text-xl font-semibold text-gray-900 mb-4">
        {t('whyChooseUs.network.title')}
      </h4>
      <p className="text-gray-600 leading-relaxed">
        {t('whyChooseUs.network.description')}
      </p>
    </div>

    {/* 独自技術 */}
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
        <Factory className="w-8 h-8 text-white" />
      </div>
      <h4 className="text-xl font-semibold text-gray-900 mb-4">
        {t('whyChooseUs.technology.title')}
      </h4>
      <p className="text-gray-600 leading-relaxed">
        {t('whyChooseUs.technology.description')}
      </p>
    </div>

    {/* 多角的事業展開 */}
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
        <Target className="w-8 h-8 text-white" />
      </div>
      <h4 className="text-xl font-semibold text-gray-900 mb-4">
        {t('whyChooseUs.diversity.title')}
      </h4>
      <p className="text-gray-600 leading-relaxed">
        {t('whyChooseUs.diversity.description')}
      </p>
    </div>
  </div>
</section>


    {/* Company Overview Card */}
<section>
  <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
    <CardContent className="p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-12 md:mb-0 flex-1">
          <h3 className="text-2xl font-bold mb-6">{t('company.title')}</h3>
          <div className="space-y-4 text-blue-100">
            <div className="flex items-center space-x-3">
              <Building2 className="w-5 h-5" />
              <span>{t('company.labels.name')}</span>
              <span className="text-white">{t('company.name')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Building2 className="w-5 h-5 invisible" />
              <span>{t('company.labels.ename')}</span>
              <span className="text-white">{t('company.ename')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5" />
              <span>{t('company.labels.address')}</span>
              <span className="text-white">{t('company.address')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 invisible" />
              <span>{t('company.labels.eaddress')}</span>
              <span className="text-white">{t('company.eaddress')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Waves className="w-5 h-5" />
              <span>{t('company.labels.business')}</span>
              <span className="text-white">{t('company.business')}</span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 md:ml-12 md:mt-8">
          <Link
            to="/company"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2 shadow-md"
          >
            <span>{t('company.cta')}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </CardContent>
  </Card>
</section>

  </div>
  )
}

// 他のページコンポーネントは簡易版として作成
// ここから置換
const MarinePage = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('marinePage.title')}</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('marinePage.lead')}
        </p>
      </div>

      {/* 海業事業 */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
        <div className="flex items-center space-x-4 mb-6">
          <Waves className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-bold text-blue-900">{t('marinePage.biz.title')}</h3>
        </div>
        
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          {t('marinePage.biz.paragraph')}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-0 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Ship className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-3">
                {t('marinePage.biz.cards.tourism.title')}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('marinePage.biz.cards.tourism.desc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-3">
                {t('marinePage.biz.cards.exchange.title')}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('marinePage.biz.cards.exchange.desc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-3">
                {t('marinePage.biz.cards.edu.title')}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('marinePage.biz.cards.edu.desc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* RV事業 */}
      <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8">
        <div className="flex items-center space-x-4 mb-6">
          <Truck className="w-8 h-8 text-blue-700" />
          <h3 className="text-2xl font-bold text-blue-900">{t('marinePage.rv.title')}</h3>
        </div>
        
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          {t('marinePage.rv.paragraph')}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-0 bg-white shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-3">
                {t('marinePage.rv.cards.hotel.title')}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t('marinePage.rv.cards.hotel.desc')}
              </p>
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                {t('marinePage.rv.cards.hotel.badge')}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-3">
                {t('marinePage.rv.cards.park.title')}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t('marinePage.rv.cards.park.desc')}
              </p>
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                {t('marinePage.rv.cards.park.badge')}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-blue-900 mb-3">
                {t('marinePage.rv.cards.disaster.title')}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t('marinePage.rv.cards.disaster.desc')}
              </p>
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                {t('marinePage.rv.cards.disaster.badge')}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* JTB総研との連携 */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
        <div className="flex items-center space-x-4 mb-6">
          <Target className="w-8 h-8 text-green-600" />
          <h3 className="text-2xl font-bold text-green-900">{t('marinePage.partnership.title')}</h3>
        </div>
        
        <div className="bg-white rounded-xl p-6">
          <h4 className="text-xl font-bold text-green-900 mb-4">
            {t('marinePage.partnership.jtb.title')}
          </h4>
          <p className="text-gray-700 mb-4">
            {t('marinePage.partnership.jtb.p1')}
          </p>
          <p className="text-gray-700">
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
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('seaweedPage.title')}</h2>
        <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('seaweedPage.lead')}
        </p>
      </div>

      {/* Mother Vegetables Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
        <div className="flex items-center space-x-4 mb-6">
          <Leaf className="w-8 h-8 text-green-600" />
          <h3 className="text-2xl font-bold text-green-900">
            {t('seaweedPage.mother.title')}
          </h3>
        </div>

        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          {t('seaweedPage.mother.p1')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-green-900 mb-3">
                {t('seaweedPage.mother.cards.food.title')}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('seaweedPage.mother.cards.food.desc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-green-900 mb-3">
                {t('seaweedPage.mother.cards.cosmetics.title')}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('seaweedPage.mother.cards.cosmetics.desc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-green-900 mb-3">
                {t('seaweedPage.mother.cards.ecosystem.title')}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('seaweedPage.mother.cards.ecosystem.desc')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-green-900 mb-3">
                {t('seaweedPage.mother.cards.industry.title')}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('seaweedPage.mother.cards.industry.desc')}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h4 className="text-xl font-bold text-green-900 mb-4">
            {t('seaweedPage.mother.features.title')}
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                {t('seaweedPage.mother.features.items.env.title')}
              </h5>
              <p className="text-gray-700 text-sm">
                {t('seaweedPage.mother.features.items.env.desc')}
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                {t('seaweedPage.mother.features.items.forms.title')}
              </h5>
              <p className="text-gray-700 text-sm">
                {t('seaweedPage.mother.features.items.forms.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MV Factory Section */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
        <div className="flex items-center space-x-4 mb-6">
          <Factory className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-bold text-blue-900">
            {t('seaweedPage.factory.title')}
          </h3>
        </div>

        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          {t('seaweedPage.factory.p')}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl p-6">
            <h4 className="text-xl font-bold text-blue-900 mb-4">
              {t('seaweedPage.factory.tech.title')}
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>{t('seaweedPage.factory.tech.list1')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>{t('seaweedPage.factory.tech.list2')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>{t('seaweedPage.factory.tech.list3')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>{t('seaweedPage.factory.tech.list4')}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6">
            <h4 className="text-xl font-bold text-blue-900 mb-4">
              {t('seaweedPage.factory.locations.title')}
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>{t('seaweedPage.factory.locations.list1')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>{t('seaweedPage.factory.locations.list2')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>{t('seaweedPage.factory.locations.list3')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>{t('seaweedPage.factory.locations.list4')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h4 className="text-xl font-bold text-blue-900 mb-4">
            {t('seaweedPage.factory.achievements.title')}
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                {t('seaweedPage.factory.achievements.items.fisheries.title')}
              </h5>
              <p className="text-gray-700 text-sm">
                {t('seaweedPage.factory.achievements.items.fisheries.desc')}
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                {t('seaweedPage.factory.achievements.items.malaysia.title')}
              </h5>
              <p className="text-gray-700 text-sm">
                {t('seaweedPage.factory.achievements.items.malaysia.desc')}
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                {t('seaweedPage.factory.achievements.items.international.title')}
              </h5>
              <p className="text-gray-700 text-sm">
                {t('seaweedPage.factory.achievements.items.international.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
          {t('seaweedPage.compare.title')}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  {t('seaweedPage.compare.table.headers.item')}
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  {t('seaweedPage.compare.table.headers.mv')}
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  {t('seaweedPage.compare.table.headers.conv')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium text-sm">
                  {t('seaweedPage.compare.rows.speed.label')}
                </td>
                <td className="px-4 py-3 text-green-600 text-sm">
                  {t('seaweedPage.compare.rows.speed.mv')}
                </td>
                <td className="px-4 py-3 text-red-600 text-sm">
                  {t('seaweedPage.compare.rows.speed.conv')}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-sm">
                  {t('seaweedPage.compare.rows.environment.label')}
                </td>
                <td className="px-4 py-3 text-green-600 text-sm">
                  {t('seaweedPage.compare.rows.environment.mv')}
                </td>
                <td className="px-4 py-3 text-red-600 text-sm">
                  {t('seaweedPage.compare.rows.environment.conv')}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-sm">
                  {t('seaweedPage.compare.rows.variety.label')}
                </td>
                <td className="px-4 py-3 text-green-600 text-sm">
                  {t('seaweedPage.compare.rows.variety.mv')}
                </td>
                <td className="px-4 py-3 text-red-600 text-sm">
                  {t('seaweedPage.compare.rows.variety.conv')}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-sm">
                  {t('seaweedPage.compare.rows.area.label')}
                </td>
                <td className="px-4 py-3 text-green-600 text-sm">
                  {t('seaweedPage.compare.rows.area.mv')}
                </td>
                <td className="px-4 py-3 text-red-600 text-sm">
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
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('companyPage.title')}</h2>
        <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* 左カラム：企業情報 */}
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">{t('companyPage.info.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Building2 className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <dt className="font-semibold text-gray-900">{t('companyPage.info.labels.name')}</dt>
                  <dd className="text-gray-700">{t('company.name')}</dd>
                  <dt className="font-semibold text-gray-900">{t('companyPage.info.labels.ename')}</dt>
                  <dd className="text-gray-700">{t('company.ename')}</dd>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                <dt className="font-semibold text-gray-900">{t('companyPage.info.labels.rep')}</dt>
                <dd className="text-gray-700">{t('companyPage.info.values.rep')}</dd>
                  <dt className="font-semibold text-gray-900">{t('companyPage.info.labels.intlDir')}</dt>
                  <dd className="text-gray-700">Michael Choong Liat Lee</dd>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <dt className="font-semibold text-gray-900">{t('companyPage.info.labels.address')}</dt>
                  <dd className="text-gray-700">{t('company.address')}</dd>
                  <dt className="font-semibold text-gray-900">{t('companyPage.info.labels.eaddress')}</dt>
                  <dd className="text-gray-700">{t('company.eaddress')}</dd>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <dt className="font-semibold text-gray-900">{t('companyPage.info.labels.tel')}</dt>
                  <dd className="text-gray-700">0558-34-1025</dd>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <dt className="font-semibold text-gray-900">{t('companyPage.info.labels.email')}</dt>
                  <dd className="text-gray-700">contact@sfcpc.co.jp</dd>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Waves className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <dt className="font-semibold text-gray-900">{t('companyPage.info.labels.business')}</dt>
                  <dd className="text-gray-700">{t('company.business')}</dd>
                </div>
              </div>
            </div>
          </div>

          {/* 右カラム：企業理念 */}
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">{t('companyPage.philosophy.title')}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('companyPage.philosophy.p1')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('companyPage.philosophy.p2')}
            </p>
          </div>
        </div>
      </div>

      {/* About us */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
        <div className="flex items-center space-x-4 mb-6">
          <Waves className="w-8 h-8 text-blue-600" />
          <h3 className="text-2xl font-bold text-blue-900">{t('companyPage.about.title')}</h3>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
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
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('contact.title')}</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">{t('contact.subtitle')}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t('contact.description')}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t('contact.labels.phone')}</div>
                  <div className="text-gray-700">0558-34-1025</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t('contact.labels.email')}</div>
                  <div className="text-gray-700">contact@sfcpc.co.jp</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t('contact.labels.address')}</div>
                  <div className="text-gray-700">{t('contact.address')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('contact.form.title')}</h4>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-md mb-4">
                  {t('contact.form.success')}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-md mb-4">
                  {t('contact.form.error')}
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.name')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t('contact.form.placeholders.name')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.email')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t('contact.form.placeholders.email')}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t('contact.form.placeholders.phone')}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.subject')} <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">{t('contact.form.placeholders.select')}</option>
                  <option value="marine">{t('contact.form.options.marine')}</option>
                  <option value="seaweed">{t('contact.form.options.seaweed')}</option>
                  <option value="partnership">{t('contact.form.options.partnership')}</option>
                  <option value="other">{t('contact.form.options.other')}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.message')} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={t('contact.form.placeholders.message')}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 rounded-md transition-colors duration-200 font-medium ${
                  isSubmitting 
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
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
    { id: 'seaweed', label: '藻の養殖', path: '/seaweed' },
    { id: 'company', label: '会社概要', path: '/company' },
    { id: 'contact', label: 'お問い合わせ', path: '/contact' }
  ]

  // ページ遷移時に自動的にトップにスクロール
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="block">
                <img 
                  src={sfcLogo} 
                  alt="SFC - Sisters Fisheries Cooperative Promotion Council" 
                  className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:!flex flex-1 justify-end items-center">
              <nav role="navigation" aria-label="メインナビゲーション">
                <ul className="flex items-center space-x-2">
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.path}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                          location.pathname === item.path
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        aria-current={location.pathname === item.path ? 'page' : undefined}
                      >
                        {t(`nav.${item.id}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <LanguageToggle className="ml-4" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex-shrink-0">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="メニューを開く"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav role="navigation" aria-label="モバイルナビゲーション">
            <ul className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                  >
                    {t(`nav.${item.id}`)}
                  </Link>
                </li>
              ))}
              <li>
                <LanguageToggle className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50" />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marine" element={<MarinePage />} />
          <Route path="/seaweed" element={<SeaweedPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
<footer className="bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid md:grid-cols-2 gap-8">
      {/* 左側 */}
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <img 
            src={sfcLogo} 
            alt="SFC - Sisters Fisheries Cooperative Promotion Council" 
            className="h-16 w-auto brightness-0 invert"
          />
        </div>
        <p className="text-gray-300 leading-relaxed">
          {t('footer.description')}
        </p>
      </div>

      {/* 右側 */}
      <div>
        <h4 className="text-lg font-semibold mb-4">
          {t('footer.businessTitle')}
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <Link 
            to="/marine"
            className="text-left text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            {t('nav.marine')}
          </Link>
          <Link 
            to="/seaweed"
            className="text-left text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            {t('nav.seaweed')}
          </Link>
          <Link 
            to="/company"
            className="text-left text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            {t('nav.company')}
          </Link>
          <Link 
            to="/contact"
            className="text-left text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            {t('nav.contact')}
          </Link>
        </div>
      </div>
    </div>

    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex space-x-6 mb-4 md:mb-0 hidden md:flex">
          <Link 
            to="/marine"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            {t('nav.marine')}
          </Link>
          <Link 
            to="/seaweed"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            {t('nav.seaweed')}
          </Link>
          <Link 
            to="/company"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            {t('nav.company')}
          </Link>
          <Link 
            to="/contact"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            {t('nav.contact')}
          </Link>
        </div>
 {/* <div className="text-gray-400 text-sm">
          {t('footer.tel')}: 0558-34-1025
        </div> */}
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default App
