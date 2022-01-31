import githubIcon from '../assets/github_icon.png';
import linkedInIcon from '../assets/linkedin_icon.png';

const randomColors = [
'#fff6e9',
'#ffefd7',
'#affef9',
'#e3f0ff',
'#a2d7ff',
'#c5e2ff', 
'#debefc',
'#D37EFF',
'#FFFDC6',
'#DFFFF7',
'#EdddF7'
];

const projects = [
    {
        id: 0,
        name: 'Scheerio',
        description: 'A virtual reality venture. Using new WebVR technology, I developed virtual reality experiences (from scratch) for people trying to promote and brand themselves in a new way. These experiences were made to be used anywhere, anytime, no headset needed. My niche was the music industry. To get the attention of high-profile artists, I had to sell the idea over dozens of phone calls and create over a hundred demos. The result: I collaborated with several artists (including a member of the Dave Matthews Band) and was lucky enough to have Skype calls with several of my musical idols. I have never been so star struck.',
        links: [
            {
                id: 0,
                title: 'View Article 📝',
                link: 'https://www.thevinyldistrict.com/storefront/2017/11/tvd-premiere-kate-tucker-in-your-arms-single-and-its-virtual-reality-experience/#more-326673',
                available: true
            }
        ]
    },
    {
        id: 1,
        name: 'Orangutan Enrichment Project',
        description: 'An app to help improve the lives of orangutans in Zoo Atlanta. Orangutans are very intelligent primates. In fact, in their Zoo Atlanta exhibit, there is a touchscreen built inside one of their trees for them to use. However, they did not have fun games on it! So, as part of Vanderbilt University research, I led a team to complete a multi-purpose application for the touchscreen in the orangutan exhibit. It has orangutan-friendly games to play, music to listen to, and videos to watch. Behind the scenes, a log is collecting data to observe their behavior. It turns out that they liked it, so our model and learnings could be applied to other primate exhibits around the world. My teammate and I ended up presenting our work at CogSci 2019 in Montreal. I am the primary author on the paper about it, published by the Cognitive Science Society.',
        links: [
            {
                id: 0,
                title: 'View Video 📼',
                link: 'https://www.facebook.com/watch/?v=10155754899423553',
                available: true
            },
            {
                id: 1,
                title: 'View Paper 📝',
                link: 'https://cogsci.mindmodeling.org/2019/papers/0467/index.html',
                available: true
            }
        ]
    },
    {
        id: 2,
        name: 'Doorbell',
        description: 'Each day, an office can get lots of visitors. I built a Web app that uses HTML, CSS, JavaScript, Slack API, Glitch, Node, Express, Logic, and Sketch to greet visitors in a new way at a marketing and advertising industry. That said, it needed to be up-to-par with the company aestetic. After some user testing, I was able to immediately implement the app at an office and see it in action. I collaborated with colleagues to bring it to life, and learned that a simple Web app can involve a lot of parts. Greetings increased by over 400%.',
        links: [
            {
                id: 0,
                title: 'View Article 📝',
                link: 'https://javascript.plainenglish.io/build-your-first-web-app-how-to-get-started-from-scratch-f6ffa1507250',
                available: true
            }
        ]
    },
    {
        id: 3,
        name: 'Kegatron',
        description: 'On occasion, folks do enjoy beer using kegs. But what if the kegs are low on beer? I teamed up with two colleagues to create a system that can monitor the amount of beer in the kegs in the kitchen. To make this happen, we used four programming languages, Internet of Things, math, and electrical engineering. The result? A Web app in the office kitchen that displayed percent fullness of each keg.',
        links: [
            {
                id: 0,
                title: 'View Article 📝',
                link: 'https://ideas.redpepper.land/kegatron-tells-you-how-full-your-beer-kegs-are-in-real-time-heres-how-we-made-it-98ff0beee067?gi=f114aa2b5ab3',
                available: true
            }
        ]
    },
    {
        id: 4,
        name: 'Billbid',
        description: 'There’s a lot of talk about augmented reality (AR) nowadays, whether it’s Snapchat face filters, Pokemon Go, or Apple’s measuring tool. I created an app that lets you edit some of the billboard ads around Nashville through the perspective of your phone screen, allowing you to block ads or replace them with different ones. I did it using a 3D engine, image recognition, AR, iOS development, and photography. I also managed to make a website associated with the concept. Just thinking ahead into the future of the advertising industry!',
        links: [
            {
                id: 0,
                title: 'View Article 📝',
                link: 'https://benscheer.medium.com/billbid-real-lifes-ad-blocker-c77070e58dca',
                available: true
            }
        ]
    },
    {
        id: 5,
        name: 'DRUMMR',
        description: 'A drummer on tap, made especially for musicians. This app solved a personal problem of mine. My friends and I used to get together for music jam sessions (I play piano), but not having a drummer present made it much more difficult to practice together. I looked to tools like GarageBand for creating custom drumming, but that solution did not work for a few reasons, and there were no apps that existed to fix our problem. DRUMMR, the iOS app, was made to drop whatever groove you wanted, so you could have a drummer present whenever you or your band needed it. DRUMMR was as simple as it gets. Just choose the genre, style, meter, and speed you want, and it played the drums for you. Plug into some loud speakers, and things got real. If you wanted to blast some heavy rock in 3/4, rap some verses in 13/4, or practice a solo in 9/4, DRUMMR could handle it all.',
        links: [
            {
                id: 0,
                title: 'App No Longer Available',
                link: '',
                available: false
            }
        ]
    },
    {
        id: 6,
        name: 'Spark Your Idea',
        description: 'Come up with ideas. Spark your next big one. Inspired by a lecture about creativity that I attended during my freshman year at Vanderbilt University, I developed an iOS application that helped you spark creative ideas. The app emulates a strategy that successful and creative businesses use to come up with new ideas. Used by a Vanderbilt professor for his course, the app was open to anyone who wanted to practice creative thinking and even spark their next big idea. This was the app that launched my software engineering journey!',
        links: [
            {
                id: 0,
                title: 'App No Longer Available',
                link: '',
                available: false
            }
        ]
    },
    {
        id: 7,
        name: 'Photobilities',
        description: 'Capturing the beauty in all of us. During high school, I started a photography business for children with special needs. My younger brother has autism, and, because I understood the struggle of getting photos of him that my family could be proud of, I decided to start Photobilities in my community, the Washington D.C. metropolitan area. I traveled to families’ homes, did photo shoots for their families, and gave them photos that they could be proud of. Because of its success in my community, I created a website and trademarked the name.',
        links: [
            {
                id: 0,
                title: 'View Article 📝',
                link: 'https://bethesdamagazine.com/bethesda-magazine/ben-scheer/',
                available: true
            }
        ]
    },
    {
        id: 7,
        name: 'Real Razor Pro (Prank)',
        description: 'A not-so-useful, funny app for pranking your friends. When I create new products, I also keep my eye on what is trending in the marketplace. For some reason, a lot of people were downloading prank hair razor apps. As an experiment, I made my own and put it out there. Surprisingly, it received a bunch of downloads.',
        links: [
            {
                id: 0,
                title: 'App No Longer Available',
                link: '',
                available: false
            }
        ]
    },
    {
        id: 8,
        name: 'My Porfolio (This Website!)',
        description: 'To fulfill my online portfolio needs, I built this website from scratch using React + React Bootstrap and deployed it using Netlify. Hope you like it!',
        links: [
            {
                id: 0,
                title: 'View Story 📝',
                link: 'https://benscheer.medium.com/i-rebuilt-my-online-portfolio-from-scratch-using-react-heres-what-i-learned-fdd9696e9091',
                available: true
            }
        ]
    }
];

