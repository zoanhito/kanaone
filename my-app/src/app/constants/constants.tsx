
export interface kana{
    [key: string]: string;
}

export const hiraganaShortTest: string[] = [
    "あ",
    "い",
    "う",
    "ん",
];

export const Hira: kana = {
    "a": "あ", 
    "i": "い", 
    "u": "う", 
    "e": "え", 
    "o": "お", 
    "ka": "か", 
    "ki": "き", 
    "ku": "く", 
    "ke": "け", 
    "ko": "こ", 
    "sa": "さ", 
    "shi": "し", 
    "su": "す", 
    "se": "せ", 
    "so": "そ", 
    "ta": "た", 
    "chi": "ち", 
    "tsu": "つ", 
    "te": "て", 
    "to": "と", 
    "na": "な", 
    "ni": "に", 
    "nu": "ぬ", 
    "ne": "ね", 
    "no": "の", 
    "ha": "は", 
    "hi": "ひ", 
    "fu": "ふ", 
    "he": "へ", 
    "ho": "ほ", 
    "ma": "ま", 
    "mi": "み", 
    "mu": "む", 
    "me": "め", 
    "mo": "も", 
    "ya": "や", 
    "yu": "ゆ", 
    "yo": "よ", 
    "ra": "ら", 
    "ri": "り", 
    "ru": "る", 
    "re": "れ", 
    "ro": "ろ", 
    "wa": "わ", 
    "wo": "を", 
    "n": "ん", 
};

export const DakutenHira: kana = {
    "ga":"が",
    "gi":"ぎ",
    "gu":"ぐ",
    "ge":"げ",
    "go":"ご",
    "za":"ざ",
    "ji":"じ",	
    "zu":"ず",	
    "ze":"ぜ",	
    "zo":"ぞ",
    "da":"だ",
    "di":"ぢ",	//ji
    "du":"づ",	//zu
    "de":"で",	
    "do":"ど",
    "ba":"ば",	
    "bi":"び",	
    "bu":"ぶ",	
    "be":"べ",	
    "bo":"ぼ",
    "pa":"ぱ",
    "pi":"ぴ",	
    "pu":"ぷ",	
    "pe":"ぺ",	
    "po":"ぽ",
}

export const ComboHira: kana = {
    "kya":"きゃ",
    "kyu":"きゅ",
    "kyo":"きょ",
    "sha":"しゃ",
    "shu":"しゅ",
    "sho":"しょ",
    "cha":"ちゃ",
    "chu":"ちゅ",
    "cho":"ちょ",
    "nya":"にゃ",
    "nyu":"にゅ",
    "nyo":"にょ",
    "hya":"ひゃ",
    "hyu":"ひゅ",
    "hyo":"ひょ",
    "mya":"みゃ",
    "myu":"みゅ",
    "myo":"みょ",
    "rya":"りゃ",
    "ryu":"りゅ",
    "ryo":"りょ",
}

export const DakutenComboHira: kana = {
    "gya":"ぎゃ",
    "gyu":"ぎゅ",
    "gyo":"ぎょ",
    "bya":"びゃ",
    "byu":"びゅ",
    "byo":"びょ",
    "pya":"ぴゃ",
    "pyu":"ぴゅ",
    "pyo":"ぴょ",
    "ja":"じゃ",
    "ju":"じゅ",
    "jo":"じょ",
}

export const Kata: kana = {
    "a" : "ア", 
    "i" : "イ", 
    "u" : "ウ", 
    "e" : "エ", 
    "o" : "オ", 
    "ka" : "カ", 
    "ki" : "キ", 
    "ku" : "ク", 
    "ke" : "ケ", 
    "ko" : "コ", 
    "sa" : "サ", 
    "shi" : "シ", 
    "su" : "ス", 
    "se" : "セ", 
    "so" : "ソ", 
    "ta" : "タ", 
    "chi" : "チ", 
    "tsu" : "ツ", 
    "te" : "テ", 
    "to" : "ト", 
    "na" : "ナ", 
    "ni" : "ニ", 
    "nu" : "ヌ", 
    "ne" : "ネ", 
    "no" : "ノ", 
    "ha" : "ハ", 
    "hi" : "ヒ", 
    "fu" : "フ", 
    "he" : "ヘ", 
    "ho" : "ホ", 
    "ma" : "マ", 
    "mi" : "ミ", 
    "mu" : "ム", 
    "me" : "メ", 
    "mo" : "モ", 
    "ya" : "ヤ", 
    "yu" : "ユ", 
    "yo" : "ヨ", 
    "ra" : "ラ", 
    "ri" : "リ", 
    "ru" : "ル", 
    "re" : "レ", 
    "ro" : "ロ", 
    "wa" : "ワ", 
    "wo" : "ヲ", 
    "n" : "ン", 
}

