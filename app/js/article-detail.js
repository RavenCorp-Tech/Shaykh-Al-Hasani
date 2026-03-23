/* ============================================
   ARTICLE-DETAIL.JS - DETAILED ARTICLE PAGE
   ============================================ */

class ArticleDetail {
  constructor() {
    this.articleContent = this.getArticleContent();
    this.init();
  }

  init() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    if (!articleId) {
      this.showError('Article not found');
      return;
    }

    const article = this.getArticleById(articleId);
    if (!article) {
      this.showError('Article not found');
      return;
    }

    this.renderArticle(article);
    this.setupFootnoteInteractions();
    this.setupTableOfContents();
  }

  getArticleById(articleId) {
    const articleGetters = {
      '1': () => this.articleContent,
      '2': () => this.getSecondArticleContent(),
      '3': () => this.getThirdArticleContent(),
      '4': () => this.getFourthArticleContent(),
      '5': () => this.getFifthArticleContent(),
      '6': () => this.getSixthArticleContent(),
      '7': () => this.getSeventhArticleContent(),
      '8': () => this.getEighthArticleContent(),
      '9': () => this.getNinthArticleContent(),
      '10': () => this.getTenthArticleContent(),
      '11': () => this.getEleventhArticleContent(),
      '12': () => this.getTwelfthArticleContent(),
      '13': () => this.getThirteenthArticleContent(),
      '14': () => this.getFourteenthArticleContent(),
      '15': () => this.getFifteenthArticleContent(),
      '16': () => this.getSixteenthArticleContent(),
      '17': () => this.getSeventeenthArticleContent(),
      '18': () => this.getEighteenthArticleContent(),
      '19': () => this.getNineteenthArticleContent(),
      '20': () => this.getTwentiethArticleContent(),
      '21': () => this.getTwentyFirstArticleContent(),
      '22': () => this.getTwentySecondArticleContent(),
      '23': () => this.getTwentyThirdArticleContent(),
      '24': () => this.getTwentyFourthArticleContent(),
      '25': () => this.getTwentyFifthArticleContent(),
      '26': () => this.getTwentySixthArticleContent(),
      '27': () => this.getTwentySeventhArticleContent(),
      '28': () => this.getTwentyEighthArticleContent(),
      '29': () => this.getTwentyNinthArticleContent(),
      '30': () => this.getThirtiethArticleContent(),
      '31': () => this.getThirtyFirstArticleContent(),
      '32': () => this.getThirtySecondArticleContent(),
      '33': () => this.getThirtyThirdArticleContent(),
      '34': () => this.getThirtyFourthArticleContent(),
      '35': () => this.getThirtyFifthArticleContent(),
      '36': () => this.getThirtySixthArticleContent(),
      '37': () => this.getThirtySeventhArticleContent(),
      '38': () => this.getThirtyEighthArticleContent(),
      '39': () => this.getThirtyNinthArticleContent(),
      '40': () => this.getFortiethArticleContent(),
      '41': () => this.getFortyFirstArticleContent()
    };

    const getArticle = articleGetters[String(articleId)];
    return typeof getArticle === 'function' ? getArticle() : null;
  }

  /* ============================================
     ARTICLE CONTENT
     ============================================ */

  getArticleContent() {
    return {
      id: 1,
      title: 'Weakening the Ḥadīth: "ʿAmmār will be killed by the rebellious group"',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-10-21'),
      category: 'Ḥadīth Sciences',
      readTime: '45 min read',
      body: `
        <p>The ḥadīth of Maʿmar ibn Rāshid, from Ibn Ṭāwūs, from Abū Bakr ibn Muḥammad ibn ʿAmr ibn Ḥazm, from his father, who said:</p>

        <p>When ʿAmmār ibn Yāsir was killed, ʿAmr ibn Ḥazm entered upon ʿAmr ibn al-ʿĀṣ and said: "ʿAmmār has been killed, and the Messenger of Allah ﷺ said: <em>'The rebellious group will kill him.'</em>" So ʿAmr ibn al-ʿĀṣ stood up in alarm, repeating (the phrase of return), until he entered upon Muʿāwiyah. Muʿāwiyah said to him: "What is the matter with you?" He said: "ʿAmmār has been killed." Muʿāwiyah said: "ʿAmmār has been killed—so what?" ʿAmr said: "I heard the Messenger of Allah ﷺ say: <em>'The rebellious group will kill him.'</em>" So Muʿāwiyah said to him: "You have erred in your reasoning! Did we kill him? Rather, ʿAlī and his companions killed him—they brought him until they placed him between our spears,"—or he said: "between our swords."</p>

        <p>It was reported by ʿAbd al-Razzāq (20427), Aḥmad (17931), and Abū Yaʿlā (7175), and the wording is that of Aḥmad.</p>

        <p>I say: May Allah be pleased with all the companions of Muḥammad, and O Allah forgive those who preceded us in faith, and do not place in our hearts any rancor toward those who believe.</p>

        <p>This ḥadīth—I fear that Ibn Ṭāwūs did not hear it from Abū Bakr ibn Muḥammad ibn ʿAmr ibn Ḥazm. It is strange from this route; Ibn Ṭāwūs is Yemeni, while this one is Madinan. The basis of the ḥadīth from Maʿmar is from two routes: this is the first. The second: from Maʿmar, from one who heard al-Ḥasan narrating from his father, from Umm Salamah [mursal]. And Maʿmar, in his narrations from the Baṣrans, is inconsistent, as stated by Aḥmad, Ibn Maʿīn, Abū Ḥātim, and others.</p>

        <p>Al-Khallāl reported from Aḥmad, Ibn Maʿīn, Abū Khaythamah, and al-Muʿayṭī that no ḥadīth regarding it is authentic. Abū Bakr al-Khallāl said: Ismāʿīl ibn al-Faḍl informed me, he said: I heard Abū Umayyah Muḥammad ibn Ibrāhīm say: I heard in a gathering Aḥmad ibn Ḥanbal, Yaḥyā ibn Maʿīn, Abū Khaythamah, and al-Muʿayṭī mentioning: <em>"ʿAmmār will be killed by the rebellious group"</em>, and they said: "There is no authentic ḥadīth concerning it."<sup><a href="#fn1" class="footnote-ref" onclick="scrollToFootnote(event, 'fn1')">1</a></sup> [Ibn al-Jawzī reported it from al-Khallāl and relied upon it.]<sup><a href="#fn2" class="footnote-ref" onclick="scrollToFootnote(event, 'fn2')">2</a></sup></p>

        <p>Al-Khallāl also said: I heard Muḥammad ibn ʿAbdullāh ibn Ibrāhīm say: I heard my father say: I heard Aḥmad ibn Ḥanbal say: "Twenty-eight ḥadīths have been reported regarding: <em>'ʿAmmār will be killed by the rebellious group'</em>, and none of them is authentic."<sup><a href="#fn3" class="footnote-ref" onclick="scrollToFootnote(event, 'fn3')">3</a></sup></p>

        <p>As for what was reported from Yaʿqūb ibn Shaybah al-Sadūsī in the Musnad of ʿAmmār from his Musnad: "I heard Aḥmad ibn Ḥanbal being asked about the ḥadīth of the Prophet ﷺ concerning ʿAmmār: <em>'The rebellious group will kill you.'</em> So Aḥmad said: 'As the Messenger of Allah ﷺ said, the rebellious group killed him.' And he said: 'There is no authentic ḥadīth in this from the Prophet ﷺ,' and he disliked speaking about it more than this."</p>

        <p>I say: This is not from the original text of the book <em>as-Sunnah</em> of al-Khallāl; rather, it is from a marginal note inserted into its text. It is transmitted from Ibn al-Farrāʾ in a mursal manner, by his statement: "And Yaʿqūb ibn Shaybah mentioned in the first part of the Musnad of ʿAmmār."<sup><a href="#fn4" class="footnote-ref" onclick="scrollToFootnote(event, 'fn4')">4</a></sup></p>

        <p>As for what al-Ḥākim said in <em>Tārīkh Naysābūr</em>: "I heard Abū ʿĪsā Muḥammad ibn ʿĪsā al-ʿĀriḍ—and he praised him—say: I heard Ṣāliḥ ibn Muḥammad al-Ḥāfiẓ (i.e., Jazrah) say: 'I heard Yaḥyā ibn Maʿīn and ʿAlī ibn al-Madīnī authenticate the ḥadīth of al-Ḥasan from his mother, from Umm Salamah: <em>ʿAmmār will be killed by the rebellious group</em>…'" And Aḥmad said: "I do not speak about this, and remaining silent about it is safer."<sup><a href="#fn5" class="footnote-ref" onclick="scrollToFootnote(event, 'fn5')">5</a></sup></p>

        <p>I say: This contradicts what is transmitted from Ibn Maʿīn and Ibn al-Madīnī, as has preceded, and further clarification will come. What is established from Aḥmad is its weakening, and what is reported from him of authenticating it is not established.</p>

        <p>Al-Khallāl only transmits from Aḥmad established principles, and if it were not established with him, he would not have transmitted it. His method in his book <em>as-Sunnah</em> is well-known—it is devoted to preserving the principles of the Sunnah, and upon this his methodology proceeds.</p>

        <p>This is supported by what is in <em>al-ʿIlal</em> of al-Khallāl, as found in <em>al-Muntaqā min ʿIlal al-Khallāl</em> by Ibn Qudāmah, with its chain to Imām Aḥmad that the ḥadīth <em>"ʿAmmār will be killed by the rebellious group"</em> was mentioned to him, so he said: "There is no authentic ḥadīth concerning it." He repeated this, indicating his consideration of it. The claim that Aḥmad's final position was to authenticate it<sup><a href="#fn6" class="footnote-ref" onclick="scrollToFootnote(event, 'fn6')">6</a></sup> is highly questionable. That is because no explicit statement of authentication is established from him; rather, what is established from him is an explicit rejection. At most, what has come from Aḥmad is that he paused, remained silent, or hesitated. For when he was asked about it, he said: "I do not speak about it; leaving it is safer."<sup><a href="#fn7" class="footnote-ref" onclick="scrollToFootnote(event, 'fn7')">7</a></sup></p>

        <p>Al-Khallāl, when he transmitted this narration, followed it with the narration of its weakening, then reinforced that by reporting the weakening through two routes in his <em>ʿIlal</em>. This indicates that al-Khallāl considered Aḥmad's weakening to be the preferred position, in agreement with the weakening of Ibn Maʿīn, Abū Khaythamah, and al-Muʿayṭī. Thus, the most that can be said is that Aḥmad was hesitant regarding it. His companions are more knowledgeable of his intent, and the closest among them is al-Khallāl. The selection of Ibn Qudāmah for it from <em>ʿIlal al-Khallāl</em> indicates his preference for attributing that to Aḥmad. This is further reinforced by the كبار (major scholars) weakening it, [and that Ibn al-Jawzī relied upon it].<sup><a href="#fn8" class="footnote-ref" onclick="scrollToFootnote(event, 'fn8')">8</a></sup></p>

        <p>Thus, this isnād is preserved among the early scholars, not as Ibn Rajab claimed that it is unknown. For al-Khallāl and Ibn al-Jawzī are earlier than Ibn Rajab and more knowledgeable regarding the issues of Aḥmad. As for Ibn al-Madīnī, when he was asked about it from the ḥadīth of Umm Salamah, he said: "I do not preserve from Khālid, from Saʿīd ibn Abī al-Ḥasan, except this ḥadīth," meaning the ḥadīth of Umm Salamah.<sup><a href="#fn9" class="footnote-ref" onclick="scrollToFootnote(event, 'fn9')">9</a></sup> And this indicates its strangeness in origin.<sup><a href="#fn10" class="footnote-ref" onclick="scrollToFootnote(event, 'fn10')">10</a></sup></p>

        <p>Through this and the like, you come to know that the praise of al-Ḥākim for [Muḥammad ibn ʿĪsā al-ʿĀriḍ]<sup><a href="#fn11" class="footnote-ref" onclick="scrollToFootnote(event, 'fn11')">11</a></sup> is not معتبر (to be considered) here, and that they cannot bear such matters. For al-Ḥākim had severe Shīʿī inclination, to the point that it was said about him that he was a Rāfiḍī. ʿAbdullāh ibn Muḥammad al-Anṣārī [al-Harawī, about Abū ʿAbdullāh al-Ḥākim] said: "Trustworthy in ḥadīth, but an evil Rāfiḍī."<sup><a href="#fn12" class="footnote-ref" onclick="scrollToFootnote(event, 'fn12')">12</a></sup> How many false ḥadīths in the virtues of Ahl al-Bayt did he declare authentic?</p>

        <p>Abū ʿAbd al-Raḥmān al-Sulamī said to al-Ḥākim: "If you were to go out and dictate regarding the virtues of this man—meaning Muʿāwiyah—you would be relieved from this ordeal." So he said: "It does not come from my heart, it does not come from my heart, it does not come from my heart."<sup><a href="#fn13" class="footnote-ref" onclick="scrollToFootnote(event, 'fn13')">13</a></sup></p>

        <p>In <em>al-ʿIlal</em> of ʿAbdullāh ibn Aḥmad: My father narrated to me, he said: Muḥammad ibn Abī ʿAdī narrated to us, from Ibn ʿAwn, who said: "I mentioned it to Muḥammad, and he said: 'From his mother?' I said: 'Yes.' He said: 'Indeed, she used to associate with her, entering upon her.'" Meaning: the ḥadīth of al-Ḥasan from his mother, from Umm Salamah regarding ʿAmmār: <em>'The rebellious group will kill him.'</em></p>

        <p>I say: This is in <em>al-ʿIlal</em>, and in such books they do not include except what is defective.<sup><a href="#fn14" class="footnote-ref" onclick="scrollToFootnote(event, 'fn14')">14</a></sup></p>

        <p>In later copies of <em>Ṣaḥīḥ al-Bukhārī</em>, from the ḥadīth of Abū Saʿīd al-Khudrī: <em>"Woe to ʿAmmār, [the rebellious group will kill him], he calls them to Paradise while they call him to the Fire."</em> He said: ʿAmmār would say: "I seek refuge in Allah from trials." I say: What is between the brackets is an addition from the work of copyists in the narration of Ibn al-Sakan, Karīmah, and the نسخة of al-Ṣaghānī, and it is not established in the narration of Abū Dharr and al-Aṣīlī. This is what al-Bayhaqī said and what al-Ḥumaydī, Abū Masʿūd al-Dimashqī, and al-Mizzī preferred. And al-Bukhārī turned away from this wording, so he did not include it while including the أصل (basis) of its chain.</p>

        <p>Al-Bayhaqī said: "Al-Bukhārī narrated it in the Ṣaḥīḥ from Musaddad, from ʿAbd al-ʿAzīz, except that he did not mention his statement: <em>'The rebellious group will kill him'</em>… Al-Bukhārī narrated it from Ibrāhīm ibn Mūsā, from ʿAbd al-Wahhāb, without this wording, as though he omitted it due to مخالفة (contradiction) of Abū Naḍrah from Abū Saʿīd Ikrimah in that."<sup><a href="#fn15" class="footnote-ref" onclick="scrollToFootnote(event, 'fn15')">15</a></sup></p>

        <p>In <em>al-Jamʿ bayn aṣ-Ṣaḥīḥayn</em> by al-Ḥumaydī, he said: "In this ḥadīth there is a well-known addition which al-Bukhārī did not mention at all in the two routes of this ḥadīth. Perhaps it did not reach him in them, or it reached him and he omitted it for a purpose he intended… And Abū Masʿūd al-Dimashqī said in his book: al-Bukhārī did not mention this addition."<sup><a href="#fn16" class="footnote-ref" onclick="scrollToFootnote(event, 'fn16')">16</a></sup></p>

        <p>Al-Mizzī said in <em>Tuḥfat al-Ashrāf</em>: "(Bukhārī) ḥadīth: Ibn ʿAbbās said to me and to his son ʿAlī: 'Go to Abū Saʿīd and listen to his ḥadīth…' until he mentioned the building of the mosque… until he said: <em>'Woe to ʿAmmār, he calls them to Paradise and they call him to the Fire.'</em> He said: ʿAmmār would say: 'I seek refuge in Allah from trials.'</p>

        <p>(Bukhārī) in <em>Ṣalāh</em> from Musaddad, from ʿAbd al-ʿAzīz ibn al-Mukhtār. And in <em>Jihād</em> from Ibrāhīm ibn Mūsā, from ʿAbd al-Wahhāb al-Thaqafī. Both from Khālid al-Ḥadhdhāʾ, from him, and it does not contain: <em>'The rebellious group will kill ʿAmmār.'</em>"<sup><a href="#fn17" class="footnote-ref" onclick="scrollToFootnote(event, 'fn17')">17</a></sup></p>

        <p>I say: Some of them said: "It appears to me that al-Bukhārī deliberately omitted it, for a subtle reason: that Abū Saʿīd al-Khudrī acknowledged that he did not hear this addition from the Prophet, which indicates that it is inserted in this narration. The narration clarifying that is not upon the condition of al-Bukhārī…"<sup><a href="#fn18" class="footnote-ref" onclick="scrollToFootnote(event, 'fn18')">18</a></sup></p>

        <p>I say: This specification is not established; rather it is from the narration of Abū Maslamah from Abū Naḍrah—and Abū Maslamah has weakness, and he alone reported this route.<sup><a href="#fn23" class="footnote-ref" onclick="scrollToFootnote(event, 'fn23')">23</a></sup></p>

        <p>Thus the precision of al-Bukhārī and his mastery in ʿilal becomes clear. As for what Muslim reported in this chapter from the ḥadīth of Abū Saʿīd, it is from the ḥadīth of Shuʿbah, from Abū Maslamah…: <em>"Indeed the Messenger of Allah said to ʿAmmār… 'Wretched is the son of Sumayyah, a rebellious group will kill you.'"</em><sup><a href="#fn19" class="footnote-ref" onclick="scrollToFootnote(event, 'fn19')">19</a></sup></p>

        <p>This was uniquely reported by Abū Maslamah from Abū Naḍrah. Ibn Maʿīn said about him: "A poor shaykh, trustworthy." And Abū Ḥātim said: "Ṣāliḥ."<sup><a href="#fn20" class="footnote-ref" onclick="scrollToFootnote(event, 'fn20')">20</a></sup> These are from the expressions of weakening among the scholars; thus someone like him cannot bear this from Abū Naḍrah.</p>

        <p>Then he reported it from the ḥadīth of Khālid al-Ḥadhdhāʾ…</p>

        <p>Khālid al-Ḥadhdhāʾ has been spoken about: Shuʿbah said: "Keep silent for me among the Baṣrans regarding Khālid al-Ḥadhdhāʾ and Hishām." And Abū Ḥātim said: "His ḥadīth is written but not used as proof."<sup><a href="#fn21" class="footnote-ref" onclick="scrollToFootnote(event, 'fn21')">21</a></sup></p>

        <p>He later experienced deterioration in his memory… and the apparent method of Muslim indicates that he reported it to clarify its defect.<sup><a href="#fn22" class="footnote-ref" onclick="scrollToFootnote(event, 'fn22')">22</a></sup></p>

        <p>The ḥadīth was declared authentic by at-Tirmiḏī from the narration of Abū Hurayrah… but Ibn Maʿīn declared it defective because it is not in the book of ad-Darāwardī, and his book takes precedence over his memory.<sup><a href="#fn24" class="footnote-ref" onclick="scrollToFootnote(event, 'fn24')">24</a></sup> <sup><a href="#fn25" class="footnote-ref" onclick="scrollToFootnote(event, 'fn25')">25</a></sup></p>

        <p>An-Nasāʾī reported it in <em>al-Kubrā</em> and elaborated extensively on the اختلاف (disagreement) in its chains…<sup><a href="#fn26" class="footnote-ref" onclick="scrollToFootnote(event, 'fn26')">26</a></sup></p>

        <p>The ḥadīth was also declared authentic by Ibn Ḥibbān and al-Ḥākim, but there is leniency in their authentication, and their authentication is not معتبر when they alone report it.<sup><a href="#fn27" class="footnote-ref" onclick="scrollToFootnote(event, 'fn27')">27</a></sup></p>

        <p>The ḥadīth has other routes, none of which are authentic, as stated by the كبار (major Imāms).</p>

        <hr style="margin: 2rem 0; border: 1px solid var(--border-color);">

        <h3 style="color: var(--primary-color); margin: 2rem 0 1rem 0; font-size: 1.3rem;">Conclusion regarding the ḥadīth of the rebellious group:</h3>

        <p>What is reported of Ibn al-Madīnī authenticating it is not established from him. The stronger view from Aḥmad—and likewise what is preserved from Ibn Maʿīn, Abū Khaythamah, and al-Muʿayṭī—is that it is weak and rejected. This is the apparent position of al-Khallāl, and Ibn al-Jawzī affirmed it. Al-Bukhārī turned away from its wording while reporting its أصل, and the addition <em>"the rebellious group will kill him"</em> was inserted into his Ṣaḥīḥ. Muslim reported it to indicate its defect, and an-Nasāʾī and al-Bayhaqī reported its routes in their larger works but omitted it in their abridged ones.</p>

        <p>Even if we were to concede that this ḥadīth is authentic, it does not imply criticism of Muʿāwiyah and ʿAmr ibn al-ʿĀṣ. For Allah said: <strong>"And if two groups of the believers fight…"</strong>—thus affirming faith for both despite their fighting.</p>

        <p>And in the Ṣaḥīḥ: <em>"The Hour will not be established until two great groups fight, between them will be a great slaughter, and their claim is one."</em> Thus, they are two groups who fight while their claim is one. It is authentically reported from ʿAlī that he fought them as the people of justice against the people of rebellion; his companions would not finish off the wounded, nor kill those fleeing, nor strip the slain, nor take women captive.</p>

        <p>And Allah knows best.</p>
      `,
      sources: [
        { name: '"as-Sunnah" by al-Khallāl', ref: '↩︎' },
        { name: '"al-ʿIlal al-Mutanāhiyah" by Ibn al-Jawzī', ref: '↩︎' },
        { name: '"as-Sunnah" by al-Khallāl', ref: '↩︎' },
        { name: '"as-Sunnah" by al-Khallāl', ref: '↩︎' },
        { name: '"Fatḥ al-Bārī" by Ibn Rajab', ref: '↩︎' },
        { name: 'Among those who held this view: Shaykh al-Islām, in "Minhāj as-Sunnah"', ref: '↩︎' },
        { name: '"as-Sunnah" by al-Khallāl', ref: '↩︎' },
        { name: '"al-ʿIlal al-Mutanāhiyah" by Ibn al-Jawzī', ref: '↩︎' },
        { name: 'Questions of Ibn Abī Shaybah to Ibn al-Madīnī', ref: '↩︎' },
        { name: 'As is known in the sciences of ḥadīth from their foundational principles regarding their usage of such expressions', ref: '↩︎' },
        { name: 'His kunyah is: Abū Ṣāliḥ, not Abū ʿĪsā...', ref: '↩︎' },
        { name: '"Ṭabaqāt ʿUlamāʾ al-Ḥadīth" by Ibn ʿAbd al-Hādī', ref: '↩︎' },
        { name: '"al-Muntaẓam" by Ibn al-Jawzī, and "Siyar Aʿlām an-Nubalāʾ" by adh-Dhahabī', ref: '↩︎' },
        { name: 'Ibn Rajab said in "Sharḥ ʿIlal at-Tirmiḏī"...', ref: '↩︎' },
        { name: '"Dalāʾil an-Nubuwwah" by al-Bayhaqī', ref: '↩︎' },
        { name: '"al-Jamʿ bayn aṣ-Ṣaḥīḥayn" by al-Ḥumaydī', ref: '↩︎' },
        { name: '"Tuḥfat al-Ashrāf" by al-Mizzī', ref: '↩︎' },
        { name: '"Fatḥ al-Bārī" by Ibn Ḥajar', ref: '↩︎' },
        { name: 'Ṣaḥīḥ Muslim', ref: '↩︎' },
        { name: 'Ibn Abī Ḥātim said in "al-Jarḥ wa at-Taʿdīl"...', ref: '↩︎' },
        { name: '"al-Jarḥ wa at-Taʿdīl" by Ibn Abī Ḥātim', ref: '↩︎' }
      ],
      footnotes: [
        { id: 'fn1', text: '<em>"as-Sunnah" by al-Khallāl.</em> ↩︎' },
        { id: 'fn2', text: '<em>"al-ʿIlal al-Mutanāhiyah" by Ibn al-Jawzī.</em> ↩︎' },
          { id: 'fn3', text: '<em>"as-Sunnah" by al-Khallāl.</em> ↩︎' },
        { id: 'fn4', text: '<em>"as-Sunnah" by al-Khallāl.</em> ↩︎' },
        { id: 'fn5', text: '<em>"Fatḥ al-Bārī" by Ibn Rajab.</em> ↩︎' },
        { id: 'fn6', text: 'Among those who held this view: Shaykh al-Islām, in <em>"Minhāj as-Sunnah"</em>. ↩︎' },
        { id: 'fn7', text: '<em>"as-Sunnah" by al-Khallāl.</em> ↩︎' },
        { id: 'fn8', text: '<em>"al-ʿIlal al-Mutanāhiyah" by Ibn al-Jawzī.</em> ↩︎' },
        { id: 'fn9', text: '<em>Questions of Ibn Abī Shaybah to Ibn al-Madīnī.</em> ↩︎' },
        { id: 'fn10', text: 'As is known in the sciences of ḥadīth from their foundational principles regarding their usage of such expressions. ↩︎' },
        { id: 'fn11', text: 'His kunyah is: Abū Ṣāliḥ, not Abū ʿĪsā. He is: Muḥammad ibn Muḥammad ibn ʿĪsā ibn ʿAbd ar-Raḥmān ibn Sulaymān, al-Naysābūrī, al-ʿĀriḍ, as in <em>Tārīkh Naysābūr</em> by al-Ḥākim, <em>al-Ansāb</em> by as-Samʿānī, and <em>al-Lubāb</em> by Ibn al-Athīr. ↩︎' },
        { id: 'fn12', text: '<em>"Ṭabaqāt ʿUlamāʾ al-Ḥadīth"</em> by Ibn ʿAbd al-Hādī, and <em>"Tadhkirat al-Ḥuffāẓ"</em> by adh-Dhahabī. See also <em>"ar-Rawḍ al-Bāsim"</em> by al-Manṣūrī. ↩︎' },
        { id: 'fn13', text: '<em>"al-Muntaẓam"</em> by Ibn al-Jawzī (wording his), and <em>"Siyar Aʿlām an-Nubalāʾ"</em> by adh-Dhahabī. See also <em>"ar-Rawḍ al-Bāsim"</em> by al-Manṣūrī. ↩︎' },
        { id: 'fn14', text: 'Ibn Rajab said in <em>"Sharḥ ʿIlal at-Tirmiḏī"</em>: "Ibn Sīrīn used to say: Ask al-Ḥasan... from whom he heard: ʿAmmār will be killed by the rebellious group." ↩︎' },
        { id: 'fn15', text: '<em>"Dalāʾil an-Nubuwwah"</em> by al-Bayhaqī. ↩︎' },
        { id: 'fn16', text: '<em>"al-Jamʿ bayn aṣ-Ṣaḥīḥayn"</em> by al-Ḥumaydī. ↩︎' },
        { id: 'fn17', text: '<em>"Tuḥfat al-Ashrāf"</em> by al-Mizzī. ↩︎' },
        { id: 'fn18', text: '<em>"Fatḥ al-Bārī"</em> by Ibn Ḥajar. ↩︎' },
        { id: 'fn19', text: '<em>Ṣaḥīḥ Muslim.</em> ↩︎' },
        { id: 'fn20', text: '[Ibn Abī Ḥātim said in <em>"al-Jarḥ wa at-Taʿdīl"</em>: "I found that the terms in criticism and accreditation are at various levels. If it is said about a person: trustworthy... then he is among those whose ḥadīth is used as proof. If it is said: truthful... then his ḥadīth is written and examined, this is the second level. If it is said: shaykh... then his ḥadīth is written and examined, but it is below the second level. If it is said: ṣāliḥ al-ḥadīth, then his ḥadīth is written for consideration..." And ad-Dubayyān said in <em>"al-Jāmiʿ fī Aḥkām Ṣifat aṣ-Ṣalāh"</em>: "(ṣāliḥ, ṣuwayliḥ) when used absolutely, not attached to ḥadīth, are lower than saying ṣāliḥ al-ḥadīth; rather, they are interpreted upon righteousness of religion."] ↩︎' },
        { id: 'fn21', text: '<em>"al-Jarḥ wa at-Taʿdīl"</em> by Ibn Abī Ḥātim. ↩︎' },
        { id: 'fn22', text: '[In the ḥadīth of Umm Salamah here in Aḥmad: "I never forgot it on the Day of the Trench, when his chest was dusty and he was handing them bricks," and in ʿAbd ar-Razzāq: "They were building the mosque." Ibn Rajab said in <em>"Fatḥ al-Bārī"</em>: "Mentioning the digging of the trench in this ḥadīth is questionable; the correct version is the building of the mosque... And where was Umm Salamah at the digging of the trench? Rather, she witnessed the building of the mosque the second time, because her chamber was next to the mosque. And there is disagreement concerning the ḥadīth: ʿAmmār will be killed by the rebellious group..."] ↩︎' },
        { id: 'fn23', text: 'Al-Bazzār said in <em>"Kashf al-Astār"</em>: Dāwūd narrated it from Abū Naḍrah, and Abū Maslamah narrated it from Abū Naḍrah, from Abū Saʿīd, from Abū Qatādah, indicating a Companion mursal form. ↩︎' },
        { id: 'fn24', text: 'Ibn Rajab said in <em>"Fatḥ al-Bārī"</em>: its chain outwardly meets Muslim’s condition, but Yaḥyā ibn Maʿīn declared it defective because it was not in ad-Darāwardī’s book. ↩︎' },
        { id: 'fn25', text: 'Bashīr ʿAlī in <em>"Manhaj al-Imām Aḥmad fī Iʿlāl al-Aḥādīth"</em> cited statements from Aḥmad and Ibn Maʿīn that ad-Darāwardī is stronger when narrating from his book than from memory. ↩︎' },
        { id: 'fn26', text: '<em>"ath-Thiqāt"</em> by al-ʿIjlī. ↩︎' },
        { id: 'fn27', text: '[I had written a note commenting on the introduction of <em>Ṣaḥīḥ at-Targhīb wa at-Tarhīb</em> by al-Albānī, in which I said: "As for Ibn Ḥibbān, he was accused of leniency due to the claim that he authenticates unknown narrators, this contains some truth, though it is rare. In reality, he was not alone in this approach; rather, Ibn al-Madīnī, Ibn Maʿīn, Abū Zurʿah, an-Nasāʾī, and others followed similar principles, though not to his extent... As for accusing al-Ḥākim of leniency, it should be restricted to <em>al-Mustadrak</em>... and even within it, to less than the first quarter of the book... Overall, whoever examines his book <em>Maʿrifat ʿUlūm al-Ḥadīth</em> will know with certainty that among later scholars, let alone our time, none approaches his rank in this science."] ↩︎' }
      ]
    };
  }

  getSecondArticleContent() {
    return {
      id: 2,
      title: 'Weakening of the ḥadīth: “None loves you except a believer, and none hates you except a hypocrite”',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2025-10-21'),
      category: 'Ḥadīth Sciences',
      readTime: '12 min read',
      body: `
        <p>Narrated to us (ḥaddathanā): Wakīʿ narrated to us, al-Aʿmash narrated to us, from ʿAdī ibn Thābit, from Zir ibn Ḥubaysh, from ʿAlī, who said: The Prophet ﷺ made a covenant with me:</p>

        <blockquote>“None loves you except a believer, and none hates you except a hypocrite.”</blockquote>

        <p><strong>1062</strong></p>

        <p>In my view, this ḥadīth was not heard by al-Aʿmash from ʿAdī ibn Thābit. Thus, everyone who narrated it from al-Aʿmash, from ʿAdī ibn Thābit, did so in an ʿanʿanah form (without explicit hearing). The only one who uniquely reported it with explicit wording of transmission was Yaḥyā ibn ʿĪsā ar-Ramlī, from al-Aʿmash, from ʿAdī ibn Thābit.</p>

        <p>And Yaḥyā ibn ʿĪsā is not known for narrating from al-Aʿmash. Abū Ḥātim said: “A number of people have narrated this (meaning this ḥadīth) from al-Aʿmash, and the ḥadīth is known through al-Aʿmash.”</p>

        <p>Muslim delayed the ḥadīth of ʿAlī, after having already brought the routes of the ḥadīth regarding the virtue of the Anṣār, and concluded with the route of Jarīr and Abū Usāmah from al-Aʿmash, from Abū Ṣāliḥ, from Abū Saʿīd, marfūʿ, with the wording:</p>

        <blockquote>“No man who believes in Allah and the Last Day hates the Anṣār.”</blockquote>

        <p>He intended thereby to indicate the defect in the ḥadīth of ʿAlī and to draw attention to it, as is known among the skilled experts regarding his methodology.</p>

        <p>Al-Aʿmash practices tadlīs from weak and abandoned narrators, and at times he even performs tadlīs at-taswiyah. This is not from the category of those he frequently narrates from, like Abū Ṣāliḥ, such that his lack of explicit samāʿ (hearing) could be excused. Nor is it from the narrations of Shuʿbah from him, such that we could be assured of his hearing from ʿAdī.</p>

        <p>As for ʿAdī ibn Thābit, he was excessive in Shīʿism and extreme. Ibn Maʿīn said: “He used to be excessive in Shīʿism.” Al-Masʿūdī said: “We did not encounter anyone more firmly upon the qawl of the Shīʿah than ʿAdī ibn Thābit.” He was a preacher-storyteller (wāʿiẓ, qaṣṣāṣ), and such a person does not bear this kind of solitary narration.</p>

        <p>Abū ʿĀṣim an-Nabīl and Yaḥyā ibn Saʿīd al-Qaṭṭān said: “I have not seen the righteous more prone to error in ḥadīth than them,” meaning that falsehood may occur upon their tongues while they are unaware.</p>

        <p>Mālik said: “I encountered seventy at these pillars” and he pointed to the Prophet’s Mosque “who would say: ‘The Messenger of Allah said...,’ yet I did not take anything from them. Even though one of them, if entrusted with the treasury, would be trustworthy, because they were not ahl hādhā ash-shaʾn (people of this discipline).”</p>

        <p>Moreover, Shuʿbah said: “ʿAdī ibn Thābit is among those who raise (reports),” which is an indication of poor memory and lack of precision.</p>

        <p>Furthermore, the foundational principle among the early ḥadīth masters was to abandon the narration of an innovator if it supports his innovation. They forbade narrating from one who calls to innovation, as opposed to one who does not, such as Mālik, Ibn al-Mubārak, Ibn al-Mahdī, Aḥmad ibn Ḥanbal, and Yaḥyā ibn Maʿīn. For even a truthful person among them may be led by his inclinations to leniency in what supports his views without realizing it.</p>

        <p>The conclusion is that the narration of an innovator may be accepted if he does not narrate what supports his innovation, is not a caller to it, and the narration does not contain anything objectionable.</p>

        <p>Specifying ʿAlī with this virtue after the Anṣār had already been specified with it suggests that the Shīʿah took this virtue from the ḥadīth of the Anṣār and attributed it to ʿAlī, consistent with their habit of appropriating well-known virtues and attributing them to ʿAlī. This was especially circulated among the people of Kūfah, who are the origin and stronghold of Shīʿism.</p>
      `,
      footnotes: []
    };
  }

  getThirdArticleContent() {
    return {
      id: 3,
      title: 'Weakening of the ḥadīth: “Al-Ḥasan and al-Ḥusayn are the leaders of the youth of Paradise”',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2025-06-21'),
      category: 'Ḥadīth Sciences',
      readTime: '20 min read',
      body: `
        <p><strong>Ḥadīth: “Al-Ḥasan and al-Ḥusayn are the leaders of the youth of Paradise” [A ḥadīth that is not authentic]</strong></p>

        <p>Yazīd ibn Abī Ziyād narrated, from ʿAbd ar-Raḥmān ibn Abī Nuʿm, from Abū Saʿīd, who said: The Messenger of Allah ﷺ said:</p>

        <blockquote>“Al-Ḥasan and al-Ḥusayn are the leaders of the youth of Paradise.”</blockquote>

        <p>(Musnad Aḥmad 18/138)</p>

        <p>At-Tirmiḏī said: “This is a ḥadīth that is Ḥasan Ṣaḥīḥ.”</p>

        <p>(Sunan at-Tirmiḏī 5/656)</p>

        <p>And it was followed by Yazīd ibn Mardānabah, who said: Ibn Abī Nuʿm narrated to us.</p>

        <p>(Musnad Aḥmad 17/31; Ṭabaqāt Ibn Saʿd 1/264)</p>

        <p>However, Ibn Maʿīn declared it weak.</p>

        <p>Abū Bakr ibn Abī Khaythamah said: Yaḥyā ibn Maʿīn was asked about the ḥadīth of Yazīd ibn Abī Ziyād, from ʿAbd ar-Raḥmān ibn Abī Nuʿm, from Abū Saʿīd, from the Prophet ﷺ: “Al-Ḥasan and al-Ḥusayn are the leaders of the youth of Paradise.” He said: “Ibn Abī Nuʿm is weak.”</p>

        <p>(Bayān al-Wahm wa al-Īhām 4/538)</p>

        <p>It was also followed by al-Ḥakam ibn ʿAbd ar-Raḥmān ibn Abī Nuʿm, from his father, with the addition: “except the two maternal cousins: ʿĪsā ibn Maryam and Yaḥyā ibn Zakariyyā.”</p>

        <p>(Ṭabaqāt Ibn Saʿd 6/363)</p>

        <p>And it was narrated by Isrāʾīl, from Maysarah an-Nahdī, from an-Nuʿmān ibn ʿAmr, from Zir ibn Ḥubaysh, from Ḥuḏayfah, who said:</p>

        <p>“I came to the Prophet ﷺ and prayed Maghrib with him. Then he stood praying until he prayed ʿIshāʾ. Then he left, and I followed him. He said:</p>

        <blockquote>‘An angel came to me, sought permission from his Lord to greet me and give me glad tidings that al-Ḥasan and al-Ḥusayn are the leaders of the youth of Paradise.’”</blockquote>

        <p>(Musnad Aḥmad 38/355; Muṣannaf Ibn Abī Shaybah 6/378; Ṭabaqāt Ibn Saʿd 1/265; Sunan at-Tirmiḏī 5/661)</p>

        <p>At-Tirmiḏī said: “This is a ḥadīth that is Ḥasan Gharīb from this route; we do not know it except through the ḥadīth of Isrāʾīl.”</p>

        <p>(Sunan at-Tirmiḏī 5/661)</p>

        <p>Abū Nuʿaym declared it defective, saying:</p>

        <p>“Maysarah alone narrated it from al-Minhal from Zir. Qays ibn ar-Rabīʿ opposed Isrāʾīl and narrated it from Maysarah, from ʿAdī ibn Thābit, from Zir.”</p>

        <p>It was also narrated by Abū al-Aswad ʿAbdullāh ibn ʿĀmir, the freedman of Banū Hāshim, from ʿĀṣim, from Zir, from Ḥuḏayfah, in a shortened form.</p>

        <p>(Ḥilyat al-Awliyāʾ 4/190)</p>

        <p>And it was narrated by Abū al-Aḥwaṣ, from Abū Isḥāq, from ʿAlī, who said: The Messenger of Allah ﷺ said:</p>

        <blockquote>“Al-Ḥasan and al-Ḥusayn are the leaders of the youth of Paradise.”</blockquote>

        <p>(Muṣannaf Ibn Abī Shaybah 6/378)</p>

        <p>This is defective. Rather, it is from the narration of Abū Isḥāq, from al-Ḥārith, from ʿAlī.</p>

        <p>Abū Bakr ibn Abī Shaybah narrated it: He said: Abū al-Aḥwaṣ narrated to us, from Abū Isḥāq, from al-Ḥārith, from ʿAlī, may Allah be pleased with him. And Abū Isḥāq only heard four ḥadīths from him.</p>

        <p>And it was narrated by Ḥusayn ibn ʿAbdullāh, from his father, from his grandfather, that ʿAlī said: The Prophet ﷺ said:</p>

        <blockquote>“Al-Ḥasan and al-Ḥusayn are the leaders of the youth of Paradise.”</blockquote>

        <p>(al-Kāmil fī aḍ-Ḍuʿafāʾ 3/227)</p>

        <p>And it was narrated by Ḥabīb, who said: az-Zubayr ibn Saʿīd narrated to us, Ḥumayd narrated to us, from Anas, who said: The Messenger of Allah ﷺ said:</p>

        <blockquote>“Al-Ḥasan and al-Ḥusayn are the leaders of the youth of Paradise, and their father is better than them.”</blockquote>

        <p>Ibn ʿAdī said: “This ḥadīth is fabricated upon az-Zubayr ibn Saʿīd, and az-Zubayr ibn Saʿīd is extremely weak in transmission.”</p>

        <p>(al-Kāmil fī aḍ-Ḍuʿafāʾ 3/328)</p>

        <p>“Sayf ibn Muḥammad narrated from Sufyān ath-Thawrī, from Ḥabīb ibn Abī Thābit, from Saʿīd ibn Jubayr, from Ibn ʿAbbās, who said: The Messenger of Allah ﷺ said:</p>

        <blockquote>‘Al-Ḥasan and al-Ḥusayn are the leaders of the youth of Paradise. Whoever loves them has loved me, and whoever hates them has hated me.’</blockquote>

        <p>The Shaykh (Ibn ʿAdī) said: ‘No one narrates this except Sayf, and Sayf has other ḥadīths similar to this which he narrates from ath-Thawrī and others, and from everyone he narrates from he brings that which no one follows him in. He is extremely weak.’”</p>

        <p>(al-Kāmil fī aḍ-Ḍuʿafāʾ 4/506)</p>

        <p>And it was narrated by ʿAbd al-Ḥamīd ibn Baḥr, who said: Manṣūr ibn Abī al-Aswad narrated to us, from al-Aʿmash, from Ibrāhīm, from ʿAlqamah, from ʿAbdullāh, who said: The Messenger of Allah ﷺ said:</p>

        <blockquote>“Al-Ḥasan and al-Ḥusayn are the leaders of the youth of Paradise.”</blockquote>

        <p>Ibn ʿAdī said: “I do not know anyone who narrates it with this chain except ʿAbd al-Ḥamīd from Manṣūr, and this ʿAbd al-Ḥamīd has other rejected ḥadīths which he narrated and stole from trustworthy people.”</p>

        <p>(al-Kāmil fī aḍ-Ḍuʿafāʾ 7/11)</p>

        <p>And it was narrated by Yaghnam ibn Sālim ibn Qanbar, the freedman of ʿAlī ibn Abī Ṭālib, may Allah be pleased with him, who said: I heard Anas ibn Mālik say: I heard the Messenger of Allah ﷺ say:</p>

        <blockquote>“Al-Ḥasan and al-Ḥusayn are the leaders of the youth of Paradise.”</blockquote>

        <p>(al-Kāmil fī aḍ-Ḍuʿafāʾ 9/179)</p>

        <p>And it was narrated by al-Muʿallā ibn ʿAbd ar-Raḥmān, who said: Ibn Abī Dhiʾb narrated to us, from Nāfiʿ, from Ibn ʿUmar, who said: The Messenger of Allah ﷺ said:</p>

        <blockquote>“Al-Ḥasan and al-Ḥusayn are the leaders of the youth of Paradise, and their father is better than them.”</blockquote>

        <p>(Sunan Ibn Mājah 1/44)</p>

        <p>This is false.</p>

        <p>Al-Muʿallā ibn ʿAbd ar-Raḥmān:</p>

        <p>Ibn Maʿīn said: “Al-Muʿallā fabricated sixty ḥadīths regarding the virtues of ʿAlī.”</p>
        <p>Ibn al-Madīnī said: “He used to fabricate ḥadīth; I abandoned his narrations.”</p>
        <p>Ad-Dāraquṭnī said: “A liar, abandoned.”</p>

        <p>And its aṣl is without the addition: “and their father is better than them.”</p>

        <p>And it was narrated by Ḥakīm ibn Khidām, who said: al-Aʿmash narrated to us, from Ibrāhīm at-Taymī, from Shurayḥ, from ʿUmar ibn al-Khaṭṭāb, from the Prophet ﷺ, who said:</p>

        <blockquote>“Al-Ḥasan and al-Ḥusayn are the leaders of the youth of Paradise.”</blockquote>

        <p>(al-Kāmil fī aḍ-Ḍuʿafāʾ 2/513)</p>

        <p>Abū Nuʿaym said: “It is strange from the narration of al-Aʿmash from Ibrāhīm; Ḥakīm alone narrated it. The children of Shurayḥ narrated it from him from ʿAlī in a similar manner.”</p>

        <p>(Ḥilyat al-Awliyāʾ 4/140)</p>

        <p>Some people, as is their habit of توسّع (over-expansion) in supporting narrations, accepted the ḥadīth based on these follow-ups.</p>

        <h3 style="color: var(--primary-color); margin: 2rem 0 1rem 0; font-size: 1.3rem;">Conclusion:</h3>

        <p>This ḥadīth is defective; it is not authentic through any route, and its chains do not strengthen one another.</p>
      `,
      footnotes: []
    };
  }

  getFourthArticleContent() {
    return {
      id: 4,
      title: 'Much of what is spread today and labeled as “a neglected Sunnah”...',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-21'),
      category: 'Ḥadīth Sciences',
      readTime: '8 min read',
      body: `
        <p>Much of what is spread today and labeled as “a neglected Sunnah” is, upon verification, without any basis. Rather, they are false, denounced, fabricated, and rejected ḥadīths which the early ḥadīth masters gave no weight to and did not consider. Later scholars declared them authentic, and then some ignorant people came along and claimed that they are a neglected Sunnah.</p>

        <p>[For example: sitting after Fajr without speaking to anyone, then standing to pray two rakʿahs after sunrise, and claiming that it carries the reward of Ḥajj and ʿUmrah.]</p>
        <p>[Changing one’s place after finishing the prayer.]</p>
        <p>[Reciting Āyat al-Kursī after every prayer.]</p>
        <p>[Making it a condition to face the imām on Friday.]</p>
        <p>[Running the fingers through the beard during wuḍūʾ.]</p>
        <p>[Greeting one who is accompanying you when a barrier comes between you.]</p>
        <p>[Considering it recommended to shake hands at every meeting.]</p>
        <p>[Walking barefoot sometimes.]</p>
        <p>[Putting on shoes or sandals while sitting.]</p>
        <p>[Wiping over the head of an orphan.]</p>

        <p>So be alert, be cautious, and do not be deceived by the actions of the ignorant nor by the “authentications” of the careless.</p>
      `,
      footnotes: []
    };
  }

  getFifthArticleContent() {
    return {
      id: 5,
      title: '[What has been reported regarding the laughter of the Prophet ﷺ]',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-21'),
      category: 'Ḥadīth Sciences',
      readTime: '6 min read',
      body: `
        <p><strong>[What has been reported regarding the laughter of the Prophet ﷺ]</strong></p>

        <p>There have come various descriptions regarding the manner of the Prophet’s ﷺ laughter, including: smiling, laughing, laughing until his molar teeth became visible, and at times he would smile the smile of one who is displeased.</p>

        <p>[In the ḥadīth of Abū Hurayrah, Ibn ʿUmar, Abū Saʿīd al-Khudrī, and ʿĀʾishah: “The Prophet ﷺ laughed until his molar teeth became visible.”]</p>

        <p>[And in the ḥadīth of ʿĀʾishah (may Allah be pleased with her), she said: “I never saw the Prophet ﷺ ever laugh in a full, open manner such that I could see his throat; rather, he used to smile.”]</p>

        <p>[And in the ḥadīth of ʿĀʾishah: “By Allah, the Messenger of Allah ﷺ would not go beyond smiling.”]</p>

        <p>[And in the ḥadīth of Kaʿb ibn Mālik: “He smiled the smile of one who is displeased.”]</p>

        <p>[All of these are authentic, by the praise of Allah. I am writing this briefly, and perhaps I will later find time to expand upon it in a concise manner along with documenting its sources, if Allah wills.]</p>
      `,
      footnotes: []
    };
  }

  getSixthArticleContent() {
    return {
      id: 6,
      title: 'Weak (Inauthentic) Reports in the Sīrah',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-21'),
      category: 'Sīrah & Ḥadīth Criticism',
      readTime: '30 min read',
      body: `
        <p><strong>Weak (Inauthentic) Reports in the Sīrah</strong></p>

        <p>The following is a numbered list of widespread reports that are weak, not authentic, rejected, fabricated, or false according to hadith-critical standards:</p>

        <ol>
          <li>The Prophet ﷺ was light, and the Companions could not look at his face. [False]</li>
          <li>The Prophet ﷺ had no shadow. [False]</li>
          <li>The Prophet ﷺ left no trace on sand. [False]</li>
          <li>The Prophet ﷺ would leave an athar (mark) on rock when he walked on it. [False]</li>
          <li>The Prophet ﷺ had one hundred names. [False]. Nothing is established for the Prophet ﷺ as names except: Muḥammad, Aḥmad, al-Muqaffī, al-Ḥāshir, al-Māḥī, al-ʿĀqib, the Prophet of Repentance, the Prophet of Mercy, and the Prophet of Battle.</li>
          <li>The Prophet ﷺ was more beautiful than Yūsuf. [False]</li>
          <li>The birth of the Prophet ﷺ on the 12th of Rabīʿ al-Awwal. [Not authentic]. The strongest view is the 9th of Rabīʿ al-Awwal, and what is firmly established and agreed upon is that his death was on the 12th of Rabīʿ al-Awwal.</li>
          <li>The reward of Abū Lahab being granted a reduction in punishment every Monday due to his joy at the birth of the Prophet ﷺ. [False]</li>
          <li>The Prophet ﷺ being born circumcised. [Not authentic]</li>
          <li>The Prophet ﷺ being born with his umbilical cord already cut. [Not authentic]</li>
          <li>That al-ʿAbbās saw the Prophet ﷺ in the cradle cooing at the moon. [False]</li>
          <li>That the Prophet ﷺ, at the moment of his birth, supported himself on his hands, raising his head to the sky. [False]</li>
          <li>Voices of the jinn giving glad tidings to his mother on the night of his birth ﷺ. [Not authentic]</li>
          <li>The story of the monk Baḥīrā. [Munkar]</li>
          <li>Reviving the parents of the Prophet ﷺ, their acceptance of Islam, then their death again. [False]</li>
          <li>The Islam of Abū Ṭālib. [False]</li>
          <li>Specifying the age of Khadījah at the time of her marriage. [Nothing authentic regarding it]. The strongest chains indicate her age was twenty-eight years.</li>
          <li>Calling the year in which Khadījah and Abū Ṭālib died "the Year of Sorrow." [Munkar], not even reported from the Companions, the Tābiʿīn, or their followers.</li>
          <li>The migration (Hijrah) of the Prophet ﷺ being in the month of Muḥarram. [Not authentic]. The correct view is that the migration was on the night of the 27th of Ṣafar.</li>
          <li>ʿAlī sleeping in the place of the Prophet ﷺ on the night of the migration. [Munkar]</li>
          <li>Abū Bakr departing for the migration before the Prophet ﷺ. [False]</li>
          <li>A snake or scorpion stinging Abū Bakr in the cave during the migration. [Not authentic]</li>
          <li>Abū Jahl striking Fāṭimah and Asmāʾ bint Abī Bakr and cutting her ear. [False]</li>
          <li>The singing of the daughters of Banū al-Najjār: "Ṭalaʿa al-Badru ʿAlaynā" upon the Prophet’s ﷺ arrival in Madīnah. [Munkar]</li>
          <li>The camel of the Prophet ﷺ kneeling at the house of Abū Ayyūb al-Anṣārī. [Weak]</li>
          <li>The apostasy of ʿUbayd Allāh ibn Jaḥsh (the first husband of Umm Ḥabībah) and his death in Abyssinia. [Munkar]</li>
          <li>The presence of Hind bint ʿUtbah at the battle of Uḥud and her eating the liver of Ḥamzah. [False, invalid]</li>
          <li>Abū ʿUbaydah ibn al-Jarrāḥ killing his father on the day of Badr. [Weak]</li>
          <li>The existence of any relics of the Prophet ﷺ after the era of Banū Umayyah, such as his hairs, footprint, cap, turban, cloak, cup, sword, staff, or sandals. [Nothing authentic regarding it]</li>
          <li>The donkey Yaʿfūr speaking with the Prophet ﷺ. [Fabricated]</li>
          <li>The gazelle that spoke to the Prophet ﷺ. [Munkar]</li>
          <li>The Bedouin who came to the Prophet ﷺ with a lizard, which testified to his prophethood. [Fabricated lie]</li>
          <li>The Prophet ﷺ prompting (talqīn) his son Ibrāhīm. [False]</li>
          <li>The ḥadīth of the Prophet ﷺ and the man who stole his sandals. [False]</li>
          <li>The ḥadīth of the Jew who used to throw garbage in front of the Prophet’s ﷺ house. [False]</li>
          <li>The ḥadīth of the Mother of the Believers ʿĀʾishah and the needle, and the light of the Prophet ﷺ illuminating the room. [False]</li>
          <li>The ḥadīth: "Which of you will be the one with the hairy camel, upon whom the dogs of al-Ḥawʾab will bark." [Munkar]</li>
          <li>The divorce of the Mother of the Believers Ḥafṣah. [Not authentic]</li>
          <li>"Salmān is from us, the People of the House." [Not authentic]</li>
          <li>The Companions drinking the blood of the Prophet ﷺ. [Nothing authentic regarding it]</li>
          <li>The meeting of Iblīs with the Prophet ﷺ, his long dialogue with him, and the Prophet ﷺ asking him questions such as how he misled Ādam عليه السلام. [False]</li>
          <li>The dream of the Prophet ﷺ seeing Banū Marwān jumping on the pulpit like monkeys. [False]</li>
          <li>That Bilāl saw in his dream the Prophet ﷺ saying: "What is this estrangement, O Bilāl? Has the time not come for you to visit me?" [False]</li>
          <li>The ḥadīth: that Ḥafṣah, the Mother of the Believers, visited her father one day, on her allotted day, and when the Messenger of Allah ﷺ came and did not find her at home, he sent for his slave Māriyah al-Qibṭiyyah and was intimate with her; she said: "O Messenger of Allah, do you do this in my house and on my day?" He said: "Then she is forbidden to me." [Munkar]</li>
          <li>The ḥadīth: that the Messenger of Allah ﷺ came to the house of Ḥafṣah and did not find her, so he sent for Māriyah al-Qibṭiyyah and was intimate with her. [Munkar]</li>
          <li>The Angel of Death seeking permission from the Prophet ﷺ to take his soul. [Munkar]</li>
          <li>Abū Bakr burning the house of Fāṭimah. [False]</li>
          <li>ʿUmar burying his daughter alive in the pre-Islamic period. [Not authentic]</li>
          <li>The statement of ʿUmar during migration: "Whoever wishes his wife to be widowed and his children orphaned, let him meet me behind this valley." [Not authentic]</li>
          <li>The statement of al-Hurmuzān when he saw ʿUmar sleeping without guards: "You ruled, so you were just; you were secure, so you slept." [Not authentic]. The correct wording is that he said: "This, by Allah, is a comfortable kingship."</li>
          <li>The story of the son of ʿAmr ibn al-ʿĀṣ striking a Copt, and ʿUmar saying to ʿAmr: "Since when have you enslaved the people when their mothers bore them free?" [False]</li>
          <li>"Were it not for ʿAlī, ʿUmar would have perished." [False; nothing authentic regarding it]</li>
          <li>That a man went out on an expedition, leaving his wife pregnant, and said: "I entrust what is in your womb to Allah." When he returned, he found she had died; he went to her grave and found it open, and she was sitting while the child crawled around her. A caller called out: "O you who entrusted your deposit to his Lord, take your deposit; by Allah, had you entrusted his mother, you would have found her." [False]</li>
          <li>The incident of the two arbitrators at Ṣiffīn, Abū Mūsā al-Ashʿarī and ʿAmr ibn al-ʿĀṣ. [False]</li>
          <li>The sitting of ʿAlī and a Jew before the judge Shurayḥ for judgment. [False]</li>
          <li>ʿAlī uprooting the gate of Khaybar and carrying it. [False]</li>
          <li>That ʿAmr ibn al-ʿĀṣ insulted Arwā bint al-Ḥārith ibn ʿAbd al-Muṭṭalib in the gathering of Muʿāwiyah, and she rebuked him saying: "You speak while your mother was the most well-known singing woman in Makkah, and five men from Quraysh claimed you, each asserting he was your father." [False]</li>
          <li>The fleeing of ʿAmr ibn al-ʿĀṣ from ʿAlī at Ṣiffīn and his nakedness being exposed. [False]</li>
          <li>The statement of Ṣafiyyah (the aunt of the Prophet ﷺ) in the battle of al-Aḥzāb to Ḥassān ibn Thābit: "This Jew is circling the fortress, go down and kill him." He showed cowardice, so Ṣafiyyah descended and struck him with a pole until she killed him. [False]</li>
          <li>The martyrdom of the five sons of al-Khansāʾ at al-Qādisiyyah. [Not authentic]</li>
          <li>The exploits of Khawlah bint al-Azwar at al-Yarmūk. [Not authentic]</li>
          <li>ʿAbdullāh ibn Ḥudhāfah al-Sahmī being captured by the Roman king, kissing his head for the release of Muslim prisoners, and ʿUmar kissing his head. [Munkar]</li>
          <li>The killing of al-Ḥusayn according to the Shīʿī narrative. [Most of it is false]</li>
          <li>That Yazīd ordered the killing of al-Ḥusayn and dishonored the women of the Prophet’s household when they were brought to him. [False]</li>
        </ol>
      `,
      footnotes: []
    };
  }

  getSeventhArticleContent() {
    return {
      id: 7,
      title: 'Ḥadīth: “Whoever says: ‘I seek forgiveness from Allah, besides whom there is no deity, the Ever-Living, the Sustainer, and I repent to Him,’ he will be forgiven-even if he fled from the battlefield.”',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-22'),
      category: 'Ḥadīth Criticism',
      readTime: '7 min read',
      body: `
        <p><strong>Ḥadīth: “Whoever says: ‘I seek forgiveness from Allah, besides whom there is no deity, the Ever-Living, the Sustainer, and I repent to Him,’ he will be forgiven-even if he fled from the battlefield.”</strong></p>

        <p>[Not authentic-neither as a marfūʿ (attributed to the Prophet) nor as a mawqūf (stopped at a Companion)].</p>

        <p>It is reported through the route of: Yasār ibn Zayd, who said: My father narrated to me, from my grandfather-and this is an obscure (muẓlim) chain.</p>

        <p>It is also reported through the route of Isrāʾīl, from Abū Sinān, from Abū al-Aḥwaṣ, from Ibn Masʿūd-but this chain is defective (muʿall); Isrāʾīl is inconsistent in it: sometimes he raises it (to the Prophet), and sometimes he stops it (at the Companion).</p>

        <p>At times, he narrates it from his grandfather Abū Isḥāq, from Abū Sinān with it. And Sharīk al-Qāḍī narrated it from Abū Isḥāq, from an unnamed man, from Muʿādh as a mawqūf report. Likewise, Isrāʾīl narrated it from Abū Isḥāq in this manner.</p>
      `,
      footnotes: []
    };
  }

  getEighthArticleContent() {
    return {
      id: 8,
      title: 'Ḥadīth: “All praise is due to Allah, equal to the number of what He created, and all praise is due to Allah filling what He created…”',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-22'),
      category: 'Ḥadīth Criticism',
      readTime: '8 min read',
      body: `
        <p><strong>Ḥadīth: “All praise is due to Allah, equal to the number of what He created, and all praise is due to Allah filling what He created…”</strong></p>

        <p>Ḥuṣayn narrated from Sālim that Abū Umāmah reported from the Messenger of Allah ﷺ that he said:</p>

        <blockquote>“Whoever says: All praise is due to Allah equal to the number of what He created, and all praise is due to Allah filling what He created, and all praise is due to Allah equal to the number of what is in the heavens and the earth, and all praise is due to Allah filling what is in the heavens and the earth, and all praise is due to Allah equal to the number of what His Book has enumerated, and all praise is due to Allah filling what His Book has enumerated, and all praise is due to Allah equal to the number of everything, and all praise is due to Allah filling everything, and glory be to Allah likewise-how عظِيم (immense) that is.”</blockquote>

        <p>Reported by Aḥmad.</p>

        <p>Sālim did not hear from Abū Umāmah. Rather, he narrates from Maʿdān from Abū Umāmah. He is Kūfan, and his narration from the people of al-Shām is severely disconnected.</p>

        <p><strong>Note:</strong> Such a disconnection is not tolerable for support (mutābaʿah), so this should be noted. Whoever is excessive in accepting disconnected chains without considering regional transmission patterns has overstepped and gone to excess in declaring reports authentic.</p>

        <p>It was also narrated by Yaḥyā ibn Ayyūb, who said: Ibn ʿAjlān narrated to me, from Muṣʿab ibn Muḥammad ibn Shuraḥbīl, from Muḥammad ibn Saʿd ibn Zurārah, from Abū Umāmah al-Bāhilī.</p>

        <p>Reported by an-Nasāʾī-and this chain is extremely weak, a مسلسل (continuous chain) of weak and criticized narrators.</p>

        <p>Muḥammad ibn Saʿd ibn Zurārah: unknown.<br>Muṣʿab ibn Muḥammad ibn Shuraḥbīl: has weakness.<br>Yaḥyā ibn Ayyūb: not strong.</p>

        <p>He was followed by Abū Ḥanīfah, from Muḥammad ibn ʿAbd al-Raḥmān ibn Saʿd ibn Zurārah.</p>

        <p>Reported by Abū Yūsuf in al-Āthār. And Abū Ḥanīfah is abandoned (matrūk), not reliable.</p>

        <p>It was also narrated by ʿUbaydullāh ibn Zahr, from ʿAlī ibn Yazīd, from al-Qāsim, from Abū Umāmah.</p>

        <p>Reported by ar-Rūyānī-and it is very munkar.</p>

        <p>ʿUbaydullāh ibn Zahr: weak, not reliable.<br>ʿAlī ibn Yazīd: has many munkar narrations.<br>Al-Qāsim Abū ʿAbd al-Raḥmān: his narrations from Abū Umāmah are munkar.</p>

        <p>It was also narrated by Abū Isrāʾīl, from Layth, from Yazīd ibn al-Aṣamm, from Umm ad-Dardāʾ, from Abū ad-Dardāʾ.</p>

        <p>Reported by al-Bazzār and an-Nasāʾī.</p>

        <p>Very munkar. No one narrated it from al-Aṣamm except Layth, and Abū Isrāʾīl alone narrated it from him.</p>

        <p>Abū Isrāʾīl: he is al-Malāʾī, weak.<br>Layth: he is Ibn Abī Sulaym, whose ḥadīth is inconsistent and confused.</p>
      `,
      footnotes: []
    };
  }

  getNinthArticleContent() {
    return {
      id: 9,
      title: 'Ḥadīth: “O Allah, You have perfected my creation, so perfect my character.”',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-22'),
      category: 'Ḥadīth Criticism',
      readTime: '6 min read',
      body: `
        <p><strong>[Ḥadīth]</strong> ʿĀṣim ibn Sulaymān narrated from ʿAbdullāh ibn al-Ḥārith, from ʿĀʾishah bint Ṭalḥah, from ʿĀʾishah, who said:</p>

        <p>The Messenger of Allah ﷺ used to say: “O Allah, You have perfected my creation, so perfect my character.”</p>

        <p>Reported by Aḥmad (24392). <strong>[Defective (muʿall)] [Nothing authentic is established regarding it].</strong></p>

        <p>There is اختلاف (disagreement) in its narration upon ʿĀṣim al-Aḥwal. The preserved (correct) version from him is: from ʿAwsajah ibn ar-Rammāḥ, from ʿAbdullāh ibn Abī al-Hudhail, from ʿAbdullāh ibn Masʿūd, from the Prophet ﷺ. <strong>[This is the preserved version]</strong><br>ʿAwsajah ibn ar-Rammāḥ: unknown.</p>

        <p>It is also reported from Ibn ʿAbbās, and in it are two liars.<br>And from Anas, and in it is a narrator whose ḥadīth is munkar, and another narrator who is unknown.</p>

        <p>It has another route from Anas, in which there is a narrator accused of lying.</p>

        <p>It is also reported from ʿAlī as a marfūʿ report, and in it is a narrator accused of lying, and another whose ḥadīth is munkar.</p>
      `,
      footnotes: []
    };
  }

  getTenthArticleContent() {
    return {
      id: 10,
      title: 'Ḥadīth: “Indeed your Lord is ḥayy (modest/shy) and karīm (generous); He is shy that when His servant raises his hands to Him, He returns them empty-or he said: disappointed.”',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-22'),
      category: 'Ḥadīth Criticism',
      readTime: '8 min read',
      body: `
        <p><strong>[Ḥadīth]</strong> Jaʿfar ibn Maymūn narrated from Abū ʿUthmān an-Nahdī, from Abū ʿUthmān, from Salmān, from the Prophet ﷺ, who said:</p>

        <blockquote>“Indeed your Lord is ḥayy (modest/shy) and karīm (generous); He is shy that when His servant raises his hands to Him, He returns them empty-or he said: disappointed.”</blockquote>

        <p>Reported by Aḥmad (24116), Ibn Mājah (3865), Abū Dāwūd (1488), and at-Tirmiḏī (3556).<br>Jaʿfar ibn Maymūn al-Anmāṭī: weak.</p>

        <p><strong>[And he was opposed (khālafahu)]</strong> by Sulaymān at-Taymī, who narrated it from Abū ʿUthmān, from Salmān as a mawqūf (stopped at the Companion).<br>Reported by Ibn Abī Shaybah (30171) and Aḥmad (24115). On this basis, at-Tirmiḏī declared it defective, saying: “Some of them narrated it without raising it.” (as-Sunan 5/557).<br>Ibn ʿAdī also counted it among the munkarāt (rejected narrations) of Jaʿfar ibn Maymūn (al-Kāmil 2/370).</p>

        <p><strong>[And it was also narrated]</strong> by Maʿmar, from Abān ibn Abī ʿAyyāsh, from Anas, as a marfūʿ report with similar wording.<br>Reported by ʿAbd ar-Razzāq (3250).<br>Abān ibn Abī ʿAyyāsh: matrūk (abandoned).</p>

        <p><strong>[And it was also narrated]</strong> by Yūsuf ibn Muḥammad ibn al-Munkadir, from his father, from Jābir ibn ʿAbdillāh, as a marfūʿ report with similar wording.<br>Reported by Abū Yaʿlā (1867).<br>Yūsuf ibn Muḥammad ibn al-Munkadir is alone in narrating it: weak, not followed in his ḥadīth; rather, it has been said: matrūk (abandoned).</p>

        <p>It should not be said that the multiplicity of its chains strengthens it, for all of them revolve around the same defect (ʿillah) and severe weakness.</p>
      `,
      footnotes: []
    };
  }

  getEleventhArticleContent() {
    return {
      id: 11,
      title: 'Ḥadīth: “The Messenger of Allah cupped while fasting and cupped while in iḥrām.”',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '9 min read',
      body: `
        <p><strong>Ḥadīth:</strong> Ayyūb narrated from ʿIkrimah, from Ibn ʿAbbās, that the Prophet ﷺ underwent cupping while in iḥrām, and underwent cupping while fasting.<br>Reported by al-Bukhārī.</p>

        <p>As for the wording: “and he cupped while fasting”-it was declared defective (aʿallahu) by the ḥuffāẓ (ḥadīth masters), including Aḥmad and others. Muslim avoided it and did not report it.</p>

        <p>This ḥadīth was narrated by a group other than Ayyūb, from ʿIkrimah, from Ibn ʿAbbās, that the Messenger of Allah ﷺ cupped while in iḥrām-</p>

        <p>and they did not say: “while fasting.”</p>

        <p>Thus, the preserved (maḥfūẓ) version is the connected narration with the wording: “while in iḥrām.”</p>

        <p>If it is said: How can you weaken it when it is in Ṣaḥīḥ al-Bukhārī?<br>The answer: We did not weaken the entire ḥadīth; rather, we weakened a specific wording within it. In al-Bukhārī there are certain wordings which major ḥadīth critics have considered munkar (rejected), while the أصل (foundation) of the ḥadīth remains authentic.</p>

        <p><strong>Ḥadīth:</strong> From Anas (may Allah be pleased with him), who said: The first time cupping was disliked was when Jaʿfar ibn Abī Ṭālib cupped while fasting, and the Prophet ﷺ passed by him and said: “These two have broken their fast.” Then the Prophet ﷺ later permitted cupping for the fasting person. And Anas used to cup while fasting.<br>Reported by ad-Dāraquṭnī. [Munkar (rejected)]</p>

        <p>There is a clear nankārah (irregularity) in the text, because Jaʿfar ibn Abī Ṭālib died before the conquest of Makkah, whereas the Prophet ﷺ only said this during the conquest of Makkah.</p>

        <p><strong>Ḥadīth:</strong> Abū Saʿīd al-Khudrī (may Allah be pleased with him) reported that the Messenger of Allah ﷺ permitted cupping and continuous fasting (wiṣāl) for the fasting person.<br>Reported by Aḥmad.</p>

        <p>It is weak as a marfūʿ (attributed to the Prophet), and the correct view is that it is mawqūf (stopped) at Abū Saʿīd.</p>

        <p><strong>Ḥadīth:</strong> ʿAbd ar-Raḥmān ibn Abī Laylā, from some of the Companions of the Prophet ﷺ, that he said: The Messenger of Allah ﷺ forbade cupping and continuous fasting, but did not declare them prohibited, out of consideration for his Companions.<br>Reported by Abū Dāwūd.</p>

        <p>This ḥadīth has a ṣaḥīḥ (sound) chain, but it is not suitable as evidence, because this is the understanding (fahm) and opinion (raʾy) of a Companion, while what is established contradicts it.</p>
      `,
      footnotes: []
    };
  }

  getTwelfthArticleContent() {
    return {
      id: 12,
      title: 'Ḥadīth: “I have been forbidden from killing those who pray.”',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '8 min read',
      body: `
        <p><strong>[Nothing authentic is established regarding it].</strong> It has been reported from several of the Companions:</p>

        <p>From Abū Hurayrah, reported by Abū Dāwūd.<br>In its chain is Abū Yasār al-Qurashī, who is majhūl (unknown), and Abū Hāshim ad-Dawsī, who is majhūl (unknown). The ḥadīth is muḍṭarib (inconsistent), and its chain is muẓlim (obscure).</p>

        <p>From Anas, reported by Abū Yaʿlā.<br>In its chain is Mūsā ibn ʿUbaydah ar-Rabaḏī, who is matrūk (abandoned) and munkar al-ḥadīth (his narrations are rejected). It is also reported by aṭ-Ṭabarānī in al-Kabīr, and in its chain is ʿĀmir ibn ʿAbdullāh ibn Yasāf, who is munkar al-ḥadīth. The أصل (foundation) of the ḥadīth is gharīb (strange) and weak.</p>

        <p>From Abū Saʿīd al-Khudrī, reported by aṭ-Ṭabarānī in al-Awsaṭ.<br>In its chain is ʿAbd aṣ-Ṣamad ibn Sulaymān, who is matrūk (abandoned) and munkar al-ḥadīth, and al-Khaṣīb ibn Jaḥdar, who is a liar (kadhdhāb), abandoned.</p>

        <p>The preserved (maḥfūẓ) report is what Mālik narrated in al-Muwaṭṭaʾ, from the ḥadīth of ʿUbaydullāh ibn ʿAdī ibn al-Khiyār, that when he was asked about killing a man from the people of prayer, he said:</p>

        <blockquote>“Those are the ones whom Allah has forbidden me from.”</blockquote>
      `,
      footnotes: []
    };
  }

  getThirteenthArticleContent() {
    return {
      id: 13,
      title: 'Aḥādīth that are not authentic',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '18 min read',
      body: `
        <p><strong>Ḥadīth:</strong> “The best of prayers in the sight of Allah is the Fajr prayer on Friday in congregation.”<br>Munkar (rejected) as marfūʿ (attributed to the Prophet). The correct form is mawqūf (stopped) on Ibn ʿUmar.</p>

        <p>It was narrated by Khālid ibn al-Ḥārith, from Shuʿbah, from Yaʿlá ibn ʿAṭāʾ, from al-Walīd ibn ʿAbd ar-Raḥmān, from Ibn ʿUmar as marfūʿ - but this contains inqiṭāʿ (disconnection).<br>Ghundar contradicted him and narrated it from Shuʿbah as mawqūf.<br>Hushaym also narrated it from Yaʿlá ibn ʿAṭāʾ as mawqūf. Al-Bayhaqī and others reported it, and ad-Dāraquṭnī preferred the mawqūf version.<br>It was also reported from Abū ʿUbaydah ibn al-Jarrāḥ with a bāṭil (invalid) chain.</p>

        <p><strong>Ḥadīth:</strong> “The imām is a guarantor and the muʾaḏḏin is entrusted.”<br>(No authentic report exists)</p>

        <p>As for the chain of Sahl ibn Saʿd: it contains ʿAbd al-Ḥamīd ibn Sulaymān, who is worthless and his ḥadīth is not written.<br>As for the chain of Abū Umāmah: it contains Abū Ghālib al-Baṣrī, who is ḍaʿīf (weak).<br>As for the chain of ʿĀʾishah: it is an error, defective (muʿallal) due to the chain of Abū Hurayrah, as indicated by Abū Zurʿah.<br>As for the chain of Abū Hurayrah: it comes via al-Aʿmash from Abū Ṣāliḥ, but the preserved version is from al-Aʿmash from an unknown man from Abū Ṣāliḥ. Ibn al-Madīnī declared it defective.</p>

        <p><strong>Regarding what is reported about the Day of al-Qarr (11th of Dhū al-Ḥijjah):</strong><br><strong>Ḥadīth:</strong> “The best days with Allah are the Day of Sacrifice, then the Day of al-Qarr…”<br>Munkar (rejected). Declared defective by al-Bukhārī and rejected by aṭ-Ṭabarānī.<br>There is disconnection: Thawr ibn Yazīd did not hear from Rāshid ibn Saʿd, as Imām Aḥmad stated.<br>The report of Abū Mūsā regarding answered supplication on that day is not authentic.<br>However, these are days in which Allah’s mercy is hoped for, so supplication should not be abandoned.</p>

        <p><strong>On some aḥādīth regarding vomiting:</strong></p>

        <p><strong>Ḥadīth:</strong> “Whoever is overcome by vomiting does not have to make up the fast, but whoever induces vomiting must make it up.”<br>Muʿallal (defective); declared so by Aḥmad, Isḥāq, ad-Dārimī, and al-Bukhārī.</p>

        <p><strong>Ḥadīth of Thawbān and Abū ad-Dardāʾ:</strong> that the Prophet ﷺ vomited and broke his fast.<br>Muʿallal; the preserved wording is: “he vomited and performed wuḍūʾ.”<br>Nothing authentic establishes that vomiting breaks the fast.</p>

        <p><strong>Ḥadīth:</strong> “He forbade solitude: that a man should spend the night alone or travel alone.”<br>Munkar (rejected) with this wording.<br>It is uniquely reported by Abū ʿUbayd al-Ḥaddād from the companions of ʿĀṣim ibn Muḥammad.<br>Others like Ibn ʿUyaynah, Wakīʿ, Abū, and al-Walīd aṭ-Ṭayālisī narrated it with the wording:<br>“If people knew what I know about being alone, no rider would travel alone at night.”<br>This is the preserved version.</p>

        <p><strong>Ḥadīth:</strong> “Allah has lifted fasting and half the prayer from the traveler, and fasting from the pregnant and breastfeeding woman.”<br>Ḍaʿīf (weak).</p>

        <p><strong>Ḥadīth:</strong> “Whoever neglects prayer will be punished with fifteen punishments…”<br>Fabricated (kidhb bāṭil).</p>

        <p><strong>Ḥadīth:</strong> “The most beloved people to Allah are those who hasten to break their fast.”<br>Munkar, muʿallal.</p>

        <p><strong>Ḥadīth:</strong> “Fasting after Fajr (i.e., eating after dawn)” (story of Ḥudhayfah).<br>Munkar and weak.</p>

        <p><strong>Ḥadīth:</strong> “Whoever forgetfully breaks his fast in Ramaḍān, he has no make-up nor expiation.”<br>Munkar.</p>

        <p><strong>On applying kohl while fasting:</strong><br>No authentic ḥadīth exists commanding or forbidding it during the day in Ramaḍān.</p>

        <p><strong>Ḥadīth:</strong> “My ummah is like rain; it is not known whether its beginning or end is better.”<br>Munkar; reported through multiple routes but none are authentic.</p>

        <p><strong>Ḥadīth:</strong> “The night witr is three like the witr of the day (Maghrib).”<br>Not authentic as marfūʿ; the correct version is mawqūf on Ibn Masʿūd.</p>

        <p><strong>Ḥadīth:</strong> “Allah frees people from the Fire at every breaking of the fast.”<br>Ḍaʿīf; reported through several routes but none are authentic.</p>

        <p><strong>Ḥadīth:</strong> “The Prophet ﷺ said twelve takbīrs in the ʿĪd prayer…”<br>Weak; nothing authentic is established as marfūʿ, only from some Companions.</p>

        <p><strong>Ḥadīth/Athar:</strong> “The sunnah for the one in iʿtikāf is that he does not visit the sick…”<br>Munkar; not authentic from the Prophet ﷺ nor from ʿĀʾishah. It is actually from az-Zuhrī.</p>

        <p><strong>Ḥadīth:</strong> “There is no fasting upon the one in iʿtikāf unless he makes it obligatory upon himself.”<br>Muʿallal; correct version is mawqūf on Ibn ʿAbbās.</p>

        <p><strong>Ḥadīth:</strong> “Whoever stands in prayer on the night of ʿĪd…”<br>Bāṭil (false).</p>

        <p><strong>Ḥadīth:</strong> “My ummah is a mercied nation; it has no punishment in the Hereafter…”<br>Bāṭil munkar; contradicts well-known authentic aḥādīth of intercession.</p>

        <p><strong>Ḥadīth:</strong> “If one of you hears the adhān while holding a vessel, he should not put it down…”<br>Munkar; nothing authentic allows eating after Fajr adhān.</p>

        <p><strong>Ḥadīth:</strong> “Hold fast to good character and long silence…”<br>Munkar.</p>

        <p><strong>Ḥadīth:</strong> “What an excellent suḥūr for the believer is dates.”<br>Munkar, not authentic.</p>

        <p><strong>Ḥadīth:</strong> “O Allah, for You I fasted…”<br>Nothing authentic is established.</p>

        <p><strong>Ḥadīth:</strong> “When you place your dead in the grave, say: ‘In the name of Allah and upon the sunnah…’”<br>Not authentic as marfūʿ; correct is mawqūf.</p>

        <p><strong>Ḥadīth:</strong> “Allah does not look at the one who lets his garment hang below the ankles.”<br>The preserved version is mawqūf.</p>

        <p><strong>Ḥadīth:</strong> “Why does one of you not take special clothes for Friday…”<br>Defective; declared mursal (disconnected).</p>

        <p><strong>Ḥadīth:</strong> “Sit down, you have harmed and delayed.”<br>Munkar.</p>

        <p><strong>Ḥadīth:</strong> “Any woman who asks for divorce without harm…”<br>Not authentic as connected; correct is mursal.</p>

        <p><strong>Ḥadīth:</strong> “Do not accompany except a believer…”<br>Munkar; chain is obscure (muẓlim).</p>

        <p><strong>Ḥadīth:</strong> “Most of those who die from my ummah die due to النفس (evil eye, etc.).”<br>Munkar.</p>

        <p><strong>Ḥadīth:</strong> “Whoever congratulates people for the month of Rabīʿ al-Awwal…”<br>Fabricated; a modern lie.</p>

        <p><strong>Ḥadīth:</strong> “When a servant stands for prayer, his sins are placed on his shoulders…”<br>Munkar.</p>

        <p><strong>Ḥadīth:</strong> “Whoever intends night prayer but sleeps…”<br>Not authentic; defective due to being mawqūf.</p>

        <p><strong>Ḥadīth:</strong> “Allah has forbidden the earth from consuming the bodies of the Prophets.”<br>Not authentic; chains are disconnected or munkar.</p>

        <p><strong>Ḥadīth:</strong> “The most daring of you in giving fatwā is the most daring upon the Fire.”<br>Not authentic.</p>

        <p><strong>Ḥadīth:</strong> “Whoever visits a sick person and says seven times…”<br>Munkar.</p>

        <p><strong>Ḥadīth:</strong> “A man follows the religion of his close friend…”<br>Reported through many routes but none are authentic.</p>

        <p><strong>Ḥadīth:</strong> “The Prophets are alive in their graves praying.”<br>Munkar bāṭil.</p>

        <p><strong>Ḥadīth:</strong> “At every completion (of Qurʾān) there is an answered supplication.”<br>Bāṭil.</p>

        <p><strong>Ḥadīth:</strong> “Do not say: ‘May Shayṭān be humiliated…’”<br>Muʿallal (defective due to irsāl - disconnection).</p>

        <p><strong>Ḥadīth:</strong> “Allah is with the debtor until he repays…”<br>Very munkar.</p>

        <p><strong>Ḥadīth:</strong> “O Allah forgive my sin, expand my home, and bless my provision.”<br>Muʿallal due to inqiṭāʿ (disconnection).</p>

        <p><strong>Ḥadīth:</strong> “Paradise lies under the feet of the mother.”<br>No authentic ḥadīth is established with this wording.</p>
      `,
      footnotes: []
    };
  }

  getFourteenthArticleContent() {
    return {
      id: 14,
      title: 'Ḥadīth: “The evil eye (al-ʿayn) is real; it causes a man to be placed in the grave and causes a camel to enter the cooking pot.”',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '7 min read',
      body: `
        <p><strong>Ḥadīth:</strong> “The evil eye (al-ʿayn) is real; it causes a man to be placed in the grave and causes a camel to enter the cooking pot.”<br><strong>[Very munkar (extremely rejected)]</strong></p>

        <p>It was narrated by Shuʿayb ibn Ayyūb, from Muʿāwiyah ibn Hishām, from Sufyān, from Muḥammad ibn al-Munkadir, from Jābir, from the Prophet ﷺ - and this is an error, as Ibn ʿAdī stated.</p>

        <p>Rather, it was narrated by Yaʿqūb ibn Muḥammad and Ibn Abī Fudayk, from ʿAlī ibn Abī ʿAlī al-Hāshimī, who said: Muḥammad ibn al-Munkadir narrated to us, from Jābir - with it.</p>

        <p>Ibn ʿAdī said: No one narrated from Ibn al-Munkadir from the ḥadīth of ath-Thawrī except Muʿāwiyah. He said: This ḥadīth of Sufyān from Muḥammad ibn al-Munkadir is said to be a mistake; rather, it is from Muʿāwiyah, from ʿAlī ibn Abī ʿAlī, from Ibn al-Munkadir, from Jābir.</p>

        <p>It was reported by Bashakkar in Kitāb al-ʿAjāʾib, and Ibn al-Jawzī included it in al-ʿIlal al-Mutanāhiyah.<br>Aḏ-Ḏahabī said in al-Mīzān: “A munkar ḥadīth.”<br>And as-Sakhāwī mentioned it in al-Maqāṣid al-Ḥasanah.</p>
      `,
      footnotes: []
    };
  }

  getFifteenthArticleContent() {
    return {
      id: 15,
      title: 'Ḥadīth: “If permission is sought from a man while he is praying, then his permission is tasbīḥ (saying Subḥān Allāh), and if permission is sought from a woman while she is praying, then her permission is clapping.”',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '10 min read',
      body: `
        <p><strong>Ḥadīth:</strong> “If permission is sought from a man while he is praying, then his permission is tasbīḥ (saying Subḥān Allāh), and if permission is sought from a woman while she is praying, then her permission is clapping.”<br><strong>[Muʿallal (defective) with this wording]</strong></p>

        <p>It was reported by al-Bayhaqī in as-Sunan al-Kubrā (2/247) through routes from Ḥafṣ ibn ʿAbdullāh, who said: I was narrated to by Ibrāhīm ibn Ṭahmān, from Sulaymān al-Aʿmash, from Dhakwān, from Abū Hurayrah رضي الله عنه, who said: The Messenger of Allah ﷺ said it.<br>[This chain appears sound outwardly, but the text (matn) is defective with this wording.]</p>

        <p>It was narrated by (Yaʿlá ibn ʿUbayd, Muḥammad ibn ʿUbayd, Shuʿbah ibn al-Ḥajjāj, al-Fuḍayl ibn ʿIyāḍ, Abū Muʿāwiyah Muḥammad ibn Khāzim, ʿĪsā ibn Yūnus, and ʿAbdullāh ibn al-Mubārak) from Sulaymān ibn Mihrān al-Aʿmash with the wording:<br>“Tasbīḥ is for men, and clapping is for women.”<br>Reported by Aḥmad (7541), Muslim (886), and an-Nasāʾī (1133).</p>

        <p>It was also narrated through multiple routes from Abū Hurayrah with the wording:<br>“Tasbīḥ is for men, and clapping is for women.”</p>

        <p>- From Ibn Shihāb az-Zuhrī, from Saʿīd ibn al-Musayyib and Abū Salamah ibn ʿAbd ar-Raḥmān, from Abū Hurayrah - reported by Aḥmad (10863), Muslim (885), and an-Nasāʾī (1132).</p>

        <p>- From Ibn Shihāb az-Zuhrī, from Abū Salamah ibn ʿAbd ar-Raḥmān, from Abū Hurayrah - reported by al-Ḥumaydī (978), Ibn Abī Shaybah (7330), Aḥmad (7283), ad-Dārimī (1480), al-Bukhārī (1203), Muslim (884), Ibn Mājah (1034), Abū Dāwūd (939), and an-Nasāʾī (539).</p>

        <p>- From the route of (ʿAwf ibn Abī Jamīlah al-Aʿrābī and Hishām ibn Ḥassān), from Muḥammad ibn Sīrīn, from Abū Hurayrah - reported by Aḥmad (7882), an-Nasāʾī (1134), and Abū Yaʿlá (6042).</p>

        <p>- From the route of (Maʿmar ibn Rāshid, from Hammām ibn Munabbih, from Abū Hurayrah) - reported by ʿAbd ar-Razzāq (4069), Aḥmad (8189), and Muslim (887).</p>

        <p>- From the route of (Ibn Jurayj, from ʿAṭāʾ ibn Abī Rabāḥ, from Abū Hurayrah) - reported by Aḥmad (10395).</p>

        <p>- From the route of (ʿAwf, from Khilās ibn ʿAmr al-Hijrī, from Abū Hurayrah) - reported by Aḥmad (8878).</p>

        <p>Thus, this wording (“tasbīḥ for men and clapping for women”) is the preserved (maḥfūẓ) wording that the ḥadīth scholars ضبط (precisely retained). Anything other than it is either shādh (irregular) or munkar (rejected).</p>
      `,
      footnotes: []
    };
  }

  getSixteenthArticleContent() {
    return {
      id: 16,
      title: 'Ḥadīth: “O ʿĀʾishah, leave me so that I may worship my Lord tonight.”',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '11 min read',
      body: `
        <p><strong>Ḥadīth:</strong> “O ʿĀʾishah, leave me so that I may worship my Lord tonight.”<br><strong>[Munkar (rejected)]</strong></p>

        <p>It was narrated by ʿImrān ibn Mūsā ibn Mujāshiʿ, who said: ʿUthmān ibn Abī Shaybah narrated to us, who said: Yaḥyā ibn Zakariyyā narrated to us, from Ibrāhīm ibn Suwayd an-Nakhaʿī, who said: ʿAbd al-Malik ibn Abī Sulaymān narrated to us, from ʿAṭāʾ, who said: I and ʿUbayd ibn ʿUmayr entered upon ʿĀʾishah, and she said to ʿUbayd ibn ʿUmayr: “It is time for you to visit.”</p>

        <p>So he said: I say, O mother, as the first one said: “Visit occasionally and you will be loved more.”</p>

        <p>She said: “Leave us from your idle talk.”</p>

        <p>Ibn ʿUmayr said: Inform us of the most amazing thing you saw from the Messenger of Allah ﷺ.</p>

        <p>He said: So she remained silent, then said: One night among the nights, he said:<br>“O ʿĀʾishah, leave me so that I may worship my Lord tonight.”</p>

        <p>So I said: By Allah, I love your closeness and I love what pleases you.</p>

        <p>She said: So he stood and purified himself, then stood in prayer.</p>

        <p>She said: He continued weeping until his lap became wet.</p>

        <p>She said: And while he was sitting, he continued weeping until his beard became wet.</p>

        <p>She said: Then he wept until the ground became wet.</p>

        <p>Then Bilāl came to inform him of the prayer. When he saw him weeping, he said:<br>“O Messenger of Allah, you weep while Allah has forgiven your past and future sins?”</p>

        <p>He said: “Should I not be a grateful servant? Indeed, a verse (or verses) was revealed to me tonight: Woe to the one who recites it and does not reflect upon it...” - the entire verse.</p>

        <p>Reported by Ṣaḥīḥ Ibn Ḥibbān (arranged by Ibn Balbān, 620).</p>

        <p>I say: It was not narrated from ʿAbd al-Malik ibn Abī Sulaymān except by Ibrāhīm ibn Suwayd an-Nakhaʿī, and Yaḥyā ibn Zakariyyā uniquely reported it from Ibrāhīm ibn Suwayd from him. This is a clear ghurābah (strangeness).</p>

        <p>And Yaḥyā ibn Zakariyyā, even though he is ḥasan al-ḥadīth (acceptable), is from a level where such tafarrud (solitary narration) is not accepted.</p>

        <p>So where are the كبار (major) companions of ʿAbd al-Malik ibn Abī Sulaymān al-ʿArzamī regarding this ḥadīth-such as Shuʿbah, ath-Thawrī, Ibn al-Mubārak, al-Qaṭṭān, ʿAbdullāh ibn Idrīs, Zuhayr ibn Muʿāwiyah, Zāʾidah, Ḥafṣ ibn Ghiyāth, ʿAlī ibn Mushir, ʿĪsā ibn Yūnus, Abū ʿAwānah, Hushaym, Yaḥyā ibn Abī Zāʾidah, Yazīd ibn Hārūn, and ʿAbd ar-Razzāq?</p>

        <p>Not a single one of them narrated it, despite many of them being compilers.</p>

        <p>Rather, it is only Ibrāhīm ibn Suwayd an-Nakhaʿī who narrates it. And although Ibrāhīm is thiqah (reliable), he is not well-known in narrating from ʿAbd al-Malik ibn Abī Sulaymān.<br>[Ad-Dāraquṭnī said: “He has few narrations; there is nothing munkar in his ḥadīth.”]</p>

        <p>And even if the ḥadīth were free from the tafarrud of Ibrāhīm ibn Suwayd, it is not free from the tafarrud of Yaḥyā ibn Zakariyyā.</p>

        <p>And Yaḥyā ibn Zakariyyā, although he is ḥasan al-ḥadīth, is likewise not well-known in narrating from Ibrāhīm ibn Suwayd.</p>

        <p>And someone like him does not bear solitary narration at his level.</p>
      `,
      footnotes: []
    };
  }

  getSeventeenthArticleContent() {
    return {
      id: 17,
      title: 'Ḥadīth: “Whoever sees an afflicted person and says: al-ḥamdu lillāh alladhī ʿāfānī mimmā ibtalāka bih…”',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '9 min read',
      body: `
        <p><strong>Ḥadīth:</strong> “Whoever sees an afflicted person and says: al-ḥamdu lillāh alladhī ʿāfānī mimmā ibtalāka bih…”</p>

        <p><strong>Ḥadīth:</strong> ʿAmr ibn Dīnār, the mawla of Āl az-Zubayr, from Sālim ibn ʿAbdullāh ibn ʿUmar, from Ibn ʿUmar, from ʿUmar, that the Messenger of Allah ﷺ said:<br>“Whoever sees a person afflicted (with a trial) and says: ‘All praise is due to Allah who has granted me well-being from what He has afflicted you with, and has favored me over many of those He created with great favor,’ will not be afflicted with that trial-whatever it may be-as long as he lives.”</p>

        <p>Reported by at-Tirmiḏī.<br><strong>[I say: This ḥadīth is very munkar (highly rejected) with this chain.]</strong></p>

        <p>ʿAmr ibn Dīnār, the steward (qahramān) of Āl az-Zubayr, is worthless (lā shayʾ), his ḥadīth is abandoned, and his narrations are munkar-especially what he narrates from Sālim ibn ʿAbdullāh; they are extremely munkar.</p>

        <p>For this reason, at-Tirmiḏī said: “This ḥadīth is gharīb (strange)... and he has uniquely narrated aḥādīth from Sālim ibn ʿAbdullāh ibn ʿUmar.”</p>

        <p><strong>[I say: This is an expression used by the ḥadīth scholars (ḥuffāẓ) for what they find objectionable (munkar) from a narrator.]</strong></p>

        <p>And it was also narrated by ʿAbdullāh ibn ʿUmar al-ʿUmarī, from Suhayl ibn Abī Ṣāliḥ, from his father, from Abū Hurayrah, who said: The Messenger of Allah ﷺ said:<br>“Whoever sees an afflicted person and says: ‘All praise is due to Allah who has granted me well-being from what He has afflicted you with, and has favored me over many of those He created with great favor,’ that affliction will not strike him.”</p>

        <p>Reported by Ibn Mājah and at-Tirmiḏī.</p>

        <p>I say: It is uniquely reported (tafarrada bih) through this route by ʿAbdullāh ibn ʿUmar al-ʿUmarī. He is a righteous man, but he is weak (ḍaʿīf), has poor memory (sayyiʾ al-ḥifẓ), adds into chains, and contradicts others. His ḥadīth may be written but is not used as proof.</p>

        <p>For this reason, at-Tirmiḏī said after it: “This ḥadīth is ḥasan gharīb from this route”-<br>[i.e., it is considered objectionable (munkar) upon al-ʿUmarī].</p>

        <p>Thus, it becomes clear the error and recklessness of those who declared this ḥadīth authentic based on its routes, for its chains are severely weak and do not strengthen one another. And Allah is the One sought for help.</p>
      `,
      footnotes: []
    };
  }

  getEighteenthArticleContent() {
    return {
      id: 18,
      title: '[Some authentic narrations (āthār) regarding the number of rakʿahs of Tarāwīḥ]',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Fiqh & Āthār',
      readTime: '7 min read',
      body: `
        <p><strong>[Some authentic narrations (āthār) regarding the number of rakʿahs of Tarāwīḥ]</strong></p>

        <p><strong>[Ibn Numayr narrated]</strong> from ʿAbd al-Malik, from ʿAṭāʾ, who said:<br>“I witnessed the people praying twenty-three rakʿahs including witr.”<br>(Reported by Ibn Abī Shaybah 7688)</p>

        <p><strong>[And Ibn Mahdī narrated]</strong> from Dāwūd ibn Qays, who said:<br>“I witnessed the people in Madīnah during the time of ʿUmar ibn ʿAbd al-ʿAzīz and Abān ibn ʿUthmān praying thirty-six rakʿahs and performing witr with three.”<br>(Reported by Ibn Abī Shaybah 7689)</p>

        <p>I say: In the statements of ʿAṭāʾ and Dāwūd ibn Qays there is a transmission of ijmāʿ (consensus) from the Companions and the Tābiʿīn regarding the permissibility of increasing beyond eleven rakʿahs, since no مخالِف (opposer) is known from their generation.</p>

        <p>And Saʿīd ibn Jubayr, Ibn Abī Mulaykah, Shutayr ibn Shakl, and Abū al-Bakhtarī ʿAlī ibn Rabīʿah used to pray twenty rakʿahs in Ramaḍān.</p>

        <p>And ʿAbd ar-Raḥmān ibn al-Aswad used to pray forty rakʿahs in Ramaḍān and perform witr with seven.</p>

        <p><strong>[All of these were reported by Ibn Abī Shaybah with chains, some of which are ṣaḥīḥ (authentic) and others ḥasan/jayyid (good).]</strong></p>
      `,
      footnotes: []
    };
  }

  getNineteenthArticleContent() {
    return {
      id: 19,
      title: 'Some narrations regarding the first ten days of Dhū al-Ḥijjah',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '8 min read',
      body: `
        <p><strong>Some narrations regarding the first ten days of Dhū al-Ḥijjah</strong></p>

        <p>“Specifying a particular duʿāʾ (supplication) for the Day of ʿArafah”<br><strong>[Nothing authentic is established regarding it]</strong></p>

        <p>“The best supplication - and in another wording: the most virtuous supplication - is on the Day of ʿArafah, and the best of what the Prophets before me said is: lā ilāha illā Allāh (there is no deity worthy of worship except Allah)”<br><strong>[Nothing authentic is established regarding it]</strong></p>

        <p>“The best days of the world are the ten (i.e., the ten of Dhū al-Ḥijjah)”<br><strong>[Nothing authentic is established regarding it]</strong></p>

        <p>“The Messenger of Allah ﷺ used to fast the nine days of Dhū al-Ḥijjah and the Day of ʿĀshūrāʾ”<br><strong>[Nothing authentic is established regarding it]</strong></p>

        <p>“There are no days greater in the sight of Allah, nor more beloved to Him for deeds in them, than these ten days, so increase in them in tahlīl (saying lā ilāha illā Allāh), takbīr (saying Allāhu akbar), and taḥmīd (saying al-ḥamdu lillāh)”<br><strong>[Not authentic with the wording: “so increase in them in tahlīl, takbīr, and taḥmīd”]</strong></p>

        <p>“Indeed, the ten are the ten of al-Aḍḥā, the odd day (al-witr) is the Day of ʿArafah, and the even day (ash-shafʿ) is the Day of an-Naḥr”<br><strong>[Weak (ḍaʿīf)]</strong></p>

        <p>“Fasting the Day of ʿArafah is like fasting one thousand days”<br><strong>[Munkar (rejected)]</strong></p>

        <p>“The most beloved months to Allah are the sacred months, and the most beloved of these months to Allah is Dhū al-Ḥijjah, and the most beloved part of Dhū al-Ḥijjah to Him are the first ten days”<br><strong>[Munkar (rejected)]</strong></p>
      `,
      footnotes: []
    };
  }

  getTwentiethArticleContent() {
    return {
      id: 20,
      title: 'Some aḥādīth that are not authentic regarding marital relations',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '8 min read',
      body: `
        <p><strong>Some aḥādīth that are not authentic regarding marital relations</strong></p>

        <p><strong>Ḥadīth:</strong> “A woman does not taste the sweetness of īmān (faith) until she fulfills the right of her husband.”<br><strong>[Munkar (rejected)]</strong></p>

        <p><strong>Ḥadīth:</strong> “A believer does not benefit, after taqwā (piety) of Allah, with anything better than a righteous wife: if he commands her, she obeys him; if he looks at her, she pleases him; if he swears an oath upon her, she fulfills it; and if he is absent from her, she guards herself and his wealth.”</p>

        <p><strong>Ḥadīth:</strong> “So look at where you stand with respect to him, for he is your Paradise and your Hellfire.”<br><strong>[Munqaṭiʿ (disconnected)]</strong></p>

        <p><strong>Ḥadīth:</strong> “Shall I not inform you of your women in Paradise? The loving (wadūd), fertile (walūd), who when she becomes angry, or is wronged, or her husband becomes angry, says: ‘This is my hand in your hand, I will not sleep until you are pleased.’”<br><strong>[No authentic ḥadīth is established regarding the wadūd walūd (loving and fertile woman)]</strong></p>

        <p><strong>Ḥadīth:</strong> “Allah does not look at a woman who is not grateful to her husband.”</p>

        <p><strong>Ḥadīth:</strong> “If I were to command anyone to prostrate to anyone, I would have commanded a woman to prostrate to her husband.”<br><strong>[Bāṭil (false)]</strong></p>

        <p><strong>Ḥadīth:</strong> “A woman does not fulfill the right of Allah until she fulfills the entire right of her husband.”<br><strong>[Muʿallal (defective)]</strong></p>

        <p><strong>Ḥadīth:</strong> “Two people whose prayer does not rise above their heads: a slave who has fled from his masters until he returns, and a woman who disobeys her husband until she returns.”<br><strong>[Bāṭil (false)]</strong></p>
      `,
      footnotes: []
    };
  }

  getTwentyFirstArticleContent() {
    return {
      id: 21,
      title: '[Aḥādīth encouraging sending ṣalāh upon the Prophet on Friday and the night of Friday]',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '9 min read',
      body: `
        <p><strong>[Aḥādīth encouraging sending ṣalāh upon the Prophet on Friday and the night of Friday]</strong></p>

        <p>“Whoever sends ṣalāh upon me one thousand times in a day will not die until he is given glad tidings of Paradise.”<br><strong>[Mawḍūʿ (fabricated)]</strong></p>

        <p>“Whoever sends one ṣalāh upon me, Allah and His angels send twenty ṣalāh upon him, and he will not die until he is given glad tidings of Paradise.”<br><strong>[Bāṭil (false)]</strong></p>

        <p>“Whoever sends ṣalāh upon me one hundred times in a day, Allah will fulfill for him one hundred needs-seventy for his Hereafter and thirty for his worldly life.”<br><strong>[Bāṭil (false)]</strong></p>

        <p>“Whoever sends ṣalāh upon me on Friday one hundred times, Allah will forgive him the sins of eighty years. And whoever sends ṣalāh upon me on the night of Friday one hundred times, he will be forgiven the sins of twenty years.”<br><strong>[Mawḍūʿ (fabricated)]</strong></p>

        <p>“Your ṣalāh upon me is an expiation.”<br><strong>[Lā aṣla lah (no basis for it)]</strong></p>

        <p>“Whoever sends ṣalāh upon me every Friday forty times, Allah will erase all his sins.”<br><strong>[Mawḍūʿ (fabricated)]</strong></p>

        <p>“Whoever sends one ṣalāh upon me, Allah sends ten ṣalāh upon him, erases ten sins from him, and raises him ten درجات (darajāt - ranks).”<br><strong>[Muʿallal (defective)]</strong></p>

        <p>“Whoever sends one ṣalāh upon me, Allah sends ten upon him; whoever sends ten upon me, Allah sends one hundred upon him; whoever sends one hundred upon me, Allah sends one thousand upon him; and whoever sends one thousand upon me, the Fire will not touch him.”<br><strong>[Mawḍūʿ (fabricated)]</strong></p>

        <p>“Whoever sends ṣalāh upon me ten times in the morning and ten times in the evening will attain my intercession on the Day of Judgment.”<br><strong>[Isnād muẓlim (obscure chain)]</strong></p>

        <p>“There is no one who sends salām upon me except that Allah returns my soul to me so that I may return the salām to him.”<br><strong>[Munkar (rejected)]</strong></p>

        <p>“When it is Friday and the night of Friday, then increase in sending ṣalāh upon me.”<br><strong>[Lā yaṣiḥḥu fīhi shayʾ (nothing authentic is established regarding it)]</strong></p>

        <p>“Increase in sending ṣalāh upon me on the radiant night and the bright day, for your ṣalāh is presented to me.”<br><strong>[Lā yaṣiḥḥu fīhi shayʾ (nothing authentic is established regarding it)]</strong></p>

        <p>“Increase in sending ṣalāh upon me on Friday, for your ṣalāh is presented to me.” They said: “How will it be presented to you when you have decayed?” He said: “Allah has forbidden the earth from consuming the bodies of the prophets.”<br><strong>[Lā yaṣiḥḥu fīhi shayʾ (nothing authentic is established regarding it)]</strong></p>

        <p>“Increase in sending ṣalāh upon me, for Allah has appointed an angel at my grave; when a man from my الأمة (ummah - nation) sends ṣalāh upon me, that angel says to me: ‘O Muḥammad, so-and-so son of so-and-so has just sent ṣalāh upon you.’”<br><strong>[Munkar (rejected)]</strong></p>

        <p>“Increase in sending ṣalāh upon me, for your ṣalāh upon me is a purification for you.”<br><strong>[Munkar (rejected)]</strong></p>

        <p>“Indeed, Allah has angels who roam the earth conveying to me the salām of my الأمة (ummah - nation).”<br><strong>[Munkar (rejected)]</strong></p>

        <p>“Wherever you are, send ṣalāh upon me, for your ṣalāh reaches me.”<br><strong>[Munkar (rejected)]</strong></p>

        <p>“There is no Muslim who sends ṣalāh upon me except that the angels send ṣalāh upon him as long as he sends ṣalāh upon me, so let the servant do little of that or increase.”<br><strong>[Muʿallal bi-l-irsāl (defective due to being mursal)]</strong></p>

        <p>“No people sit in a gathering in which they do not send ṣalāh upon the Prophet ﷺ except that it will be a source of regret for them, even if they enter Paradise, due to what they see of the reward.”<br><strong>[Munkar (rejected)]</strong></p>

        <p>“Adorn your gatherings with sending ṣalāh upon me, for your ṣalāh upon me will be a light for you on the Day of Judgment.”<br><strong>[Munkar (rejected)]</strong></p>

        <p>“The miser is the one in whose presence I am mentioned and he does not send ṣalāh upon me.”<br><strong>[Muʿallal bi-l-irsāl (defective due to being mursal)]</strong></p>

        <p>“May the nose of a man be humiliated in whose presence I am mentioned and he does not send ṣalāh upon me.”<br><strong>[Munkar (rejected)]</strong></p>

        <p>Ubayy said: “I said: O Messenger of Allah, I send abundant ṣalāh upon you, so how much of my ṣalāh should I dedicate to you?” He said: “Whatever you wish.” He said: “A quarter?” He said: “Whatever you wish, and if you increase, it is better for you.” He said: “Half?” He said: “Whatever you wish, and if you increase, it is better for you.” He said: “Two-thirds?” He said: “Whatever you wish, and if you increase, it is better for you.” He said: “Then I will make all my ṣalāh for you.” He said: “Then your worries will be sufficed and your sins forgiven.”<br>“And whoever forgets to send ṣalāh upon me has erred from the path of Paradise.”<br><strong>[Munkar (rejected)]</strong></p>

        <p>“The closest of people to me on the Day of Judgment are those who send the most ṣalāh upon me.”<br><strong>[Munkar (rejected)]</strong></p>

        <p>“There is no supplication except that between it and the sky is a barrier until ṣalāh is sent upon me; when ṣalāh is sent upon me, that barrier is torn and the supplication is raised.”<br><strong>[Mawḍūʿ (fabricated)]</strong></p>

        <p>“Supplication remains suspended between the sky and the earth until you send ṣalāh upon your Prophet.”<br><strong>[Muʿallal bi-l-waqf (defective; correct as mawqūf)]</strong></p>

        <p>“Every supplication is veiled until ṣalāh is sent upon Muḥammad and the family of Muḥammad.”<br><strong>[Munkar (rejected)]</strong></p>
      `,
      footnotes: []
    };
  }

  getTwentySecondArticleContent() {
    return {
      id: 22,
      title: 'Ḥadīth: “If you leave your house, then pray two rakʿahs (units of prayer) that will protect you from an evil خروج (khurūj – exit). And if you enter your house, then pray two rakʿahs that will protect you from an evil دخول (dukhūl – entry).”',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '6 min read',
      body: `
        <p><strong>Ḥadīth:</strong> “If you leave your house, then pray two rakʿahs (units of prayer) that will protect you from an evil خروج (khurūj - exit). And if you enter your house, then pray two rakʿahs that will protect you from an evil دخول (dukhūl - entry).”<br><strong>[Munkar (rejected)]</strong></p>

        <p>Al-Bazzār reported it and said: “We do not know this ḥadīth to be narrated from Abū Hurayrah except through this route.”</p>

        <p>Yaḥyā ibn Ayyūb al-Miṣrī: weak in memory; his ḥadīth is written but not used as proof. And whatever strangers narrated from him is not known among the people of Egypt from him; rather, it is from the ḥadīth of Ibn Lahīʿah, as Ibn Yūnus said.</p>

        <p>This ḥadīth was narrated from him by Muʿādh ibn Faḍālah, who is Baṣrī.</p>

        <p>And Bakr ibn ʿAmr al-Maʿāfirī al-Miṣrī: he has weakness.</p>

        <p>And Bakr ibn ʿAmr was uncertain in it, saying: “I think (ḥasibtuhu) it is from Abū Salamah.”</p>

        <p><strong>Benefit:</strong> The أصل (aṣl - foundation) of the ḥadīth is munkar, as al-Bazzār alone reported it without the authors of the major foundational books. And al-Bazzār only reports such ḥadīths in his Musnad for the purpose of pointing out their defects (iʿlāl).</p>
      `,
      footnotes: []
    };
  }

  getTwentyThirdArticleContent() {
    return {
      id: 23,
      title: 'Regarding some aḥādīth about the supplication of the fasting person not being rejected',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '6 min read',
      body: `
        <p><strong>Regarding some aḥādīth about the supplication of the fasting person not being rejected</strong></p>

        <p><strong>Ḥadīth of ʿAbdullāh ibn ʿAmr:</strong> The Messenger of Allah ﷺ said:<br>“Indeed, the fasting person has at the time of breaking his fast a supplication that is not rejected.”<br><strong>[Munkar (rejected)]</strong></p>

        <p>Reported by Ibn Mājah, aṭ-Ṭabarānī in ad-Duʿāʾ, and Ibn as-Sunnī in ʿAmal al-Yawm waʾl-Laylah.</p>

        <p><strong>Ḥadīth of Abū Hurayrah:</strong> The Messenger of Allah ﷺ said:<br>“Three whose supplication is not rejected: the fasting person until he breaks his fast, the just ruler, and the supplication of the oppressed.”<br><strong>[Lā yaṣiḥḥu fīhi shayʾ (nothing authentic is established regarding it)]</strong></p>

        <p>This ḥadīth was reported by aṭ-Ṭayālisī, Aḥmad, ʿAbd ibn Ḥumayd, Ibn Mājah, and at-Tirmiḏī.<br><strong>[Ḍaʿīf (weak)]</strong></p>

        <p>This does not mean that the fasting person should not make duʿāʾ (supplication); rather, fasting is among the greatest acts of worship through which the acceptance of supplication is hoped for.</p>
      `,
      footnotes: []
    };
  }

  getTwentyFourthArticleContent() {
    return {
      id: 24,
      title: 'Regarding some aḥādīth about the preference of women’s prayer in homes over mosques',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '8 min read',
      body: `
        <p><strong>Regarding some aḥādīth about the preference of women’s prayer in homes over mosques</strong></p>

        <p><strong>Ḥadīth:</strong> ʿAbd al-Ḥamīd ibn al-Mundhir ibn Abī Ḥumayd as-Sāʿidī, from his father (majhūl - unknown), from his grandmother Umm Ḥumayd, that she said:<br>“O Messenger of Allah, we love prayer (i.e., voluntary prayer) with you-but our husbands prevent us.”<br>So the Messenger of Allah ﷺ said:<br>“Your prayer in your houses is better than your prayer in your courtyards, and your prayer in your courtyards is better than your prayer in the congregational mosque.”</p>

        <p>Al-Mundhir ibn Abī Ḥumayd as-Sāʿidī: majhūl (unknown).</p>

        <p>And this ḥadīth was said by Imām Ibn Ḥazm to be: “khabar mawḍūʿ (a fabricated report).”</p>

        <p>It was also narrated through the route of Dāwūd ibn Qays, from ʿAbdullāh ibn Suwayd al-Anṣārī, from his aunt-the wife of Abū Ḥumayd as-Sāʿidī-that she came to the Prophet ﷺ and said:<br>“O Messenger of Allah, I love to pray with you.”<br>He said:<br>“I know that you love to pray with me. But your prayer in your house is better than your prayer in your chamber, and your prayer in your chamber is better than your prayer in your courtyard, and your prayer in your courtyard is better than your prayer in the mosque of your people, and your prayer in the mosque of your people is better than your prayer in my mosque.”</p>

        <p>So she ordered that a place of prayer be built for her in the furthest and darkest part of her house, and she continued to pray there until she met Allah, the Mighty and Majestic.</p>

        <p>I say: There are issues in it:</p>

        <p>It is not known that Dāwūd heard from Ibn Suwayd.</p>

        <p>ʿAbdullāh ibn Suwayd al-Anṣārī is majhūl (unknown)-he is (al-Khaṭmī), not al-Ḥārithī (the Companion).</p>

        <p>This Anṣārī was mentioned by al-Bukhārī and Ibn Abī Ḥātim, and they remained silent about him, neither declaring him trustworthy nor criticizing him; thus, he is majhūl (unknown) according to them.</p>

        <p>As for Ibn Ḥibbān mentioning him among the trustworthy Tābiʿīn, this follows his known practice of declaring trustworthy those from whom only one narrator reports.</p>

        <p>And Ibn Khuzaymah did not authenticate this report as some assumed; rather, he expressed doubt regarding the authenticity of all the aḥādīth in this chapter.</p>

        <p><strong>Benefit:</strong> The Shaykh-may Allah preserve him-wrote a preface for the book of Abū Ṭālūt titled:<br>“Tanbīh al-Mawājid wa Ikhbār as-Sawājid bi-Taʿlīl Aḥādīth Tafḍīl Ṣalāt an-Nisāʾ fī al-Buyūt ʿalā al-Masājid” (Alerting those who find and informing those who prostrate regarding the defects in the aḥādīth about preferring women’s prayer in homes over mosques).</p>
      `,
      footnotes: []
    };
  }

  getTwentyFifthArticleContent() {
    return {
      id: 25,
      title: 'Ḥadīth: “Whoever seeks forgiveness for the believing men and believing women…”',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '7 min read',
      body: `
        <p>It has been narrated through multiple routes, none of which are authentic.</p>

        <p><strong>It was narrated from Anas:</strong><br>Reported by al-Bukhārī in at-Tārīkh al-Kabīr through the route of Shuʿayb ibn Kaysān from him. He criticized it, and Shuʿayb is not known to have heard from Anas.</p>

        <p>It was followed up by Maʿmar from Abān from Anas with a similar wording, reported by ʿAbd ar-Razzāq.<br>And this is a nuskha mawḍūʿah (fabricated manuscript) and false.</p>

        <p><strong>It was narrated from Abū ad-Dardāʾ:</strong><br>Reported by aṭ-Ṭabarānī; it was singularly narrated (tafarada bihi) by ʿUthmān ibn Abī al-ʿĀtikah, who is layyin (weak, not strong).<br><strong>[The ḥadīth is munkar (rejected)].</strong></p>

        <p><strong>It was narrated from ʿUbādah ibn aṣ-Ṣāmit:</strong><br>Reported by aṭ-Ṭabarānī in ash-Shāmiyyīn.<br>It is bāṭil (false).</p>

        <p>It was singularly narrated by Bakr ibn Khunays, who is laysa bi-shayʾ (worthless), from ʿUtbah ibn Ḥumayd-declared weak by Aḥmad-from ʿĪsā ibn Sinān, who is layyin al-ḥadīth (weak in ḥadīth), from Yaʿlā ibn Shaddād.</p>

        <p>It is astonishing that some consider such chains-whose falsehood is apparent-as ḥasan (good).</p>

        <p>However, the encouragement to seek forgiveness for the believing men and women is authentically established, as Allah تعالى said:</p>

        <blockquote>“And seek forgiveness for your sin and for the believing men and believing women.”</blockquote>

        <p>And Nūḥ said:</p>

        <blockquote>“My Lord, forgive me and my parents and whoever enters my house as a believer, and the believing men and believing women.”</blockquote>

        <p>There is a difference between encouraging (ḥathth - encouragement) seeking forgiveness and specifying a particular reward for it.</p>
      `,
      footnotes: []
    };
  }

  getTwentySixthArticleContent() {
    return {
      id: 26,
      title: 'The most well-known weak aḥādīth that are widespread in the month of Shaʿbān',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '8 min read',
      body: `
        <p><strong>Ḥadīth:</strong> “O Allah, bless us in Rajab and Shaʿbān, and bless us in Ramaḍān.”<br><strong>[Munkar (rejected)]</strong><br>[Solely narrated by Zāʾidah ibn Abī ar-Riqād, and he is munkar al-ḥadīth (his narrations are rejected).]</p>

        <p><strong>Ḥadīth:</strong> “Count (observe carefully) the crescent of Shaʿbān for Ramaḍān.”<br><strong>[Munkar (rejected)]</strong><br>[Abū Muʿāwiyah erred in this ḥadīth.]</p>

        <p><strong>Ḥadīth:</strong> “That is a month (meaning Shaʿbān) that people neglect between Rajab and Ramaḍān, and it is a month in which deeds are raised to the Lord of the worlds, so I love that my deeds be raised while I am fasting.”<br><strong>[Munkar (rejected)]</strong><br>[Solely narrated by Thābit ibn Qays Abū Ghuṣn, and his ḥadīth is not of that level, nor can his singular narration be accepted.]</p>

        <p><strong>Ḥadīth:</strong> “Allah looks at all of His creation on the night of the middle of Shaʿbān and forgives all of His creation except a mushrik (one who commits shirk) or a mushāḥin (one who harbors enmity).”<br><strong>[Munkar bāṭil (rejected and false); its origin is from Isrāʾīliyyāt (Israelite reports)]</strong><br>[It was rejected by Abū Ḥātim ar-Rāzī, and declared weak by al-Bukhārī, at-Tirmiḏī, al-Bazzār, al-ʿUqaylī, Ibn ʿAdī, Ibn Khuzaymah, ad-Dāraquṭnī, and al-Bayhaqī. Al-Ḥākim declared it defective due to irsāl (missing link).]</p>

        <p><strong>Ḥadīth:</strong> “This is the night of the middle of Shaʿbān. Indeed, Allah frees people from the Fire on this night equal to the number of hairs of the sheep of Kalb.”<br><strong>[Bāṭil (false)]</strong><br>[Al-ʿAlāʾ ibn al-Ḥārith took it from Makhūl.]</p>

        <p><strong>Ḥadīth:</strong> “When it is the night of the middle of Shaʿbān, then stand (in prayer) during its night and fast its day.”<br><strong>[Kadhib (lie/fabricated)]</strong><br>[In its chain is Abū Bakr ibn ʿAbdullāh ibn Muḥammad ibn Abī Yasrah, a liar who fabricates ḥadīth.]</p>

        <p><strong>Ḥadīth:</strong> “When Shaʿbān reaches its middle, then do not fast.”<br><strong>[Munkar (rejected)]</strong><br>[The major imams rejected it from al-ʿAlāʾ ibn ʿAbd ar-Raḥmān, such as ʿAbd ar-Raḥmān ibn Mahdī, Aḥmad, Abū Zurʿah ar-Rāzī, al-Athram, an-Nasāʾī, and al-Khalīlī.]</p>

        <p><strong>Ḥadīth:</strong> “Whoever revives the nights of the two ʿĪds and the night of the middle of Shaʿbān, his heart will not die on the day when hearts die.”<br><strong>[Bāṭil (false)]</strong><br>[In its chain are severe defects: Marwān ibn Sālim-matrūk (abandoned); Salamah ibn Sulaymān-ḍaʿīf (weak); and ʿĪsā ibn Ibrāhīm al-Qurashī-laysa bi-shayʾ (worthless).]</p>
      `,
      footnotes: []
    };
  }

  getTwentySeventhArticleContent() {
    return {
      id: 27,
      title: 'The authenticity of the virtue of the night of the middle of Shaʿbān',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '7 min read',
      body: `
        <p>ʿAbd ar-Raḥmān ibn Zayd ibn Aslam said:<br>“I did not encounter any of our mashāyikh (teachers) nor our fuqahāʾ (jurists) who paid any attention to the night of the middle of Shaʿbān, nor did we encounter any of them mentioning the ḥadīth of Makhūl, nor did they consider it to have any virtue over other nights.”</p>

        <p>Ibn Abī Zayd said:<br>“And the fuqahāʾ were not doing that.”<br>(Ibn Waḍḍāḥ in al-Bidaʿ, 119)</p>

        <p>Ayyūb as-Sikhtiyānī said: It was said to Ibn Abī Mulaykah:<br>“Indeed, Ziyād al-Minqarī-who was a storyteller (qāṣṣ)-says: the reward of the night of the middle of Shaʿbān is like the reward of Laylat al-Qadr.”</p>

        <p>So Ibn Abī Mulaykah said:<br>“If I heard him saying that while I had a stick in my hand, I would have struck him with it.”<br>(Muṣannaf ʿAbd ar-Razzāq, 7928)</p>

        <p>When Ibn al-Mubārak was asked about the divine descent (an-nuzūl al-ilāhī) on the night of the middle of Shaʿbān, he said to the questioner:<br>“O weak one! The night of the middle (of Shaʿbān)?! He descends every night.”<br>(Abū ʿUthmān aṣ-Ṣābūnī, ʿAqīdah Ahl as-Sunnah, 92)</p>

        <p>Ibn Rajab said:<br>“And no statement is known from Imām Aḥmad regarding the night of the middle of Shaʿbān.”<br>(Laṭāʾif al-Maʿārif, 264)</p>

        <p><strong>Benefit:</strong><br>Nothing is authentically established from any of the Ṣaḥābah (Companions) nor the Tābiʿīn regarding the virtue of the night of the middle of Shaʿbān.</p>

        <p>And what has been reported from Ibn ʿAbbās, Ibn ʿUmar, ʿAṭāʾ ibn Yasār, and ʿUmar ibn ʿAbd al-ʿAzīz-none of it is authentic; rather, they are munkarāt (rejected reports) which those who rely on such things cling to.</p>

        <p>Therefore, one should not single out the night of the middle of Shaʿbān for قيام (qiyām - night prayer), nor believe in its virtue-except one who is a مبتدع (mubtadiʿ - innovator), or ignorant, or deluded.</p>
      `,
      footnotes: []
    };
  }

  getTwentyEighthArticleContent() {
    return {
      id: 28,
      title: 'Regarding not fasting after the middle of Shaʿbān',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '9 min read',
      body: `
        <p><strong>Ḥadīth:</strong> “When Shaʿbān reaches its middle, then do not fast.”</p>

        <p><strong>Ḥadīth:</strong> al-ʿAlāʾ ibn ʿAbd ar-Raḥmān, from his father, from Abū Hurayrah رضي الله عنه, from the Prophet ﷺ who said:<br>“When Shaʿbān reaches its middle, then do not fast.”</p>

        <p>Reported by ʿAbd ar-Razzāq, Ibn Abī Shaybah, Aḥmad, ad-Dārimī, Abū Dāwūd, Ibn Mājah, at-Tirmiḏī, and an-Nasāʾī.</p>

        <p>I say: it is munkar (rejected) and contradicts what is authentically established. It was rejected by ʿAbd ar-Raḥmān ibn Mahdī, Imām Aḥmad, Abū Zurʿah ar-Rāzī, Abū Dāwūd, al-Athram, an-Nasāʾī, and al-Khalīlī.</p>

        <p>Al-ʿAlāʾ was followed up in narrating it, as it was also narrated by ʿAbdullāh ibn al-Munkadir from his father al-Munkadir ibn Muḥammad, from his father Muḥammad ibn al-Munkadir, from ʿAbd ar-Raḥmān ibn Yaʿqūb al-Ḥarmī, from Abū Hurayrah with it.</p>

        <p>Aṭ-Ṭabarānī said: “This ḥadīth is not narrated from Muḥammad ibn al-Munkadir except by his son al-Munkadir, and his son ʿAbdullāh alone narrates it.”</p>

        <p>So this chain is extremely munkar (rejected), and a munkar narration does not strengthen another munkar narration; rather, it increases it in weakness.</p>

        <p>It was also narrated from Ibn al-Munkadir by Ibn ʿAdī, and in its chain is Muḥammad ibn Ibrāhīm, a kadhdhāb (liar) whose ḥadīth were abandoned by the scholars. He used to narrate rejected aḥādīth that have no basis, as the ḥadīth critics stated.</p>

        <p>Furthermore, the ḥadīth contradicts what is more authentic than it:</p>

        <p>The ḥadīth: “He used to fast all of Shaʿbān, he used to fast Shaʿbān except a little.”<br>Reported in al-Musnad and Ṣaḥīḥ Muslim.</p>

        <p>The ḥadīth: “Do not precede Ramaḍān by fasting a day or two, except for a man who used to fast regularly, then let him fast.”<br>Reported in the Ṣaḥīḥayn.</p>

        <p>Because of these aḥādīth, the ḥadīth of al-ʿAlāʾ was declared defective by the ḥuffāẓ (ḥadīth critics), such as Ibn Mahdī and Aḥmad.</p>

        <p>Abū Dāwūd said: ʿAbd ar-Raḥmān (ibn Mahdī) would not narrate it.<br>I said to Aḥmad: “Why?”<br>He said: “Because according to him, the Prophet ﷺ used to join Shaʿbān with Ramaḍān, and this (ḥadīth) contradicts that.”</p>

        <p>Imām Aḥmad said: “This ḥadīth is not preserved (ghayr maḥfūẓ). I asked Ibn Mahdī about it and he did not authenticate it, nor did he narrate it to me, and he avoided it. He said: al-ʿAlāʾ is trustworthy, but nothing from his ḥadīth is rejected except this.”</p>

        <p>Al-Barḏaʿī said: I witnessed Abū Zurʿah ar-Rāzī rejecting the ḥadīth of al-ʿAlāʾ ibn ʿAbd ar-Raḥmān and declaring it munkar.</p>

        <p>Abū Dāwūd said: “They criticized al-ʿAlāʾ regarding the fasting of Shaʿbān.”</p>

        <p>Al-Athram said: “All the aḥādīth contradict it.”</p>

        <p><strong>Ḥadīth:</strong> al-ʿAlāʾ ibn ʿAbd ar-Raḥmān, from his father, from Abū Hurayrah, that the Messenger of Allah ﷺ said:<br>“When Shaʿbān reaches its middle, then do not fast.”</p>

        <p>This was rejected by the ḥuffāẓ from the ḥadīth of al-ʿAlāʾ ibn ʿAbd ar-Raḥmān:</p>

        <p>It was rejected by Imām Aḥmad, Ibn Maʿīn, Abū Zurʿah, al-Athram, Abū Dāwūd, an-Nasāʾī, and al-Khalīlī.<br>Al-Bayhaqī declared it weak.<br>And aṭ-Ṭaḥāwī mentioned consensus (ijmāʿ) upon abandoning acting upon this ḥadīth.</p>

        <p>And what is authentically preserved (al-maḥfūẓ) from the Prophet ﷺ is contrary to it, such as:</p>

        <blockquote>“Do not precede Ramaḍān by fasting a day or two, except a man who used to fast regularly, then let him fast.”</blockquote>

        <blockquote>“The Messenger of Allah ﷺ used to fast all of Shaʿbān; he used to fast Shaʿbān except a little.”</blockquote>
      `,
      footnotes: []
    };
  }

  getTwentyNinthArticleContent() {
    return {
      id: 29,
      title: 'Abstaining from nullifiers (al-mufaṭṭirāt) for the fasting person',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '9 min read',
      body: `
        <p>Know-may Allah have mercy on you-that it is not authentically established (lā yaṣiḥḥ) from the Prophet ﷺ, with a connected chain (muttasil), that he ate after the adhān. Rather, what is established is from the mursal (disconnected) narration of ash-Shaʿbī from the Prophet ﷺ, and it is considered authoritative (muḥtajj bihi) among the Salaf, and they would include it among the connected musnad narrations.</p>

        <p>As for the ḥadīth of Anas:<br>“That the Messenger of Allah ﷺ and Zayd ibn Thābit took suḥūr together. When they finished their suḥūr, the Messenger of Allah ﷺ stood for prayer and prayed.”</p>

        <p>We said to Anas: “How much time was there between finishing their suḥūr and beginning the prayer?”<br>He said: “The amount of time it takes a man to recite fifty āyāt.”</p>

        <p>This is a Ṣaḥīḥ (authentic) ḥadīth, and there is nothing in it except the permissibility of abstaining (imsāk) early.</p>

        <p>And it is authentically established from Abū Bakr, ʿAlī, Ḥuḏayfah, and Ibn Masʿūd that they used to eat after the adhān.</p>

        <p>Regarding the interpretation of the statement of Allah تعالى:<br>“Eat and drink until the white thread becomes distinct to you from the black thread at dawn”</p>

        <p>It is authentically established from the Prophet ﷺ that he said:<br>“That is the darkness of the night and the whiteness of the day.”</p>

        <p>And it is authentically established from ʿAlī that when he prayed Fajr, he said:<br>“This is the time when the white thread becomes distinct from the black thread at dawn.”</p>

        <p>And it is authentically established from Ibn ʿAbbās that he said:<br>“They are two dawns (fajrān). As for the one that spreads in the sky, it neither permits nor prohibits anything. Rather, the dawn which appears clearly on the tops of the mountains is the one that prohibits drinking.”</p>

        <p>And it is authentically established from Sahl ibn Saʿd that he said:<br>“It only refers to the night and the day.”</p>

        <p>And it is authentically established from al-Ḥasan al-Baṣrī that he said:<br>“The night is distinct from the day.”</p>

        <p>And it is authentically established from as-Suddī that he said:<br>“Until the day becomes distinct to you from the night.”</p>

        <p>And it is authentically established from Qatādah that he said:<br>“The whiteness that is seen at the end of the night is called the false dawn (aṣ-ṣubḥ al-kādhib), as the Arabs used to call it. So do not let that prevent you from your suḥūr. For the true dawn has no ambiguity: it is a horizontal spreading light on the horizon. So eat and drink until the true dawn becomes clear to you, and when you see that, then abstain.”</p>

        <p>And it is authentically established from Abū Bakr ibn ʿAyyāsh that he said:<br>“This is the departure of the night and the arrival of the day.”</p>

        <p>And it is authentically established from Abū Mijlaz that he said:<br>“The vertical light in the sky is not the dawn; rather, that is the false dawn. The true dawn is when the horizon spreads with light.”</p>

        <p>And it is authentically established from Muslim ibn Ṣubayḥ that he said:<br>“They did not consider this dawn of yours as the (true) dawn. Rather, they considered the dawn that fills the houses and the roads.”</p>

        <p>And it is authentically established from Muslim ibn Ṣubayḥ that he said:<br>“They only considered the dawn that spreads widely in the sky.”</p>

        <p>And it is authentically established from Abū Bakr ibn ʿAyyāsh that he said:<br>“Sometimes I would drink after the muʾadhdhin’s call-meaning in Ramaḍān-even after the iqāmah had been given.”<br>And he said: “I did not see anyone do that more than al-Aʿmash.”</p>

        <p>All of these reports (āthār) were narrated by Ibn Jarīr aṭ-Ṭabarī in his Tafsīr with authentic chains (asānīd ṣaḥīḥah) that are relied upon.</p>
      `,
      footnotes: []
    };
  }

  getThirtiethArticleContent() {
    return {
      id: 30,
      title: 'Conclusion regarding wiping the face with the hands after supplication (duʿāʾ)',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '7 min read',
      body: `
        <p>It has been reported from the ḥadīth of ʿUmar ibn al-Khaṭṭāb, but it was denounced (ustunkira) by Abū Zurʿah and considered strange (istaghrabahu) by at-Tirmiḏī.</p>

        <p>And from the ḥadīth of Yazīd ibn as-Sāʾib, but it is inconsistent (muḍṭarib) and defective (muʿallal).</p>

        <p>And from the ḥadīth of Ibn ʿAbbās, which was denounced (ustunkira) by Abū Ḥātim and weakened (ḍaʿʿafahu) by Abū Dāwūd.</p>

        <p>And it has come from the mursal (disconnected) narration of az-Zuhrī, who said:<br>“The Messenger of Allah ﷺ would raise his hands to his chest in supplication, then wipe his face with them.”</p>

        <p>And it has come from the report (athar) of Yaḥyā ibn Saʿīd:<br>“That those who came before would supplicate, then return their hands to their faces so as to return the supplication and blessing.”</p>

        <p>And it has come from the report of al-Ḥasan al-Baṣrī:<br>“When he finished supplication, he would wipe his face with them.”</p>

        <p>And ʿAbd ar-Razzāq said:<br>“I saw Maʿmar returning his hands and wiping his face.”<br>ʿAbd ar-Razzāq said: “And I do it.”</p>

        <p>And Imām Aḥmad said:<br>“I hope there is no harm in it.”</p>

        <p>Muḥammad ibn Naṣr said:<br>“I saw Isḥāq approving (yastaḥsinu) acting upon these ḥadīths.”</p>

        <p>Al-Bayhaqī said:<br>“It is practiced by some of them outside the prayer,” meaning wiping the face after supplication.</p>

        <p>So there is no harm in wiping the face after supplication, since the lack of an established (thubūt) ḥadīth from the Prophet ﷺ does not necessitate its prohibition. And it has been established, as mentioned, from the Salaf that they practiced it-and they are the most devoted of people in worship to their Lord-and for us in them is a good example. May Allah have mercy upon them.</p>
      `,
      footnotes: []
    };
  }

  getThirtyFirstArticleContent() {
    return {
      id: 31,
      title: 'Regarding the ḥadīths about al-Khawārij',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '9 min read',
      body: `
        <p>Nothing is authentically established (lā yaṣiḥḥ) from the Prophet ﷺ regarding the specific designation (musammā) of “al-Khawārij”, nor regarding them being “the dogs of the Fire” (kilāb an-nār), nor the wording: “whenever a horn emerges, it is قطع (cut off)”.</p>

        <p><strong>Ḥadīth:</strong> “The Khawārij are the dogs of the Fire”<br><strong>[Nothing authentic is established concerning it]</strong></p>

        <p>It is reported from Abū Umāmah and ʿAbdullāh ibn Abī Awfā:</p>

        <p>As for the ḥadīth of Abū Umāmah, then in its chain is Ḥashraj ibn Nabātah, and he has weakness.</p>

        <p>And it was رواه (narrated) by Qaṭan ibn Nusayr from ʿAbd al-Wārith from Saʿīd ibn Jumhān, and Qaṭan is weak, and this chain to Saʿīd is denounced (munkar).</p>

        <p>And it was رواه by ʿAffān from Ḥammād ibn Salamah from Saʿīd from Ibn Abī Awfā, and it does not contain the wording “dogs of the Fire”, and ʿAffān was careful in selecting the authentic narrations of Ḥammād.</p>

        <p>And it was رواه by al-Aʿmash from Ibn Abī Awfā, but it is disconnected (munqaṭiʿ)-al-Aʿmash did not hear from any Companion.</p>

        <p>Then the chain ultimately returns to the ḥadīth of Abū Umāmah, as clarified by ad-Dāraquṭnī. For the preserved route (al-maḥfūẓ) from al-Aʿmash is: from al-Ḥusayn ibn Wāqid → from Abū Ghālib → from Abū Umāmah.</p>

        <p>And this route deceived many who used it to strengthen the ḥadīth, while in reality it returns to the same denounced (munkar) original chains.</p>

        <p>And Abū Ghālib Ḥazūr is weak, and his narrations from Abū Umāmah are denounced (munkar al-ḥadīth).</p>

        <p>So attention should be paid to the methodology of the later scholars, for they are often deceived by the multiplicity of chains, while many of them ultimately return to a single أصل (original) weak chain.</p>

        <p><strong>Ḥadīth:</strong> “Whenever a horn emerges among them, Allah cuts it off…”<br>Narrated by Aḥmad.</p>

        <p>This wording is denounced (munkar). It is uniquely reported (tafarrada bihi) by Abū Junāb al-Kalbī (Yaḥyā ibn Abī Ḥayyah), whose ḥadīths are denounced (manākīr), from Shahr ibn Ḥawshab, who is weak.</p>

        <p>And the ḥadīth is also reported with another wording:<br>“Whenever a horn emerges, it is cut off.”<br>Narrated by Ibn Mājah.</p>

        <p>This wording is very denounced (munkar jiddan). It is uniquely reported by Hishām ibn ʿAmmār-though he is truthful (ṣadūq), when he grew older he would accept prompting (talqīn), as stated by Abū Ḥātim and Abū Dāwūd.</p>

        <p>And he alone narrated more than four hundred ḥadīths with no basis, as mentioned by Abū Dāwūd.</p>

        <p>And in the chain is al-Awzāʿī from Nāfiʿ-though both are trustworthy, the narration of al-Awzāʿī from Nāfiʿ is not authentic, as stated by Abū Zurʿah ad-Dimashqī and others.</p>
      `,
      footnotes: []
    };
  }

  getThirtySecondArticleContent() {
    return {
      id: 32,
      title: 'What has been reported regarding ar-Ruwaybiḍah',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '8 min read',
      body: `
        <p>Al-Bazzār (Baz) and aṭ-Ṭabarānī (Ṭab) narrated from ʿAwf ibn Mālik (may Allah be pleased with him), who said:<br>The Messenger of Allah ﷺ said:<br>“Indeed, before the Hour there will be deceptive years, in which the liar will be believed, and the truthful one will be disbelieved, and the treacherous one will be trusted, and the trustworthy one will be accused of treachery, and ar-Ruwaybiḍah will speak.”<br>It was said: “O Messenger of Allah, what is ar-Ruwaybiḍah?”<br>He said: “The insignificant (trivial) man who speaks about public affairs.”</p>

        <p><strong>[Muʿallal (defective)]</strong> - and Abū ʿAblah Shammar ibn Yaqẓān has unknown status (fīhi jahālah).</p>

        <p>And it was narrated from Ibrāhīm ibn Abī ʿAblah, from ʿAwf ibn Mālik, without mentioning “from his father from ʿAwf.” And Ibrāhīm did not hear from ʿAwf.</p>

        <p>And it was narrated by ʿAbdullāh ibn Dīnār, from Anas, from the Prophet ﷺ.</p>

        <p>And it was narrated by ʿAbdullāh ibn al-Muthannā al-Anṣārī, from ʿAbdullāh ibn Dīnār, from Abū al-Azhar, from Anas-and Abū al-Azhar is unknown (majhūl).</p>

        <p>And it was narrated by Saʿīd ibn ʿAbd ar-Raḥmān al-Jahshī, from ʿAbdullāh ibn Dīnār, as a mursal (disconnected) report.<br>Abū Ḥātim declared it defective (aʿallahu) and said:<br>“If it were authentic, the trustworthy narrators would have narrated it from Ibn Isḥāq.”</p>

        <p>And it was narrated from Abū Hurayrah, and in its chain is ʿAbd al-Malik ibn Qudāmah:<br>He is not strong (laysa bil-qawī) and narrates denounced reports (manākīr) from reliable narrators, and there is inconsistency (iḍṭirāb) in it.</p>

        <p>And it was narrated by Fulayḥ, from Saʿīd ibn ʿUbayd ibn as-Sabbāq, from Abū Hurayrah.<br>And Fulayḥ ibn Sulaymān is not strong and his ḥadīth is not used as proof (lā yuḥtajj bihi).</p>

        <p>And Saʿīd ibn ʿUbayd ibn as-Sabbāq did not hear from Abū Hurayrah.</p>
      `,
      footnotes: []
    };
  }

  getThirtyThirdArticleContent() {
    return {
      id: 33,
      title: 'Ḥadīth: “I am with My servant as long as he remembers Me, and his lips move with My remembrance”',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '9 min read',
      body: `
        <p><strong>Ḥadīth:</strong> “I am with My servant as long as he remembers Me, and his lips move with My remembrance”<br><strong>[Muʿallal (defective) due to it being mawqūf (stopped) with this wording]</strong></p>

        <p>It was narrated by ʿAbd ar-Raḥmān ibn Yazīd ibn Jābir, who said: narrated to us Ismāʿīl ibn ʿUbaydillāh, from Karīmah bint al-Ḥasḥās al-Muzaniyyah, who said: narrated to us Abū Hurayrah, as a marfūʿ (raised) report.</p>

        <p>And it was narrated by al-Awzāʿī, from Ismāʿīl ibn ʿUbaydillāh, from Umm ad-Dardāʾ, from Abū Hurayrah-without mentioning Karīmah bint al-Ḥasḥās. And aṭ-Ṭabarānī denounced (istankarah) it.</p>

        <p>And it was narrated by al-Awzāʿī, from Ismāʿīl, from Umm ad-Dardāʾ, from Abū Hurayrah as a mawqūf (stopped) report, and this is the preserved version (al-maḥfūẓ).</p>

        <p><strong>Benefit (fāʾidah):</strong><br>The preserved wording in this ḥadīth is what the ḥuffāẓ (leading ḥadīth scholars) narrated through multiple routes from Abū Hurayrah:</p>

        <p>Al-Aʿmash and Zayd ibn Aslam narrated it from Abū Ṣāliḥ, from Abū Hurayrah.<br>Likewise, Fulayḥ ibn Sulaymān narrated it from Hilāl ibn ʿAlī, from ʿAbd ar-Raḥmān ibn Abī ʿAmrah, from Abū Hurayrah, with the wording:</p>

        <blockquote>“I am according to My servant’s expectation of Me, and I am with him when he remembers Me.”</blockquote>

        <p>And it was narrated by ʿAbd al-Wāḥid ibn Ziyād, Shuʿbah, Abū Muʿāwiyah, and Ibn Numayr, from al-Aʿmash with this wording, and they added:</p>

        <blockquote>“If he remembers Me within himself, I remember him within Myself; if he remembers Me in a gathering, I remember him in a gathering better than it and more pure. If he draws near to Me a handspan, I draw near to him a cubit; if he draws near to Me a cubit, I draw near to him a fathom; and if he comes to Me walking, I come to him running.”</blockquote>

        <p>And this is preserved (maḥfūẓ) from al-Aʿmash.</p>

        <p>And Shuʿbah narrated it from al-Aʿmash, from Abū Ṣāliḥ, from Abū Hurayrah; and likewise Jaʿfar ibn Burqān narrated it from Yazīd ibn al-Aṣamm, from Abū Hurayrah, with the wording:</p>

        <blockquote>“And I am with him when he calls upon Me.”</blockquote>

        <p>And similarly, Shuʿbah narrated it from Qatādah, from Anas ibn Mālik, with this wording.</p>

        <p>And it was narrated by Abū az-Zinād, from al-Aʿraj, from Abū Hurayrah; and likewise Maʿmar, from Hammām ibn Munabbih, from Abū Hurayrah, with the wording:</p>

        <blockquote>“I am according to My servant’s expectation of Me.”</blockquote>

        <p>And it was narrated by Hishām ibn al-Ghāzī, from Ḥayyān Abū an-Naḍr, from Wāthilah ibn al-Asqaʿ:</p>

        <blockquote>“I am according to My servant’s expectation of Me, so let him think of Me as he wishes.”</blockquote>
      `,
      footnotes: []
    };
  }

  getThirtyFourthArticleContent() {
    return {
      id: 34,
      title: 'Conclusion regarding Zakāt on jewelry (al-ḥulī)',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '12 min read',
      body: `
        <p>All praise is due to Allah, and prayers and peace be upon the Prophets of Allah and those who follow them.</p>

        <p>As for what follows: reports have come regarding zakāt on jewelry from the ḥadīths of Ibn ʿAmr, Asmāʾ bint Yazīd, Umm Salamah, ʿĀʾishah, and Fāṭimah bint Qays - nothing authentic (lā yaṣiḥḥ) is established from them.</p>

        <p><strong>Ḥadīth of Ibn ʿAmr:</strong><br>That two women came to the Messenger of Allah ﷺ wearing two gold bracelets on their hands. He said to them:<br>“Do you give their zakāt?”<br>They said: “No.”<br>He said:<br>“Would you like Allah to adorn you with two bracelets of fire?”<br>They said: “No.”<br>He said:<br>“Then give their zakāt.”</p>

        <p>Narrated by Aḥmad (6667) and at-Tirmiḏī (637).<br><strong>[Munkar (denounced), muʿallal (defective) due to irsāl (disconnection)].</strong><br>At-Tirmiḏī weakened it, and an-Nasāʾī declared it defective.</p>

        <p><strong>Ḥadīth of Asmāʾ bint Yazīd:</strong><br>She said: I and my aunt entered upon the Prophet ﷺ, and she was wearing gold bracelets. He said to us:<br>“Do you give their zakāt?”<br>We said: “No.”<br>He said:<br>“Do you not fear that Allah will adorn you with bracelets of fire? Give their zakāt.”</p>

        <p>Narrated by Aḥmad (27614).<br><strong>[Munkar (denounced), muḍṭarib (inconsistent)]</strong> - Shahr ibn Ḥawshab is inconsistent in it.</p>

        <p><strong>Ḥadīth of Umm Salamah:</strong><br>She said:<br>“I used to wear gold ornaments, so I said: O Messenger of Allah, is this considered hoarded wealth (kanz)?<br>He said:<br>‘Whatever reaches the amount upon which zakāt is due and its zakāt is paid, then it is not hoarded wealth.’”</p>

        <p>Narrated by Abū Dāwūd (1564), aṭ-Ṭabarānī, ad-Dāraquṭnī, and al-Bayhaqī.<br><strong>[Munkar (denounced), muʿallal (defective) due to disconnection (inqiṭāʿ)].</strong></p>

        <p><strong>Ḥadīth of ʿĀʾishah (wife of the Prophet ﷺ):</strong><br>She said: The Messenger of Allah ﷺ entered upon me and saw silver rings on my hands. He said:<br>“What is this, O ʿĀʾishah?”<br>I said: “I made them to adorn myself for you, O Messenger of Allah.”<br>He said:<br>“Do you give their zakāt?”<br>I said: “No,” or whatever Allah willed.<br>He said:<br>“That is sufficient for you from the Fire.”</p>

        <p>Narrated by Ibn Zanjawayh, Abū Dāwūd (1565), and ad-Dāraquṭnī.<br><strong>[Munkar (denounced), muʿallal (defective) - the correct version is mawqūf upon ʿAbdullāh ibn Shaddād].</strong></p>

        <p><strong>Ḥadīth of Abū Ḥamzah Maymūn:</strong><br>From ash-Shaʿbī, from Fāṭimah bint Qays, that the Prophet ﷺ said:<br>“There is zakāt on jewelry.”</p>

        <p>Narrated by ad-Dāraquṭnī (1954).<br><strong>[Bāṭil (false)].</strong></p>

        <p>At-Tirmiḏī said:<br>“Nothing authentic is established in this chapter from the Prophet ﷺ.”</p>

        <h3>The Scholarly Disagreement</h3>

        <p>There was اختلاف (ikhtilāf - disagreement) regarding zakāt on jewelry:</p>

        <p>The majority of the Companions held that there is no zakāt on it, among them:<br>ʿAlī, Jābir ibn ʿAbdullāh, ʿAbdullāh ibn ʿUmar, Anas ibn Mālik, ʿĀʾishah, and Asmāʾ.</p>

        <p>Al-Ḥasan al-Baṣrī said:<br>“We do not know of anyone among the Khulafāʾ who said: ‘There is zakāt on jewelry.’”</p>

        <p>Al-Qāsim ibn Muḥammad said:<br>“I did not see anyone doing it.”</p>

        <p>And they were followed by the Tābiʿūn (Successors), such as:<br>al-Ḥasan al-Baṣrī, Khilās ibn ʿAmr, Abū Ḥassān al-Aʿraj, Ṭāwūs ibn Kaysān, Abū Jaʿfar Muḥammad ibn ʿAlī ibn al-Ḥusayn, and ʿĀmir ash-Shaʿbī.</p>

        <p>Some Companions held that there is zakāt on jewelry, among them:<br>Ibn Masʿūd and ʿAbdullāh ibn ʿAmr.</p>

        <p>It is also reported from Anas that he said:<br>“He gives zakāt on it once.”</p>

        <p>Reports also came from ʿUmar, Ibn ʿUmar, and ʿĀʾishah with denounced (munkar) chains, while what is authentically established from them is the opposite.</p>

        <p><strong>Note (tanbīh):</strong><br>It is reported with a denounced chain from ʿAṭāʾ, az-Zuhrī, and Makḥūl that they said:<br>“The Sunnah has passed that there is zakāt on gold and silver jewelry.”</p>

        <p>And they were followed by Tābiʿūn such as:<br>Saʿīd ibn Jubayr, Muḥammad ibn Muslim ibn Shihāb az-Zuhrī, ʿAbdullāh ibn Shaddād, Ibrāhīm an-Nakhaʿī, ʿAṭāʾ ibn Abī Rabāḥ, and Jābir ibn Zayd.</p>

        <p>He said: and this is the position of Sufyān.</p>

        <p>Another group held that its zakāt is fulfilled by lending it out and using it, among them:<br>Jābir ibn ʿAbdullāh, Saʿīd ibn al-Musayyib, and ʿĀmir ash-Shaʿbī.</p>

        <p>And there is اختلاف (ikhtilāf - difference) in what is reported from Saʿīd ibn al-Musayyib regarding this.</p>
      `,
      footnotes: []
    };
  }

  getThirtyFifthArticleContent() {
    return {
      id: 35,
      title: 'The established forms (ṣiyagh) of Takbīr',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '6 min read',
      body: `
        <p><strong>The Takbīr of ʿAlī and ʿAbdullāh ibn Masʿūd:</strong><br>Allāhu Akbar, Allāhu Akbar, lā ilāha illa Allāh, wa-Allāhu Akbar, Allāhu Akbar, wa lillāhi al-ḥamd.<br>(Allah is the Greatest, Allah is the Greatest, there is no deity worthy of worship except Allah, Allah is the Greatest, Allah is the Greatest, and to Allah belongs all praise.)</p>

        <p><strong>The Takbīr of Ibn ʿAbbās:</strong><br>Allāhu Akbar kabīran, Allāhu Akbar kabīran, Allāhu Akbar wa ajall, Allāhu Akbar, wa lillāhi al-ḥamd.<br>(Allah is the Greatest, greatly; Allah is the Greatest, greatly; Allah is the Greatest and most majestic; Allah is the Greatest, and to Allah belongs all praise.)</p>

        <p><strong>The Takbīr of Salmān (may Allah be pleased with him):</strong><br>Kabirū: Allāhu Akbar, Allāhu Akbar kabīran [or he said: takbīran],<br>Allāhumma anta aʿlā wa ajall min an takūna laka ṣāḥibah, aw yakūna laka walad, aw yakūna laka sharīk fī al-mulk, aw yakūna laka walī min adh-dhull, wa kabbirhu takbīran.<br>Allāhumma ighfir lanā, Allāhumma irḥamnā.</p>

        <p>(Declare Allah’s greatness: Allah is the Greatest, Allah is the Greatest greatly… O Allah, You are higher and more majestic than having a consort, or having a child, or having a partner in dominion, or having a protector out of weakness. Magnify Him greatly. O Allah, forgive us, O Allah, have mercy on us.)</p>

        <p><strong>The Takbīr of al-Ḥasan al-Baṣrī:</strong><br>Allāhu Akbar, Allāhu Akbar — three times.</p>
      `,
      footnotes: []
    };
  }

  getThirtySixthArticleContent() {
    return {
      id: 36,
      title: 'Ḥadīth: “That Allah descends (yanzil) on the Day of ʿArafah?”',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '7 min read',
      body: `
        <p>There has been widespread circulation on social media of clips claiming that Allah “descends” on the Day of ʿArafah. So I say: here is a ḥadīth-related benefit (fāʾidah ḥadīthiyyah):</p>

        <p>Every ḥadīth that mentions that Allah “descends” (yanzil) on the Day of ʿArafah is not authentic (lā yaṣiḥḥ). Rather, the wording that has come is: “He draws near” (yadnū)-not “He descends.”</p>

        <p>And there is a difference between nuzūl (descent) and dunū (nearness).</p>

        <p>Makhraamah ibn Bukayr narrated from his father, from Yūnus ibn Yūsuf, from Ibn al-Musayyib, from ʿĀʾishah (may Allah be pleased with her), that the Prophet ﷺ said:</p>

        <blockquote>“There is no day on which Allah frees more servants from the Fire than the Day of ʿArafah. And indeed, He draws near (yadnū), then boasts of them to the angels, and says: ‘What do these people seek?’”</blockquote>

        <p>This ḥadīth was narrated by Aḥmad, Muslim, and others. It is a ḥadīth whose apparent chain is authentic (ẓāhiruhu aṣ-ṣaḥḥah).</p>

        <p>However, in its chain there is strangeness (gharābah), and its أصل (foundation) was declared defective by Ibn Maʿīn and al-Bukhārī due to the lack of hearing (عدم السماع) of Makhraamah from his father.</p>
      `,
      footnotes: []
    };
  }

  getThirtySeventhArticleContent() {
    return {
      id: 37,
      title: 'A benefit (fāʾidah) regarding fasting the Day of ʿĀshūrāʾ',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '6 min read',
      body: `
        <p>It has been reported through more than twenty routes (wujūh) that the Prophet ﷺ commanded fasting the Day of ʿĀshūrāʾ.</p>

        <p>Rather, it has been reported from a group of Companions-such as Ibn ʿAbbās, Hind bint Asmāʾ, Asmāʾ ibn Ḥārithah, Salamah ibn al-Akwaʿ, and others-that the Prophet ﷺ said:</p>

        <blockquote>“Whoever among you wakes up fasting should complete his fast, and whoever has eaten from his family’s morning meal should complete the rest of his day (in fasting).”</blockquote>

        <p>And all of this was before Ramaḍān was made obligatory.</p>

        <p>Then when Ramaḍān was prescribed, the Prophet ﷺ said:</p>

        <blockquote>“It is a day from the days of Allah; whoever wishes may fast it, and whoever wishes may leave it.”</blockquote>

        <p>And it is authentically established that he ﷺ said:</p>

        <blockquote>“If I remain until the next year, I will surely fast the ninth,”</blockquote>

        <p>meaning along with the tenth.</p>

        <p>And Ibn ʿAbbās said:</p>

        <blockquote>“Oppose (khālifū - differ from) the Jews, and fast the ninth and the tenth.”</blockquote>
      `,
      footnotes: []
    };
  }

  getThirtyEighthArticleContent() {
    return {
      id: 38,
      title: 'Answering supplication (istijābat ad-duʿāʾ) before sunset on Friday',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '15 min read',
      body: `
        <p>Just before sunset on Friday, one seeks the response to supplication during this hour.</p>

        <h3>Supplications (adʿiyah) from the Qurʾān</h3>

        <p>{There is no deity except You; exalted are You. Indeed, I have been among the wrongdoers.}</p>
        <p>{Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.}</p>
        <p>{Our Lord, upon You we have relied, and to You we have returned, and to You is the destination.}</p>
        <p>{Our Lord, do not make us a trial for those who disbelieve, and forgive us, our Lord. Indeed, You are the Mighty, the Wise.}</p>
        <p>{Our Lord, we have believed in what You revealed and followed the Messenger, so write us among the witnesses.}</p>
        <p>{Our Lord, we have believed, so forgive us and have mercy upon us, and You are the best of the merciful.}</p>
        <p>{Our Lord, perfect for us our light and forgive us. Indeed, You are over all things capable.}</p>
        <p>{Our Lord, forgive us and our brothers who preceded us in faith, and do not place in our hearts any resentment toward those who have believed. Our Lord, indeed You are Kind and Merciful.}</p>
        <p>{Our Lord, accept from us. Indeed, You are the Hearing, the Knowing.}</p>
        <p>{Our Lord, make us Muslims (in submission) to You and from our descendants a Muslim nation (in submission) to You, and show us our rites and accept our repentance. Indeed, You are the Accepting of repentance, the Merciful.}</p>
        <p>{Our Lord, do not make us a trial for the wrongdoing people, and save us by Your mercy from the disbelieving people.}</p>
        <p>{Our Lord, forgive us our sins and our excesses in our affairs and make firm our feet and grant us victory over the disbelieving people.}</p>
        <p>{Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.}</p>
        <p>{Our Lord, grant us from our spouses and offspring comfort to our eyes and make us leaders for the righteous.}</p>
        <p>{Our Lord, avert from us the punishment of Hell. Indeed, its punishment is ever adhering; indeed, it is evil as a settlement and residence.}</p>
        <p>{Our Lord, give us in this world good and in the Hereafter good and protect us from the punishment of the Fire.}</p>
        <p>{Our Lord, do not impose blame upon us if we forget or err.}</p>
        <p>{Our Lord, do not lay upon us a burden as You laid upon those before us.}</p>
        <p>{Our Lord, do not burden us with that which we have no ability to bear, and pardon us, forgive us, and have mercy upon us. You are our Protector, so give us victory over the disbelieving people.}</p>
        <p>{Our Lord, do not let our hearts deviate after You have guided us, and grant us from Yourself mercy. Indeed, You are the Bestower.}</p>
        <p>{Our Lord, indeed we have heard a caller calling to faith, “Believe in your Lord,” and we have believed. Our Lord, forgive us our sins, remove from us our misdeeds, and cause us to die with the righteous.}</p>
        <p>{Our Lord, grant us what You promised us through Your messengers and do not disgrace us on the Day of Resurrection. Indeed, You do not break the promise.}</p>
        <p>{Our Lord, forgive me and my parents and the believers on the Day the account is established.}</p>
        <p>{My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents, and to do righteousness that You approve, and admit me by Your mercy among Your righteous servants.}</p>
        <p>{My Lord, make me an establisher of prayer, and from my descendants. Our Lord, and accept my supplication.}</p>
        <p>{My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents, and to do righteousness that You approve, and rectify for me my offspring. Indeed, I have repented to You, and indeed I am of the Muslims.}</p>
        <p>{My Lord, expand for me my chest, and ease for me my task, and untie the knot from my tongue so that they may understand my speech.}</p>
        <p>{My Lord, I seek refuge in You from asking You for that of which I have no knowledge, and unless You forgive me and have mercy upon me, I will be among the losers.}</p>
        <p>{My Lord, grant me wisdom and join me with the righteous.}</p>
        <p>{And grant me a truthful mention among later generations, and make me among the inheritors of the Garden of Bliss.}</p>
        <p>{My Lord, forgive me and my parents and whoever enters my house as a believer and the believing men and women, and do not increase the wrongdoers except in destruction.}</p>
        <p>{My Lord, grant me from Yourself a good offspring. Indeed, You are the Hearer of supplication.}</p>
        <p>{My Lord, do not leave me alone [without offspring], while You are the best of inheritors.}</p>
        <p>{My Lord, grant me [a child] from among the righteous.}</p>
        <p>{My Lord, forgive and have mercy, and You are the best of the merciful.}</p>
        <p>{My Lord, I seek refuge in You from the incitements of the devils, and I seek refuge in You, my Lord, lest they be present with me.}</p>
        <p>{My Lord, increase me in knowledge.}</p>
        <p>{My Lord, cause me to enter a sound entrance and to exit a sound exit and grant me from Yourself a supporting authority.}</p>
        <p>{My Lord, let me land at a blessed landing place, and You are the best to accommodate.}</p>

        <h3>Authentic supplications (adʿiyah) from the Sunnah</h3>

        <p>“O Allah, send prayers upon Muḥammad and upon the family of Muḥammad as You sent prayers upon Ibrāhīm and the family of Ibrāhīm; indeed, You are Praiseworthy, Glorious. O Allah, bless Muḥammad and the family of Muḥammad as You blessed Ibrāhīm and the family of Ibrāhīm; indeed, You are Praiseworthy, Glorious.”</p>
        <p>“O Allah, I seek refuge in You from the hardship of affliction, from being overtaken by misery, from evil decree, and from the rejoicing of enemies.”</p>
        <p>“O Allah, rectify for me my religion which is the safeguard of my affair, rectify for me my worldly life wherein is my livelihood, and rectify for me my Hereafter wherein is my return, and make life an increase for me in every good and make death a relief for me from every evil.”</p>
        <p>“O Allah, I ask You for guidance (hudā), piety (tuqā), chastity, and sufficiency.”</p>
        <p>“O Allah, grant my soul its piety and purify it; You are the best to purify it. You are its Guardian and Master. O Allah, I seek refuge in You from knowledge that does not benefit, from a heart that does not humble, from a soul that is never satisfied, and from a supplication that is not answered.”</p>
        <p>“O Allah, I seek refuge in You from the evil of what I have done and from the evil of what I have not done.”</p>
        <p>“O Allah, I seek refuge in You from anxiety and sorrow, from weakness and laziness, from cowardice and miserliness, from the burden of debt and from being overpowered by men.”</p>
        <p>“There is no deity except Allah, the Magnificent, the Forbearing; there is no deity except Allah, Lord of the Mighty Throne; there is no deity except Allah, Lord of the heavens, Lord of the earth, and Lord of the Noble Throne.”</p>
        <p>“O Allah, Turner of hearts, keep our hearts firm upon Your obedience.”</p>
        <p>“O Allah, I seek refuge in You from being returned to the most decrepit age, and I seek refuge in You from the trials of this world and the punishment of the grave.”</p>
        <p>“O Allah, I seek refuge in You from laziness, old age, debt, and sin. O Allah, I seek refuge in You from the punishment of the Fire, from the trial of the Fire, from the trial of the grave, from the punishment of the grave, from the evil of the trial of wealth, from the evil of the trial of poverty, and from the evil of the trial of the false messiah (al-Masīḥ ad-Dajjāl). O Allah, wash away my sins with the water of snow and hail, purify my heart from sins as a white garment is purified from dirt, and distance me from my sins as You have distanced the east from the west.”</p>
        <p>“O Allah, I have wronged myself greatly, and none forgives sins except You, so forgive me with forgiveness from You and have mercy upon me; indeed, You are the Forgiving, the Merciful.”</p>
        <p>“O Allah, to You I have submitted, in You I have believed, upon You I have relied, to You I have turned, and through You I have argued. O Allah, I seek refuge in Your might-there is no deity except You-lest You misguide me. You are the Ever-Living who does not die, while the jinn and humans die.”</p>
        <p>“O Allah, forgive me my sins, my ignorance, my excess in my affairs, and what You know better than me. O Allah, forgive me my seriousness and my jest, my mistakes and my deliberate actions-all of that is with me. O Allah, forgive me what I have sent forward and what I have delayed, what I have concealed and what I have made public, and what You know better than me. You are the One who brings forward and the One who delays, and You are over all things capable.”</p>
        <p>“O Allah, I seek refuge in You from the removal of Your blessings, the change of Your well-being, the suddenness of Your punishment, and all of Your displeasure.”</p>
        <p>“O Allah, forgive me, have mercy upon me, guide me, grant me well-being, and provide for me.”</p>
        <p>“My Lord, help me and do not help against me; grant me victory and do not grant victory over me; plan for me and do not plan against me; guide me and make guidance easy for me; and grant me victory over those who transgress against me. My Lord, make me grateful to You, constantly remembering You, fearful of You, obedient to You, humble before You, turning to You and repentant. My Lord, accept my repentance, wash away my sins, answer my supplication, make firm my proof, guide my tongue, guide my heart, and remove malice from my chest.”</p>
        <p>“O Allah, I ask You for all good-its immediate and its later, what I know of it and what I do not know-and I seek refuge in You from all evil-its immediate and its later, what I know of it and what I do not know. O Allah, I ask You for the good that Your servant and Prophet asked You for, and I seek refuge in You from the evil that Your servant and Prophet sought refuge from. O Allah, I ask You for Paradise and whatever brings one closer to it of speech and action, and I seek refuge in You from the Fire and whatever brings one closer to it of speech and action, and I ask You to make every decree You decree for me good.”</p>
        <p>“O Allah, I seek refuge in You from the punishment of the grave and from the trials of life and death.”</p>
        <p>“O Allah, keep me alive so long as life is better for me, and cause me to die when death is better for me.”</p>
        <p>“O Allah, bless for us our fruits, bless for us our city, bless for us our ṣāʿ and our mudd.”</p>
        <p>“O Allah, I seek refuge in Your pleasure from Your anger, and in Your forgiveness from Your punishment, and I seek refuge in You from You. I cannot enumerate praise of You; You are as You have praised Yourself.”</p>
      `,
      footnotes: []
    };
  }

  getThirtyNinthArticleContent() {
    return {
      id: 39,
      title: 'Nothing is established regarding the addition “and what is to come” (wa-mā taʾakhkhar) of sins except for the Prophet ﷺ',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '16 min read',
      body: `
        <p>Nothing is established regarding the addition “and what is to come” (wa-mā taʾakhkhar) of sins except for the Prophet ﷺ; it does not apply to anyone other than the Prophet ﷺ. And here are some points:</p>

        <h3>Firstly</h3>

        <p>As for the Prophet ﷺ, Allāh تعالى said: “That Allāh may forgive for you what preceded of your sin and what will follow.” It is authentically established from him ﷺ through multiple routes that what preceded of his sin and what followed has been forgiven.</p>

        <p>As in the ḥadīth of:</p>
        <p>ʿĀʾishah — reported by Mālik, Aḥmad, al-Bukhārī, Muslim, and others.</p>
        <p>And the ḥadīth of al-Mughīrah ibn Shuʿbah — in Musnad Aḥmad, al-Bukhārī, Muslim, and others.</p>
        <p>And the long ḥadīth of Anas regarding intercession (ash-shafāʿah) — in Musnad Aḥmad, al-Bukhārī, Muslim, and others.</p>
        <p>And the ḥadīth of ʿUmar ibn Abī Salamah — in Ṣaḥīḥ Muslim.</p>

        <h3>Secondly</h3>

        <p>It is authentically established in the ḥadīth of Abū Hurayrah that: “Whoever fasts Ramaḍān with faith (īmān) and seeking reward (iḥtisāb), his previous sins will be forgiven.”</p>

        <p>This ḥadīth was narrated by az-Zuhrī, Ismāʿīl ibn Jaʿfar, Yaḥyā ibn Abī Kathīr, and Yaḥyā ibn Saʿīd al-Anṣārī from Abū Salamah ibn ʿAbd ar-Raḥmān from Abū Hurayrah.</p>

        <p>Ḥammād ibn Salamah contradicted (shadhdha) and narrated it from Muḥammad ibn ʿAmr, from Abū Salamah, from Abū Hurayrah, and added in it: “and what is to come (wa-mā taʾakhkhar).”</p>

        <p>Ḥammād’s narration from Muḥammad ibn ʿAmr is criticized, especially since he opposed the كبار أصحاب Abū Salamah (major companions of Abū Salamah).</p>

        <p>It was also narrated by az-Zuhrī from Ḥumayd ibn ʿAbd ar-Raḥmān from Abū Hurayrah with the wording of the الجماعة (main group), without the addition “and what is to come.”</p>

        <p>And it was narrated by Abū az-Zinād from al-Aʿraj from Abū Hurayrah with the wording:</p>

        <blockquote>“Whoever stands on Laylat al-Qadr with faith and seeking reward, his previous sins will be forgiven.”</blockquote>

        <p>These ḥadīths were comprehensively recorded by Imām Aḥmad, al-Bukhārī, and Muslim in their books.</p>

        <h3>Thirdly</h3>

        <p>The wording of forgiveness of sins including “what is to come” appears as follows:</p>

        <p>From the route of ʿAbdullāh ibn Muḥammad ibn ʿAqīl, from ʿUmar ibn ʿAbd ar-Raḥmān, from ʿUbādah ibn aṣ-Ṣāmit regarding the virtue of Laylat al-Qadr, in which it states:</p>

        <blockquote>“Whoever stands it with faith and seeking reward, his past and future sins will be forgiven.”</blockquote>

        <p>Reported by Aḥmad and others. This ḥadīth is munkar with this wording without doubt, because ʿAbdullāh ibn Muḥammad ibn ʿAqīl is weak, rather munkar al-ḥadīth, contrary to what later scholars claim that he is ḥasan al-ḥadīth.</p>

        <p>The statements of the scholars regarding him:</p>

        <p>Ibn Saʿd: “He was munkar al-ḥadīth; they did not use him as proof.”</p>
        <p>Ibn al-Madīnī: “Mālik and Yaḥyā ibn Saʿīd would not narrate from him.”</p>
        <p>Ibn al-Madīnī: “He was weak.”</p>
        <p>as-Sadūsī: “There is very شديد ضعف (severe weakness) in his ḥadīth.”</p>
        <p>Ibn ʿUyaynah: “They refrain from his ḥadīth.”</p>
        <p>Aḥmad: “Munkar al-ḥadīth.”</p>
        <p>Ibn Maʿīn: “His ḥadīth is weak, not حجّة (proof).”</p>
        <p>al-Jūzjānī: “Most of what he narrates is strange (gharīb).”</p>
        <p>Abū Zurʿah: “There is inconsistency in his chains.”</p>
        <p>Abū Ḥātim: “Layyin al-ḥadīth (soft/weak), not strong.”</p>
        <p>an-Nasāʾī: “Weak.”</p>
        <p>Ibn Khuzaymah: “I do not use him as proof due to his poor memory.”</p>
        <p>al-Bukhārī: “Aḥmad, Isḥāq, and al-Ḥumaydī used his ḥadīth; he is close (muqārib al-ḥadīth).”</p>

        <p>The explicit statements of the imāms declaring his weakness, abandonment, and rejection of his ḥadīth are clearer than al-Bukhārī’s statement. Those who criticized him-like Aḥmad, Ibn al-Madīnī, Ibn Maʿīn, Abū Zurʿah, Abū Ḥātim, and before them al-Qaṭṭān and Mālik-are more authoritative in this field than al-Bukhārī; thus their statements are given precedence.</p>

        <p>Hence Ibn ʿAdī said: “His ḥadīth is written,” meaning for supporting narrations (mutābaʿāt) where it is not rejected.</p>

        <p>al-ʿUqaylī said: “There is an issue in his memory.”</p>
        <p>al-Ḥākim said: “He lived long, his memory deteriorated, and he narrated by estimation.”</p>
        <p>Ibn Ḥibbān said: “He had poor memory.”</p>

        <p>So it is astonishing that some declare his ḥadīth ḥasan absolutely, based on overzealous authentication, without properly grasping the statements of the imāms.</p>

        <p>Also, every route of this ḥadīth from ʿUbādah includes this addition uniquely from Ibn ʿAqīl.</p>

        <p>It was narrated by Thābit and Ḥumayd from Anas from ʿUbādah, and by Buḥayr from Khālid ibn Maʿdān from ʿUbādah-but the ḥadīth of ʿUbādah in the Ṣaḥīḥayn does not contain this addition.</p>

        <p>It also came in the ḥadīth of Umm Salamah:</p>

        <blockquote>“Whoever enters iḥrām for ḥajj and ʿumrah from al-Masjid al-Aqṣā to al-Masjid al-Ḥarām, his past and future sins will be forgiven.”</blockquote>

        <p>Reported by Abū Dāwūd — munkar, with a dark chain (isnād muẓlim) containing three unknown narrators.</p>

        <p>And from the ḥadīth of Muʿādh ibn Anas:</p>

        <blockquote>“Whoever eats food and says: ‘All praise is for Allāh who fed me and gave me drink…’ his past and future sins will be forgiven.”</blockquote>

        <p>Reported by Abū Dāwūd.
        Narrated solely by Abū Marḥūm — weak.</p>

        <p>And from the ḥadīth of Anas:</p>

        <blockquote>“When the servant reaches ninety years, his past and future sins are forgiven.”</blockquote>

        <p>Reported by Aḥmad.
        A highly munkar chain, composed of weak narrators:
        Faraj ibn Faḍālah (very weak), Muḥammad ibn ʿĀmir (unknown), Muḥammad ibn ʿAbdullāh ad-Dībāj (weak).</p>

        <p>Also reported by al-Ḥārith ibn Abī Usāmah — extremely munkar, rather false.
        Narrated solely by Yūsuf ibn Abī Dhurra — abandoned (matrūk).</p>

        <p>And from the route of ʿUthmān:</p>

        <blockquote>“No servant performs wuḍūʾ properly except that his past and future sins are forgiven.”</blockquote>

        <p>Reported by Ibn Abī ʿĀṣim in as-Sunnah — munkar.</p>

        <p>The anomaly comes from Muʿādh ibn ʿAbd ar-Raḥmān at-Taymī, though he is considered trustworthy.</p>

        <p>The preserved wording (al-maḥfūẓ) from ʿUthmān via reliable narrators is:</p>

        <blockquote>“Except that he is forgiven for what is between it and the next prayer.”</blockquote>

        <p>Reported by a group from Ḥumrān from ʿUthmān, and found in al-Muwaṭṭaʾ, Musnad Aḥmad, the Ṣaḥīḥayn, and others.</p>

        <p>This is what has been found regarding this topic.</p>
      `,
      footnotes: []
    };
  }

  getFortiethArticleContent() {
    return {
      id: 40,
      title: 'Summary of the discussion regarding the ḥadīth of fasting the six days of Shawwāl',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '13 min read',
      body: `
        <p>Nothing is authentically established from the Prophet ﷺ, nor from any of the Ṣaḥābah, nor from the Tābiʿīn, nor even from the Tābiʿ at-Tābiʿīn.</p>

        <p>It is reported from the ḥadīth of Abū Ayyūb with a chain (isnād) that is muẓlim (obscure), munkar (rejected), muʿallal (defective), and muḍṭarib (inconsistent). In it is ʿUmar ibn Thābit - he is majhūl (unknown), and it does not appear that he heard it from Abū Ayyūb. Also in it is Saʿd ibn Saʿīd - ḍaʿīf (weak), poor in memory, and the narration is inconsistent through him. Ibn ʿAdī criticized it against Saʿd ibn Saʿīd in his al-Kāmil.</p>

        <p>It is also reported from the ḥadīth of Thawbān with a chain that is munkar, muẓlim, and munqaṭiʿ (disconnected).</p>

        <p>And from the ḥadīth of Abū Hurayrah with a chain that is very strange (gharīb jiddan), and it was declared defective by Abū Ḥātim, al-Bazzār, and ad-Dāraqutnī.</p>

        <p>And from the ḥadīth of Jābir ibn ʿAbdullāh with a chain containing a narrator who is matrūk (abandoned) and accused of lying.</p>

        <p>And from the ḥadīth of Ibn ʿAbbās with a munkar chain, which aṭ-Ṭabarānī also rejected.</p>

        <p>And from the ḥadīth of Ibn ʿUmar with a chain containing a matrūk narrator, also rejected by aṭ-Ṭabarānī.</p>

        <p>And from the narration of Ṭāwūs, mursal (disconnected), with a munkar chain.</p>

        <p>Thus, the routes (ṭuruq) of the ḥadīth are not suitable for mutābaʿāt (supporting chains), because a condition for supporting evidence is that it must not be munkar or muʿallal, nor revolve around narrators of severe weakness.</p>

        <p>From the signs of a ḥadīth being defective and weak is that the Ṣaḥābah and Tābiʿīn abandoned acting upon it. And from the indications of its weakness and invalidity is that the major imams of the great centers of knowledge do not know it, or do not consider it, or do not act upon it, or act contrary to it - so who remains of the people of knowledge after them?</p>

        <p>If it is said: “The ḥadīth is in Ṣaḥīḥ Muslim, so how can you weaken it?”</p>

        <p>We say: Not every ḥadīth in Ṣaḥīḥ Muslim was intended by Muslim to be authentic. Muslim himself stated in the introduction of his Ṣaḥīḥ, after mentioning the categories of narrations in his book, that he includes aḥādīth muʿallalah (defective reports).</p>

        <p>And even if we assume that Muslim intended to authenticate it, how many ḥadīths has Muslim reported that those greater than him among the ḥuffāẓ - or equal to him - explicitly declared defective, and the truth was with those who weakened them.</p>

        <p>Ibn ʿAdī already rejected it, as mentioned earlier.</p>

        <p>What is established from the Salaf is the rejection of fasting the six days of Shawwāl.</p>

        <p>It was rejected by al-Ḥasan al-Baṣrī, Mālik, and Abū Yūsuf. The latter two even reported prohibition/dislike from the generality of the Salaf.</p>

        <p>al-Ḥasan al-Baṣrī said: “Allāh was pleased with this month (Ramaḍān) for the entire year.”</p>

        <p>Mālik said: “I have not seen anyone from the People of knowledge and fiqh fasting them, nor has it reached me from anyone of the Salaf. The People of Knowledge dislike that and fear it being an innovation (bidʿah).”</p>

        <p>Abū Yūsuf said: “They used to dislike following Ramaḍān with fasting, fearing that it might be attached to the obligation.”</p>

        <p>Thus, these are three of the major imams of the great centers: al-Madīnah, al-Baṣrah, and Baghdād - none of them held the view of fasting them or approved of it, especially al-Madīnah, the city of the Messenger of Allāh ﷺ, where this practice is not known - even though the ḥadīth regarding it is purely Madanī.</p>
      `,
      footnotes: []
    };
  }

  getFortyFirstArticleContent() {
    return {
      id: 41,
      title: 'When ʿĪd and Jumuʿah (Friday) coincide on the same day',
      author: 'Shaykh Abū ʿAlī al-Ḥārith bin ʿAlī al-Ḥasanī',
      date: new Date('2024-03-23'),
      category: 'Ḥadīth Criticism',
      readTime: '12 min read',
      body: `
        <p>What has been reported regarding the coincidence of Jumuʿah and ʿĪd on one day:</p>

        <p>The ḥadīth of Iyās ibn Abī Ramalah, who said: I witnessed with Muʿāwiyah ibn Abī Sufyān while he was asking Zayd ibn Arqam: “Did you witness with the Messenger of Allāh ﷺ two ʿĪds that coincided on the same day?” He said: “Yes.” He said: “What did he do?” He said: “He prayed the ʿĪd, then he gave concession regarding Jumuʿah, and said: ‘Whoever wishes to pray, let him pray.’” Reported by Abū Dāwūd, an-Nasāʾī, and Ibn Mājah. Weak.</p>

        <p>The ḥadīth of Abū Hurayrah رضي الله عنه that the Messenger of Allāh ﷺ said: “Two ʿĪds have coincided on this day of yours; whoever wishes, it suffices him from Jumuʿah; and indeed we will be gathering.” Reported by Abū Dāwūd and Ibn Mājah. Not authentic. Defective due to irsāl (disconnection).</p>

        <p>The ḥadīth of ʿAṭāʾ who said: “Ibn az-Zubayr led us in prayer on a day of ʿĪd that was also a Friday, early in the day. Then we went for Jumuʿah, but he did not come out to us, so we prayed by ourselves. Ibn ʿAbbās was in Ṭāʾif, and when he came, we mentioned that to him, and he said: ‘He acted in accordance with the Sunnah.’” Reported by Abū Dāwūd and an-Nasāʾī. Not authentic.</p>

        <p>What is established from the Prophet ﷺ is that when the two ʿĪds coincided on the same day, he would pray both, as in the ḥadīth of an-Nuʿmān ibn Bashīr.</p>

        <p>And no ḥadīth is authentic from the Prophet ﷺ regarding abandoning Jumuʿah when it coincides with ʿĪd. Rather, what is established is from some of the Ṣaḥābah and Tābiʿīn.</p>

        <p>Abū ʿUbayd, the freed slave of Ibn Azhar, said: I witnessed ʿĪd with ʿUthmān ibn ʿAffān. He came and prayed, then left and delivered a sermon, and said: “Two ʿĪds have coincided on this day of yours. Whoever among the people of al-ʿĀliyah wishes to wait for Jumuʿah, let him wait; and whoever wishes to return, I have permitted him.”</p>

        <p>And two ʿĪds coincided during the time of ʿAlī, so he attended the ʿĪd prayer with them, then said: “We will be establishing Jumuʿah, so whoever wishes to attend, let him attend.”</p>

        <p>And two ʿĪds coincided on one day, so Ibn az-Zubayr came out and prayed the ʿĪd after the sun had risen, then entered and did not come out again until he prayed ʿAṣr. This was mentioned to Ibn ʿUmar, and he did not object to it.</p>

        <p>And Ibn ʿAbbās said: “He was correct - two ʿĪds coincided on one day.”</p>

        <p>Ibn Jurayj said: “It has reached us that when the two ʿĪds coincided like that, one prayer would be performed.”</p>

        <p>ʿAṭāʾ said: If Jumuʿah and the day of Fiṭr coincide on one day, then combine them - pray only two rakʿahs where the ʿĪd prayer is prayed, and that suffices until ʿAṣr.</p>

        <p>Ibrāhīm an-Nakhaʿī said: One of them suffices for the other.</p>

        <p>ash-Shaʿbī said: “If it is a Friday and ʿĪd, one of them suffices for the other.”</p>

        <p>ʿAṭāʾ ibn as-Sāʾib said: “Two ʿĪds coincided during the time of al-Ḥajjāj, so he prayed one of them.” And al-Ḥajjāj was a governor, and there were Ṣaḥābah present and the Tābiʿīn were abundant.</p>

        <p>Conclusion: If ʿĪd and Jumuʿah coincide on the same day:</p>

        <p>Whoever wishes may pray both - and this is more virtuous,</p>
        <p>Or pray ʿĪd and pray Jumuʿah as Ẓuhr,</p>
        <p>Or pray ʿĪd and not pray Jumuʿah nor Ẓuhr.</p>
      `,
      footnotes: []
    };
  }

  /* ============================================
     RENDER ARTICLE
     ============================================ */

  renderArticle(article) {
    const main = document.querySelector('main');
    if (!main) return;

    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
      <article class="article-detail fade-in">
        <div class="article-detail-header">
          <h1 class="article-detail-title">${this.escapeHtml(article.title)}</h1>
          <div class="article-detail-meta">
            <div>
              <strong>Category:</strong> ${this.escapeHtml(article.category)}
            </div>
            <div>
              <strong>Read Time:</strong> ${article.readTime}
            </div>
          </div>
        </div>

        <div class="article-body">
          ${article.body}
        </div>

        ${this.renderFootnotes(article.footnotes)}
      </article>

      <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border-color); text-align: center;">
        <a href="articles.html" class="btn btn-primary">Back to Articles</a>
      </div>
    `;

    this.applyStructuredHadithLayout(article, container);

    main.innerHTML = '';
    main.appendChild(container);
  }

  applyStructuredHadithLayout(article, container) {
    if (!article || article.id !== 13 || !container) return;

    const body = container.querySelector('.article-body');
    if (!body) return;

    const nodes = Array.from(body.children);
    const compendium = document.createElement('div');
    compendium.className = 'hadith-compendium';

    let currentItem = null;

    const appendToCurrentOrRoot = (node) => {
      if (currentItem) {
        const content = currentItem.querySelector('.hadith-item-content');
        if (content) {
          content.appendChild(node);
          return;
        }
      }
      compendium.appendChild(node);
    };

    nodes.forEach((node) => {
      if (node.tagName !== 'P') {
        appendToCurrentOrRoot(node.cloneNode(true));
        return;
      }

      const strong = node.querySelector('strong');
      const strongText = strong ? strong.textContent.trim() : '';
      const isHadithLead = /^Ḥadīth(?:\/Athar)?(?:\sof [^:]+)?:/u.test(strongText) || /^Ḥadīth of /u.test(strongText);

      if (isHadithLead) {
        currentItem = document.createElement('section');
        currentItem.className = 'hadith-item';

        const title = document.createElement('h3');
        title.className = 'hadith-item-title';
        title.textContent = strongText.replace(/:\s*$/, '');

        const content = document.createElement('div');
        content.className = 'hadith-item-content';

        const paragraph = node.cloneNode(true);
        const firstStrong = paragraph.querySelector('strong');
        if (firstStrong) firstStrong.remove();
        if (paragraph.textContent.trim()) {
          paragraph.classList.add('hadith-item-text');
          content.appendChild(paragraph);
        }

        currentItem.appendChild(title);
        currentItem.appendChild(content);
        compendium.appendChild(currentItem);
        return;
      }

      const isSectionLabel = strong && !isHadithLead && node.textContent.trim().length < 120;
      if (isSectionLabel) {
        const label = document.createElement('p');
        label.className = 'hadith-section-label';
        label.innerHTML = node.innerHTML;
        compendium.appendChild(label);
        currentItem = null;
        return;
      }

      appendToCurrentOrRoot(node.cloneNode(true));
    });

    body.innerHTML = '';
    body.appendChild(compendium);
  }

  renderFootnotes(footnotes) {
    if (!footnotes || footnotes.length === 0) return '';

    let html = '<section class="footnotes" id="footnotes"><h3 class="footnotes-title">Footnotes</h3>';

    footnotes.forEach((footnote) => {
      const num = footnote.id.replace('fn', '');
      html += `
        <div class="footnote" id="${footnote.id}">
          <span class="footnote-num">${num}.</span> ${footnote.text}
          <a href="#" class="footnote-backlink">↩︎</a>
        </div>
      `;
    });

    html += '</section>';
    return html;
  }

  /* ============================================
     FOOTNOTE INTERACTIONS
     ============================================ */

  setupFootnoteInteractions() {
    const footnoteRefs = document.querySelectorAll('.footnote-ref');

    footnoteRefs.forEach(ref => {
      ref.addEventListener('click', (e) => {
        e.preventDefault();
        const target = ref.getAttribute('href');
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          element.style.animation = 'pulse 1s ease-in-out 2';
        }
      });

      // Keyboard support
      ref.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          ref.click();
        }
      });
    });
  }

  setupTableOfContents() {
    // Implementation for table of contents if needed
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
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }

  showError(message) {
    const main = document.querySelector('main');
    if (!main) return;

    main.innerHTML = `
      <div class="container">
        <div class="empty-state" style="padding: 4rem 2rem;">
          <div class="empty-state-icon">⚠️</div>
          <h2>${this.escapeHtml(message)}</h2>
          <p><a href="articles.html" class="btn btn-primary" style="margin-top: 1rem;">Back to Articles</a></p>
        </div>
      </div>
    `;
  }
}

// Global scroll to footnote function
function scrollToFootnote(event, id) {
  event.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    element.style.animation = 'pulse 1s ease-in-out 2';
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.articleDetail = new ArticleDetail();
});
