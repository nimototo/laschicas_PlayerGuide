/**
 * 選手名鑑 Webアプリ - ラスチカス
 * データは TEAM_CONFIG / PLAYERS を編集してカスタマイズ
 */

const TEAM_CONFIG = {
  name: 'ラスチカス',
  badge: 'LC',
  badgeIcon: 'icons/laschicas.jpg',
  season: '2026シーズン',
  subtitle: '南山大学女子ラクロス部'
};

const PHOTO_PLACEHOLDER = 'images/placeholder.svg';

const POSITION_ORDER = ['G', 'AT', 'MF', 'DF', 'MG', 'AN', 'TR', 'HC', 'C'];

const STAFF_ORDER = ['MG', 'AN', 'TR', 'HC', 'C'];

const GRADE_GROUPS = [
  { grade: '4年', name: 'ステラ' },
  { grade: '3年', name: 'スリール' },
  { grade: '2年', name: 'スピネル' },
  { grade: '1年', name: 'スパーク' }
];

const PLAYERS = [
  {
    id: 1,
    UN: null,
    CN: 'みみ',
    name: '吉川 ゆうあ',
    photo: 'images/みみ.jpg',
    faculty: '人文学部',
    grade: '1年',
    position: 'TR',
    positionLabel: 'TR',
    highSchool: '昭和高校',
    highSchoolClub: '男子バスケットボール部',
    intro: '自分にできる事を探し、チームを支えられるよう精一杯頑張ります！！',
    seasonGoal: '学生日本一を目指すチームを支えられるよう頑張ります。'
  },
  {
    id: 2,
    UN: 26,
    CN: 'らな',
    name: '桂 結衣',
    photo: 'images/ラナ.jpg',
    faculty: '総合政策学部',
    grade: '1年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 3,
    UN: 23,
    CN: 'ジン',
    name: '此下 璃羽子',
    photo: 'images/じん.jpg',
    faculty: '人文学部',
    grade: '1年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '和歌山信愛高校',
    highSchoolClub: 'バスケットボール部',
    intro: '初心者ですが、日々多くの技術を吸収して一生懸命頑張ります。',
    seasonGoal: '先輩方の試合を見て、学びの多い有意義な時間にしたいです。'
  },
  {
    id: 4,
    UN: null,
    CN: 'ハオ',
    name: '佐久間 乃愛',
    photo: 'images/placeholder.svg',
    faculty: '外国語学部',
    grade: '1年',
    position: 'MG',
    positionLabel: 'MG',
    highSchool: '愛知啓成高校',
    highSchoolClub: '',
    intro: '',
    seasonGoal: '先輩の姿を見ながら学ぶとともに精一杯応援したいです。'
  },
  {
    id: 5,
    UN: 2,
    CN: 'ラメ',
    name: '山口 夏芽',
    photo: 'images/ラメ.jpg',
    faculty: '法学部',
    grade: '1年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '春日井南高校',
    highSchoolClub: 'ソフトボール部',
    intro: '',
    seasonGoal: 'ラクロスを楽しみながら一生懸命がんばります'
  },
  {
    id: 6,
    UN: 87,
    CN: 'ころ',
    name: '柴田 遥加',
    photo: 'images/ころ.jpg',
    faculty: '外国語学部',
    grade: '1年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '',
    highSchoolClub: 'ソフトボール部',
    intro: '',
    seasonGoal: '先輩たちの勝利に貢献できるよう精一杯サーポート応援を行います。'
  },
  {
    id: 7,
    UN: 30,
    CN: 'さん',
    name: '小森 麻妃',
    photo: 'images/さん.jpg',
    faculty: '人文学部',
    grade: '1年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '斐太高校',
    highSchoolClub: 'バスケットボール部',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 8,
    UN: 0,
    CN: 'ネオ',
    name: '深津 陽愛',
    photo: 'images/placeholder.svg',
    faculty: '総合政策学部',
    grade: '1年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '聖霊高校',
    highSchoolClub: 'ラクロス部',
    intro: '',
    seasonGoal: '強気なプレーで頑張ります'
  },
  {
    id: 9,
    UN: 39,
    CN: 'なぎ',
    name: '杉浦 奈々子',
    photo: 'images/なぎ.jpg',
    faculty: '外国語学部',
    grade: '1年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 10,
    UN: null,
    CN: 'あき',
    name: '浅野 さくら',
    photo: 'images/あき.jpg',
    faculty: '外国語学部',
    grade: '1年',
    position: 'AN',
    positionLabel: 'AN',
    highSchool: '桜花学園高校',
    highSchoolClub: '卓球部',
    intro: '',
    seasonGoal: 'きちんとルールを覚えて楽しむ！勝つ！'
  },
  {
    id: 11,
    UN: null,
    CN: 'すん',
    name: '大西 陽詩',
    photo: 'images/すん.jpg',
    faculty: '外国語学部',
    grade: '1年',
    position: 'TR',
    positionLabel: 'TR',
    highSchool: '中京大中京高校',
    highSchoolClub: '家庭科部',
    intro: '',
    seasonGoal: 'スタッフとしてサポートできるよう精一杯頑張ります。'
  },
  {
    id: 12,
    UN: 64,
    CN: 'ベリー',
    name: '大石 百花',
    photo: 'images/べりー.jpg',
    faculty: '経済学部',
    grade: '1年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '長野商業高校',
    highSchoolClub: 'バスケットボール部',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 13,
    UN: 18,
    CN: 'とき',
    name: '藤井 柚羽',
    photo: 'images/placeholder.svg',
    faculty: '経済学部',
    grade: '1年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '四日市商業高校',
    highSchoolClub: 'バスケットボール部',
    intro: '',
    seasonGoal: '自分にできることを精一杯頑張ります。'
  },
  {
    id: 14,
    UN: 15,
    CN: 'ユラ',
    name: '不破 優来',
    photo: 'images/ゆら.jpg',
    faculty: '外国語学部',
    grade: '1年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 15,
    UN: 1,
    CN: 'ニカ',
    name: '岡田 唯花',
    photo: 'images/ニカ.jpg',
    faculty: '経営学部',
    grade: '2年',
    position: 'AT',
    positionLabel: 'AT',
    highSchool: '聖霊高校',
    highSchoolClub: 'ラクロス部',
    intro: '',
    seasonGoal: 'いっぱい点取って活躍します！'
  },
  {
    id: 16,
    UN: 22,
    CN: 'りお',
    name: '岩田 理央',
    photo: 'images/りお.jpg',
    faculty: '経営学部',
    grade: '2年',
    position: 'DF',
    positionLabel: 'DF',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 17,
    UN: null,
    CN: 'ラテ',
    name: '桐山 知世',
    photo: 'images/placeholder.svg',
    faculty: '経済学部',
    grade: '2年',
    position: 'AN',
    positionLabel: 'AN',
    highSchool: '県立岐阜商業高校',
    highSchoolClub: '放送部',
    intro: '',
    seasonGoal: '勝利に貢献するスタッフになります！'
  },
  {
    id: 18,
    UN: 3,
    CN: 'アロ',
    name: '阪野 仁菜',
    photo: 'images/アロ.jpg',
    faculty: '外国語学部',
    grade: '2年',
    position: 'DF',
    positionLabel: 'DF',
    highSchool: '聖霊高校',
    highSchoolClub: 'ラクロス部',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 19,
    UN: 82,
    CN: 'ハニ',
    name: '三原 奈夏',
    photo: 'images/ハニ.jpg',
    faculty: '人文学部',
    grade: '2年',
    position: 'AT',
    positionLabel: 'AT',
    highSchool: '',
    highSchoolClub: 'バレーボール部',
    intro: '',
    seasonGoal: '得意のダッジで強気のワンかけて、南山の得点に繋げられるように精一杯頑張ります！'
  },
  {
    id: 20,
    UN: 99,
    CN: 'ミレ',
    name: '山田 真緒',
    photo: 'images/placeholder.svg',
    faculty: '外国語学部',
    grade: '2年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '鶯谷高校',
    highSchoolClub: '陸上部',
    intro: 'トレーナーからプレーヤーに転向しました！',
    seasonGoal: 'プレーヤー転向したのが分からないくらい上手になります！'
  },
  {
    id: 21,
    UN: null,
    CN: 'もも',
    name: '森下 菜緒',
    photo: 'images/もも.jpg',
    faculty: '経営学部',
    grade: '2年',
    position: 'AN',
    positionLabel: 'AN',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 22,
    UN: 31,
    CN: 'るい',
    name: '西川 知花',
    photo: 'images/るい.jpg',
    faculty: '人文学部',
    grade: '2年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '明和高校',
    highSchoolClub: 'ソフトテニス部',
    intro: 'ラクロスと美味しいものを食べることが大好きです。',
    seasonGoal: '勝ちます！！！'
  },
  {
    id: 23,
    UN: 46,
    CN: 'スピカ',
    name: '田中 裟己',
    photo: 'images/スピカ.jpg',
    faculty: '理工学部',
    grade: '2年',
    position: 'DF',
    positionLabel: 'DF',
    highSchool: '岡崎城西高校',
    highSchoolClub: '天文部',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 24,
    UN: 29,
    CN: 'ウナ',
    name: '内田 奈菜',
    photo: 'images/ウナ.jpg',
    faculty: '国際教養学部',
    grade: '2年',
    position: 'G',
    positionLabel: 'G',
    highSchool: '岐阜東高校',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 25,
    UN: 35,
    CN: 'あお',
    name: '富樫 美心',
    photo: 'images/あお.jpg',
    faculty: '国際教養学部',
    grade: '2年',
    position: 'G',
    positionLabel: 'G',
    highSchool: '名城大附属高校',
    highSchoolClub: '硬式テニス部',
    intro: 'あおいろが大好きです！たくさんあお色のもの持ってます💙喋ることと食べることと寝ることもだいすきです。',
    seasonGoal: '昨年は怪我で何もできなかったので今年こそはチームの力になれるように頑張ります！！！'
  },
  {
    id: 26,
    UN: 10,
    CN: 'らこ',
    name: '髙橋 麗乃',
    photo: 'images/placeholder.svg',
    faculty: '総合政策学部',
    grade: '2年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '西春高校',
    highSchoolClub: '帰宅部',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 27,
    UN: null,
    CN: 'せり',
    name: '岩田 日陽',
    photo: 'images/せり.jpg',
    faculty: '法学部',
    grade: '3年',
    position: 'AN',
    positionLabel: 'AN',
    highSchool: '松蔭高校',
    highSchoolClub: 'バドミントン部',
    intro: '焼肉のせせりが好きです',
    seasonGoal: 'ANとして、スタッフとして学生日本一達成できるよう、がんばります！！'
  },
  {
    id: 28,
    UN: 8,
    CN: 'レオ',
    name: '佐橋 理央奈',
    photo: 'images/レオ.jpg',
    faculty: '外国語学部',
    grade: '3年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 29,
    UN: 65,
    CN: 'なな',
    name: '山下 佳那子',
    photo: 'images/なな.jpg',
    faculty: '国際教養学部',
    grade: '3年',
    position: 'G',
    positionLabel: 'G',
    highSchool: '中京大中京高校',
    highSchoolClub: '',
    intro: '',
    seasonGoal: 'スーパーセーブで勝利に導きます！'
  },
  {
    id: 30,
    UN: 21,
    CN: 'ルカ',
    name: '小島 愛未',
    photo: 'images/ルカ.jpg',
    faculty: '外国語学部',
    grade: '3年',
    position: 'AT',
    positionLabel: 'AT',
    highSchool: '愛知淑徳高校',
    highSchoolClub: 'バトントワーリング部',
    intro: 'ラスチカスの太陽',
    seasonGoal: '持ち前の明るさでチームを盛り上げてドローもATも全力で頑張ります！'
  },
  {
    id: 31,
    UN: 11,
    CN: 'れん',
    name: '平井 伶奈',
    photo: 'images/れん.jpg',
    faculty: '経済学部',
    grade: '3年',
    position: 'AT',
    positionLabel: 'AT',
    highSchool: '愛知高校',
    highSchoolClub: '水泳部',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 32,
    UN: 78,
    CN: 'エア',
    name: '鈴木 萌日',
    photo: 'images/エア.jpg',
    faculty: '外国語学部',
    grade: '3年',
    position: 'AT',
    positionLabel: 'AT',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 33,
    UN: null,
    CN: 'うみ',
    name: '澤田 姉弥',
    photo: 'images/うみ.jpg',
    faculty: '外国語学部',
    grade: '3年',
    position: 'MG',
    positionLabel: 'MG',
    highSchool: '清林館高校',
    highSchoolClub: 'チアリーディング部',
    intro: '',
    seasonGoal: '選手を全力で輝かせます！'
  },
  {
    id: 34,
    UN: 33,
    CN: 'とい',
    name: '街道 理帆',
    photo: 'images/とい.jpg',
    faculty: '国際教養学部',
    grade: '4年',
    position: 'AT',
    positionLabel: 'AT',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 35,
    UN: 16,
    CN: 'とわ',
    name: '結城 茉那',
    photo: 'images/とわ.jpg',
    faculty: '経営学部',
    grade: '4年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '天白高校',
    highSchoolClub: 'ハンドボール部',
    intro: 'いつでも明るく元気にプレーします！',
    seasonGoal: 'ドローから流れを作ります！！ラストイヤー悔いのないように頑張ります！'
  },
  {
    id: 36,
    UN: 27,
    CN: 'ぷぅ',
    name: '古庄 琴音',
    photo: 'images/ぷぅ.jpg',
    faculty: '外国語学部',
    grade: '4年',
    position: 'AT',
    positionLabel: 'AT',
    highSchool: '菊里高校',
    highSchoolClub: 'バスケットボール部',
    intro: 'フランスマウスピースが特徴です！身長を活かした強気のワンが得意です！',
    seasonGoal: '落ち着き強気で攻撃を仕掛け、チームの起爆剤になります'
  },
  {
    id: 37,
    UN: null,
    CN: 'きり',
    name: '神谷 咲希',
    photo: 'images/きり.jpg',
    faculty: '総合政策学部',
    grade: '4年',
    position: 'MG',
    positionLabel: 'MG',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 38,
    UN: null,
    CN: 'うる',
    name: '水谷 美彩',
    photo: 'images/うる.jpg',
    faculty: '経営学部',
    grade: '4年',
    position: 'TR',
    positionLabel: 'TR',
    highSchool: '大垣南高校',
    highSchoolClub: 'バドミントン部',
    intro: '',
    seasonGoal: 'どんな怪我にも対応できるように頑張ります！'
  },
  {
    id: 39,
    UN: 24,
    CN: 'しろ',
    name: '水野 恵愛',
    photo: 'images/しろ.jpg',
    faculty: '法学部',
    grade: '4年',
    position: 'DF',
    positionLabel: 'DF',
    highSchool: '名東高校',
    highSchoolClub: 'ハンドボール部',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 40,
    UN: 88,
    CN: 'りん',
    name: '川島 彩葵',
    photo: 'images/りん.jpg',
    faculty: '経済学部',
    grade: '4年',
    position: 'AT',
    positionLabel: 'AT',
    highSchool: '桜台高校',
    highSchoolClub: 'ハンドボール部',
    intro: '',
    seasonGoal: 'いっぱい点取ります！'
  },
  {
    id: 41,
    UN: 13,
    CN: 'ねる',
    name: '福島 碧',
    photo: 'images/ねる.jpg',
    faculty: '経営学部',
    grade: '4年',
    position: 'G',
    positionLabel: 'G',
    highSchool: '名古屋南高校',
    highSchoolClub: 'バドミントン部',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 42,
    UN: 77,
    CN: 'もえか',
    name: '米倉 萌華',
    photo: 'images/もえか.jpg',
    faculty: '外国語学部',
    grade: '4年',
    position: 'DF',
    positionLabel: 'DF',
    highSchool: '津高校',
    highSchoolClub: '硬式テニス部',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 43,
    UN: 4,
    CN: 'ロニ',
    name: '保坂　ひより',
    photo: 'images/ロニ.jpg',
    faculty: '外国語学部',
    grade: '1年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 44,
    UN: 7,
    CN: 'ラム',
    name: '中村　彩夏',
    photo: 'images/ラム.jpg',
    faculty: '外国語学部',
    grade: '3年',
    position: 'AT',
    positionLabel: 'AT',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 45,
    UN: 9,
    CN: 'くる',
    name: '内藤　日香',
    photo: 'images/くる.jpg',
    faculty: '外国語学部',
    grade: '2年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 46,
    UN: 12,
    CN: 'むく',
    name: '稲垣　彩菜',
    photo: 'images/むく.jpg',
    faculty: '総合政策学部',
    grade: '3年',
    position: 'AT',
    positionLabel: 'AT',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 47,
    UN: 17,
    CN: 'める',
    name: '石川　愛琉',
    photo: 'images/める.jpg',
    faculty: '経営学部',
    grade: '1年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 48,
    UN: 25,
    CN: 'ゆめ',
    name: '神藤　柚希',
    photo: 'images/ユメ.jpg',
    faculty: '外国語学部',
    grade: '1年',
    position: 'G',
    positionLabel: 'G',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 49,
    UN: 20,
    CN: 'しゅう',
    name: '小久保　澄玲',
    photo: 'images/しゅう.jpg',
    faculty: '法学部',
    grade: '1年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 50,
    UN: 28,
    CN: 'タル',
    name: '藤田　彩華',
    photo: 'images/タル.jpg',
    faculty: '総合政策学部',
    grade: '3年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 51,
    UN: 32,
    CN: 'ちゃい',
    name: '水谷　咲月',
    photo: 'images/ちゃい.jpg',
    faculty: '外国語学部',
    grade: '2年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 52,
    UN: 34,
    CN: 'ミヤ',
    name: '脇田　彩良',
    photo: 'images/ミヤ.jpg',
    faculty: '経営学部',
    grade: '1年',
    position: 'G',
    positionLabel: 'G',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 53,
    UN: 42,
    CN: 'ルネ',
    name: '岡田　春音',
    photo: 'images/ルネ.jpg',
    faculty: '人文学部',
    grade: '1年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 54,
    UN: 51,
    CN: 'うた',
    name: '松田　和花',
    photo: 'images/うた.jpg',
    faculty: '国際教養学部',
    grade: '2年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 55,
    UN: 73,
    CN: 'しらす',
    name: '青井　琴菜',
    photo: 'images/しらす.jpg',
    faculty: '総合政策学部',
    grade: '3年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 56,
    UN: 75,
    CN: 'なる',
    name: '梅垣　奈々子',
    photo: 'images/なる.jpg',
    faculty: '人文学部',
    grade: '1年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 57,
    UN: 97,
    CN: 'ミラ',
    name: '金　梨乃',
    photo: 'images/ミラ.jpg',
    faculty: '人文学部',
    grade: '4年',
    position: 'MF',
    positionLabel: 'MF',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 58,
    UN: null,
    CN: 'りる',
    name: '仲　ひより',
    photo: 'images/りる.jpg',
    faculty: '外国語学部',
    grade: '1年',
    position: 'AN',
    positionLabel: 'AN',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 59,
    UN: null,
    CN: 'モナ',
    name: '三島　菜奈',
    photo: 'images/モナ.jpg',
    faculty: '外国語学部',
    grade: '1年',
    position: 'MG',
    positionLabel: 'MG',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 60,
    UN: null,
    CN: 'さや',
    name: '梶　菜奈子',
    photo: 'images/さや.jpg',
    faculty: '外国語学部',
    grade: '1年',
    position: 'MG',
    positionLabel: 'MG',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  },
  {
    id: 61,
    UN: null,
    CN: 'ニモ',
    name: '井瀬　瑛子',
    photo: 'images/ニモ.jpg',
    faculty: '総合政策学部',
    grade: '3年',
    position: 'TR',
    positionLabel: 'TR',
    highSchool: '',
    highSchoolClub: '',
    intro: '',
    seasonGoal: ''
  }
];
// ---- State ----
let groupMode = 'position';
let currentFilter = 'all';
let searchQuery = '';
/** @type {'tile' | 'table'} */
let viewMode = 'tile';
let selectedPlayer = null;

