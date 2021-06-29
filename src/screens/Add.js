import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {GSEARCH_API_KEY, CX} from '@env';
import SearchCard from '../components/SearchCard';

const Add = () => {
  const {colors} = useTheme();
  const [query, setQuery] = useState('');
  const [data, setData] = useState([
    {
      kind: 'customsearch#result',
      title: 'Love (TV Series 2016–2018) - IMDb',
      htmlTitle: '<b>Love</b> (TV Series 2016–2018) - IMDb',
      link: 'https://www.imdb.com/title/tt4061080/',
      displayLink: 'www.imdb.com',
      snippet:
        'Love (2016–2018). TV Series | TV-MA | 50 min | Comedy, Drama, ...',
      htmlSnippet:
        '<b>Love</b> (2016–2018). TV Series | TV-MA | 50 min | Comedy, Drama,&nbsp;...',
      cacheId: '1wRYeGqBIrcJ',
      formattedUrl: 'https://www.imdb.com/title/tt4061080/',
      htmlFormattedUrl: 'https://www.imdb.com/title/tt4061080/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1YpQUzHRqtUTh9H9qPI5NMfAr5QiaRxoAUG3v7aNRFag1lmLhbbH_O3s5',
            width: '163',
            height: '310',
          },
        ],
        metatags: [
          {
            pagetype: 'title',
            subpagetype: 'main',
            'og:image':
              'https://m.media-amazon.com/images/M/MV5BYzgwMWI4ZGMtOGYyMi00ZmYyLWE0MzUtYmU5MjE1NDQ5MDhmXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
            'og:type': 'video.tv_show',
            'og:site_name': 'IMDb',
            handheldfriendly: 'true',
            'msvalidate.01': 'C1DACEF2769068C0B0D2687C9E5105FA',
            'og:title': 'Love (TV Series 2016–2018) - IMDb',
            pageid: 'tt4061080',
            title: 'Love (TV Series 2016–2018) - IMDb',
            'og:description':
              "Created by Judd Apatow, Lesley Arfin, Paul Rust.  With Gillian Jacobs, Paul Rust, Claudia O'Doherty, Mike Mitchell. A program that follows a couple who must navigate the exhilarations and humiliations of intimacy, commitment and other things they were hoping to avoid.",
            'fb:app_id': '115109575169727',
            viewport:
              'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
            request_id: '5D4CTWW45D79C9FARJ0W',
            'format-detection': 'telephone=no',
          },
        ],
        cse_image: [
          {
            src: 'https://m.media-amazon.com/images/M/MV5BYzgwMWI4ZGMtOGYyMi00ZmYyLWE0MzUtYmU5MjE1NDQ5MDhmXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Love (2015) - IMDb',
      htmlTitle: '<b>Love</b> (2015) - IMDb',
      link: 'https://www.imdb.com/title/tt3774694/',
      displayLink: 'www.imdb.com',
      snippet:
        'Love (II) (2015) ... Murphy is an American living in Paris who enters a highly \nsexually and emotionally charged relationship with Electra. Unaware of the effect \nit will ...',
      htmlSnippet:
        '<b>Love</b> (II) (2015) ... Murphy is an American living in Paris who enters a highly <br>\nsexually and emotionally charged relationship with Electra. Unaware of the effect <br>\nit will&nbsp;...',
      cacheId: '-trQWrPmx0AJ',
      formattedUrl: 'https://www.imdb.com/title/tt3774694/',
      htmlFormattedUrl: 'https://www.imdb.com/title/tt3774694/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS038MRuGmmTZPlnY_dUtR34mGFmju_LBxmjsscSNLwyNrz9_0mo6slxgw',
            width: '163',
            height: '310',
          },
        ],
        metatags: [
          {
            pagetype: 'title',
            subpagetype: 'main',
            'og:image':
              'https://m.media-amazon.com/images/M/MV5BMTQzNDUwODk5NF5BMl5BanBnXkFtZTgwNzA0MDQ2NTE@._V1_UY1200_CR109,0,630,1200_AL_.jpg',
            'og:type': 'video.movie',
            'og:site_name': 'IMDb',
            handheldfriendly: 'true',
            'msvalidate.01': 'C1DACEF2769068C0B0D2687C9E5105FA',
            'og:title': 'Love (2015) - IMDb',
            pageid: 'tt3774694',
            title: 'Love (2015) - IMDb',
            'og:description':
              'Directed by Gaspar Noé.  With Aomi Muyock, Karl Glusman, Klara Kristin, Juan Saavedra. Murphy is an American living in Paris who enters a highly sexually and emotionally charged relationship with Electra. Unaware of the effect it will have on their relationship, they invite their pretty neighbor into their bed.',
            'fb:app_id': '115109575169727',
            viewport:
              'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
            request_id: '2Z72TYS8J7P9HKXYYJSN',
            'format-detection': 'telephone=no',
          },
        ],
        cse_image: [
          {
            src: 'https://m.media-amazon.com/images/M/MV5BMTQzNDUwODk5NF5BMl5BanBnXkFtZTgwNzA0MDQ2NTE@._V1_UY1200_CR109,0,630,1200_AL_.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Love (2011) - IMDb',
      htmlTitle: '<b>Love</b> (2011) - IMDb',
      link: 'https://www.imdb.com/title/tt1541874/',
      displayLink: 'www.imdb.com',
      snippet:
        'Love (I) (2011) ... A man spends years alone on a space station orbiting Earth \nafter losing communication with Houston/Earth. Time is spent on maintenance, ...',
      htmlSnippet:
        '<b>Love</b> (I) (2011) ... A man spends years alone on a space station orbiting Earth <br>\nafter losing communication with Houston/Earth. Time is spent on maintenance,&nbsp;...',
      cacheId: 'vk8faYCrRrQJ',
      formattedUrl: 'https://www.imdb.com/title/tt1541874/',
      htmlFormattedUrl: 'https://www.imdb.com/title/tt1541874/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMrsZKNrIPJlXCZz0ZNWlDBYlreqBhjPm_CzVuNZvUAX709kqdeCpTlY0',
            width: '163',
            height: '310',
          },
        ],
        metatags: [
          {
            pagetype: 'title',
            subpagetype: 'main',
            'og:image':
              'https://m.media-amazon.com/images/M/MV5BMjI3MzUxNDkyNF5BMl5BanBnXkFtZTcwNzYwNjYwNw@@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
            'og:type': 'video.movie',
            'og:site_name': 'IMDb',
            handheldfriendly: 'true',
            'msvalidate.01': 'C1DACEF2769068C0B0D2687C9E5105FA',
            'og:title': 'Love (2011) - IMDb',
            pageid: 'tt1541874',
            title: 'Love (2011) - IMDb',
            'og:description':
              'Directed by William Eubank.  With Gunner Wright, Corey Richardson, Bradley Horne, Nancy Stelle. A man spends years alone on a space station orbiting Earth after losing communication with Houston/Earth. Time is spent on maintenance, exercise, watching old messages and reading a journal by a soldier in the American civil war 1864.',
            'fb:app_id': '115109575169727',
            viewport:
              'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
            request_id: 'QKD513NTNAR5BM58699Z',
            'format-detection': 'telephone=no',
          },
        ],
        cse_image: [
          {
            src: 'https://m.media-amazon.com/images/M/MV5BMjI3MzUxNDkyNF5BMl5BanBnXkFtZTcwNzYwNjYwNw@@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Love Actually (2003) - IMDb',
      htmlTitle: '<b>Love</b> Actually (2003) - IMDb',
      link: 'https://www.imdb.com/title/tt0314331/',
      displayLink: 'www.imdb.com',
      snippet: 'Love Actually (2003). R | 135 min | Comedy, Drama, Romance ...',
      htmlSnippet:
        '<b>Love</b> Actually (2003). R | 135 min | Comedy, Drama, Romance&nbsp;...',
      cacheId: 'QKj5Wb9L3vEJ',
      formattedUrl: 'https://www.imdb.com/title/tt0314331/',
      htmlFormattedUrl: 'https://www.imdb.com/title/tt0314331/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPQL7ETRTUHEmOiB6l4_tAEiCtIa1JeRxyN311f2Vzohqj_rQD5HDF9tI',
            width: '163',
            height: '310',
          },
        ],
        metatags: [
          {
            pagetype: 'title',
            subpagetype: 'main',
            'og:image':
              'https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_UY1200_CR90,0,630,1200_AL_.jpg',
            'og:type': 'video.movie',
            'og:site_name': 'IMDb',
            handheldfriendly: 'true',
            'msvalidate.01': 'C1DACEF2769068C0B0D2687C9E5105FA',
            'og:title': 'Love Actually (2003) - IMDb',
            pageid: 'tt0314331',
            title: 'Love Actually (2003) - IMDb',
            'og:description':
              'Directed by Richard Curtis.  With Hugh Grant, Martine McCutcheon, Liam Neeson, Laura Linney. Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.',
            'fb:app_id': '115109575169727',
            viewport:
              'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
            request_id: 'QKCFHCJEH906B0HRHJMA',
            'format-detection': 'telephone=no',
          },
        ],
        cse_image: [
          {
            src: 'https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_UY1200_CR90,0,630,1200_AL_.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Love (1927) - IMDb',
      htmlTitle: '<b>Love</b> (1927) - IMDb',
      link: 'https://www.imdb.com/title/tt0018107/',
      displayLink: 'www.imdb.com',
      snippet:
        'Directed by Edmund Goulding, John Gilbert. With John Gilbert, Greta Garbo, \nGeorge Fawcett, Emily Fitzroy. A married woman compromises her social \nstanding ...',
      htmlSnippet:
        'Directed by Edmund Goulding, John Gilbert. With John Gilbert, Greta Garbo, <br>\nGeorge Fawcett, Emily Fitzroy. A married woman compromises her social <br>\nstanding&nbsp;...',
      cacheId: 'dluWbYjX6skJ',
      formattedUrl: 'https://www.imdb.com/title/tt0018107/',
      htmlFormattedUrl: 'https://www.imdb.com/title/tt0018107/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTyWuj7GbWIXr3G5IwRqAQw2Tpu2I5me25EDz7YRVCh3hbV0uCaZ0ZIK30',
            width: '163',
            height: '310',
          },
        ],
        metatags: [
          {
            pagetype: 'title',
            subpagetype: 'main',
            'og:image':
              'https://m.media-amazon.com/images/M/MV5BODFhZWYwMmYtZDI0Yi00OGExLTg5MmEtZTBkNDk1ZjNhNmYzXkEyXkFqcGdeQXVyMjcxNjI4NTk@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
            'og:type': 'video.movie',
            'og:site_name': 'IMDb',
            handheldfriendly: 'true',
            'msvalidate.01': 'C1DACEF2769068C0B0D2687C9E5105FA',
            'og:title': 'Love (1927) - IMDb',
            pageid: 'tt0018107',
            title: 'Love (1927) - IMDb',
            'og:description':
              'Directed by Edmund Goulding, John Gilbert.  With John Gilbert, Greta Garbo, George Fawcett, Emily Fitzroy. A married woman compromises her social standing and family life when she falls for a young officer.',
            'fb:app_id': '115109575169727',
            viewport:
              'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
            request_id: 'MQ0X9TAX60FSHG8QK48Y',
            'format-detection': 'telephone=no',
          },
        ],
        cse_image: [
          {
            src: 'https://m.media-amazon.com/images/M/MV5BODFhZWYwMmYtZDI0Yi00OGExLTg5MmEtZTBkNDk1ZjNhNmYzXkEyXkFqcGdeQXVyMjcxNjI4NTk@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'I Am Love (2009) - IMDb',
      htmlTitle: 'I Am <b>Love</b> (2009) - IMDb',
      link: 'https://www.imdb.com/title/tt1226236/',
      displayLink: 'www.imdb.com',
      snippet:
        'Directed by Luca Guadagnino. With Tilda Swinton, Flavio Parenti, Edoardo \nGabbriellini, Alba Rohrwacher. Emma left Russia to live with her husband in Italy.',
      htmlSnippet:
        'Directed by Luca Guadagnino. With Tilda Swinton, Flavio Parenti, Edoardo <br>\nGabbriellini, Alba Rohrwacher. Emma left Russia to live with her husband in Italy.',
      cacheId: '0Ox4fPwUPPwJ',
      formattedUrl: 'https://www.imdb.com/title/tt1226236/',
      htmlFormattedUrl: 'https://www.imdb.com/title/tt1226236/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQga-nT8dMnyWdBWWjPKxFsEPXbZNeXq1mvWriRu9nkSx7J1OelSZZ3_zKk',
            width: '163',
            height: '310',
          },
        ],
        metatags: [
          {
            pagetype: 'title',
            subpagetype: 'main',
            'og:image':
              'https://m.media-amazon.com/images/M/MV5BMjAwNjY5OTUxM15BMl5BanBnXkFtZTcwNjE3MTQxMw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
            'og:type': 'video.movie',
            'og:site_name': 'IMDb',
            handheldfriendly: 'true',
            'msvalidate.01': 'C1DACEF2769068C0B0D2687C9E5105FA',
            'og:title': 'I Am Love (2009) - IMDb',
            pageid: 'tt1226236',
            title: 'I Am Love (2009) - IMDb',
            'og:description':
              "Directed by Luca Guadagnino.  With Tilda Swinton, Flavio Parenti, Edoardo Gabbriellini, Alba Rohrwacher. Emma left Russia to live with her husband in Italy. Now a member of a powerful industrial family, she is the respected mother of three, but feels unfulfilled. One day, Antonio, a talented chef and her son's friend, makes her senses kindle.",
            'fb:app_id': '115109575169727',
            viewport:
              'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
            request_id: 'M32A7Z56WY0EC6Q7D6ZT',
            'format-detection': 'telephone=no',
          },
        ],
        cse_image: [
          {
            src: 'https://m.media-amazon.com/images/M/MV5BMjAwNjY5OTUxM15BMl5BanBnXkFtZTcwNjE3MTQxMw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Love, Simon (2018) - IMDb',
      htmlTitle: '<b>Love</b>, Simon (2018) - IMDb',
      link: 'https://www.imdb.com/title/tt5164432/',
      displayLink: 'www.imdb.com',
      snippet:
        'Directed by Greg Berlanti. With Nick Robinson, Jennifer Garner, Josh Duhamel, \nKatherine Langford. Simon Spier keeps a huge secret from his family, his friends\n ...',
      htmlSnippet:
        'Directed by Greg Berlanti. With Nick Robinson, Jennifer Garner, Josh Duhamel, <br>\nKatherine Langford. Simon Spier keeps a huge secret from his family, his friends<br>\n&nbsp;...',
      cacheId: '6MGW2OwHB0gJ',
      formattedUrl: 'https://www.imdb.com/title/tt5164432/',
      htmlFormattedUrl: 'https://www.imdb.com/title/tt5164432/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQsx7HImqg-0RjP8wieLP2dwwyO9EOjfwN5QsZ4t7vT-kNOX-AkIy3FP4',
            width: '163',
            height: '310',
          },
        ],
        metatags: [
          {
            pagetype: 'title',
            subpagetype: 'main',
            'og:image':
              'https://m.media-amazon.com/images/M/MV5BNTMyZDdiMzUtZjcxNS00Mjc3LTljY2UtYjI4YmY5NzJlYjc1XkEyXkFqcGdeQXVyMTA5OTkwNTc@._V1_UY1200_CR91,0,630,1200_AL_.jpg',
            'og:type': 'video.movie',
            'og:site_name': 'IMDb',
            handheldfriendly: 'true',
            'msvalidate.01': 'C1DACEF2769068C0B0D2687C9E5105FA',
            'og:title': 'Love, Simon (2018) - IMDb',
            pageid: 'tt5164432',
            title: 'Love, Simon (2018) - IMDb',
            'og:description':
              "Directed by Greg Berlanti.  With Nick Robinson, Jennifer Garner, Josh Duhamel, Katherine Langford. Simon Spier keeps a huge secret from his family, his friends and all of his classmates: he's gay. When that secret is threatened, Simon must face everyone and come to terms with his identity.",
            'fb:app_id': '115109575169727',
            viewport:
              'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
            request_id: 'BWCDJTKV5DJZJYPQSMGX',
            'format-detection': 'telephone=no',
          },
        ],
        cse_image: [
          {
            src: 'https://m.media-amazon.com/images/M/MV5BNTMyZDdiMzUtZjcxNS00Mjc3LTljY2UtYjI4YmY5NzJlYjc1XkEyXkFqcGdeQXVyMTA5OTkwNTc@._V1_UY1200_CR91,0,630,1200_AL_.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Love Story (1970) - IMDb',
      htmlTitle: '<b>Love</b> Story (1970) - IMDb',
      link: 'https://www.imdb.com/title/tt0066011/',
      displayLink: 'www.imdb.com',
      snippet:
        "Directed by Arthur Hiller. With Ali MacGraw, Ryan O'Neal, John Marley, Ray \nMilland. A boy and a girl from different backgrounds fall in love regardless of their\n ...",
      htmlSnippet:
        'Directed by Arthur Hiller. With Ali MacGraw, Ryan O&#39;Neal, John Marley, Ray <br>\nMilland. A boy and a girl from different backgrounds fall in <b>love</b> regardless of their<br>\n&nbsp;...',
      cacheId: 'aY6AZXHkx4sJ',
      formattedUrl: 'https://www.imdb.com/title/tt0066011/',
      htmlFormattedUrl: 'https://www.imdb.com/title/tt0066011/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-ekhHU6711OyKBcefFoDRN64xJbm_OKiN3yfoxBqLueuSuVyqDY0edYbG',
            width: '163',
            height: '310',
          },
        ],
        metatags: [
          {
            pagetype: 'title',
            subpagetype: 'main',
            'og:image':
              'https://m.media-amazon.com/images/M/MV5BZmFjYWU1MGQtM2FiMi00YjA3LWIwYjUtZDdhYWEyOWFhZGE0XkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_UY1200_CR79,0,630,1200_AL_.jpg',
            'og:type': 'video.movie',
            'og:site_name': 'IMDb',
            handheldfriendly: 'true',
            'msvalidate.01': 'C1DACEF2769068C0B0D2687C9E5105FA',
            'og:title': 'Love Story (1970) - IMDb',
            pageid: 'tt0066011',
            title: 'Love Story (1970) - IMDb',
            'og:description':
              "Directed by Arthur Hiller.  With Ali MacGraw, Ryan O'Neal, John Marley, Ray Milland. A boy and a girl from different backgrounds fall in love regardless of their upbringing - and then tragedy strikes.",
            'fb:app_id': '115109575169727',
            viewport:
              'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
            request_id: '2HG7X3V3KV69CKVX86T8',
            'format-detection': 'telephone=no',
          },
        ],
        cse_image: [
          {
            src: 'https://m.media-amazon.com/images/M/MV5BZmFjYWU1MGQtM2FiMi00YjA3LWIwYjUtZDdhYWEyOWFhZGE0XkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_UY1200_CR79,0,630,1200_AL_.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'The One I Love (2014) - IMDb',
      htmlTitle: 'The One I <b>Love</b> (2014) - IMDb',
      link: 'https://www.imdb.com/title/tt2756032/',
      displayLink: 'www.imdb.com',
      snippet:
        'Playing at 9:15 was a film entitled "The One I Love" starring Mark Duplass, \nElisabeth Moss and Ted Danson. As there was nothing in the program about the \nfilm, I ...',
      htmlSnippet:
        'Playing at 9:15 was a film entitled &quot;The One I <b>Love</b>&quot; starring Mark Duplass, <br>\nElisabeth Moss and Ted Danson. As there was nothing in the program about the <br>\nfilm, I&nbsp;...',
      cacheId: '-2l1teFTRo0J',
      formattedUrl: 'https://www.imdb.com/title/tt2756032/',
      htmlFormattedUrl: 'https://www.imdb.com/title/tt2756032/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMQHQ-cEYaXiIiPo_qUAPfI3UcpynACZti9vyeSa7rtCBIG56AbK9P4fA',
            width: '163',
            height: '310',
          },
        ],
        metatags: [
          {
            pagetype: 'title',
            subpagetype: 'main',
            'og:image':
              'https://m.media-amazon.com/images/M/MV5BMTgzODMyMjcyOV5BMl5BanBnXkFtZTgwMTAyMjMyMjE@._V1_UY1200_CR103,0,630,1200_AL_.jpg',
            'og:type': 'video.movie',
            'og:site_name': 'IMDb',
            handheldfriendly: 'true',
            'msvalidate.01': 'C1DACEF2769068C0B0D2687C9E5105FA',
            'og:title': 'The One I Love (2014) - IMDb',
            pageid: 'tt2756032',
            title: 'The One I Love (2014) - IMDb',
            'og:description':
              'Directed by Charlie McDowell.  With Mark Duplass, Elisabeth Moss, Ted Danson, Kiana Cason. A troubled couple vacate to a beautiful getaway, but bizarre circumstances further complicate their situation.',
            'fb:app_id': '115109575169727',
            viewport:
              'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
            request_id: 'C33F7PK4W9N5FX9GFPNM',
            'format-detection': 'telephone=no',
          },
        ],
        cse_image: [
          {
            src: 'https://m.media-amazon.com/images/M/MV5BMTgzODMyMjcyOV5BMl5BanBnXkFtZTgwMTAyMjMyMjE@._V1_UY1200_CR103,0,630,1200_AL_.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Love, Victor (TV Series 2020– ) - IMDb',
      htmlTitle: '<b>Love</b>, Victor (TV Series 2020– ) - IMDb',
      link: 'https://www.imdb.com/title/tt10166602/',
      displayLink: 'www.imdb.com',
      snippet:
        'Love, Victor (2020– ). TV Series | TV-14 | 30 min | Comedy, Drama, ...',
      htmlSnippet:
        '<b>Love</b>, Victor (2020– ). TV Series | TV-14 | 30 min | Comedy, Drama,&nbsp;...',
      cacheId: 'k9aj0cRdyUgJ',
      formattedUrl: 'https://www.imdb.com/title/tt10166602/',
      htmlFormattedUrl: 'https://www.imdb.com/title/tt10166602/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQM1Ne6aUcO-yJyN37ZXbwEsY1UczKFfIJZrTFayxA_XqxM69p42DVn8wo',
            width: '163',
            height: '310',
          },
        ],
        metatags: [
          {
            pagetype: 'title',
            subpagetype: 'main',
            'og:image':
              'https://m.media-amazon.com/images/M/MV5BZjMwZTcwYTYtZTIyYS00OWZjLWIwNmQtMDIyM2E1MGExZDZiXkEyXkFqcGdeQXVyMTMxNjUyMDkx._V1_UY1200_CR112,0,630,1200_AL_.jpg',
            'og:type': 'video.tv_show',
            'og:site_name': 'IMDb',
            handheldfriendly: 'true',
            'msvalidate.01': 'C1DACEF2769068C0B0D2687C9E5105FA',
            'og:title': 'Love, Victor (TV Series 2020– ) - IMDb',
            pageid: 'tt10166602',
            title: 'Love, Victor (TV Series 2020– ) - IMDb',
            'og:description':
              'Created by Isaac Aptaker, Elizabeth Berger.  With Michael Cimino, Rachel Hilson, Anthony Turpel, Bebe Wood. Victor is a new student at Creekwood High School on his own journey of self-discovery, facing challenges at home, adjusting to a new city, and struggling with his sexual orientation.',
            'fb:app_id': '115109575169727',
            viewport:
              'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
            request_id: 'ETXYA3KGCQYAE5ZT27W0',
            'format-detection': 'telephone=no',
          },
        ],
        cse_image: [
          {
            src: 'https://m.media-amazon.com/images/M/MV5BZjMwZTcwYTYtZTIyYS00OWZjLWIwNmQtMDIyM2E1MGExZDZiXkEyXkFqcGdeQXVyMTMxNjUyMDkx._V1_UY1200_CR112,0,630,1200_AL_.jpg',
          },
        ],
      },
    },
  ]);
  const [loading, setLoading] = useState(false);
  const searchMovie = () => {
    if (query === '') {
      console.error('Enter Something');
    } else {
      setLoading(true);
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${GSEARCH_API_KEY}&cx=${CX}&q=${query}`,
      )
        .then(response => {
          setData(response.items);
          console.log(response);
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }
  };

  const renderItem = ({item}) => <SearchCard item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={setQuery}
        value={query}
        placeholder="Search Movie"
        placeholderTextColor={colors.text}
        style={[styles.input, {borderColor: colors.border, color: colors.text}]}
        returnKeyLabel="Go"
        onSubmitEditing={searchMovie}
      />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.cacheId}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1.5,
    borderRadius: 10,
    fontSize: 15,
    paddingHorizontal: 20,
  },
});
export default Add;
