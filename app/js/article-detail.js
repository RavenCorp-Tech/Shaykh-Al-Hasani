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

    if (articleId === '1') {
      this.renderArticle(this.articleContent);
      this.setupFootnoteInteractions();
      this.setupTableOfContents();
    } else if (articleId === '2') {
      this.renderArticle(this.getSecondArticleContent());
      this.setupFootnoteInteractions();
      this.setupTableOfContents();
    } else if (articleId === '3') {
      this.renderArticle(this.getThirdArticleContent());
      this.setupFootnoteInteractions();
      this.setupTableOfContents();
    } else if (articleId === '4') {
      this.renderArticle(this.getFourthArticleContent());
      this.setupFootnoteInteractions();
      this.setupTableOfContents();
    } else if (articleId === '5') {
      this.renderArticle(this.getFifthArticleContent());
      this.setupFootnoteInteractions();
      this.setupTableOfContents();
    } else if (articleId === '6') {
      this.renderArticle(this.getSixthArticleContent());
      this.setupFootnoteInteractions();
      this.setupTableOfContents();
    } else if (articleId === '7') {
      this.renderArticle(this.getSeventhArticleContent());
      this.setupFootnoteInteractions();
      this.setupTableOfContents();
    } else if (articleId === '8') {
      this.renderArticle(this.getEighthArticleContent());
      this.setupFootnoteInteractions();
      this.setupTableOfContents();
    } else if (articleId === '9') {
      this.renderArticle(this.getNinthArticleContent());
      this.setupFootnoteInteractions();
      this.setupTableOfContents();
    } else if (articleId === '10') {
      this.renderArticle(this.getTenthArticleContent());
      this.setupFootnoteInteractions();
      this.setupTableOfContents();
    } else {
      this.showError('Article not found');
    }
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

  /* ============================================
     RENDER ARTICLE
     ============================================ */

  renderArticle(article) {
    const main = document.querySelector('main');
    if (!main) return;

    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
      <a href="articles.html" class="back-button">Back to Articles</a>

      <article class="article-detail fade-in">
        <div class="article-detail-header">
          <h1 class="article-detail-title">${this.escapeHtml(article.title)}</h1>
          <div class="article-detail-meta">
            <div>
              <strong>Author:</strong> ${this.escapeHtml(article.author)}
            </div>
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

    main.innerHTML = '';
    main.appendChild(container);
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