// ---- DOM ----
const $ = (sel) => document.querySelector(sel);
const playerSections = $('#playerSections');
const subFilters = $('#subFilters');
const groupModeEl = $('#groupMode');
const searchInput = $('#searchInput');
const searchClear = $('#searchClear');
const emptyState = $('#emptyState');
const overlay = $('#overlay');
const bottomSheet = $('#bottomSheet');
const sheetContent = $('#sheetContent');
const sheetHandle = $('#sheetHandle');
const viewToggle = $('#viewToggle');

// ---- Helpers ----
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderPhoto(player, className) {
  const src = player.photo || PHOTO_PLACEHOLDER;
  const alt = escapeHtml(player.name);
  return `<img class="${className}" src="${src}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.src='${PHOTO_PLACEHOLDER}'">`;
}

// ---- Init ----
function init() {
  $('#teamName').textContent = TEAM_CONFIG.name;
  const teamBadge = $('#teamBadge');
  if (TEAM_CONFIG.badgeIcon) {
    teamBadge.src = TEAM_CONFIG.badgeIcon;
    teamBadge.alt = TEAM_CONFIG.name;
  }
  $('#teamSeason').textContent = TEAM_CONFIG.season;
  const subtitle = $('#teamSubtitle');
  if (subtitle) subtitle.textContent = TEAM_CONFIG.subtitle;

  renderSubFilters();
  updateViewToggleUI();
  renderPlayers();
  bindEvents();
}