const personalLinks = [
    {
        id: 0,
        title: 'LinkedIn 💻',
        link: 'https://www.linkedin.com/in/benscheer/'
    },
    {
        id: 1,
        title: 'Github 💻',
        link: 'https://github.com/scheerio'
    },
    {
        id: 2,
        title: 'Resume 📄',
        link: 'https://docs.google.com/document/d/1_0FMZ2zCYVJrNwgp3xLeVS_5TALhq_-aK0UiOWsuqRY/edit'
    }
];

const articles = [
    {
        id: 0,
        topic: 'Python',
        link: 'https://medium.com/swlh/i-used-python-to-make-a-personal-assistant-and-it-drafts-emails-for-me-434ac3ab6d38'
    },
    {
        id: 1,
        topic: 'Mixed Reality',
        link: 'https://benscheer.medium.com/billbid-real-lifes-ad-blocker-c77070e58dca'
    },
    {
        id: 2,
        topic: 'IoT',
        link: 'https://ideas.redpepper.land/kegatron-tells-you-how-full-your-beer-kegs-are-in-real-time-heres-how-we-made-it-98ff0beee067'
    },
    {
        id: 3,
        topic: 'Accessibility',
        link: 'https://medium.datadriveninvestor.com/20-ways-to-make-your-website-more-welcoming-with-html-css-b302690a3a6f'
    },
    {
        id: 4,
        topic: 'Digital Marketing',
        link: 'https://medium.com/swlh/entrepreneurs-heres-your-7-minute-intro-to-facebook-ads-in-2020-67688ab567cc'
    },
    {
        id: 5,
        topic: 'Psychology',
        link: 'https://benscheer.medium.com/most-entrepreneurs-dont-know-about-these-6-psychological-pricing-hacks-that-seriously-boost-3d74d7e88e12'
    },
    {
        id: 6,
        topic: 'Business',
        link: 'https://benscheer.medium.com/how-to-explain-your-business-idea-14-tips-e2176d41578a'
    },
    {
        id: 7,
        topic: 'Interviewing',
        link: 'https://medium.com/swlh/answer-these-8-questions-before-your-next-interview-7153f1364106'
    },
    {
        id: 8,
        topic: 'AI',
        link: 'https://benscheer.medium.com/i-used-phantomjs-for-artificial-intelligence-and-this-happened-8a4104010537'
    },
    {
        id: 9,
        topic: 'Books',
        link: 'https://medium.com/swlh/entrepreneurs-if-you-only-read-a-couple-of-books-in-2020-read-these-20429e15e964'
    },
    {
        id: 10,
        topic: 'Podcasts',
        link: 'https://medium.com/swlh/entrepreneurs-if-youre-looking-for-podcasts-in-2020-pick-these-15e4b613006b'
    },
    {
        id: 11,
        topic: 'Product Management',
        link: 'https://medium.com/swlh/product-management-15-things-you-should-know-1d6aab32b041'
    },
    {
        id: 12,
        topic: 'Web Development',
        link: 'https://benscheer.medium.com/web-development-explained-in-60-seconds-4405ed4b3a56'
    },
    {
        id: 13,
        topic: 'WebVR',
        link: 'https://benscheer.medium.com/webvr-explained-in-60-seconds-eb1007b3172b'
    },
    {
        id: 14,
        topic: 'Web Crawling',
        link: 'https://benscheer.medium.com/python-tutorial-lets-build-a-web-crawler-for-sitemaps-b3afe214f6ed?sk=9c8b471d987b6a2877bfa20b30a3a336'
    },
    {
        id: 15,
        topic: 'Project Dependencies',
        link: 'https://benscheer.medium.com/how-to-install-nvm-and-node-on-macos-m1-silicon-in-2022-172fba82d92f'
    },
    {
        id: 16,
        topic: 'REST API',
        link: 'https://javascript.plainenglish.io/a-short-introduction-to-using-stripe-api-with-javascript-9c83f89af1e1'
    },
    {
        id: 17,
        topic: 'Data Structures',
        link: 'https://benscheer.medium.com/deep-dive-how-to-create-a-data-structure-that-handles-insert-delete-and-getrandom-in-o-1-time-f79c74dc4de5'
    },
    {
        id: 18,
        topic: 'App Security',
        link: 'https://blog.devgenius.io/quick-tutorial-how-to-deal-with-secret-keys-in-react-apps-97e886c5d2a3'
    }
];

