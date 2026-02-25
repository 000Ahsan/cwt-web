export interface featuredTutorial {
  id: number;
  rating: number;
  img: string;
  post: string;
  desc: string;
  date: string;
}
export const articlesAndVideos = [
  {
    row: 1,
    class: 'col-xl-4 col-md-6',
    data: [
      {
        id: 1,
        icon: 'codepen',
        title: 'Article Base Video',
        desc: 'The web is a very big place, and if you are the typical internet base user.',
        class: 'col-sm-12',
      },
      {
        id: 2,
        title: 'Knows your sources',
        icon: 'codepen',
        desc: 'A book giving information on many subjects or on many aspects of one subject.',
        class: 'col-sm-12',
      },
      {
        id: 3,
        title: 'Sources credible/reliable',
        icon: 'codepen',
        desc: 'Simple demos of frequently asked questions about using the information resources',
        class: 'col-sm-12',
      },
    ],
  },
  {
    row: 2,
    class: 'col-xl-4 col-md-6',
    data: [
      {
        id: 4,
        title: 'Validate website',
        icon: 'file-text',
        desc: 'Website is the process of ensuring that the pages on the website conform.',
        class: 'col-sm-12',
      },
      {
        id: 5,
        title: 'Tailwind Design',
        icon: 'file-text',
        desc: 'Tailwind is so low-level, it never encourages you to design the same site twice.',
        class: 'col-sm-12',
      },
      {
        id: 6,
        title: 'Knows your sources',
        icon: 'file-text',
        desc: 'A book giving information on many subjects or on many aspects of one subject.',
        class: 'col-sm-12',
      },
    ],
  },
  {
    row: 3,
    class: 'col-xl-4',
    data: [
      {
        id: 7,
        title: 'Sources Demos',
        icon: 'youtube',
        desc: 'Simple demos of frequently asked questions about using the information resources',
        class: 'col-xl-12 col-md-6',
      },
      {
        id: 8,
        title: 'Validate Html',
        icon: 'youtube',
        desc: 'Website is the process of ensuring that the pages on the website conform.',
        class: 'col-xl-12 col-md-6',
      },
      {
        id: 9,
        title: 'Web Design',
        icon: 'youtube',
        desc: 'Web is so high-level, it never encourages you to design the same site twice',
        class: 'col-xl-12',
      },
    ],
  },
];

export let faqData: featuredTutorial[] = [
  {
    id: 1,
    rating: 5,
    img: 'assets/images/faq/1.jpg',
    post: 'Web Design',
    desc: 'Web Designing course belongs to field of Computer and IT. It enables students to learn various technique.',
    date: 'Dec 15, 2022',
  },
  {
    id: 2,
    rating: 4,
    img: 'assets/images/faq/2.jpg',
    post: 'Web Development',
    desc: 'This course is designed to start you on a path toward future studies in web development and design.',
    date: 'Aug 04, 2022',
  },
  {
    id: 3,
    rating: 1,
    img: 'assets/images/faq/3.jpg',
    post: 'UI Design',
    desc: 'User interface design (UI) is the design for machines and software, such as mobile devices, computers.',
    date: 'Jan 22, 2022',
  },
  {
    id: 4,
    rating: 2,
    img: 'assets/images/faq/4.jpg',
    post: 'Tailwind Design',
    desc: 'Web Designing course belongs to field of Computer and IT. It enables students to learn various technique.',
    date: 'Nov 09, 2022',
  },
];

export const navigation = [
  {
    icon: 'edit',
    title: 'Tutorials',
  },
  {
    icon: 'globe',
    title: 'Help center',
  },
  {
    icon: 'book-open',
    title: 'Knowledgebase',
  },
  {
    icon: 'file-text',
    title: 'Articles',
    count: '',
  },

  {
    icon: 'youtube',
    title: 'Video Tutorials',
    count: '648',
  },
  {
    icon: 'message-circle',
    title: 'Ask our community',
    count: '',
  },
  {
    icon: 'mail',
    title: 'Contact us',
  },
  {
    icon: 'message-circle',
    title: 'Ask our community',
  },
  {
    icon: 'mail',
    title: 'Contact us',
  },
];

export const FaqTopPart = [
  {
    title: 'Articles',
    colClass: 'xl-50 box-col-6',
    dace: 'How little experience or technical knowledge you currently have. The web is a very big place, and if you are the typical internet user, you probably visit several websites every day.',
    icon: 'file-text',
  },
  {
    title: 'Knowledgebase',
    colClass: 'xl-50 box-col-6',
    dace: 'A Website Designing course enables learners to use essential designing and programming tools required to do the job efficiently. The curriculum is a blend of various themes.',
    icon: 'book-open',
  },
  {
    title: 'Support',
    colClass: 'xl-100 box-col-12',
    dace: 'The customer support industry is renaissance. Customer support as a specialty is coming into its own, offering companies a competitive advantage that’s difficult to copy.',
    icon: 'aperture',
  },
];