function sortByUN(players) {
  return [...players].sort((a, b) => {
    if (a.UN == null && b.UN == null) return a.position.localeCompare(b.position);
    if (a.UN == null) return 1;
    if (b.UN == null) return -1;
    return a.UN - b.UN;
  });
}

function gradeToNumber(grade) {
  const n = parseInt(grade, 10);
  return Number.isNaN(n) ? 0 : n;
}

function staffRoleOrder(position) {
  const idx = STAFF_ORDER.indexOf(position);
  return idx === -1 ? STAFF_ORDER.length : idx;
}

/** UN順表示: 背番号昇順 → スタッフは MG→AN→TR、各役割内は学年降順 */
function sortForUNView(players) {
  const withUN = players.filter(p => p.UN != null).sort((a, b) => a.UN - b.UN);
  const staff = players.filter(p => p.UN == null).sort((a, b) => {
    const roleDiff = staffRoleOrder(a.position) - staffRoleOrder(b.position);
    if (roleDiff !== 0) return roleDiff;
    return gradeToNumber(b.grade) - gradeToNumber(a.grade);
  });
  return [...withUN, ...staff];
}

function getSearchMatchedPlayers() {
  const q = searchQuery.toLowerCase();
  return PLAYERS.filter(p => {
    if (!q) return true;
    return p.name.toLowerCase().includes(q) ||
      (p.CN && p.CN.toLowerCase().includes(q)) ||
      (p.UN != null && String(p.UN).includes(q)) ||
      p.positionLabel.includes(q) ||
      p.position.includes(q) ||
      p.faculty.includes(q) ||
      p.highSchool.includes(q) ||
      p.grade.includes(q) ||
      GRADE_GROUPS.some(g => g.grade === p.grade && g.name.includes(q));
  });
}

