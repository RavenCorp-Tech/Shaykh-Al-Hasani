/* ============================================
   ARTICLES.JS - ARTICLES PAGE FUNCTIONALITY
   ============================================ */

class ArticlesManager {
  constructor() {
    this.articleData = [];
    this.init();
  }

  init() {
    try {
      this.articleData = this.normalizeArticleData(this.getArticleData());
      this.renderArticles();
      this.setupArticleInteractions();
    } catch (error) {
      this.renderFatalError();
      console.error('Failed to initialize articles page:', error);
    }
  }

  /* ============================================
     ARTICLE DATA
     ============================================ */

  getArticleData() {
    return [
      {
        id: 1,
        slug: 'weakening-hadith-ammar-rebellious',
        title: 'Weakening the Ḥadīth: "ʿAmmār will be killed by the rebellious group"',
        excerpt: 'What has been reported of Ibn al-Madīnī declaring it authentic is not established from him. The stronger view regarding it from Aḥmad—and likewise what is preserved from Ibn Maʿīn, Abū Khaythamah, and al-Muʿayṭī—is that it is weak and rejected. This is also the apparent approach of al-Khallāl and Ibn al-Jawzī in weakening it and rejecting it, and al-Bukhārī turned away from it…',
        date: new Date('2024-10-21'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Sciences',
        featured: true,
        readTime: '45 min read'
      },
      {
        id: 2,
        slug: 'weakening-hadith-none-loves-you',
        title: 'Weakening of the ḥadīth: “None loves you except a believer, and none hates you except a hypocrite”',
        excerpt: 'Narrated to us (ḥaddathanā): Wakīʿ narrated to us, al-Aʿmash narrated to us, from ʿAdī ibn Thābit, from Zir ibn Ḥubaysh, from ʿAlī, who said: The Prophet ﷺ made a covenant with me: “None loves you except a believer, and none hates you except a hypocrite.”',
        date: new Date('2025-10-21'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Sciences',
        featured: true,
        readTime: '12 min read'
      },
      {
        id: 3,
        slug: 'weakening-hadith-hasan-husayn-leaders-youth-paradise',
        title: 'Weakening of the ḥadīth: “Al-Ḥasan and al-Ḥusayn are the leaders of the youth of Paradise”',
        excerpt: 'Ḥadīth: “Al-Ḥasan and al-Ḥusayn are the leaders of the youth of Paradise” [A ḥadīth that is not authentic]. This report is defective, and its routes do not authenticate one another according to the critical analysis presented.',
        date: new Date('2025-06-21'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Sciences',
        featured: true,
        readTime: '20 min read'
      },
      {
        id: 4,
        slug: 'much-spread-today-neglected-sunnah',
        title: 'Much of what is spread today and labeled as “a neglected Sunnah”...',
        excerpt: 'Much of what is spread today and labeled as “a neglected Sunnah” is, upon verification, without any basis. Rather, they are false, denounced, fabricated, and rejected ḥadīths which the early ḥadīth masters gave no weight to and did not consider.',
        date: new Date('2024-03-21'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Sciences',
        featured: true,
        readTime: '8 min read'
      },
      {
        id: 5,
        slug: 'what-has-been-reported-laughter-prophet',
        title: '[What has been reported regarding the laughter of the Prophet ﷺ]',
        excerpt: 'There have come various descriptions regarding the manner of the Prophet’s ﷺ laughter, including: smiling, laughing, laughing until his molar teeth became visible, and at times he would smile the smile of one who is displeased...',
        date: new Date('2024-03-21'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Sciences',
        featured: true,
        readTime: '6 min read'
      },
      {
        id: 6,
        slug: 'weak-inauthentic-reports-in-the-sirah',
        title: 'Weak (Inauthentic) Reports in the Sīrah',
        excerpt: 'Weak (Inauthentic) Reports in the Sīrah: a critical numbered listing of widespread narratives that are false, munkar, fabricated, weak, or not authentic.',
        date: new Date('2024-03-21'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Sīrah & Ḥadīth Criticism',
        featured: true,
        readTime: '30 min read'
      },
      {
        id: 7,
        slug: 'hadith-istighfar-forgiven-even-fled-battlefield',
        title: 'Ḥadīth: “Whoever says: ‘I seek forgiveness from Allah, besides whom there is no deity, the Ever-Living, the Sustainer, and I repent to Him,’ he will be forgiven-even if he fled from the battlefield.”',
        excerpt: 'This report is not authentic, neither as marfūʿ nor as mawqūf. Its transmitted routes are either obscure or defective due to inconsistency and interruption in narration.',
        date: new Date('2024-03-22'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '7 min read'
      },
      {
        id: 8,
        slug: 'hadith-alhamdulillah-equal-to-what-he-created',
        title: 'Ḥadīth: “All praise is due to Allah, equal to the number of what He created, and all praise is due to Allah filling what He created…”',
        excerpt: 'A hadith-critical review showing this report is not established: its known routes are either disconnected or very weak, with chains containing unknown, weak, or abandoned narrators.',
        date: new Date('2024-03-22'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '8 min read'
      },
      {
        id: 9,
        slug: 'hadith-allah-perfect-my-character',
        title: 'Ḥadīth: “O Allah, You have perfected my creation, so perfect my character.”',
        excerpt: 'This report is judged defective: its transmitted routes are disputed and weak, with reliance on unknown narrators and chains containing accused or rejected transmitters.',
        date: new Date('2024-03-22'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '6 min read'
      },
      {
        id: 10,
        slug: 'hadith-indeed-your-lord-hayy-karim',
        title: 'Ḥadīth: “Indeed your Lord is ḥayy (modest/shy) and karīm (generous); He is shy that when His servant raises his hands to Him, He returns them empty-or he said: disappointed.”',
        excerpt: 'A critical review of this narration and its variants: the principal marfūʿ route is weak and opposed by a mawqūf version, while supporting chains contain severe weakness and do not strengthen one another.',
        date: new Date('2024-03-22'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '8 min read'
      },
      {
        id: 11,
        slug: 'hadith-cupped-while-fasting-and-ihram',
        title: 'Ḥadīth: “The Messenger of Allah cupped while fasting and cupped while in iḥrām.”',
        excerpt: 'A hadith-critical analysis clarifying that the preserved wording concerns cupping in iḥrām, while the fasting wording is considered defective; related supporting reports are also shown to be weak or rejected.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '9 min read'
      },
      {
        id: 12,
        slug: 'hadith-forbidden-from-killing-those-who-pray',
        title: 'Ḥadīth: “I have been forbidden from killing those who pray.”',
        excerpt: 'This report is not authentically established through its famous routes due to severe weaknesses and unknown or abandoned narrators; the preserved report appears in al-Muwaṭṭaʾ with a different wording.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '8 min read'
      },
      {
        id: 13,
        slug: 'ahadith-that-are-not-authentic',
        title: 'Aḥādīth that are not authentic',
        excerpt: 'A wide critical catalogue of commonly circulated reports judged weak, defective, rejected, disconnected, or fabricated by hadith masters, with notes on preserved alternatives where applicable.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '18 min read'
      },
      {
        id: 14,
        slug: 'hadith-evil-eye-is-real-grave-and-cooking-pot',
        title: 'Ḥadīth: “The evil eye (al-ʿayn) is real; it causes a man to be placed in the grave and causes a camel to enter the cooking pot.”',
        excerpt: 'A hadith-critical evaluation of this wording as very munkar, tracing chain-level errors and showing the preserved route differs from the mistaken attribution.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '7 min read'
      },
      {
        id: 15,
        slug: 'hadith-permission-while-praying-tasbih-clapping',
        title: 'Ḥadīth: “If permission is sought from a man while he is praying, then his permission is tasbīḥ (saying Subḥān Allāh), and if permission is sought from a woman while she is praying, then her permission is clapping.”',
        excerpt: 'A hadith-critical clarification that this expanded wording is defective, while the preserved and widely transmitted wording is: “Tasbīḥ is for men, and clapping is for women.”',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '10 min read'
      },
      {
        id: 16,
        slug: 'hadith-o-aishah-leave-me-to-worship-tonight',
        title: 'Ḥadīth: “O ʿĀʾishah, leave me so that I may worship my Lord tonight.”',
        excerpt: 'A hadith-critical examination judging this report munkar due to layered solitary transmission (tafarrud/ghurabah) through lesser-known links despite many major transmitters not reporting it.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '11 min read'
      },
      {
        id: 17,
        slug: 'hadith-whoever-sees-an-afflicted-person',
        title: 'Ḥadīth: “Whoever sees an afflicted person and says: al-ḥamdu lillāh alladhī ʿāfānī mimmā ibtalāka bih…”',
        excerpt: 'A hadith-critical review concluding this report is very munkar through severely weak solitary routes that do not strengthen each other despite multiplicity.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '9 min read'
      },
      {
        id: 18,
        slug: 'authentic-athar-number-of-tarawih-rakahs',
        title: '[Some authentic narrations (āthār) regarding the number of rakʿahs of Tarāwīḥ]',
        excerpt: 'Authentic and good āthār showing varied established practice in Tarāwīḥ counts among the early generations, supporting permissibility of praying beyond eleven rakʿahs.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Fiqh & Āthār',
        featured: true,
        readTime: '7 min read'
      },
      {
        id: 19,
        slug: 'narrations-first-ten-days-dhul-hijjah',
        title: 'Some narrations regarding the first ten days of Dhū al-Ḥijjah',
        excerpt: 'A hadith-critical roundup of well-known reports about the first ten days of Dhū al-Ḥijjah, clarifying which wordings are weak, rejected, or not authentically established.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '8 min read'
      },
      {
        id: 20,
        slug: 'ahadith-not-authentic-regarding-marital-relations',
        title: 'Some aḥādīth that are not authentic regarding marital relations',
        excerpt: 'A critical survey of widely-circulated marital narrations, clarifying which reports are rejected, disconnected, weak, or otherwise not authentically established.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '8 min read'
      },
      {
        id: 21,
        slug: 'ahadith-encouraging-salah-upon-prophet-friday-night',
        title: '[Aḥādīth encouraging sending ṣalāh upon the Prophet on Friday and the night of Friday]',
        excerpt: 'A hadith-critical compilation showing that many widely circulated narrations on Friday/Friday-night ṣalāh upon the Prophet are fabricated, rejected, or otherwise not authentically established.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '9 min read'
      },
      {
        id: 22,
        slug: 'hadith-pray-two-rakahs-when-leaving-and-entering-home',
        title: 'Ḥadīth: “If you leave your house, then pray two rakʿahs (units of prayer) that will protect you from an evil خروج (khurūj – exit). And if you enter your house, then pray two rakʿahs that will protect you from an evil دخول (dukhūl – entry).”',
        excerpt: 'A concise hadith-critical note clarifying this narration is munkar, with chain-level weakness, narrator uncertainty, and al-Bazzār’s lone transmission cited as evidence of its defect.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '6 min read'
      },
      {
        id: 23,
        slug: 'regarding-ahadith-supplication-fasting-person-not-rejected',
        title: 'Regarding some aḥādīth about the supplication of the fasting person not being rejected',
        excerpt: 'A hadith-critical overview of famous reports on the fasting person’s supplication at ifṭār, clarifying their weakness or rejection while still affirming that duʿāʾ during fasting remains a hoped means of acceptance.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '6 min read'
      },
      {
        id: 24,
        slug: 'regarding-ahadith-preference-womens-prayer-homes-over-mosques',
        title: 'Regarding some aḥādīth about the preference of women’s prayer in homes over mosques',
        excerpt: 'A hadith-critical examination of narrations on women praying at home versus mosques, highlighting unknown narrators, possible disconnection, and major scholarly reservations about their authenticity.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '8 min read'
      },
      {
        id: 25,
        slug: 'hadith-whoever-seeks-forgiveness-for-believing-men-and-women',
        title: 'Ḥadīth: “Whoever seeks forgiveness for the believing men and believing women…”',
        excerpt: 'A hadith-critical note explaining that its known routes are not authentic, while the general virtue of seeking forgiveness for believers remains established by Qurʾānic texts without assigning this specific reported reward.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '7 min read'
      },
      {
        id: 26,
        slug: 'most-well-known-weak-ahadith-widespread-in-shaban',
        title: 'The most well-known weak aḥādīth that are widespread in the month of Shaʿbān',
        excerpt: 'A concise hadith-critical digest of famous Shaʿbān narrations, clarifying that these widespread reports are weak, rejected, false, or fabricated according to leading hadith critics.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '8 min read'
      },
      {
        id: 27,
        slug: 'authenticity-virtue-night-middle-of-shaban',
        title: 'The authenticity of the virtue of the night of the middle of Shaʿbān',
        excerpt: 'A source-based review of early scholarly statements concluding no authentic evidence establishes a special virtue for the middle night of Shaʿbān over other nights.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '7 min read'
      },
      {
        id: 28,
        slug: 'regarding-not-fasting-after-middle-of-shaban',
        title: 'Regarding not fasting after the middle of Shaʿbān',
        excerpt: 'A hadith-critical study concluding that the report "When Shaʿbān reaches its middle, then do not fast" is rejected and contradicted by stronger authentic narrations on fasting in Shaʿbān.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '9 min read'
      },
      {
        id: 29,
        slug: 'abstaining-from-nullifiers-for-fasting-person',
        title: 'Abstaining from nullifiers (al-mufaṭṭirāt) for the fasting person',
        excerpt: 'A source-based clarification that no authentic connected report establishes eating after the adhān from the Prophet ﷺ, while authentic āthār explain the true dawn and proper time of abstention (imsāk).',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '9 min read'
      },
      {
        id: 30,
        slug: 'conclusion-wiping-face-with-hands-after-dua',
        title: 'Conclusion regarding wiping the face with the hands after supplication (duʿāʾ)',
        excerpt: 'A hadith-critical conclusion that marfūʿ reports are weak or defective, yet practice from early scholars supports permissibility, so wiping the face after duʿāʾ is considered allowable without prohibition.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '7 min read'
      },
      {
        id: 31,
        slug: 'regarding-hadiths-about-al-khawarij',
        title: 'Regarding the ḥadīths about al-Khawārij',
        excerpt: 'A hadith-critical analysis concluding that specific labels and famous wordings about al-Khawārij are not authentically established, with many apparent supporting chains tracing back to the same weak origins.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '9 min read'
      },
      {
        id: 32,
        slug: 'what-has-been-reported-regarding-ar-ruwaybidah',
        title: 'What has been reported regarding ar-Ruwaybiḍah',
        excerpt: 'A hadith-critical review of the ar-Ruwaybiḍah narration and its routes, showing chain defects, unknown narrators, disconnection, and inconsistencies that prevent establishing it as authentic.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '8 min read'
      },
      {
        id: 33,
        slug: 'hadith-i-am-with-my-servant-as-long-as-he-remembers-me',
        title: 'Ḥadīth: “I am with My servant as long as he remembers Me, and his lips move with My remembrance”',
        excerpt: 'A hadith-critical discussion showing this specific wording is defective as marfūʿ and preserved as mawqūf, while stronger authentic routes establish related dhikr wordings.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '9 min read'
      },
      {
        id: 34,
        slug: 'conclusion-regarding-zakat-on-jewelry',
        title: 'Conclusion regarding Zakāt on jewelry (al-ḥulī)',
        excerpt: 'A hadith-critical conclusion that no authentic marfūʿ reports establish zakāt on jewelry specifically, with documented early scholarly disagreement and strong reports indicating no obligatory zakāt on worn jewelry.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '12 min read'
      },
      {
        id: 35,
        slug: 'established-forms-of-takbir',
        title: 'The established forms (ṣiyagh) of Takbīr',
        excerpt: 'A concise collection of established Takbīr forms transmitted from early authorities, including narrations from ʿAlī, Ibn Masʿūd, Ibn ʿAbbās, Salmān, and al-Ḥasan al-Baṣrī.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '6 min read'
      },
      {
        id: 36,
        slug: 'hadith-allah-descends-on-day-of-arafah',
        title: 'Ḥadīth: “That Allah descends (yanzil) on the Day of ʿArafah?”',
        excerpt: 'A hadith-critical clarification that reports wording Allah “descends” on ʿArafah are not authentic, while the established wording is “He draws near” (yadnū), which differs in meaning.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '7 min read'
      },
      {
        id: 37,
        slug: 'benefit-regarding-fasting-day-of-ashura',
        title: 'A benefit (fāʾidah) regarding fasting the Day of ʿĀshūrāʾ',
        excerpt: 'A concise hadith-based benefit showing the many routes commanding ʿĀshūrāʾ fasting before Ramaḍān, then clarifying its later recommendation and the guidance to fast the ninth with the tenth.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '6 min read'
      },
      {
        id: 38,
        slug: 'answering-supplication-before-sunset-friday',
        title: 'Answering supplication (istijābat ad-duʿāʾ) before sunset on Friday',
        excerpt: 'A practical compilation for the final hour before sunset on Friday, gathering selected Qurʾānic supplications and authentic prophetic invocations for focused, hope-filled duʿāʾ.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '15 min read'
      },
      {
        id: 39,
        slug: 'nothing-established-regarding-and-what-is-to-come',
        title: 'Nothing is established regarding the addition “and what is to come” (wa-mā taʾakhkhar) of sins except for the Prophet ﷺ',
        excerpt: 'A hadith-critical study showing that the addition “and what is to come” for forgiveness is established only for the Prophet ﷺ, while other narrations carrying this wording are weak, irregular, or rejected.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '16 min read'
      },
      {
        id: 40,
        slug: 'summary-discussion-hadith-fasting-six-days-shawwal',
        title: 'Summary of the discussion regarding the ḥadīth of fasting the six days of Shawwāl',
        excerpt: 'A critical summary arguing that reports on fasting six days of Shawwāl are not established due to obscure, weak, inconsistent, and disconnected routes, alongside citations from early authorities who did not act upon it.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '13 min read'
      },
      {
        id: 41,
        slug: 'eid-and-jumuah-coincide-same-day',
        title: 'When ʿĪd and Jumuʿah (Friday) coincide on the same day',
        excerpt: 'A hadith-critical overview of narrations on coinciding ʿĪd and Jumuʿah, distinguishing weak marfūʿ reports from established practice of some Companions and Tābiʿīn, with practical concluding options.',
        date: new Date('2024-03-23'),
        author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
        category: 'Ḥadīth Criticism',
        featured: true,
        readTime: '12 min read'
      }
    ];
  }

  /* ============================================
     RENDER ARTICLES
     ============================================ */

  renderArticles() {
    const container = document.querySelector('.articles-container');
    if (!container) return;

    container.innerHTML = '';

    if (this.articleData.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📚</div>
          <p>No articles available yet.</p>
          <p style="font-size: 0.9rem; color: var(--text-tertiary);">Check back soon for new content.</p>
        </div>
      `;
      return;
    }

    this.articleData.forEach((article, index) => {
      try {
        const card = this.createArticleCard(article, index);
        container.appendChild(card);
      } catch (error) {
        console.error(`Skipping invalid article at index ${index}:`, error);
      }
    });

    if (!container.children.length) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">⚠️</div>
          <p>Articles could not be displayed.</p>
          <p style="font-size: 0.9rem; color: var(--text-tertiary);">Please refresh or try again shortly.</p>
        </div>
      `;
    }
  }

  createArticleCard(article, index) {
    const card = document.createElement('div');
    card.className = 'article-card';
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <div class="article-header">
        <div class="article-tags" style="margin-bottom: 0.75rem;">
          <span style="
            display: inline-block;
            background: rgba(212, 165, 116, 0.1);
            color: var(--accent-color);
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
          ">${this.escapeHtml(article.category)}</span>
        </div>
        <h3 class="article-title">${this.escapeHtml(article.title)}</h3>
        <div class="article-meta">
          <span>👤 ${this.escapeHtml(article.author)}</span>
          <span>⏱️ ${this.escapeHtml(article.readTime)}</span>
        </div>
      </div>
      <p class="article-excerpt">${this.escapeHtml(article.excerpt)}</p>
      <a href="article-detail.html?id=${article.id}" class="read-more">Read Full Article</a>
    `;

    // Add click interaction
    card.addEventListener('click', () => {
      navigateTo(`article-detail.html?id=${article.id}`);
    });

    return card;
  }

  /* ============================================
     ARTICLE INTERACTIONS
     ============================================ */

  setupArticleInteractions() {
    const cards = document.querySelectorAll('.article-card');

    cards.forEach(card => {
      // Hover effect
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(8px)';
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
      });

      // Keyboard navigation
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          const link = card.querySelector('.read-more');
          if (link) {
            e.preventDefault();
            navigateTo(link.href);
          }
        }
      });
    });
  }

  /* ============================================
     UTILITY METHODS
     ============================================ */

  formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  getTimeAgo(date) {
    const now = new Date();
    const diff = now - date;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return years === 1 ? '1 year ago' : `${years} years ago`;
    if (months > 0) return months === 1 ? '1 month ago' : `${months} months ago`;
    if (weeks > 0) return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
    if (days > 0) return days === 1 ? '1 day ago' : `${days} days ago`;
    if (hours > 0) return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    if (minutes > 0) return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
    return 'just now';
  }

  escapeHtml(text) {
    const value = text == null ? '' : String(text);
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return value.replace(/[&<>"']/g, m => map[m]);
  }

  normalizeArticleData(data) {
    if (!Array.isArray(data)) return [];

    return data.map((item, index) => {
      const id = Number(item?.id);
      return {
        id: Number.isFinite(id) ? id : index + 1,
        title: item?.title ?? 'Untitled Article',
        excerpt: item?.excerpt ?? 'No summary available.',
        author: item?.author ?? 'Unknown Author',
        category: item?.category ?? 'Uncategorized',
        readTime: item?.readTime ?? 'N/A'
      };
    });
  }

  renderFatalError() {
    const container = document.querySelector('.articles-container');
    if (!container) return;

    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">⚠️</div>
        <p>Articles page failed to load.</p>
        <p style="font-size: 0.9rem; color: var(--text-tertiary);">A data issue was detected. Please refresh the page.</p>
      </div>
    `;
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.articlesManager = new ArticlesManager();
});

/* ============================================
   SEARCH AND FILTER FUNCTIONALITY
   ============================================ */

class ArticleSearch {
  constructor() {
    this.searchInput = document.querySelector('.article-search');
    this.filterBtns = document.querySelectorAll('.filter-btn');
    this.setupSearchAndFilter();
  }

  setupSearchAndFilter() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        this.filterArticles(query);
      });
    }

    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.filterArticlesByCategory(e.target.dataset.category);
      });
    });
  }

  filterArticles(query) {
    const articles = document.querySelectorAll('.article-card');
    articles.forEach(article => {
      const title = article.querySelector('.article-title').textContent.toLowerCase();
      const excerpt = article.querySelector('.article-excerpt').textContent.toLowerCase();

      if (title.includes(query) || excerpt.includes(query)) {
        article.style.display = '';
        article.style.opacity = '1';
      } else {
        article.style.opacity = '0.3';
      }
    });
  }

  filterArticlesByCategory(category) {
    const articles = document.querySelectorAll('.article-card');
    articles.forEach(article => {
      const articleCategory = article.dataset.category;
      if (category === 'all' || articleCategory === category) {
        article.style.display = '';
      } else {
        article.style.display = 'none';
      }
    });
  }
}

// Initialize search if elements exist
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.article-search') || document.querySelector('.filter-btn')) {
    window.articleSearch = new ArticleSearch();
  }
});
