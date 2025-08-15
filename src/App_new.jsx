import { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Building2, Waves, Ship, Truck, Leaf, MapPin, Phone, Mail, ArrowRight, ChevronRight, Factory, Users, Target, Menu, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import heroBg from './assets/hero-bg.jpg'
import './App.css'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './components/LanguageToggle.jsx'

// ページコンポーネント
const HomePage = () => {
  const { t } = useTranslation();
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
        <h3 className="text-3xl font-bold text-gray-900 mb-4">事業概要</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Marine Business */}
        <Card className="group hover:shadow-xl transition-all duration-300 border border-blue-200 bg-white">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-xl text-gray-900">海業</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              漁業の枠を超えた多角的な事業展開。体験型観光漁業、移動式ホテル・RVパーク運営、JTB総研との業務提携による革新的な海洋ツーリズムを展開。
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>体験型観光漁業</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>移動式ホテル・RVパーク</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>JTB総研との業務提携</span>
              </div>
            </div>
            <Link
              to="/marine"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 mt-6 font-medium"
            >
              <span>詳細を見る</span>
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
            <CardTitle className="text-xl text-gray-900">藻の養殖</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              "地球のはじまりの植物"マザーベジタブルとMVファクトリーによる革新的な養殖技術。30倍の速度で成長する次世代モジュールで、食・美容・環境・工業分野に展開。
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>マザーベジタブル（2,000種類）</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>MVファクトリー（国際特許）</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>水産庁承認・国際連携</span>
              </div>
            </div>
            <Link
              to="/seaweed"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2 mt-6 font-medium"
            >
              <span>詳細を見る</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="bg-white rounded-2xl p-8 sm:p-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">なぜ私たちが選ばれるのか</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 mb-4">全国ネットワーク</h4>
          <p className="text-gray-600 leading-relaxed">
            全国の漁業組合員数はおよそ15万人。準組合員数はおよそ16万人。31万人の組合員のネットワークを使用し海業をさらに発展させています。
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Factory className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 mb-4">独自技術</h4>
          <p className="text-gray-600 leading-relaxed">
            豪フリンダース大学との共同研究により、革新的な藻類ゲノム解析技術を確立。24時間で藻を成長させる特許技術を保有。
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 mb-4">多角的事業展開</h4>
          <p className="text-gray-600 leading-relaxed">
            海業・RV・藻の養殖を組み合わせた独自のビジネスモデルで、持続可能な海洋資源活用を実現。
          </p>
        </div>
      </div>
    </section>

    {/* Company Overview Card */}
    <section>
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">会社概要</h3>
              <div className="space-y-2 text-blue-100">
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5" />
                  <span>会社名</span>
                  <span className="text-white">全国姉妹漁協推進協議会株式会社</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>所在地</span>
                  <span className="text-white">静岡県賀茂郡河津町</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Waves className="w-5 h-5" />
                  <span>事業内容</span>
                  <span className="text-white">海業・RV・藻の養殖</span>
                </div>
              </div>
            </div>
            <Link
              to="/company"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>詳細を見る</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  </div>
)

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
    <div className="bg-white rounded-2xl p-8">
      <p className="text-gray-700 text-lg leading-relaxed">
        漁業の枠を超えた多角的な事業展開を行っています。漁港での体験型観光漁業、地域の漁師との交流、獲れたての海産物をその場で実食など、海業と連携した環境教育プログラムを実施。
      </p>
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
    <div className="bg-white rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-blue-900 mb-6">企業情報</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Building2 className="w-5 h-5 text-blue-600 mt-1" />
          <div>
            <dt className="font-semibold text-gray-900">会社名</dt>
            <dd className="text-gray-700">全国姉妹漁協推進協議会株式会社</dd>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-blue-600 mt-1" />
          <div>
            <dt className="font-semibold text-gray-900">住所</dt>
            <dd className="text-gray-700">〒413-0515　静岡県賀茂郡河津町谷津河津漁港512-2</dd>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Phone className="w-5 h-5 text-blue-600 mt-1" />
          <div>
            <dt className="font-semibold text-gray-900">TEL</dt>
            <dd className="text-gray-700">0558-34-1025</dd>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const ContactPage = () => (
  <div className="space-y-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
      <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
    </div>
    <div className="bg-white rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-blue-900 mb-6">お気軽にお問い合わせください</h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-blue-600" />
          <div>
            <div className="font-semibold text-gray-900">電話番号</div>
            <div className="text-gray-700">0558-34-1025</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-blue-600" />
          <div>
            <div className="font-semibold text-gray-900">メールアドレス</div>
            <div className="text-gray-700">contact@sfcpc.co.jp</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

function App() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useTranslation()

  const tabs = [
    { id: '/', label: 'ホーム', path: '/' },
    { id: '/marine', label: '海業', path: '/marine' },
    { id: '/seaweed', label: '藻の養殖', path: '/seaweed' },
    { id: '/company', label: '会社概要', path: '/company' },
    { id: '/contact', label: 'お問い合わせ', path: '/contact' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Waves className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <h1 className="text-sm sm:text-lg md:text-xl font-bold text-gray-900">全国姉妹漁協推進協議会</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  to={tab.path}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    setMobileMenuOpen(false)
                  }}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                    location.pathname === tab.path
                      ? 'text-blue-600 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600 border-transparent hover:border-blue-300'
                  }`}
                >
                  {t(`nav.${tab.id.slice(1) || 'home'}`)}
                </Link>
              ))}
            </nav>
            <LanguageToggle className="ml-4 hidden md:block" />

            {/* Mobile menu button */}
            <div className="md:hidden flex-shrink-0">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="メニューを開く"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  to={tab.path}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    setMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === tab.path
                      ? 'text-blue-600 bg-blue-50'
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
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Waves className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">全国姉妹漁協推進協議会</h3>
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
              <div className="flex space-x-6 mb-4 md:mb-0">
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