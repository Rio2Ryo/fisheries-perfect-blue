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
const MarinePage = () => (
  <div className="space-y-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">海業</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        漁業の枠を超えた多角的な事業展開とRVを活用した新しい海洋ツーリズム
      </p>
    </div>

    {/* 海業事業 */}
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
      <div className="flex items-center space-x-4 mb-6">
        <Waves className="w-8 h-8 text-blue-600" />
        <h3 className="text-2xl font-bold text-blue-900">海業事業</h3>
      </div>
      
      <p className="text-gray-700 text-lg mb-8 leading-relaxed">
        漁業の枠を超えた多角的な事業展開を行っています。漁港での体験型観光漁業、地域の漁師との交流、獲れたての海産物をその場で実食など、海業と連携した環境教育プログラムを実施。
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-0 bg-white shadow-md">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Ship className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-blue-900 mb-3">体験型観光漁業</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              漁港を活用した観光体験プログラムの企画・運営
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white shadow-md">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-blue-900 mb-3">地域漁師との交流</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              地域の漁師との連携による文化交流プログラム
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white shadow-md">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-blue-900 mb-3">環境教育プログラム</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              海洋環境保全に関する教育・営業活動
            </p>
          </CardContent>
        </Card>
      </div>
    </div>

    {/* RV事業 */}
    <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8">
      <div className="flex items-center space-x-4 mb-6">
        <Truck className="w-8 h-8 text-blue-700" />
        <h3 className="text-2xl font-bold text-blue-900">RV事業</h3>
      </div>
      
      <p className="text-gray-700 text-lg mb-8 leading-relaxed">
        移動式ホテルとして機能し、海業を活用した独自の飲食や体験プログラムを展開。夜間移動による効率的な旅行を実現し、漁港をRVパークとして活用することで、ユニークな滞在体験を提供。
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-0 bg-white shadow-md">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-blue-900 mb-3">移動式ホテル</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              高品質な宿泊体験を提供する移動式ホテルサービス
            </p>
            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              宿泊事業
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white shadow-md">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-blue-900 mb-3">RVパーク運営</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              漁港を活用したRVパークの運営・管理
            </p>
            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              施設運営
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white shadow-md">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-blue-900 mb-3">災害時対応</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              災害時の緊急避難施設としての機能提供
            </p>
            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              社会貢献
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

    {/* JTB総研との連携 */}
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
      <div className="flex items-center space-x-4 mb-6">
        <Target className="w-8 h-8 text-green-600" />
        <h3 className="text-2xl font-bold text-green-900">業務提携・連携事業</h3>
      </div>
      
      <div className="bg-white rounded-xl p-6">
        <h4 className="text-xl font-bold text-green-900 mb-4">JTB総研との業務提携</h4>
        <p className="text-gray-700 mb-4">
          国内旅行業界最大手のJTB総合研究所と業務提携を結び、観光×環境×食をテーマにした新しい循環型ツーリズムの構築に取り組んでいます。
        </p>
        <p className="text-gray-700">
          この連携では、MVファクトリーによる地域資源の活用と、RV事業による新しい滞在体験を組み合わせ、持続可能な観光モデルの創出を目指しています。
        </p>
      </div>
    </div>
  </div>
)

