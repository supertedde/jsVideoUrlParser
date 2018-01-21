const Wistia = require('./wistia');
const UrlParser = require('../urlParser');
const {testUrls} = require('../testUrls');

function newParser() {
  const parser = new UrlParser();
  parser.register(new Wistia());
  return parser;
}

test('Wistia long urls', () => {
  testUrls(newParser(), {
    videoInfo: {
      provider: 'wistia',
      id: 'lpu6bgplle',
      mediaType: 'video',
      channel: 'appboss',
    },
    formats: {
      long: 'https://appboss.wistia.com/medias/lpu6bgplle',
      embed: 'https://fast.wistia.com/embed/iframe/lpu6bgplle',
      embedjsonp: 'https://fast.wistia.com/embed/medias/lpu6bgplle.jsonp',
    },
    urls: [
      'https://appboss.wistia.com/medias/lpu6bgplle',
    ],
  }, {
    videoInfo: {
      provider: 'wistia',
      id: 'lpu6bgplle',
      mediaType: 'video',
      channel: 'appboss',
      params: {
        start: 30,
      },
    },
    formats: {
      long: 'https://appboss.wistia.com/medias/lpu6bgplle?wtime=30',
      embed: 'https://fast.wistia.com/embed/iframe/lpu6bgplle?wtime=30',
      embedjsonp: 'https://fast.wistia.com/embed/medias/lpu6bgplle.jsonp',
    },
    urls: [
      'https://appboss.wistia.com/medias/lpu6bgplle?wtime=30s',
    ],
  });
});

('Wistia embed urls', () => {
  testUrls(newParser(), {
    videoInfo: {
      provider: 'wistia',
      id: 'lpu6bgplle',
      mediaType: 'embedvideo',
    },
    formats: {
      embed: 'https://fast.wistia.com/embed/iframe/lpu6bgplle',
      embedjsonp: 'https://fast.wistia.com/embed/medias/lpu6bgplle.jsonp',
    },
    urls: [
      'https://fast.wistia.com/embed/iframe/lpu6bgplle',
      'https://fast.wistia.com/embed/medias/lpu6bgplle.jsonp',
      'https://content.wistia.com/customer-stories/bizzabo?wvideo=lpu6bgplle',
      'https://wistia.com/blog/soapbox-videos-for-the-holidays?wvideo=lpu6bgplle',
      'https://wistia.com/library/how-to-look-good-on-a-webcam?wvideo=lpu6bgplle',
      'https://wistia.com/solutions/sales?wvideo=lpu6bgplle',
    ],
  }, {
    videoInfo: {
      provider: 'wistia',
      id: 'lpu6bgplle',
      mediaType: 'embedvideo',
      params: {
        start: 30,
      },
    },
    formats: {
      embed: 'https://fast.wistia.com/embed/iframe/lpu6bgplle?wtime=30',
      embedjsonp: 'https://fast.wistia.com/embed/medias/lpu6bgplle.jsonp',
    },
    urls: [
      'https://fast.wistia.com/embed/iframe/lpu6bgplle?wtime=30',
    ],
  });
});