const books = [
    'Books to Read',
    'I like these, and think you will too.',
    '📖',
    [
        {
            id: 0,
            name: 'Predictably Irrational'
        },
        {
            id: 1,
            name: 'Embrace Your Weird'
        },
        {
            id: 2,
            name: 'How to Win Friends & Influence People'
        },
        {
            id: 3,
            name: 'Influence'
        },
        {
            id: 4,
            name: 'The Subtle Art of Not Giving a F*ck'
        },
        {
            id: 5,
            name: 'Never Eat Alone'
        },
        {
            id: 6,
            name: 'The ONE Thing'
        },
        {
            id: 7,
            name: 'The Lean Startup'
        },
        {
            id: 8,
            name: 'Never Split the Difference'
        },
        {
            id: 9,
            name: 'When'
        },
        {
            id: 10,
            name: '12 Rules for Life'
        },
        {
            id: 11,
            name: 'Atomic Habits'
        },
        {
            id: 12,
            name: 'Make Your Bed'
        },
        {
            id: 13,
            name: 'Creativity Inc.'
        },
        {
            id: 14,
            name: 'The Defining Decade'
        },
        {
            id: 15,
            name: 'Psycho-Cybernetics'
        },
        {
            id: 16,
            name: 'Atomic Habits'
        },
        {
            id: 17,
            name: 'Radical Candor'
        },
        {
            id: 18,
            name: 'Beyond Order'
        },
        {
            id: 19,
            name: 'I Could Do Anything If I Only Knew What It Was'
        },
        {
            id: 20,
            name: 'Hell Yeah or No (Derek Sivers)'
        },
        {
            id: 21,
            name: 'The Almanack of Naval Ravikant'
        },
        {
            id: 22,
            name: 'Can\'t Hurt Me'
        },
        {
            id: 23,
            name: 'How to Get Rich'
        },
        {
            id: 24,
            name: 'Sapiens'
        },
        {
            id: 25,
            name: 'Show Your Work!'
        },
        {
            id: 26,
            name: 'The Mountain Is You'
        },
        {
            id: 27,
            name: 'Tribe of Mentors'
        }
    ]
];