function getDisplayGroups() {
  const matched = getSearchMatchedPlayers();

  if (groupMode === 'position') {
    if (currentFilter === 'all') {
      return POSITION_ORDER.map(pos => ({
        title: pos,
        players: sortByUN(matched.filter(p => p.position === pos))
      })).filter(g => g.players.length > 0);
    }
    return [{
      title: currentFilter,
      players: sortByUN(matched.filter(p => p.position === currentFilter))
    }];
  }

  if (groupMode === 'un') {
    return [{
      title: null,
      players: sortForUNView(matched)
    }];
  }

  // grade mode
  if (currentFilter === 'all') {
    return GRADE_GROUPS.map(g => ({
      title: `${g.name}（${g.grade}）`,
      players: sortByUN(matched.filter(p => p.grade === g.grade))
    })).filter(g => g.players.length > 0);
  }
  const group = GRADE_GROUPS.find(g => g.grade === currentFilter);
  return [{
    title: group ? `${group.name}（${group.grade}）` : currentFilter,
    players: sortByUN(matched.filter(p => p.grade === currentFilter))
  }];
}

function renderSubFilters() {
  if (groupMode === 'un') {
    subFilters.innerHTML = '';
    subFilters.classList.add('hidden');
    return;
  }
  subFilters.classList.remove('hidden');

  const chips = groupMode === 'position'
    ? ['all', ...POSITION_ORDER].map(key => {
        const label = key === 'all' ? 'すべて' : key;
        const active = currentFilter === key ? ' active' : '';
        return `<button class="filter-chip${active}" data-filter="${key}">${label}</button>`;
      }).join('')
    : ['all', ...GRADE_GROUPS.map(g => g.grade)].map(key => {
        const label = key === 'all' ? 'すべて' : GRADE_GROUPS.find(g => g.grade === key).name;
        const active = currentFilter === key ? ' active' : '';
        return `<button class="filter-chip${active}" data-filter="${key}">${label}</button>`;
      }).join('');

  subFilters.innerHTML = chips;
}