const SeaweedPage = () => (
  <div className="space-y-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">藻の養殖</h2>
      <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        "地球のはじまりの植物"で世界を満たす革新的な養殖技術
      </p>
    </div>

    {/* Mother Vegetables Section */}
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
      <div className="flex items-center space-x-4 mb-6">
        <Leaf className="w-8 h-8 text-green-600" />
        <h3 className="text-2xl font-bold text-green-900">マザーベジタブル（Mother Vegetables）</h3>
      </div>
      
      <p className="text-gray-700 text-lg mb-8 leading-relaxed">
        約30億年に渡り姿を保ち続けてきた「地球のはじまりの植物」——それが、マザーベジタブル（通称：マザベジ）。
        私たちは、その中でも用途に応じて約2,000種類のタイプを選別・培養し、食・美容・環境・医療・工業分野に展開可能な素材として育てています。
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-0 bg-white shadow-md">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-green-900 mb-3">食品分野</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              グルテンフリー・高タンパク食品、天然着色料、栄養補助食品
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white shadow-md">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-green-900 mb-3">化粧品・医薬品</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              植物性オイル、超高純度オーガニックシリカ、代替成分
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white shadow-md">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-green-900 mb-3">海洋生態系</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              磯焼け対策、海藻再生、魚の餌資源、生態系循環支援
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white shadow-md">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Factory className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-green-900 mb-3">工業製品</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              CO2ゼロ、公害ゼロ、人体汚染ゼロの次世代工業原料
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-xl p-6">
        <h4 className="text-xl font-bold text-green-900 mb-4">マザーベジタブルの特徴</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">環境への貢献</h5>
            <p className="text-gray-700 text-sm">光合成によってCO₂を吸収しながら成長し、化学合成や農薬に頼らずとも、純粋で栄養価の高い恵みを生み出します。</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">多様な形態</h5>
            <p className="text-gray-700 text-sm">パウダー・オイル・エキス・濾材・バイオマスとして、姿を変え、人と動植物、そして地球そのものに貢献できます。</p>
          </div>
        </div>
      </div>
    </div>

    {/* MVファクトリー Section */}
    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
      <div className="flex items-center space-x-4 mb-6">
        <Factory className="w-8 h-8 text-blue-600" />
        <h3 className="text-2xl font-bold text-blue-900">MVファクトリー</h3>
      </div>
      
      <p className="text-gray-700 text-lg mb-8 leading-relaxed">
        太陽光に頼らず、30倍の速さで育つ次世代モジュール。MVファクトリーは、食・美容・健康に活用されるマザーベジタブルを、
        世界最速かつ安定的に育てるために設計された、完全循環型の育成モジュールです。
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl p-6">
          <h4 className="text-xl font-bold text-blue-900 mb-4">革新的技術</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>国際特許番号 WO2023234767取得済み</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>AIが光をコントロールする独自システム</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>完全閉鎖型・人工光制御環境</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>2,000種類の個性あるマザーベジタブルに対応</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h4 className="text-xl font-bold text-blue-900 mb-4">設置可能場所</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>学校・ビル屋上・地下シェルター</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>被災地・物流途絶エリア</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>耕作放棄地・廃校</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>水上・砂漠・極寒地域</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6">
        <h4 className="text-xl font-bold text-blue-900 mb-4">実績・連携</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">水産庁承認</h5>
            <p className="text-gray-700 text-sm">伊豆の河津港に設置決定（2025年4月4日承認）</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">マレーシア政府</h5>
            <p className="text-gray-700 text-sm">東京ドーム40個分の土地でMVファクトリー建設</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">国際連携</h5>
            <p className="text-gray-700 text-sm">マラヤ大学、シンガポール大学、ノッティンガム大学と技術提携</p>
          </div>
        </div>
      </div>
    </div>

    {/* 従来技術との比較 */}
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 sm:p-8">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">従来の藻養殖との比較</h3>
      
      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium">項目</th>
              <th className="px-4 py-3 text-left text-sm font-medium">MVファクトリー</th>
              <th className="px-4 py-3 text-left text-sm font-medium">従来の藻養殖</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 font-medium text-sm">育成スピード</td>
              <td className="px-4 py-3 text-green-600 text-sm">◯約30倍の速度で成長</td>
              <td className="px-4 py-3 text-red-600 text-sm">✕遅い（週〜月）</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-sm">育成環境</td>
              <td className="px-4 py-3 text-green-600 text-sm">◯完全閉鎖型・人工光制御</td>
              <td className="px-4 py-3 text-red-600 text-sm">✕開放型・天候依存</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-sm">取り扱い種類</td>
              <td className="px-4 py-3 text-green-600 text-sm">◯2,000種類</td>
              <td className="px-4 py-3 text-red-600 text-sm">✕数種類〜数十種類</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-sm">展開可能エリア</td>
              <td className="px-4 py-3 text-green-600 text-sm">◯都市・山間・僻地・被災地も可</td>
              <td className="px-4 py-3 text-red-600 text-sm">✕限定（温暖地域中心）</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

const CompanyPage = () => (
  <div className="space-y-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">会社概要</h2>
      <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
    </div>

    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-6">企業情報</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Building2 className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <dt className="font-semibold text-gray-900">会社名</dt>
                <dd className="text-gray-700">全国姉妹漁協推進協議会株式会社</dd>
                <dt className="font-semibold text-gray-900">English Name</dt>
                <dd className="text-gray-700">National Sister Fisheries Promotion Council Co., Ltd.</dd>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Users className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <dt className="font-semibold text-gray-900">代表</dt>
                <dd className="text-gray-700">渡邊昌宏</dd>
                <dt className="font-semibold text-gray-900">International Director</dt>
                <dd className="text-gray-700">Michael Choong Liat Lee</dd>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <dt className="font-semibold text-gray-900">住所</dt>
                <dd className="text-gray-700">〒413-0515　静岡県賀茂郡河津町谷津河津漁港512-2</dd>
                <dt className="font-semibold text-gray-900">English Address</dt>
                <dd className="text-gray-700">512-2 Yatsu, Kawazu Fishing Port, Kawazu Town, Kamo District, Shizuoka Prefecture, 413-0515, Japan</dd>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <dt className="font-semibold text-gray-900">TEL</dt>
                <dd className="text-gray-700">0558-34-1025</dd>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <dt className="font-semibold text-gray-900">メール</dt>
                <dd className="text-gray-700">contact@sfcpc.co.jp</dd>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Waves className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <dt className="font-semibold text-gray-900">事業内容</dt>
                <dd className="text-gray-700">海業・RV・藻の養殖</dd>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-6">企業理念</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            私たちは、海洋資源の持続可能な活用を通じて、日本の沿岸地域の発展に貢献します。
            革新的な技術と全国のネットワークを活かし、次世代に豊かな海を継承していくことが私たちの使命です。
          </p>
          <p className="text-gray-700 leading-relaxed">
            「足りない」を"奪い合う"時代から、"育てて満たす"時代へ。
            あなたと地球がともに満たされる仕組みを、私たちはかたちにしていきます。
          </p>
        </div>
      </div>
    </div>

    {/* About us section integrated */}
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
      <div className="flex items-center space-x-4 mb-6">
        <Waves className="w-8 h-8 text-blue-600" />
        <h3 className="text-2xl font-bold text-blue-900">私たちについて</h3>
      </div>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="mb-6">
          私たちは海業推進を基軸とし、日本の沿岸地域の活性化に貢献しています。
        </p>
        <p className="mb-6">
          漁業では、持続可能な資源管理と効率的な漁獲を行い、高品質な水産物の安定供給に努めています。また、養殖にも力を入れ、日本全国各地の水産の技術革新を支援化する努力をしています。一方、日本政府の掲げる海業では、漁業の枠を超えた多角的な事業展開を行っています。
        </p>
        <p className="mb-6">
          海業では、その技術研究開発、地域の漁師との交流、獲れたての海産物をその場で実食、漁業と連携した環境教育プログラム、観光ダイビングなどのアクティビティにも取り組んでおります。
        </p>
        <p className="mb-6">
          全国の姉妹漁協とのネットワークを活かし、各地の成功事例や課題を共有し、地域の特性に合わせた海業モデルの構築を支援しています。これにより、漁村の経済基盤を強化し、伝統文化の継承と新たな雇用創出を実現、水産業の未来を見据えた包括的な取り組みを推進しています。
        </p>
      </div>
    </div>
  </div>
)

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

      const data = await response.json();

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
      <h2 className="text-3xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
      <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
    </div>

    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-6">お気軽にお問い合わせください</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            海業事業、藻の養殖に関するご質問やご相談がございましたら、お気軽にお問い合わせください。
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">電話番号</div>
                <div className="text-gray-700">0558-34-1025</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">メールアドレス</div>
                <div className="text-gray-700">contact@sfcpc.co.jp</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">所在地</div>
                <div className="text-gray-700">〒413-0515　静岡県賀茂郡河津町谷津河津漁港512-2</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">お問い合わせフォーム</h4>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 text-green-700 rounded-md mb-4">
                お問い合わせを送信しました。ありがとうございます。
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 text-red-700 rounded-md mb-4">
                送信に失敗しました。もう一度お試しください。
              </div>
            )}
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="山田太郎"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="example@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="090-1234-5678"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                件名 <span className="text-red-500">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">選択してください</option>
                <option value="marine">海業事業について</option>
                <option value="seaweed">藻の養殖について</option>
                <option value="partnership">業務提携について</option>
                <option value="other">その他</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="お問い合わせ内容をご記入ください"
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
              {isSubmitting ? '送信中...' : '送信する'}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

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
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={sfcLogo} 
                  alt="SFC - Sisters Fisheries Cooperative Promotion Council" 
                  className="h-16 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                海業推進を基軸とし、日本の沿岸地域の活性化に貢献しています。
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">事業内容</h4>
              <div className="grid grid-cols-2 gap-4">
                <Link 
                  to="/marine"
                  className="text-left text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  海業
                </Link>
                <Link 
                  to="/seaweed"
                  className="text-left text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  藻の養殖
                </Link>
                <Link 
                  to="/company"
                  className="text-left text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  会社概要
                </Link>
                <Link 
                  to="/contact"
                  className="text-left text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex space-x-6 mb-4 md:mb-0 hidden md:flex">
                <Link 
                  to="/marine"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  海業
                </Link>
                <Link 
                  to="/seaweed"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  藻の養殖
                </Link>
                <Link 
                  to="/company"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  会社概要
                </Link>
                <Link 
                  to="/contact"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  お問い合わせ
                </Link>
              </div>
              <div className="text-gray-400 text-sm">
                TEL: 0558-34-1025
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