const podcasts = [
    'Podcasts To Hear',
    'I recommend listening to these.',
    '🎧',
    [
        {
            id: 0,
            name: 'Stuff You Should Know'
        },
        {
            id: 1,
            name: 'Business Wars'
        },
        {
            id: 2,
            name: 'Reply All'
        },
        {
            id: 3,
            name: 'Stuff You Should Know'
        },
        {
            id: 4,
            name: 'How I Built This'
        },
        {
            id: 5,
            name: 'Every Little Thing'
        },
        {
            id: 6,
            name: 'Syntax.fm'
        },
        {
            id: 7,
            name: 'The Pitch'
        },
        {
            id: 8,
            name: 'The Jordan B. Peterson Podcast'
        },
        {
            id: 9,
            name: 'The Joe Rogan Experience'
        },
        {
            id: 10,
            name: 'How I Built This'
        },
        {
            id: 11,
            name: 'The Mindset Mentor'
        },
        {
            id: 12,
            name: 'How To Start A Startup'
        },
        {
            id: 13,
            name: 'SmartLess'
        },
        {
            id: 14,
            name: 'Naval'
        }
    ]
];;

// const videos = [
//     'Videos To Watch',
//     'Here are some videos you will probably enjoy.',
//     '📼',
//     [
//         {
//             id: 0,
//             name: 'Simon Sinek\'s Golden Circle'
//         },
//         {
//             id: 0,
//             name: 'Jim Carrey\'s Commencement Speech'
//         },
//         {
//             id: 0,
//             name: 'Simon Sinek\'s Golden Circle'
//         }
//     ]
// ];

function getProjects(){
    return projects;
}

function getPersonalLinks(){
    return personalLinks;
}

function getArticles(){
    return articles;
}

function getBooks(){
    return books;
}

function getPodcasts(){
    return podcasts;
}

// function getVideos(){
//     return videos;
// }

function getRandomColor(){
    return randomColors[Math.floor(Math.random() * randomColors.length)];
}

export { getRandomColor, getProjects, getPersonalLinks, getArticles, getBooks, getPodcasts };