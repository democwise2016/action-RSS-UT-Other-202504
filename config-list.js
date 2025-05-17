const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const CONFIG = require('../config-json.js')

let feedList = [

  {
    title: '簡報藝術烘焙坊 SlideArt',
    feedID: 'SlideArtToasters',
    homepageURL: 'https://www.youtube.com/channel/UCoAmv3Imi3Tl1dnseAMSqug',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'TESTV 值不值得買',
    feedID: 'testvcn-review',
    homepageURL: 'https://www.youtube.com/channel/UCoAmv3Imi3Tl1dnseAMSqug',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return ((item.title.indexOf('【值不值得買第') >-1)) }
    ],
  },
  {
    title: '山小日子',
    feedID: 'Samsdailyproduction',
    homepageURL: 'https://www.youtube.com/channel/UCcFEKnC141Fg-YSltWOmDaA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '六指淵 Huber',
    feedID: 'huber0203',
    homepageURL: 'https://www.youtube.com/channel/UC7ia-A8gma8qcdC6GDcjwsQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '朱宥勳使出人生攻擊!',
    feedID: 'Chuck158207',
    homepageURL: 'https://www.youtube.com/channel/UCIFqfMtBfNsYGBz3uNd9UAw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '香教仁 聊3C',
    feedID: 'golo4tw',
    homepageURL: 'https://www.youtube.com/channel/UCkhvYNhfaV3y0FFpvTjdRqg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '杰克艾米立 AI大小事',
    feedID: 'JackEllie-AInews',
    homepageURL: 'https://www.youtube.com/channel/UCine3_lVU-rFDRRI8xeImHA',
    // thumbnailBorderColor: true,
    itemFilters: [
      ItemFiltersPreset.between1minTo30Min,
      // (item) => { return ((item.title.indexOf('AI大小事') >-1)) }
    ],
  },
]

// 

// --------------------------------------

if (CONFIG.debug) {
  feedList = [
    {
      title: 'AZA宿 聊 動漫音樂',
      feedID: 'azasu666',
      homepageURL: 'https://www.youtube.com/channel/UChVPN84LFe_TOjYwJIDw3Sw',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
  ]
}


module.exports = feedList