export const DakutenKata: kana = {
    "ga":"ガ",
    "gi":"ギ",
    "gu":"グ",
    "ge":"ゲ",
    "go":"ゴ",
    "za":"ザ",
    "ji":"ジ",
    "zu":"ズ",
    "ze":"ゼ",
    "zo":"ゾ",
    "da":"ダ",
    "di":"ヂ", //ji
    "du":"ヅ", //zu
    "de":"デ",
    "do":"ド",
    "ba":"バ",
    "bi":"ビ",
    "bu":"ブ",
    "be":"ベ",
    "bo":"ボ",
    "pa":"パ",
    "pi":"ピ",
    "pu":"プ",
    "pe":"ペ",
    "po":"ポ",
}

export const ComboKata: kana = {
    "kya":"キャ",
    "kyu":"キュ",
    "kyo":"キョ",
    "sha":"シャ",
    "shu":"シュ",
    "sho":"ショ",
    "cha":"チャ",
    "chu":"チュ",
    "cho":"チョ",
    "nya":"ニャ",
    "nyu":"ニュ",
    "nyo":"ニョ",
    "hya":"ヒャ",
    "hyu":"ヒュ",
    "hyo":"ヒョ",
    "mya":"ミャ",
    "myu":"ミュ",
    "myo":"ミョ",
    "rya":"リャ",
    "ryu":"リュ",
    "ryo":"リョ",
}

export const DakutenComboKata: kana = {
    "gya":"ギャ",
    "gyu":"ギュ",
    "gyo":"ギョ",
    "bya":"ビャ",
    "byu":"ビュ",
    "byo":"ビョ",
    "pya":"ピャ",
    "pyu":"ピュ",
    "pyo":"ピョ",
    "ja":"ジャ",
    "ju":"ジュ",
    "jo":"ジョ",
}