function formatCN(player) {
  return player.CN ? escapeHtml(player.CN) : '';
}

function renderPlayerCard(p, i) {
  const cnHtml = p.CN
    ? `<div class="player-card__cn">${formatCN(p)}</div>`
    : '';
  return `
    <article class="player-card" data-id="${p.id}" style="animation-delay: ${i * 0.05}s">
      <div class="player-card__visual">
        <span class="player-card__number${p.UN == null ? ' player-card__number--staff' : ''}">${formatUN(p)}</span>
        ${renderPhoto(p, 'player-card__photo')}
      </div>
      <div class="player-card__info">
        <div class="player-card__name">${escapeHtml(p.name)}</div>
        ${cnHtml}
        <div class="player-card__faculty">${escapeHtml(p.faculty)}</div>
        <div class="player-card__meta">
          <span class="player-card__position">${p.position}</span>
          ${p.grade ? `<span class="player-card__grade">${escapeHtml(p.grade)}</span>` : ''}
        </div>
      </div>
    </article>
  `;
}

function renderPlayerTableRow(p) {
  return `
    <tr class="player-table__row" data-id="${p.id}" tabindex="0" role="button" aria-label="${escapeHtml(p.name)}の詳細を表示">
      <td class="player-table__cell player-table__cell--photo">
        <div class="player-table__thumb">${renderPhoto(p, 'player-table__photo')}</div>
      </td>
      <td class="player-table__cell player-table__cell--un">${escapeHtml(String(formatUN(p)))}</td>
      <td class="player-table__cell player-table__cell--cn">${p.CN ? formatCN(p) : '—'}</td>
      <td class="player-table__cell player-table__cell--name">${escapeHtml(p.name)}</td>
      <td class="player-table__cell player-table__cell--faculty">${escapeHtml(p.faculty || '—')}</td>
      <td class="player-table__cell player-table__cell--grade">${p.grade ? escapeHtml(p.grade) : '—'}</td>
      <td class="player-table__cell player-table__cell--pos">
        <span class="player-table__pos">${escapeHtml(p.position)}</span>
      </td>
    </tr>
  `;
}

