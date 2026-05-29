import { Shloka } from '../types';

// 12 defining shlokas of the Bhagavad Gita — the curriculum compressed.
// Includes the opening invocation, Krishna's principal instructions on
// dharma, karma, sthitaprajna, the Vishvarupa darshana, and the closing
// charama-shloka of total surrender.

export const GITA_SHLOKAS: Shloka[] = [
  {
    chapter: 1,
    verse: '1.1',
    sanskrit:
      'धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥',
    transliteration:
      'dharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ\nmāmakāḥ pāṇḍavāś caiva kim akurvata sañjaya',
    translation:
      'On the field of dharma, the field of the Kurus, gathered eager for war — what did my people and the Pandavas do, O Sanjaya?',
    meaning:
      'The opening question of the blind king. The Gita begins not with God but with a father asking after his sons — and the answer will take eighteen chapters.',
  },
  {
    chapter: 2,
    verse: '2.7',
    sanskrit:
      'कार्पण्यदोषोपहतस्वभावः पृच्छामि त्वां धर्मसम्मूढचेताः ।\nयच्छ्रेयः स्यान्निश्चितं ब्रूहि तन्मे शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम् ॥',
    transliteration:
      'kārpaṇya-doṣopahata-svabhāvaḥ pṛcchāmi tvāṁ dharma-sammūḍha-cetāḥ\nyac chreyaḥ syān niścitaṁ brūhi tan me śiṣyas te ’haṁ śādhi māṁ tvāṁ prapannam',
    translation:
      'My nature stricken with weakness, my mind bewildered about dharma, I ask you — tell me decisively what is best. I am your disciple. Instruct me, I take refuge in you.',
    meaning:
      'The Gita\'s hinge. Arjuna formally becomes a shishya — only here does Krishna begin to teach. Without surrender there is no Gita.',
  },
  {
    chapter: 2,
    verse: '2.20',
    sanskrit:
      'न जायते म्रियते वा कदाचि-\nन्नायं भूत्वा भविता वा न भूयः ।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे ॥',
    transliteration:
      'na jāyate mriyate vā kadācin\nnāyaṁ bhūtvā bhavitā vā na bhūyaḥ\najo nityaḥ śāśvato ’yaṁ purāṇo\nna hanyate hanyamāne śarīre',
    translation:
      'The Self is never born, nor does it ever die; it has not come to be, nor will it cease to be. Unborn, eternal, undecaying, ancient — it is not slain when the body is slain.',
    meaning:
      'The first metaphysical foundation: what cannot die cannot be killed. Grief over the body is grief over a costume.',
  },
  {
    chapter: 2,
    verse: '2.47',
    sanskrit:
      'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
    transliteration:
      'karmaṇy evādhikāras te mā phaleṣu kadācana\nmā karma-phala-hetur bhūr mā te saṅgo ’stv akarmaṇi',
    translation:
      'You have the right to action alone, never to its fruits. Do not be the cause of the fruit of action, and do not be attached to inaction either.',
    meaning:
      'The most-quoted line of the Gita. Karma-yoga compressed into a single sentence — work as offering, never as transaction.',
  },
  {
    chapter: 2,
    verse: '2.48',
    sanskrit:
      'योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय ।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते ॥',
    transliteration:
      'yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya\nsiddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga ucyate',
    translation:
      'Steadfast in yoga, perform your actions, abandoning attachment. Be even-minded in success and failure — this evenness is called yoga.',
    meaning:
      'Krishna\'s working definition of yoga itself. Not a posture, not an escape — the inner equality that does not depend on outcome.',
  },
  {
    chapter: 2,
    verse: '2.55',
    sanskrit:
      'प्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान् ।\nआत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते ॥',
    transliteration:
      'prajahāti yadā kāmān sarvān pārtha mano-gatān\nātmany evātmanā tuṣṭaḥ sthita-prajñas tadocyate',
    translation:
      'When a man casts away all the desires of the mind, O Partha, and is content in the Self by the Self alone — he is then called sthita-prajña, one of steady wisdom.',
    meaning:
      'Begins the great Sthita-prajna passage of Chapter 2 — the portrait of the awakened person that all later Indian psychology returns to.',
  },
  {
    chapter: 4,
    verse: '4.7-8',
    sanskrit:
      'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥\nपरित्राणाय साधूनां विनाशाय च दुष्कृताम् ।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥',
    transliteration:
      'yadā yadā hi dharmasya glānir bhavati bhārata\nabhyutthānam adharmasya tadātmānaṁ sṛjāmy aham\nparitrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām\ndharma-saṁsthāpanārthāya sambhavāmi yuge yuge',
    translation:
      'Whenever dharma declines and adharma rises, O Bharata, then I send myself forth — to protect the good, to destroy the evil-doers, to re-establish dharma, I am born age after age.',
    meaning:
      'The Avatar doctrine in two verses. Vishnu does not come once — he comes whenever the field tilts.',
  },
  {
    chapter: 6,
    verse: '6.5',
    sanskrit:
      'उद्धरेदात्मनाऽऽत्मानं नात्मानमवसादयेत् ।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥',
    transliteration:
      'uddhared ātmanātmānaṁ nātmānam avasādayet\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ',
    translation:
      'Let one lift oneself by oneself; let one not degrade oneself. For the self alone is the friend of the self, and the self alone is the enemy of the self.',
    meaning:
      'No external rescue. The same self that is bound is the only one who can untie the knot.',
  },
  {
    chapter: 9,
    verse: '9.22',
    sanskrit:
      'अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते ।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥',
    transliteration:
      'ananyāś cintayanto māṁ ye janāḥ paryupāsate\nteṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahām y aham',
    translation:
      'Those who, thinking of none other, worship Me — to them ever steadfast, I bring full security in what they need and what they have.',
    meaning:
      'The promise that runs through all bhakti literature. Yoga-kshema — getting and keeping — is the Lord\'s burden when the devotee has put it down.',
  },
  {
    chapter: 11,
    verse: '11.32',
    sanskrit:
      'कालोऽस्मि लोकक्षयकृत्प्रवृद्धो\nलोकान्समाहर्तुमिह प्रवृत्तः ।\nऋतेऽपि त्वां न भविष्यन्ति सर्वे\nयेऽवस्थिताः प्रत्यनीकेषु योधाः ॥',
    transliteration:
      'kālo ’smi loka-kṣaya-kṛt pravṛddho\nlokān samāhartum iha pravṛttaḥ\nṛte ’pi tvāṁ na bhaviṣyanti sarve\nye ’vasthitāḥ pratyanīkeṣu yodhāḥ',
    translation:
      'I am Time, the destroyer of worlds, grown vast, set to gather the worlds here. Even without you, none of these warriors arrayed against you shall remain.',
    meaning:
      'The line at the centre of the Vishvarupa. The war is not Arjuna\'s; it is Time\'s. He has been invited to the instrument-hood.',
  },
  {
    chapter: 11,
    verse: '11.55',
    sanskrit:
      'मत्कर्मकृन्मत्परमो मद्भक्तः सङ्गवर्जितः ।\nनिर्वैरः सर्वभूतेषु यः स मामेति पाण्डव ॥',
    transliteration:
      'mat-karma-kṛn mat-paramo mad-bhaktaḥ saṅga-varjitaḥ\nnirvairaḥ sarva-bhūteṣu yaḥ sa mām eti pāṇḍava',
    translation:
      'He who works for Me, whose highest is Me, who is devoted to Me, free of attachment, without enmity towards any being — he, O Pandava, comes to Me.',
    meaning:
      'The closing summary of the Vishvarupa chapter — the four-part recipe (work, supreme aim, devotion, non-enmity) that the Bhagavata literature unpacks for centuries afterwards.',
  },
  {
    chapter: 18,
    verse: '18.66',
    sanskrit:
      'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥',
    transliteration:
      'sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja\nahaṁ tvā sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ',
    translation:
      'Abandoning all dharmas, take refuge in Me alone. I shall liberate you from all evils — do not grieve.',
    meaning:
      'The Charama Shloka, the Gita\'s last and most absolute teaching. After every yoga has been described, this single line is what the Lord finally asks. All commentaries take their stand here.',
  },
];
