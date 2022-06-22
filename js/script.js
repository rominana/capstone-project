/* eslint-disable no-plusplus */

/* INDEX SPEAKERS SECTION */

const speakersData = [
  {
    speaker_picture: '/images-capstone/speaker8.jpg',
    speaker_name: 'Yochai Benkler',
    speaker_cv: 'Professor of Entrepenurial Legal Studies of Harvard Law',
    speaker_information: 'Lorem ipsum, dolor sit amet consectetur. Eos aspernatur, nesciunt dolores, officia, eum quae at illum error labore earum nihil harum enim unde deleniti delectus fuga iste quibusdam voluptatum.',
  },
  {
    speaker_picture: '/images-capstone/speaker1.jpg',
    speaker_name: 'SohYeong Noh',
    speaker_cv: 'Professor of Entrepenurial Legal Studies of Harvard Law',
    speaker_information: 'Lorem ipsum, dolor sit amet consectetur. Eos aspernatur, nesciunt dolores, officia, eum quae at illum error labore earum nihil harum enim unde deleniti delectus fuga iste quibusdam voluptatum.',
  },
  {
    speaker_picture: '/images-capstone/speaker3.jpg',
    speaker_name: 'Lila Tretikov',
    speaker_cv: 'Professor of Entrepenurial Legal Studies of Harvard Law',
    speaker_information: 'Lorem ipsum, dolor sit amet consectetur. Eos aspernatur, nesciunt dolores, officia, eum quae at illum error labore earum nihil harum enim unde deleniti delectus fuga iste quibusdam voluptatum.',
  },
  {
    speaker_picture: '/images-capstone/speaker5.jpg',
    speaker_name: 'Kilnam Chon',
    speaker_cv: 'Professor of Entrepenurial Legal Studies of Harvard Law',
    speaker_information: 'Lorem ipsum, dolor sit amet consectetur. Eos aspernatur, nesciunt dolores, officia, eum quae at illum error labore earum nihil harum enim unde deleniti delectus fuga iste quibusdam voluptatum.',
  },
  {
    speaker_picture: '/images-capstone/speaker6.jpg',
    speaker_name: 'Julia Leda',
    speaker_cv: 'Professor of Entrepenurial Legal Studies of Harvard Law',
    speaker_information: 'Lorem ipsum, dolor sit amet consectetur. Eos aspernatur, nesciunt dolores, officia, eum quae at illum error labore earum nihil harum enim unde deleniti delectus fuga iste quibusdam voluptatum.',
  },
  {
    speaker_picture: '/images-capstone/speaker7.jpg',
    speaker_name: 'Ryan Merkley',
    speaker_cv: 'Professor of Entrepenurial Legal Studies of Harvard Law',
    speaker_information: 'Lorem ipsum, dolor sit amet consectetur. Eos aspernatur, nesciunt dolores, officia, eum quae at illum error labore earum nihil harum enim unde deleniti delectus fuga iste quibusdam voluptatum.',
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