const PLAYER_TABLE_HEAD = `
  <thead>
    <tr>
      <th scope="col" class="player-table__th player-table__th--photo">写真</th>
      <th scope="col" class="player-table__th player-table__th--un">UN</th>
      <th scope="col" class="player-table__th player-table__th--cn">CN</th>
      <th scope="col" class="player-table__th player-table__th--name">名前</th>
      <th scope="col" class="player-table__th player-table__th--faculty">学部</th>
      <th scope="col" class="player-table__th player-table__th--grade">学年</th>
      <th scope="col" class="player-table__th player-table__th--pos">POS</th>
    </tr>
  </thead>
`;

function formatUN(player) {
  return player.UN != null ? player.UN : player.position;
}

function formatUNLabel(player) {
  return player.UN != null ? String(player.UN) : '—';
}

function renderPlayers() {
  const groups = getDisplayGroups();
  const total = groups.reduce((n, g) => n + g.players.length, 0);

  if (total === 0) {
    playerSections.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  const showSectionTitle = groupMode !== 'un' && (groups.length > 1 || currentFilter === 'all');

  if (viewMode === 'table') {
    playerSections.innerHTML = groups.map(group => {
      const rows = group.players.map(p => renderPlayerTableRow(p)).join('');
      const titleHtml = showSectionTitle && group.title
        ? `<h2 class="player-section__title">${escapeHtml(group.title)}</h2>`
        : '';
      return `
        <section class="player-section">
          ${titleHtml}
          <div class="player-table-wrap">
            <table class="player-table">
              ${PLAYER_TABLE_HEAD}
              <tbody>${rows}</tbody>
            </table>
          </div>
        </section>
      `;
    }).join('');
    return;
  }

  let cardIndex = 0;
  playerSections.innerHTML = groups.map(group => {
    const cards = group.players.map(p => renderPlayerCard(p, cardIndex++)).join('');
    const titleHtml = showSectionTitle && group.title
      ? `<h2 class="player-section__title">${escapeHtml(group.title)}</h2>`
      : '';
    return `
      <section class="player-section">
        ${titleHtml}
        <div class="player-grid">${cards}</div>
      </section>
    `;
  }).join('');
}

function updateViewToggleUI() {
  if (!viewToggle) return;
  const isTable = viewMode === 'table';
  const label = isTable ? 'タイル表示に切替' : '一覧表示に切替';
  viewToggle.setAttribute('aria-label', label);
  viewToggle.setAttribute('title', label);
  viewToggle.setAttribute('aria-pressed', String(isTable));
  viewToggle.querySelector('.icon-grid')?.classList.toggle('hidden', isTable);
  viewToggle.querySelector('.icon-list')?.classList.toggle('hidden', !isTable);
}

function openPlayerDetail(id) {
  const player = PLAYERS.find(p => p.id === Number(id));
  if (player) openSheet(player);
}

function openSheet(player) {
  selectedPlayer = player;

  sheetContent.innerHTML = `
    <div class="sheet-hero">
      <div class="sheet-hero__photo-wrap">
        ${renderPhoto(player, 'sheet-hero__photo')}
      </div>
      <div class="sheet-hero__number">${player.UN != null ? '#' + player.UN : player.position}</div>
      <h2 class="sheet-hero__name" id="sheetName">${escapeHtml(player.name)}</h2>
      ${player.CN ? `<p class="sheet-hero__cn">${formatCN(player)}</p>` : ''}
      <div class="sheet-hero__tags">
        <span class="sheet-tag">${escapeHtml(player.positionLabel)}</span>
        ${player.grade ? `<span class="sheet-tag">${escapeHtml(player.grade)}</span>` : ''}
        ${player.faculty ? `<span class="sheet-tag">${escapeHtml(player.faculty)}</span>` : ''}
      </div>
    </div>

    <div class="sheet-section">
      <h3 class="sheet-section__title">プロフィール</h3>
      <div class="sheet-profile-list">
        <div class="sheet-profile-item">
          <span class="sheet-profile-item__label">UN（背番号）</span>
          <span class="sheet-profile-item__value">${formatUNLabel(player)}</span>
        </div>
        <div class="sheet-profile-item">
          <span class="sheet-profile-item__label">CN（コートネーム）</span>
          <span class="sheet-profile-item__value">${player.CN ? formatCN(player) : '—'}</span>
        </div>
        ${player.faculty ? `
        <div class="sheet-profile-item">
          <span class="sheet-profile-item__label">在籍学部</span>
          <span class="sheet-profile-item__value">${escapeHtml(player.faculty)}</span>
        </div>` : ''}
        ${player.grade ? `
        <div class="sheet-profile-item">
          <span class="sheet-profile-item__label">学年</span>
          <span class="sheet-profile-item__value">${escapeHtml(player.grade)}</span>
        </div>` : ''}
        <div class="sheet-profile-item">
          <span class="sheet-profile-item__label">ポジション</span>
          <span class="sheet-profile-item__value">${escapeHtml(player.positionLabel)}</span>
        </div>
        <div class="sheet-profile-item">
          <span class="sheet-profile-item__label">出身高校</span>
          <span class="sheet-profile-item__value">${escapeHtml(player.highSchool)}</span>
        </div>
        <div class="sheet-profile-item">
          <span class="sheet-profile-item__label">高校時の部活</span>
          <span class="sheet-profile-item__value">${escapeHtml(player.highSchoolClub)}</span>
        </div>
      </div>
    </div>

    <div class="sheet-section">
      <h3 class="sheet-section__title">自己紹介</h3>
      <p class="sheet-bio">${escapeHtml(player.intro)}</p>
    </div>

    <div class="sheet-section">
      <h3 class="sheet-section__title">2026シーズンにかける意気込み</h3>
      <p class="sheet-bio sheet-bio--highlight">${escapeHtml(player.seasonGoal)}</p>
    </div>
  `;

  overlay.classList.remove('hidden');
  requestAnimationFrame(() => {
    overlay.classList.add('visible');
    bottomSheet.classList.add('open');
  });
  document.body.style.overflow = 'hidden';
}

function closeSheet() {
  overlay.classList.remove('visible');
  bottomSheet.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => {
    overlay.classList.add('hidden');
    selectedPlayer = null;
  }, 450);
}

