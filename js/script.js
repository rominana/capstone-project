/* eslint-disable no-plusplus */

/* INDEX SPEAKERS SECTION */

const speakersData = [
  {
    speaker_picture: '/images-capstone/speaker8.jpg',
    speaker_name: 'Yochai Benkler',
    speaker_cv: 'Professor of Entrepenurial Legal Studies of Harvard Law',
    speaker_information: 'Benkler studies common-based peer production, and published his seminal book, The Wealth of Networks in 2006.',
  },
  {
    speaker_picture: '/images-capstone/speaker7.jpg',
    speaker_name: 'Kilnam Chon',
    speaker_cv: 'Professor of Entrepenurial Legal Studies of Cambridge',
    speaker_information: 'He helped bring the internet to Asia and is an outspoken advocate for the open web an digital commons. In 2012, he was inducted into the inaugural class of the Internet Society(ISOO) Internet Hall of fame.',
  },
  {
    speaker_picture: '/images-capstone/speaker3.jpg',
    speaker_name: 'Lila Tretikov',
    speaker_cv: 'Executive Director of the Wikimedia Foundation',
    speaker_information: 'She is the Executive Director of the Wikimedia FOundation, the nonprofit organization that operates Wikipedia. Wikipedia is a freely aviable in 290 languages and used by nearly a billion people around the world.',
  },
  {
    speaker_picture: '/images-capstone/speaker5.jpg',
    speaker_name: 'SohYeong Noh',
    speaker_cv: 'Director of Art Center Nabi and board member of CC Korea',
    speaker_information: 'As the main venue for new media art production in Korea, nabi promotes cross-disciplinary collaboration and understanding among science. technologies, humanity and arts.',
  },
  {
    speaker_picture: '/images-capstone/speaker6.jpg',
    speaker_name: 'Julia Leda',
    speaker_cv: 'President of Young Pirates of Europe',
    speaker_information: 'European ingetration, political democracy and participation of youth though online as her major condem, Redas report outlining potential changes to EU copyright law was approved by parlament in june.',
  },
  {
    speaker_picture: '/images-capstone/speaker1.jpg',
    speaker_name: 'Ryan Merkley',
    speaker_cv: 'Professor of Entrepenurial Legal Studies of Harvard Law',
    speaker_information: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },
];

for (let i = 0; i < speakersData.length; i++) {
  const speakersInfo = `
<li class="speaker-info"> 
    <ul>
        <li><img src="${speakersData[i].speaker_picture}" alt="speaker picture"/></li>
        <li>
            <div class="speaker-name">${speakersData[i].speaker_name}</div>
            <div class="speaker-cv">${speakersData[i].speaker_cv}</div>
            <div class="speaker-data">
                <p>${speakersData[i].speaker_information}</p>
            </div>
        </li>
    </ul>
</li>`;

  document.getElementById('speakers').innerHTML += speakersInfo;
}