export const FullKanaKey: kana = {
    "あ" :"a"  ,
    "い" :"i"  ,
    "う" :"u"  ,
    "え" :"e"  ,
    "お" :"o"  ,
    "か" :"ka" ,
    "き" :"ki" ,
    "く" :"ku" ,
    "け" :"ke" ,
    "こ" :"ko" ,
    "さ" :"sa" ,
    "し" :"shi",
    "す" :"su" ,
    "せ" :"se" ,
    "そ" :"so" ,
    "た" :"ta" ,
    "ち" :"chi",
    "つ" :"tsu",
    "て" :"te" ,
    "と" :"to" ,
    "な" :"na" ,
    "に" :"ni" ,
    "ぬ" :"nu" ,
    "ね" :"ne" ,
    "の" :"no" ,
    "は" :"ha" ,
    "ひ" :"hi" ,
    "ふ" :"fu" ,
    "へ" :"he" ,
    "ほ" :"ho" ,
    "ま" :"ma" ,
    "み" :"mi" ,
    "む" :"mu" ,
    "め" :"me" ,
    "も" :"mo" ,
    "や" :"ya" ,
    "ゆ" :"yu" ,
    "よ" :"yo" ,
    "ら" :"ra" ,
    "り" :"ri" ,
    "る" :"ru" ,
    "れ" :"re" ,
    "ろ" :"ro" ,
    "わ" :"wa" ,
    "を" :"wo" ,
    "ん" :"n"  ,
   "が"  :"ga" ,
   "ぎ"  :"gi" ,
   "ぐ"  :"gu" ,
   "げ"  :"ge" ,
   "ご"  :"go" ,
   "ざ"  :"za" ,
   "じ"  :"ji" ,
   "ず"  :"zu" ,
   "ぜ"  :"ze" ,
   "ぞ"  :"zo" ,
   "だ"  :"da" ,
   "ぢ"  :"di" ,
   "づ"  :"du" ,
   "で"  :"de" ,
   "ど"  :"do" ,
   "ば"  :"ba" ,
   "び"  :"bi" ,
   "ぶ"  :"bu" ,
   "べ"  :"be" ,
   "ぼ"  :"bo" ,
   "ぱ"  :"pa" ,
   "ぴ"  :"pi" ,
   "ぷ"  :"pu" ,
   "ぺ"  :"pe" ,
   "ぽ"  :"po" ,
   "きゃ":"kya",
   "きゅ":"kyu",
   "きょ":"kyo",
   "しゃ":"sha",
   "しゅ":"shu",
   "しょ":"sho",
   "ちゃ":"cha",
   "ちゅ":"chu",
   "ちょ":"cho",
   "にゃ":"nya",
   "にゅ":"nyu",
   "にょ":"nyo",
   "ひゃ":"hya",
   "ひゅ":"hyu",
   "ひょ":"hyo",
   "みゃ":"mya",
   "みゅ":"myu",
   "みょ":"myo",
   "りゃ":"rya",
   "りゅ":"ryu",
   "りょ":"ryo",
   "ぎゃ":"gya",
   "ぎゅ":"gyu",
   "ぎょ":"gyo",
   "びゃ":"bya",
   "びゅ":"byu",
   "びょ":"byo",
   "ぴゃ":"pya",
   "ぴゅ":"pyu",
   "ぴょ":"pyo",
   "じゃ":"ja" ,
   "じゅ":"ju" ,
   "じょ":"jo" ,
    "ア":"a"  ,
    "イ":"i"  ,
    "ウ":"u"  ,
    "エ":"e"  ,
    "オ":"o"  ,
    "カ":"ka" ,
    "キ":"ki" ,
    "ク":"ku" ,
    "ケ":"ke" ,
    "コ":"ko" ,
    "サ":"sa" ,
    "シ":"shi",
    "ス":"su" ,
    "セ":"se" ,
    "ソ":"so" ,
    "タ":"ta" ,
    "チ":"chi",
    "ツ":"tsu",
    "テ":"te" ,
    "ト":"to" ,
    "ナ":"na" ,
    "ニ":"ni" ,
    "ヌ":"nu" ,
    "ネ":"ne" ,
    "ノ":"no" ,
    "ハ":"ha" ,
    "ヒ":"hi" ,
    "フ":"fu" ,
    "ヘ":"he" ,
    "ホ":"ho" ,
    "マ":"ma" ,
    "ミ":"mi" ,
    "ム":"mu" ,
    "メ":"me" ,
    "モ":"mo" ,
    "ヤ":"ya" ,
    "ユ":"yu" ,
    "ヨ":"yo" ,
    "ラ":"ra" ,
    "リ":"ri" ,
    "ル":"ru" ,
    "レ":"re" ,
    "ロ":"ro" ,
    "ワ":"wa" ,
    "ヲ":"wo" ,
    "ン":"n"  ,
    "ガ":"ga" ,
    "ギ":"gi" ,
    "グ":"gu" ,
    "ゲ":"ge" ,
    "ゴ":"go" ,
    "ザ":"za" ,
    "ジ":"ji" ,
    "ズ":"zu" ,
    "ゼ":"ze" ,
    "ゾ":"zo" ,
    "ダ":"da" ,
    "ヂ":"di" ,
    "ヅ":"du" ,
    "デ":"de" ,
    "ド":"do" ,
    "バ":"ba" ,
    "ビ":"bi" ,
    "ブ":"bu" ,
    "ベ":"be" ,
    "ボ":"bo" ,
    "パ":"pa" ,
    "ピ":"pi" ,
    "プ":"pu" ,
    "ペ":"pe" ,
    "ポ":"po" ,
    "キャ":"kya",
    "キュ":"kyu",
    "キョ":"kyo",
    "シャ":"sha",
    "シュ":"shu",
    "ショ":"sho",
    "チャ":"cha",
    "チュ":"chu",
    "チョ":"cho",
    "ニャ":"nya",
    "ニュ":"nyu",
    "ニョ":"nyo",
    "ヒャ":"hya",
    "ヒュ":"hyu",
    "ヒョ":"hyo",
    "ミャ":"mya",
    "ミュ":"myu",
    "ミョ":"myo",
    "リャ":"rya",
    "リュ":"ryu",
    "リョ":"ryo",
    "ギャ":"gya",
    "ギュ":"gyu",
    "ギョ":"gyo",
    "ビャ":"bya",
    "ビュ":"byu",
    "ビョ":"byo",
    "ピャ":"pya",
    "ピュ":"pyu",
    "ピョ":"pyo",
    "ジャ":"ja" ,
    "ジュ":"ju" ,
    "ジョ":"jo" ,
}