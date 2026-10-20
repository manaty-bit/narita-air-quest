/* NARITA AIR QUEST — 2026年度成田空港事前学習クイズ。
 * 元の70問を維持し、航空雑学・成田空港問題24問を追加。
 * difficulty:"hard" の問題は画面に「★ 難問」と表示。
 * 出典は各問題の source を参照。生徒の個人名は収録していません。
 */
window.QUIZ_QUESTIONS = [
  {
    "id": "NQ001",
    "category": "成田空港の歴史",
    "question": "成田空港が建設される前、三里塚周辺にあり、皇室との関わりが深かった牧場は何？",
    "choices": [
      "陸軍習志野演習場",
      "成田競馬場",
      "宮内庁下総御料牧場",
      "千葉県立農業試験場"
    ],
    "answer": 2,
    "explanation": "下総御料牧場は成田空港建設に伴って栃木県へ移転。跡地の一部に記念公園がある。",
    "source": "https://www.city.narita.chiba.jp/shisetsu/page000196.html"
  },
  {
    "id": "NQ002",
    "category": "飛行機の雑学",
    "question": "大型旅客機の貨物コンテナの下側が斜めになっていることがあるのはなぜ？",
    "choices": [
      "床下の丸い機体形状に合わせ、空間をむだなく使うため",
      "コンテナを手で持ち上げやすくするため",
      "荷物が自動的に出ていくようにするため",
      "重い荷物を必ず片側に置くため"
    ],
    "answer": 0,
    "explanation": "飛行機の胴体は丸みがあり、貨物室の形に合わせたコンテナが使われる。",
    "source": "https://www.iata.org/en/programs/cargo/unit-load-devices/",
    "difficulty": "hard"
  },
  {
    "id": "NQ003",
    "category": "空港の仕事・物流",
    "question": "2025年上半期、東京税関の統計で成田空港の輸入額が最も大きかった主要品目は？",
    "choices": [
      "スマートフォンなどの通信機器",
      "海外製の高級ブランド服",
      "自動車やその関連部品",
      "医薬品（ワクチンや薬の原材料）"
    ],
    "answer": 3,
    "explanation": "東京税関の2025年上半期統計では、輸入の主要品目第1位が医薬品だった。",
    "source": "https://www.customs.go.jp/tokyo/etu/ftp/toku2025.pdf"
  },
  {
    "id": "NQ004",
    "category": "飛行機の雑学",
    "question": "ライト兄弟のウィルバーとオーヴィルが、同じ飛行機に2人で一緒に乗って飛んだ回数は？",
    "choices": [
      "10回",
      "7回",
      "1回",
      "3回"
    ],
    "answer": 2,
    "explanation": "1910年5月25日に兄弟が一緒に飛んだのは一度だけ。生涯の飛行回数ではない。",
    "source": "https://www.si.edu/object/archives/sova-nasm-xxxx-0641",
    "difficulty": "hard"
  },
  {
    "id": "NQ005",
    "category": "空港の未来",
    "question": "成田空港が将来新設する計画のC滑走路は、何メートルの長さになる予定？",
    "choices": [
      "2,500メートル",
      "3,000メートル",
      "3,500メートル",
      "4,000メートル"
    ],
    "answer": 2,
    "explanation": "成田空港の全体計画では、C滑走路は3,500mとされている。",
    "source": "https://www.narita-airport.jp/ja/company/airport-operation/about-layout/"
  },
  {
    "id": "NQ006",
    "category": "成田空港の歴史",
    "question": "成田空港へ南側（九十九里浜側）から着陸するとき、落下物対策として行われていることは？",
    "choices": [
      "海上でエンジンを停止する",
      "海上では機体のライトを消す",
      "海岸線より手前の洋上で早めに車輪を下ろす",
      "海岸線上で機内Wi-Fiを止める"
    ],
    "answer": 2,
    "explanation": "洋上脚下げは、氷塊などの落下物対策として行われている。",
    "source": "https://www.narita-airport.jp/ja/company/csr/story/falling/",
    "difficulty": "hard"
  },
  {
    "id": "NQ007",
    "category": "飛行機の雑学",
    "question": "旅客機の窓の内側にある小さな穴には、どんな役割がある？",
    "choices": [
      "外の空気を客室に取り込む",
      "窓の内部の気圧の差を調整する",
      "外側の窓を洗浄する",
      "窓ガラスの温度を測る"
    ],
    "answer": 1,
    "explanation": "旅客機の多層窓の内側の層にある小穴は、窓の層の間の圧力バランスを保つ働きがある。",
    "source": "https://www.airbus.com/en/newsroom/stories/2022-06-how-do-aircraft-windows-work",
    "difficulty": "hard"
  },
  {
    "id": "NQ008",
    "category": "飛行機の雑学",
    "question": "水平に一定の速さで飛ぶ飛行機に、進行方向と反対向きにはたらく空気の力は？",
    "choices": [
      "重力",
      "揚力",
      "推力",
      "抗力"
    ],
    "answer": 3,
    "explanation": "進行を妨げる空気の力を抗力と呼ぶ。",
    "source": "https://www.grc.nasa.gov/www/k-12/airplane/forces.html"
  },
  {
    "id": "NQ009",
    "category": "空港の仕事・物流",
    "question": "成田空港のA滑走路の長さは何メートル？",
    "choices": [
      "3,000m",
      "4,000m",
      "5,000m",
      "6,000m"
    ],
    "answer": 1,
    "explanation": "A滑走路は4,000m。B滑走路は現状2,500m。",
    "source": "https://www.narita-airport.jp/ja/company/airport-operation/about-layout/"
  },
  {
    "id": "NQ010",
    "category": "成田空港の歴史",
    "question": "成田空港（当時の新東京国際空港）が開港した日はいつ？",
    "choices": [
      "1931年5月20日",
      "1978年5月20日",
      "1931年8月25日",
      "1987年5月21日"
    ],
    "answer": 1,
    "explanation": "1978年5月20日に開港。1931年8月25日は羽田空港の前身の東京飛行場の開港日。",
    "source": "https://www.narita-airport.jp/ja/discover/history/"
  },
  {
    "id": "NQ011",
    "category": "飛行機の雑学",
    "question": "1903年、ライト兄弟が初の有人動力飛行に成功した飛行機の名前は？",
    "choices": [
      "スピリット・オブ・セントルイス号",
      "スピットファイア号",
      "フライヤー号",
      "ムスタング号"
    ],
    "answer": 2,
    "explanation": "ライト兄弟が飛ばした機体はライトフライヤー号（Wright Flyer）。",
    "source": "https://airandspace.si.edu/collection-objects/1903-wright-flyer/nasm_A19610048000"
  },
  {
    "id": "NQ012",
    "category": "空港の仕事・物流",
    "question": "2026年のSKYTRAX「世界で最も空港スタッフのサービスがよい空港」部門で、成田空港は何位？",
    "choices": [
      "世界1位",
      "世界3位",
      "世界5位",
      "世界10位"
    ],
    "answer": 0,
    "explanation": "成田空港は2026年World’s Best Airport Staff部門で世界第1位を獲得。",
    "source": "https://www.narita-airport.jp/ja/news/worlds-best-airport-staff/"
  },
  {
    "id": "NQ013",
    "category": "飛行機の雑学",
    "question": "1783年、フランスで行われた熱気球の公開飛行実験に乗せられた動物の組み合わせは？",
    "choices": [
      "ひつじ、アヒル、にわとり",
      "さる、いぬ、ねこ",
      "ねずみ、うさぎ、はと",
      "うま、ぞう、はむすたー"
    ],
    "answer": 0,
    "explanation": "ヴェルサイユでヒツジ、アヒル、ニワトリが搭乗し、飛行した。",
    "source": "https://en.chateauversailles.fr/discover/history/key-dates/first-hot-air-balloon-flight",
    "difficulty": "hard"
  },
  {
    "id": "NQ014",
    "category": "成田空港の歴史",
    "question": "かつて東京と成田空港を新幹線で結ぶために計画された路線の名前は？",
    "choices": [
      "成田新幹線",
      "成田モノレール",
      "成田ロープウェイ",
      "成田特急列車"
    ],
    "answer": 0,
    "explanation": "成田新幹線は実際に計画されたが、旅客営業は始まらなかった。",
    "source": "https://www.mlit.go.jp/notice/noticedata/sgml/1971/62035a00/62035a00.html"
  },
  {
    "id": "NQ015",
    "category": "空港の仕事・物流",
    "question": "成田空港では、海外のレースなどへ向かう生きた動物も運ばれる。専用の係留施設を利用する代表的な動物は？",
    "choices": [
      "イルカ",
      "ゾウ",
      "競走馬",
      "ペンギン"
    ],
    "answer": 2,
    "explanation": "成田支所には馬などの家畜を扱う係留施設がある。",
    "source": "https://www.maff.go.jp/aqs/sosiki/office/nrt.html"
  },
  {
    "id": "NQ016",
    "category": "成田空港の歴史",
    "question": "1978年に開港したとき、現在の成田国際空港の正式名称は何だった？",
    "choices": [
      "新東京国際空港",
      "千葉成田国際空港",
      "東関東国際空港",
      "東京成田エアポート"
    ],
    "answer": 0,
    "explanation": "開港時は新東京国際空港。2004年4月に成田国際空港へ改称。",
    "source": "https://www.narita-airport.jp/ja/discover/history/"
  },
  {
    "id": "NQ017",
    "category": "成田空港の歴史",
    "question": "1978年の成田空港開港時、航空燃料のパイプライン完成前に燃料を運んだ主な方法は？",
    "choices": [
      "タンカーが滑走路へ直接運んだ",
      "空港近くの川に船を停めて給油した",
      "貨物列車で燃料を運ぶ暫定輸送を行った",
      "飛行機が海外から燃料を積んできた"
    ],
    "answer": 2,
    "explanation": "本格的なパイプラインが整う前は、国鉄の貨物列車などによる燃料暫定輸送が行われた。",
    "source": "https://www.sangiin.go.jp/japanese/joho1/kousei/syuisyo/084/touh/t084010.htm",
    "difficulty": "hard"
  },
  {
    "id": "NQ018",
    "category": "飛行機の雑学",
    "question": "現在の羽田空港が「東京飛行場」として開港したのは何年？",
    "choices": [
      "1911年",
      "1931年",
      "1945年",
      "1964年"
    ],
    "answer": 1,
    "explanation": "東京飛行場は1931年8月25日に開港。",
    "source": "https://www.mlit.go.jp/page/kanbo01_hy_001626.html"
  },
  {
    "id": "NQ019",
    "category": "成田空港の歴史",
    "question": "現在の成田空港の歴史と深く関係する、空港周辺の地区名は？",
    "choices": [
      "天浪",
      "大里",
      "三里塚",
      "三梨塚"
    ],
    "answer": 2,
    "explanation": "三里塚は成田空港建設と地域の歴史に関係する地名。空港の全敷地が三里塚地区という意味ではない。",
    "source": "https://www.narita-airport.jp/ja/company/airport-operation/about-layout/"
  },
  {
    "id": "NQ020",
    "category": "成田空港の歴史",
    "question": "成田空港のIATAによる3文字の空港コードは？",
    "choices": [
      "NRT",
      "HND",
      "KIX",
      "NGO"
    ],
    "answer": 0,
    "explanation": "成田空港のIATAコードはNRT。",
    "source": "https://www.iata.org/en/publications/directories/code-search/"
  },
  {
    "id": "NQ021",
    "category": "成田空港の歴史",
    "question": "成田空港の近くにあり、空港建設をめぐる地域の歴史とも関わる神社は？",
    "choices": [
      "成田大社",
      "羽田神社",
      "空の駅大社",
      "東峰神社"
    ],
    "answer": 3,
    "explanation": "東峰神社は空港周辺にある。空港周辺の土地の歴史を考える手掛かりになる。",
    "source": "https://www.narita-airport.jp/ja/company/airport-operation/about-layout/",
    "difficulty": "hard"
  },
  {
    "id": "NQ022",
    "category": "成田空港の歴史",
    "question": "成田空港の正式名称が「新東京国際空港」から「成田国際空港」へ変わった年は？",
    "choices": [
      "1978年",
      "2004年",
      "2010年",
      "1992年"
    ],
    "answer": 1,
    "explanation": "成田国際空港への名称変更は2004年4月。",
    "source": "https://www.narita-airport.jp/ja/discover/history/"
  },
  {
    "id": "NQ023",
    "category": "成田空港の歴史",
    "question": "計画だけで終わった「成田新幹線」。東京側の始発駅として予定されていたのはどこ？",
    "choices": [
      "東京駅",
      "上野駅",
      "新宿駅",
      "両国駅"
    ],
    "answer": 0,
    "explanation": "成田新幹線の工事実施計画は東京駅を起点とするもので、会計検査院の報告に記録されている。",
    "source": "https://report.jbaudit.go.jp/org/s57/1982-s57-0297-0.htm",
    "difficulty": "hard"
  },
  {
    "id": "NQ024",
    "category": "飛行機の雑学",
    "question": "ライト兄弟として知られる2人の名前の組み合わせは？",
    "choices": [
      "オビール、エーブル",
      "ウィール、オーブ",
      "ウィルバー、オービル",
      "エーデル、オール"
    ],
    "answer": 2,
    "explanation": "兄ウィルバーと弟オーヴィル（オービル）。",
    "source": "https://www.si.edu/object/archives/sova-nasm-xxxx-0641"
  },
  {
    "id": "NQ025",
    "category": "空港の仕事・物流",
    "question": "滑走路の近くに鳥が集まるのを防ぐため、鳥を追い払う仕事は何と呼ばれる？",
    "choices": [
      "バードパトロール",
      "スカイクリッパー",
      "エアポートハザードチェッカー",
      "ワイルドライフガード"
    ],
    "answer": 0,
    "explanation": "バードパトロールは空港周辺の鳥の動きを見張り、航空機の安全な運航を支える。",
    "source": "https://www.narita-airport.jp/ja/company/"
  },
  {
    "id": "NQ026",
    "category": "空港の仕事・物流",
    "question": "飛行機の「格納庫」が果たす役割として最も適切なのは？",
    "choices": [
      "飛行機を保管し、点検や整備を行う",
      "旅客の搭乗手続きを行う",
      "管制官が航空機へ進路を指示する",
      "旅行者の入国審査をする"
    ],
    "answer": 0,
    "explanation": "格納庫は飛行機の保管と点検・整備などに利用される。",
    "source": "https://www.narita-airport.jp/ja/discover/work/"
  },
  {
    "id": "NQ027",
    "category": "成田空港の歴史",
    "question": "成田空港の敷地が、成田市とともにまたがる町はどこ？",
    "choices": [
      "千葉県富里市",
      "茨城県河内町",
      "千葉県芝山町",
      "千葉県佐倉市"
    ],
    "answer": 2,
    "explanation": "成田空港の敷地は成田市と芝山町にまたがる。",
    "source": "https://www.narita-airport.jp/ja/company/airport-operation/about-layout/"
  },
  {
    "id": "NQ028",
    "category": "空港の未来",
    "question": "使用済み食用油などからも製造できる「持続可能な航空燃料」の略称は？",
    "choices": [
      "SAF",
      "NAS",
      "OPS",
      "TPO"
    ],
    "answer": 0,
    "explanation": "SAFはSustainable Aviation Fuelの略称。",
    "source": "https://www.jogmec.go.jp/about/publish/jogmec-news-plus/plus_vol15.html"
  },
  {
    "id": "NQ029",
    "category": "空港の仕事・物流",
    "question": "成田空港で、持ち込まれた肉製品や果物などを嗅覚で見つける仕事をする動物は？",
    "choices": [
      "犬",
      "フクロウ",
      "フェレット",
      "猫"
    ],
    "answer": 0,
    "explanation": "動植物検疫探知犬が持ち込み品を検査する。",
    "source": "https://www.maff.go.jp/aqs/job/detectordog.html"
  },
  {
    "id": "NQ030",
    "category": "飛行機の雑学",
    "question": "ボーイング787やエアバスA350などの機体に使われる、軽くて丈夫な複合材料は？",
    "choices": [
      "ステンレス鋼",
      "フッ素樹脂",
      "炭素繊維強化プラスチック（CFRP）",
      "アルミニウム単体"
    ],
    "answer": 2,
    "explanation": "A350などでは炭素繊維強化複合材料が使われている。",
    "source": "https://www.airbus.com/en/products-services/commercial-aircraft/passenger-aircraft/a350-family"
  },
  {
    "id": "NQ031",
    "category": "空港の未来",
    "question": "成田空港の滑走路延伸・新設を含む「全体計画」の敷地面積は約何ha？",
    "choices": [
      "約230ha",
      "約2,300ha",
      "約23ha",
      "約23,000ha"
    ],
    "answer": 1,
    "explanation": "NAAの全体計画の計画面積は2,297ha（更なる機能強化の拡張分を含む）。",
    "source": "https://www.narita-airport.jp/ja/company/airport-operation/about-layout/",
    "difficulty": "hard"
  },
  {
    "id": "NQ032",
    "category": "空港の仕事・物流",
    "question": "飛行機の離着陸などで耳が詰まったように感じるとき、圧力差を小さくする方法の一つは？",
    "choices": [
      "鼻をつまんで口を閉じ、やさしく息を送る",
      "強くうがいをし続ける",
      "首を左右に大きく振る",
      "耳たぶを強く引っ張り続ける"
    ],
    "answer": 0,
    "explanation": "気圧変化で耳に圧力差が生じることがあり、耳抜きが役立つ場合がある。痛みが強い場合は無理をしない。",
    "source": "https://www.jal.co.jp/jp/ja/inter/health/ear/"
  },
  {
    "id": "NQ033",
    "category": "飛行機の雑学",
    "question": "航空機の高度と速度を表すときによく使われる単位の組み合わせは？",
    "choices": [
      "高度：フィート／速度：km/h",
      "高度：ヤード／速度：ノット",
      "高度：フィート／速度：ノット",
      "高度：ヤード／速度：km/h"
    ],
    "answer": 2,
    "explanation": "多くの航空機では、高度にフィート、速度にノットが使用される。",
    "source": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/",
    "difficulty": "hard"
  },
  {
    "id": "NQ034",
    "category": "成田空港の歴史",
    "question": "2019年10月以降、成田空港のA滑走路が原則として離着陸できるのは、夜何時まで？",
    "choices": [
      "午後10時",
      "午前0時",
      "午後11時",
      "午前2時"
    ],
    "answer": 1,
    "explanation": "A滑走路は原則24時まで。B滑走路は原則23時まで。条件付きの弾力的運用や緊急事態は例外。",
    "source": "https://www.narita-airport.jp/ja/company/csr/curfew/"
  },
  {
    "id": "NQ035",
    "category": "飛行機の雑学",
    "question": "世界で最も古くから、現在まで継続して運用されている空港として知られるのは？",
    "choices": [
      "ハンブルク空港",
      "ブレーメン空港",
      "カレッジパーク空港",
      "アムステルダム・スキポール空港"
    ],
    "answer": 2,
    "explanation": "米国のカレッジパーク空港は1909年開設で、継続運用する最古の空港として知られる。",
    "source": "https://www.smithsonianmag.com/air-space-magazine/a-price-too-high-28870489/",
    "difficulty": "hard"
  },
  {
    "id": "NQ036",
    "category": "成田空港の歴史",
    "question": "成田空港の建設が閣議決定された1966年から、開港した1978年まで何年間？",
    "choices": [
      "12年",
      "19年",
      "14年",
      "11年"
    ],
    "answer": 0,
    "explanation": "1978-1966=12年間。工事の着工日からの正確な経過年数を指すものではない。",
    "source": "https://www.narita-airport.jp/ja/company/naa/profile/history/"
  },
  {
    "id": "NQ037",
    "category": "飛行機の雑学",
    "question": "着陸するときなどに旅客機の主翼の後ろから出てきて、低速でも飛びやすくする装置は？",
    "choices": [
      "スポイラー",
      "エアブレーキ",
      "フラップ",
      "エアロダイナミックブレーキ"
    ],
    "answer": 2,
    "explanation": "フラップは主翼の揚力を増やし、低速での飛行を助ける。",
    "source": "https://www.grc.nasa.gov/www/k-12/airplane/flap.html"
  },
  {
    "id": "NQ038",
    "category": "成田空港の歴史",
    "question": "成田空港の累計航空旅客数が10億人に達したのは何年？",
    "choices": [
      "1999",
      "2013",
      "2017",
      "2020"
    ],
    "answer": 2,
    "explanation": "成田空港は2017年7月に累計航空旅客数10億人を達成。",
    "source": "https://www.narita-airport.jp/ja/discover/history/"
  },
  {
    "id": "NQ039",
    "category": "成田空港の歴史",
    "question": "成田空港が「5スター」の評価を受けたSKYTRAXの空港格付け制度は？",
    "choices": [
      "WORLD AIRPORT EVALUATION",
      "UNIVERSAL AIRPORT SURVEY",
      "INTERNATIONAL AIRPORT REVIEW",
      "WORLD AIRPORT STAR RATING"
    ],
    "answer": 3,
    "explanation": "5スターを認定するのはWORLD AIRPORT STAR RATING。WORLD AIRPORT AWARDSは別の賞。",
    "source": "https://www.narita-airport.jp/ja/company/sustainability/society/preferred-airport/skytrax/",
    "difficulty": "hard"
  },
  {
    "id": "NQ040",
    "category": "空港の仕事・物流",
    "question": "飛行機で犬や馬などの生きた動物を運ぶとき、大切な配慮はどれ？",
    "choices": [
      "動物に合う輸送容器や換気などの条件を整える",
      "どんな動物でも同じ小箱に入れる",
      "飛行中は水も空気も必要ない",
      "輸送時間を長くすると必ず安全になる"
    ],
    "answer": 0,
    "explanation": "国際航空運送協会（IATA）は生きた動物の航空輸送に種ごとの容器・取り扱い基準を設けている。",
    "source": "https://www-ade.iata.org/en/programs/cargo/live-animals/"
  },
  {
    "id": "NQ041",
    "category": "空港の仕事・物流",
    "question": "成田空港の「ランプコントロール」は、主に何を管理する仕事？",
    "choices": [
      "空港内のレストランの営業時間",
      "駐機場などでの航空機の移動指示",
      "旅行者のパスポート発行",
      "貨物の輸入税額の決定"
    ],
    "answer": 1,
    "explanation": "ランプコントロールは駐機場などのランプエリアで航空機の動きを調整する仕事。",
    "source": "https://career.narita-airport.jp/recruit/works/naa-work/admin/index.html",
    "difficulty": "hard"
  },
  {
    "id": "NQ042",
    "category": "空港の仕事・物流",
    "question": "長距離国際線の一部の大型旅客機に、乗務員用の休憩スペースが設けられているのはなぜ？",
    "choices": [
      "乗務員が交代で休息し、長時間の勤務に対応するため",
      "飛行中に乗客の荷物を売るため",
      "離陸時に燃料タンクを冷却するため",
      "飛行機を軽くするため"
    ],
    "answer": 0,
    "explanation": "ボーイング787には、天井側に設ける乗務員用休憩エリアがある仕様もある。",
    "source": "https://www.boeing.com/content/dam/boeing/v2/airports/arff/787_composite_arff_data_2025.pdf"
  },
  {
    "id": "NQ043",
    "category": "飛行機の雑学",
    "question": "ギネス世界記録が紹介する、1998年に開港した香港国際空港の建設関連費用はおよそいくら？",
    "choices": [
      "20億米ドル",
      "200億米ドル",
      "2,000億米ドル",
      "2兆米ドル"
    ],
    "answer": 1,
    "explanation": "ギネス世界記録の記載は200億米ドル。空港本体のほか道路・鉄道など関連インフラを含む。",
    "source": "https://www.guinnessworldrecords.com/world-records/73137-most-expensive-airport",
    "difficulty": "hard"
  },
  {
    "id": "NQ044",
    "category": "空港の仕事・物流",
    "question": "街中の指定された免税店で買った商品を、成田空港の専用カウンターで受け取るのは主にいつ？",
    "choices": [
      "出国手続きを終えた後",
      "帰国して荷物を受け取った後",
      "飛行機が離陸した後",
      "海外の税関を通った後"
    ],
    "answer": 0,
    "explanation": "成田空港には、市中免税店で購入した商品のための出国手続き後の引渡しカウンターがある。",
    "source": "https://www.narita-airport.jp/ja/service/other/duty-free/"
  },
  {
    "id": "NQ045",
    "category": "飛行機の雑学",
    "question": "ライト兄弟が初飛行した1903年から、日本で最初の公開動力飛行が行われた1910年までは何年？",
    "choices": [
      "3年",
      "7年",
      "13年",
      "24年"
    ],
    "answer": 1,
    "explanation": "徳川好敏と日野熊蔵による日本初の公開動力飛行は1910年。ライト兄弟の初飛行から7年後。",
    "source": "https://www.mlit.go.jp/report/press/cab01_hh_000026.html"
  },
  {
    "id": "NQ046",
    "category": "空港の仕事・物流",
    "question": "大型旅客機が駐機場から後ろ向きに動き出すとき、一般的に使うのは？",
    "choices": [
      "翼の先を人が押す",
      "トーイングトラクターで押す",
      "風を集める巨大な帆",
      "客室の床を傾ける"
    ],
    "answer": 1,
    "explanation": "プッシュバックではトーイングトラクターなどが飛行機を後方に押し出す。",
    "source": "https://www.nrtas.ana-g.com/recruit/job/ground"
  },
  {
    "id": "NQ047",
    "category": "飛行機の雑学",
    "question": "1903年、ライト兄弟が初めて有人動力飛行に成功した日。離陸時の風の特徴は？",
    "choices": [
      "かなり強い向かい風が吹いていた",
      "ほぼ無風だった",
      "後ろからだけ風が吹いていた",
      "風向きが毎秒反対になっていた"
    ],
    "answer": 0,
    "explanation": "スミソニアン博物館によると初飛行の日は時速24〜27マイルの強い向かい風が吹いていた。",
    "source": "https://airandspace.si.edu/stories/editorial/first-flight",
    "difficulty": "hard"
  },
  {
    "id": "NQ048",
    "category": "成田空港の歴史",
    "question": "成田空港は国際線のイメージが強いが、2025年の統計で国内線はどうだった？",
    "choices": [
      "国内線も運航していた",
      "国内線は1便もなかった",
      "国内線は航空貨物しかなかった",
      "国内線は夏休みだけ運航した"
    ],
    "answer": 0,
    "explanation": "成田空港の2025年の運用統計には国内線の発着回数が計上されている。",
    "source": "https://www.narita-airport.jp/ja/company/airport-operation/operation/"
  },
  {
    "id": "NQ049",
    "category": "空港の仕事・物流",
    "question": "成田空港第3ターミナルで国際線の出国手続きを終えた後、飲み物を買ったり食事をしたりしたい。どこを探すとよい？",
    "choices": [
      "飛行機に乗る前の出発ロビーへ引き返す",
      "出国手続き後エリアの飲食店",
      "滑走路脇の貨物倉庫",
      "飛行機の操縦席にある売店"
    ],
    "answer": 1,
    "explanation": "第3ターミナルの出国手続き後エリアにも、飲食ができる店舗が設けられている。",
    "source": "https://www.narita-airport.jp/ja/shop/malllist-t3/"
  },
  {
    "id": "NQ050",
    "category": "空港の仕事・物流",
    "question": "国際線の機内持ち込みで、液体物として容量制限の対象になることがある意外な食品は？",
    "choices": [
      "みそ",
      "板チョコ",
      "せんべい",
      "乾燥したのり"
    ],
    "answer": 0,
    "explanation": "成田空港の公式案内では、味噌やヨーグルト、ゼリーなども液体物の規制対象に挙げている。",
    "source": "https://www.narita-airport.jp/ja/airportguide/security/liquid/"
  },
  {
    "id": "NQ051",
    "category": "飛行機の雑学",
    "question": "旅客ジェット機に多い、翼が後ろに傾いた「後退翼」。高速飛行での主な利点は？",
    "choices": [
      "高速域で増えやすい空気抵抗を抑えられる",
      "乗客が全員前を向きやすくなる",
      "翼の上に荷物を収納できる",
      "窓ガラスの曇りを防げる"
    ],
    "answer": 0,
    "explanation": "高速飛行での衝撃波に関連する抵抗を抑えるため、後退翼が使われる。",
    "source": "https://www.grc.nasa.gov/WWW/k-12/airplane/hisub.html",
    "difficulty": "hard"
  },
  {
    "id": "NQ052",
    "category": "成田空港の歴史",
    "question": "2025年の成田空港の公式統計で、飛行機の「離陸と着陸を合わせた」1日平均回数はおよそ何回？",
    "choices": [
      "約70回",
      "約300回",
      "約700回",
      "約2,000回"
    ],
    "answer": 2,
    "explanation": "2025年の年間発着回数は253,586回。365日で割ると約695回なので約700回。",
    "source": "https://www.narita-airport.jp/ja/company/airport-operation/operation/"
  },
  {
    "id": "NQ053",
    "category": "飛行機の雑学",
    "question": "1903年、ライト兄弟が最初に成功させた有人動力飛行の時間は？",
    "choices": [
      "6秒",
      "12秒",
      "30秒",
      "60秒"
    ],
    "answer": 1,
    "explanation": "1903年12月17日の最初の飛行は12秒、約36mだった。",
    "source": "https://airandspace.si.edu/stories/editorial/wright-brothers-made-history-kitty-hawk"
  },
  {
    "id": "NQ054",
    "category": "飛行機の雑学",
    "question": "ライト兄弟が営んでいたお店は何の店？",
    "choices": [
      "時計店",
      "自転車店",
      "自動車販売店",
      "靴店"
    ],
    "answer": 1,
    "explanation": "ライト兄弟は自転車の製造・修理などをしていた。",
    "source": "https://airandspace.si.edu/stories/editorial/wright-brothers-made-history-kitty-hawk"
  },
  {
    "id": "NQ055",
    "category": "飛行機の雑学",
    "question": "飛行機の翼の先が上向きに曲がっていることがある理由は？",
    "choices": [
      "空気の抵抗を減らして燃料を節約するため",
      "翼を冬だけ温めるため",
      "飛行機を左右に動かす合図にするため",
      "着陸後の車輪の代わりになるため"
    ],
    "answer": 0,
    "explanation": "ウイングレットは翼端でできる渦を弱め、誘導抵抗を減らす。",
    "source": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/winglets/"
  },
  {
    "id": "NQ056",
    "category": "飛行機の雑学",
    "question": "旅客機の窓が、一般に角のない丸みを帯びた形なのは主になぜ？",
    "choices": [
      "窓を曇らせないため",
      "雨粒が落ちやすくなるため",
      "機体にかかる力が角に集中しにくいため",
      "飛行中に窓を開けやすくするため"
    ],
    "answer": 2,
    "explanation": "丸みのある形は、窓の周辺に生じる応力の集中を減らす。",
    "source": "https://www.faa.gov/lessons_learned/transport_airplane/accidents/G-ALYU"
  },
  {
    "id": "NQ057",
    "category": "飛行機の雑学",
    "question": "大型旅客機のトイレで流したものは、通常どこに集められる？",
    "choices": [
      "機内の専用タンク",
      "空中へ放出する仕組み",
      "翼の中の燃料タンク",
      "客室の床下の紙袋"
    ],
    "answer": 0,
    "explanation": "旅客機の真空式トイレの排水物は機内のタンクへ集め、地上で処理する。",
    "source": "https://www.airbus.com/en/newsroom/stories/2023-11-the-aircraft-water-and-waste-system"
  },
  {
    "id": "NQ058",
    "category": "飛行機の雑学",
    "question": "空に白く伸びる飛行機雲。主に何でできている？",
    "choices": [
      "エンジンの黒いすす",
      "小さな氷の結晶",
      "燃料の液体の粒",
      "細かな砂ぼこり"
    ],
    "answer": 1,
    "explanation": "高空の冷たい空気中で水蒸気が凝結・凍結してできた氷の結晶が白く見える。",
    "source": "https://www.faa.gov/contrails"
  },
  {
    "id": "NQ059",
    "category": "飛行機の雑学",
    "question": "滑走路に書いてある数字「09」は、主に何を示している？",
    "choices": [
      "滑走路の長さ",
      "空港の開港年",
      "滑走路の方向",
      "1時間の離着陸数"
    ],
    "answer": 2,
    "explanation": "滑走路番号は方位を十度単位で示し「09」はおよそ90度を表す。",
    "source": "https://www.faa.gov/Air_traffic/publications/atpubs/aim_html/chap4_section_3.html",
    "difficulty": "hard"
  },
  {
    "id": "NQ060",
    "category": "飛行機の雑学",
    "question": "飛行機の中で食べると、地上と比べて味が違って感じられることがある主な理由は？",
    "choices": [
      "空を飛ぶ速さで舌が変化するから",
      "機内の気圧などの条件が違うから",
      "食器の形が全部同じだから",
      "料理を必ず冷やして提供するから"
    ],
    "answer": 1,
    "explanation": "気圧や湿度などが、においや味の感じ方に影響する。",
    "source": "https://www.ibp.fraunhofer.de/en/press-media/research-in-focus/a-feast-for-research.html"
  },
  {
    "id": "NQ061",
    "category": "空港の仕事・物流",
    "question": "駐機場で棒やライトを使い飛行機を停止位置まで誘導する人は？",
    "choices": [
      "マーシャラー",
      "税関職員",
      "航空気象観測員",
      "機内食調理員"
    ],
    "answer": 0,
    "explanation": "マーシャラーが合図で飛行機を所定の位置へ案内する。",
    "source": "https://www.nrtas.ana-g.com/recruit/job/ground"
  },
  {
    "id": "NQ062",
    "category": "空港の仕事・物流",
    "question": "旅客用の窓がほとんどない大型の飛行機。その主な役割は？",
    "choices": [
      "気象観測だけをする",
      "貨物を大量に運ぶ",
      "飛行訓練だけをする",
      "競技会で曲技飛行する"
    ],
    "answer": 1,
    "explanation": "貨物専用機は人の座席の代わりに貨物を大量に搭載する。",
    "source": "https://www.nrtas.ana-g.com/recruit/job/ground"
  },
  {
    "id": "NQ063",
    "category": "空港の仕事・物流",
    "question": "ハリケーンの中へ飛ぶ観測用飛行機がある。その大きな目的は？",
    "choices": [
      "雲を吹き飛ばす",
      "雨を止める",
      "風速や気圧を観測する",
      "観測中は必ずエンジンを止める"
    ],
    "answer": 2,
    "explanation": "NOAAなどの観測機が風・気圧・温度等を観測し予測に役立てる。",
    "source": "https://www.aoml.noaa.gov/hrd/tcfaq/H2.html"
  },
  {
    "id": "NQ064",
    "category": "成田空港の歴史",
    "question": "1960年代に東京近郊で新しい国際空港が計画された主な理由は？",
    "choices": [
      "羽田空港の処理能力に限界が来ると予測されたため",
      "羽田の滑走路がなくなったため",
      "日本で飛行機の製造が禁止されたため",
      "成田に船舶港を作るため"
    ],
    "answer": 0,
    "explanation": "首都圏の航空需要の増加を受け、羽田空港の処理能力限界が予測された。",
    "source": "https://www.narita-airport.jp/ja/company/csr/kyosei-progress/"
  },
  {
    "id": "NQ065",
    "category": "成田空港の歴史",
    "question": "成田空港建設前の三里塚周辺には、どのような人々も暮らしていた？",
    "choices": [
      "古くからの農家や戦後の開拓農家",
      "すべて航空管制官とその家族",
      "ほとんどが地下鉄の運転士",
      "すべて外国から来た旅行者"
    ],
    "answer": 0,
    "explanation": "農業を営む住民や戦後に土地を開いて生活を築いた人々が暮らしていた。",
    "source": "https://www.narita-airport.jp/ja/company/csr/kyosei-transition/"
  },
  {
    "id": "NQ066",
    "category": "成田空港の歴史",
    "question": "成田空港の建設に反対する住民がいた背景として最も適切なのは？",
    "choices": [
      "飛行機の機内食が高かったため",
      "農地や生活の場が失われる不安や計画の進め方への反発があったため",
      "航空会社が成田へ来るのを禁止されたため",
      "国際線が1便しかない計画だったため"
    ],
    "answer": 1,
    "explanation": "土地や暮らしへの影響、建設の決定・説明の進め方などをめぐって対立が生じた。",
    "source": "https://www.narita-airport.jp/ja/company/csr/kyosei-progress/"
  },
  {
    "id": "NQ067",
    "category": "成田空港の歴史",
    "question": "1978年3月、成田空港の開港延期につながった襲撃事件で対象となった施設は？",
    "choices": [
      "旅客ターミナル",
      "管制塔",
      "免税店",
      "駐車場の料金所"
    ],
    "answer": 1,
    "explanation": "1978年3月の管制塔占拠事件などで開港は延期され、同年5月に開港した。",
    "source": "https://www.narita-airport.jp/ja/company/csr/kyosei-transition/"
  },
  {
    "id": "NQ068",
    "category": "成田空港の歴史",
    "question": "国・空港側・千葉県・反対同盟が参加した最初の成田空港問題シンポジウムは何年？",
    "choices": [
      "1978年",
      "1985年",
      "1991年",
      "2004年"
    ],
    "answer": 2,
    "explanation": "1991年11月、立場の異なる四者が初めて一堂に会して対話を行った。",
    "source": "https://www.narita-airport.jp/ja/company/csr/kyosei-transition/",
    "difficulty": "hard"
  },
  {
    "id": "NQ069",
    "category": "空港の未来",
    "question": "使用済み食用油から製造する取り組みもある航空燃料の名称は？",
    "choices": [
      "SAF（持続可能な航空燃料）",
      "LPG（液化石油ガス）",
      "LNG（液化天然ガス）",
      "CNG（圧縮天然ガス）"
    ],
    "answer": 0,
    "explanation": "廃食油などを原料とするSAFの利用が進んでいる。",
    "source": "https://www.narita-airport.jp/files/fdd41f86eaf984dcd12767efe2b4022b284821788b0eb317c88859034b365357"
  },
  {
    "id": "NQ070",
    "category": "空港の未来",
    "question": "成田空港は現在2本の滑走路を持つ。将来計画では何本にする？",
    "choices": [
      "2本",
      "3本",
      "4本",
      "5本"
    ],
    "answer": 1,
    "explanation": "A・B滑走路に加え、将来はC滑走路を新設して3本にする計画。",
    "source": "https://www.narita-airport.jp/ja/company/airport-operation/about-layout/"
  },
  {
    "id": "NQ071",
    "category": "飛行機の雑学",
    "difficulty": "hard",
    "question": "旅客機には雷が落ちることがある。FAA（米国連邦航空局）の資料によると、航空機1機あたりの平均的な被雷回数は？",
    "choices": [
      "およそ10年に1回",
      "およそ1〜2年に1回",
      "およそ年に1〜2回",
      "およそ毎日1回"
    ],
    "answer": 2,
    "explanation": "FAAは輸送機について、平均して1機が年に1〜2回落雷を受けるという過去の調査を紹介している。雷から機体や機器を守る設計が重要だ。",
    "source": "https://www.faa.gov/lessons_learned/transport_airplane/accidents/N709PA"
  },
  {
    "id": "NQ072",
    "category": "飛行機の雑学",
    "difficulty": "hard",
    "question": "世界最大級の旅客機エアバスA380。左右の翼の端から端までの長さ（翼幅）は、約何メートル？",
    "choices": [
      "約30メートル",
      "約50メートル",
      "約80メートル",
      "約120メートル"
    ],
    "answer": 2,
    "explanation": "A380の翼幅は約79.8m。長さ約73mの胴体よりも、翼の左右の幅の方が大きい。",
    "source": "https://www.airbus.com/en/products-services/commercial-aircraft/passenger-aircraft/a380"
  },
  {
    "id": "NQ073",
    "category": "飛行機の雑学",
    "question": "超大型旅客機A380の客室のつくりとして、正しいものは？",
    "choices": [
      "客室が機体のほぼ全長にわたって2階建て",
      "客室がすべて地下にある",
      "客室が飛行中に上下に移動する",
      "客室の床がなく、全員が立つ"
    ],
    "answer": 0,
    "explanation": "A380は機体のほぼ全長にわたって旅客用デッキが上下2層ある、非常に珍しい飛行機だ。",
    "source": "https://www.airbus.com/en/products-services/commercial-aircraft/passenger-aircraft/a380"
  },
  {
    "id": "NQ074",
    "category": "飛行機の雑学",
    "difficulty": "hard",
    "question": "エアバスの公表資料によると、巨大旅客機A380を構成する部品の数はおよそいくつ？",
    "choices": [
      "4千個",
      "4万個",
      "40万個",
      "400万個"
    ],
    "answer": 3,
    "explanation": "エアバスの資料では、A380は約400万点の部品から構成されると紹介されている。多くの国の企業が部品を生産する。",
    "source": "https://www.airbus.com/sites/g/files/jlcbta136/files/2021-10/EN-Airbus-A380-Facts-and-Figures_0.pdf?pubDate=20251126"
  },
  {
    "id": "NQ075",
    "category": "飛行機の雑学",
    "question": "夜の空港で、飛行機が滑走路へ向かう「誘導路」の左右の端を示すライトは、原則何色？",
    "choices": [
      "青",
      "赤",
      "白",
      "紫"
    ],
    "answer": 0,
    "explanation": "誘導路の端は青い灯火で示される。滑走路の端を示す灯火は一般に白系で、役割によって色を使い分けている。",
    "source": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html"
  },
  {
    "id": "NQ076",
    "category": "飛行機の雑学",
    "difficulty": "hard",
    "question": "空港の誘導路で、飛行機が進む道の「中心線」を示すライトは、一般に何色？",
    "choices": [
      "赤",
      "青",
      "緑",
      "オレンジ"
    ],
    "answer": 2,
    "explanation": "誘導路の中心線の灯火は緑色。左右の縁は青色なので、同じ誘導路でも光の役割と色が異なる。",
    "source": "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap2_section_1.html"
  },
  {
    "id": "NQ077",
    "category": "飛行機の雑学",
    "difficulty": "hard",
    "question": "滑走路の番号が「16R」と表示されている。「R」は何を意味する？",
    "choices": [
      "右側（Right）の平行滑走路",
      "雨天専用（Rain）",
      "緊急用（Rescue）",
      "滑走路の長さの区分（Range）"
    ],
    "answer": 0,
    "explanation": "ほぼ同じ方向を向く平行滑走路を区別するため、進入方向から見て左はL、右はR、3本なら中央にCを付ける場合がある。",
    "source": "https://www.faa.gov/Air_traffic/Publications/atpubs/aip_html/part3_ad_section_1.1.html"
  },
  {
    "id": "NQ078",
    "category": "飛行機の雑学",
    "difficulty": "hard",
    "question": "ある滑走路の一方の端には「09」と書いてある。反対側の端の滑走路番号は、通常どうなる？",
    "choices": [
      "09",
      "18",
      "27",
      "36"
    ],
    "answer": 2,
    "explanation": "滑走路番号はおおよその方角から付ける。反対側は180度逆なので数字が18だけ変わり、09の反対は27となる。",
    "source": "https://www.faa.gov/Air_traffic/Publications/atpubs/aip_html/part3_ad_section_1.1.html"
  },
  {
    "id": "NQ079",
    "category": "飛行機の雑学",
    "difficulty": "hard",
    "question": "かつて実際に乗客を運んだ超音速旅客機「コンコルド」。ロンドンからニューヨークまでのおよその飛行時間は？",
    "choices": [
      "約1時間",
      "約3時間半未満",
      "約8時間",
      "約15時間"
    ],
    "answer": 1,
    "explanation": "NASAによると、コンコルドはロンドン―ニューヨーク間を3時間半未満で飛べた。一般的な旅客機の半分程度の時間だった。",
    "source": "https://www.nasa.gov/learning-resources/for-kids-and-students/what-is-supersonic-flight-grades-5-8/"
  },
  {
    "id": "NQ080",
    "category": "飛行機の雑学",
    "question": "超音速の飛行機が通ったとき、地上で大きな「ドーン」という音（ソニックブーム）が聞こえる理由は？",
    "choices": [
      "飛行機のスピーカーが鳴るから",
      "空気の衝撃波が地上に届くから",
      "エンジンが一瞬止まるから",
      "雲同士がぶつかるから"
    ],
    "answer": 1,
    "explanation": "音速を超えて飛ぶ物体の周囲では、空気の圧力が急激に変化する衝撃波が生まれ、地上に届くと大きな音として聞こえる。",
    "source": "https://www.nasa.gov/learning-resources/for-kids-and-students/what-is-supersonic-flight-grades-5-8/"
  },
  {
    "id": "NQ081",
    "category": "空港の未来",
    "difficulty": "hard",
    "question": "NASAの実験機「X-59」がめざしている、超音速飛行の大きな進歩は？",
    "choices": [
      "大きな騒音（ソニックブーム）を小さくする",
      "燃料を使わず永久に飛ぶ",
      "翼をなくして飛ぶ",
      "地上に影を落とさないようにする"
    ],
    "answer": 0,
    "explanation": "X-59は超音速飛行で生じる強い衝撃波の音を小さな『ドン』という音に抑える技術の実証をめざしている。",
    "source": "https://www.nasa.gov/quesst-the-science/"
  },
  {
    "id": "NQ082",
    "category": "飛行機の雑学",
    "question": "ジェットエンジンが飛行機を前へ進める力（推力）を生み出す基本的なしくみは？",
    "choices": [
      "機体の後ろへ大量の空気やガスを押し出す",
      "機体の前へ空気を強く押し出す",
      "地球の磁石に引っ張ってもらう",
      "雲の上に乗って移動する"
    ],
    "answer": 0,
    "explanation": "ジェットエンジンは後ろへ空気・ガスを加速して押し出す。その反作用で機体が前へ進む。ニュートンの運動法則と関係する。",
    "source": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/what-is-thrust/"
  },
  {
    "id": "NQ083",
    "category": "成田空港の歴史",
    "difficulty": "hard",
    "question": "現在の成田市三里塚に建設地が決まる前、1963年に新国際空港の有力候補地となっていたのは現在のどこ？",
    "choices": [
      "千葉県富里市付近",
      "東京都立川市付近",
      "神奈川県鎌倉市付近",
      "茨城県つくば市付近"
    ],
    "answer": 0,
    "explanation": "当初は富里村付近が候補地に内定したが、地元で反対運動が広がった。政府はその後、三里塚を中心とする案に変更し、1966年に決定した。",
    "source": "https://www.narita-airport.jp/ja/company/csr/kyosei-progress/"
  },
  {
    "id": "NQ084",
    "category": "成田空港の歴史",
    "difficulty": "hard",
    "question": "1966年、成田空港建設に反対する住民らが結成した組織の名前は？",
    "choices": [
      "三里塚・芝山連合空港反対同盟",
      "成田空港旅行者連盟",
      "国際線旅客協議会",
      "新東京飛行機愛好会"
    ],
    "answer": 0,
    "explanation": "三里塚・芝山連合空港反対同盟は、農地や暮らしを守りたいという住民の声から結成された。後に運動には多様な立場の人々が加わった。",
    "source": "https://www.narita-airport.jp/ja/company/csr/kyosei-progress/"
  },
  {
    "id": "NQ085",
    "category": "成田空港の歴史",
    "difficulty": "hard",
    "question": "成田空港の建設反対運動で行われた「一坪運動」。主なねらいとして最も適切なのは？",
    "choices": [
      "土地を小さく分けて共有し、買収を難しくする",
      "一坪の土地に飛行機を着陸させる",
      "一坪ごとに野菜を競争して育てる",
      "空港内の店をすべて一坪にする"
    ],
    "answer": 0,
    "explanation": "土地を小さく分けて多くの人が権利を持つことで、建設用地の取得を難しくしようとする運動だった。歴史の背景を知る手がかりになる。",
    "source": "https://www.npa.go.jp/hakusyo/s63/s630101.html"
  },
  {
    "id": "NQ086",
    "category": "成田空港の歴史",
    "difficulty": "hard",
    "question": "1971年、成田空港建設予定地で、法律に基づいて建設に反対する人々の小屋などを強制的に撤去する手続きが行われた。これは何と呼ばれる？",
    "choices": [
      "行政代執行",
      "住民投票",
      "自治体合併",
      "都市博覧会"
    ],
    "answer": 0,
    "explanation": "1971年には第1次・第2次の代執行が行われ、住民や支援者と建設側の間に激しい対立が起きた。事業の進め方と住民の権利を考える出来事だ。",
    "source": "https://www.narita-airport.jp/ja/company/naa/profile/history/"
  },
  {
    "id": "NQ087",
    "category": "成田空港の歴史",
    "difficulty": "hard",
    "question": "成田空港は1978年5月20日に開港したが、管制塔の占拠事件などで延期される前の開港予定日はいつだった？",
    "choices": [
      "1978年1月1日",
      "1978年3月30日",
      "1978年7月7日",
      "1978年12月25日"
    ],
    "answer": 1,
    "explanation": "当初は1978年3月30日に開港する予定だったが、3月26日の管制塔占拠事件により延期され、5月20日に開港した。",
    "source": "https://www.narita-airport.jp/ja/company/csr/kyosei-progress/"
  },
  {
    "id": "NQ088",
    "category": "成田空港の歴史",
    "question": "1978年、成田空港は当初の計画よりも小規模に開港した。開港時に使えた滑走路は何本だった？",
    "choices": [
      "1本",
      "2本",
      "3本",
      "4本"
    ],
    "answer": 0,
    "explanation": "空港建設をめぐる対立や用地取得の難航などがあり、1978年の開港時に使えたのは4,000mのA滑走路1本だけだった。",
    "source": "https://www.narita-airport.jp/ja/company/csr/kyosei-transition/"
  },
  {
    "id": "NQ089",
    "category": "成田空港の歴史",
    "difficulty": "hard",
    "question": "1990年代、成田空港問題の話し合いを進める際、国が反対派に約束した重要なことは？",
    "choices": [
      "今後の土地問題の解決に強制的な手段を使わない",
      "住民との話し合いをすべて中止する",
      "空港の周りの町をすべて移転させる",
      "反対する意見を法律で禁じる"
    ],
    "answer": 0,
    "explanation": "対話の前提として、国は第2期工事の土地問題で強制的な手段を取らないと約束した。対立から話し合いへ向かう大きな転換点となった。",
    "source": "https://www.narita-airport.jp/ja/company/csr/kyosei-progress/"
  },
  {
    "id": "NQ090",
    "category": "成田空港の歴史",
    "difficulty": "hard",
    "question": "1991年から1993年に行われた「成田空港問題シンポジウム」。開催された回数は全部で何回？",
    "choices": [
      "3回",
      "8回",
      "15回",
      "50回"
    ],
    "answer": 2,
    "explanation": "1991年11月に始まり1993年5月まで計15回。国・空港側・県・反対同盟などが過去の問題を公開で話し合った。",
    "source": "https://www.narita-airport.jp/ja/company/naa/profile/history/"
  },
  {
    "id": "NQ091",
    "category": "成田空港の歴史",
    "difficulty": "hard",
    "question": "1993年、成田空港をめぐる対話が進んだ結果、国・空港側が土地について取り下げたものは？",
    "choices": [
      "未買収地の収用裁決申請",
      "成田空港の名称",
      "旅客のパスポート",
      "国際線の時刻表"
    ],
    "answer": 0,
    "explanation": "1993年6月、空港側は未買収地の収用裁決申請を取り下げた。話し合いによって問題を解決する姿勢の具体化の一つだった。",
    "source": "https://www.narita-airport.jp/ja/company/naa/profile/history/"
  },
  {
    "id": "NQ092",
    "category": "成田空港の歴史",
    "difficulty": "hard",
    "question": "1993〜1994年の「成田空港問題円卓会議」は、最終的に合計何回開かれた？",
    "choices": [
      "4回",
      "12回",
      "26回",
      "78回"
    ],
    "answer": 1,
    "explanation": "成田空港問題円卓会議は計12回開催された。空港と地域の共生をめざし、当事者が対等な立場で話し合った。",
    "source": "https://www.narita-airport.jp/ja/company/naa/profile/history/"
  },
  {
    "id": "NQ093",
    "category": "成田空港の歴史",
    "question": "成田空港の長い対立を経て、1994年の円卓会議で重視された考え方はどれ？",
    "choices": [
      "空港と地域が話し合い、共生する",
      "地域住民の声を一切聞かない",
      "滑走路を1日で全部造る",
      "過去の対立について調べない"
    ],
    "answer": 0,
    "explanation": "円卓会議では地域との共生や民主的な手続きを重視する方向が確認された。空港の利便性だけでなく地域の生活も大切にする考え方だ。",
    "source": "https://www.narita-airport.jp/ja/company/csr/kyosei-entaku/"
  },
  {
    "id": "NQ094",
    "category": "成田空港の歴史",
    "question": "成田空港と地域の対立・和解への歩みを展示する「空と大地の歴史館」。開館したのは何年？",
    "choices": [
      "1978年",
      "1991年",
      "2011年",
      "2026年"
    ],
    "answer": 2,
    "explanation": "空と大地の歴史館は2011年6月23日に開館。空港建設を進めた側と反対した側、双方の立場や思いを後世に伝えることを目的としている。",
    "source": "https://www.rekishidensho.jp/about/"
  }
];