// ---- Bottom sheet drag ----
let dragStartY = 0;
let dragCurrentY = 0;
let isDragging = false;

function onDragStart(e) {
  isDragging = true;
  dragStartY = e.touches ? e.touches[0].clientY : e.clientY;
  bottomSheet.style.transition = 'none';
}

function onDragMove(e) {
  if (!isDragging) return;
  dragCurrentY = (e.touches ? e.touches[0].clientY : e.clientY) - dragStartY;
  if (dragCurrentY > 0) {
    bottomSheet.style.transform = `translateY(${dragCurrentY}px)`;
    overlay.style.opacity = Math.max(0, 1 - dragCurrentY / 400);
  }
}

function onDragEnd() {
  if (!isDragging) return;
  isDragging = false;
  bottomSheet.style.transition = '';
  bottomSheet.style.transform = '';
  overlay.style.opacity = '';
  if (dragCurrentY > 120) {
    closeSheet();
  }
  dragCurrentY = 0;
}

function bindEvents() {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    searchClear.classList.toggle('hidden', !searchQuery);
    renderPlayers();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.classList.add('hidden');
    renderPlayers();
    searchInput.focus();
  });

  groupModeEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.group-mode__btn');
    if (!btn || btn.dataset.mode === groupMode) return;
    groupMode = btn.dataset.mode;
    currentFilter = 'all';
    groupModeEl.querySelectorAll('.group-mode__btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderSubFilters();
    renderPlayers();
  });

  subFilters.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    subFilters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentFilter = chip.dataset.filter;
    renderPlayers();
  });

  playerSections.addEventListener('click', (e) => {
    const target = e.target.closest('.player-card, .player-table__row');
    if (!target) return;
    openPlayerDetail(target.dataset.id);
  });

  playerSections.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const row = e.target.closest('.player-table__row');
    if (!row) return;
    e.preventDefault();
    openPlayerDetail(row.dataset.id);
  });

  if (viewToggle) {
    viewToggle.addEventListener('click', () => {
      viewMode = viewMode === 'tile' ? 'table' : 'tile';
      updateViewToggleUI();
      renderPlayers();
    });
  }

  overlay.addEventListener('click', closeSheet);

  sheetHandle.addEventListener('touchstart', onDragStart, { passive: true });
  sheetHandle.addEventListener('touchmove', onDragMove, { passive: true });
  sheetHandle.addEventListener('touchend', onDragEnd);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && selectedPlayer) closeSheet();
  });
}

init();
