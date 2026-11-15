export type Platform = 'instagram' | 'snapchat' | 'tiktok' | 'x' | 'linkedin'
export type Pillar =
  | 'local'
  | 'lifestyle'
  | 'education'
  | 'community'
  | 'trust'
  | 'seasonal'
  | 'soft-sell'

export type OrganicPost = {
  id: string
  pillar: Pillar
  platforms: Platform[]
  language: 'ar' | 'en'
  hook: string
  body: string
  hashtags: string[]
  cta: string
  visual: string
  whyItWorks: string
}

export const PILLARS: { id: Pillar; labelAr: string; labelEn: string; blurb: string }[] = [
  {
    id: 'local',
    labelAr: 'محلي',
    labelEn: 'Local',
    blurb: 'Min Hena, Saudi craft, and pride in what is made here.',
  },
  {
    id: 'lifestyle',
    labelAr: 'أسلوب حياة',
    labelEn: 'Lifestyle',
    blurb: 'Everyday moments where product appears naturally.',
  },
  {
    id: 'education',
    labelAr: 'تثقيف',
    labelEn: 'Education',
    blurb: 'Useful tips that earn attention before any ask.',
  },
  {
    id: 'community',
    labelAr: 'مجتمع',
    labelEn: 'Community',
    blurb: 'Questions and prompts that invite real replies.',
  },
  {
    id: 'trust',
    labelAr: 'ثقة',
    labelEn: 'Trust',
    blurb: 'Genuine products, delivery, and service proof.',
  },
  {
    id: 'seasonal',
    labelAr: 'موسمي',
    labelEn: 'Seasonal',
    blurb: 'Ramadan, summer heat, travel, and cultural timing.',
  },
  {
    id: 'soft-sell',
    labelAr: 'عرض ناعم',
    labelEn: 'Soft sell',
    blurb: 'Discovery posts that feel helpful, not pushy.',
  },
]

export const PLATFORMS: { id: Platform; label: string }[] = [
  { id: 'instagram', label: 'Instagram' },
  { id: 'snapchat', label: 'Snapchat' },
  { id: 'tiktok', label: 'TikTok' },
  { id: 'x', label: 'X' },
  { id: 'linkedin', label: 'LinkedIn' },
]

export const ORGANIC_POSTS: OrganicPost[] = [
  {
    id: 'ar-local-1',
    pillar: 'local',
    platforms: ['instagram', 'snapchat'],
    language: 'ar',
    hook: 'مو من برّا… من هنا.',
    body: 'في قطع ما تحتاج شرح كثير.\nذهب، سبح، سجادة صلاة، تفاصيل تذكّرك إن الجمال يبدأ من البيت.\nمن هنا — ولكل يوم.',
    hashtags: ['#هناك', '#من_هنا', '#صنع_سعودي', '#محلي'],
    cta: 'احفظ البوست لو تبي ترجع لها لاحقاً',
    visual: 'Close-up of Min Hena jewelry or prayer items on warm stone, natural window light, no price tags in frame.',
    whyItWorks: 'Leads with identity, not discount. Organic local pride outperforms hard promo on Instagram.',
  },
  {
    id: 'ar-local-2',
    pillar: 'local',
    platforms: ['instagram', 'tiktok'],
    language: 'ar',
    hook: 'هدية ما تقول "اشتريت لك أي شيء".',
    body: 'تقول: شفت هالشي وفكّرت فيك.\nقطع من هنا تناسب المناسبات الصغيرة قبل الكبيرة.\nوش أكثر هدية محلية تحب تستلمها؟',
    hashtags: ['#هناك', '#من_هنا', '#هدايا', '#سعودي'],
    cta: 'علّق بهدية تحسّها "من القلب"',
    visual: 'Hands wrapping a small Min Hena gift; soft paper, muted blue ribbon, kitchen or majlis background.',
    whyItWorks: 'Gift framing creates emotional utility and invites comments without sounding salesy.',
  },
  {
    id: 'ar-life-1',
    pillar: 'lifestyle',
    platforms: ['instagram', 'snapchat'],
    language: 'ar',
    hook: 'حرّ جدة ما يرحم… والنظارة تنقذك بهدوء.',
    body: 'مو لازم صورة مبالغ فيها.\nطلعة سريعة، قهوة، شمس على الوجه — ونظارة تخلي اليوم أسهل.\nوش نظارتك الثابتة هالموسم؟',
    hashtags: ['#هناك', '#نظارات', '#جدة', '#صيف'],
    cta: 'سوّ منشن للي دايم ينسى نظارته في السيارة',
    visual: 'Candid street or corniche light with sunglasses on a table beside iced coffee — lifestyle first, product second.',
    whyItWorks: 'Mirrors HNAK’s proven Ray-Ban/summer tone: weather + habit + soft product cue.',
  },
  {
    id: 'ar-edu-1',
    pillar: 'education',
    platforms: ['instagram', 'tiktok', 'x'],
    language: 'ar',
    hook: 'قبل ما تشتري عطر أونلاين… ٣ أسئلة.',
    body: '١) هل الريحة تناسب دوامك ولا طلعاتك؟\n٢) تبي ثبات طويل ولا خفيفة طول اليوم؟\n٣) جربت نفس العائلة الريحية قبل؟\nجاوب الثلاثة، والاختيار يصير أوضح.',
    hashtags: ['#هناك', '#عطور', '#نصيحة', '#تسوق_ذكي'],
    cta: 'احفظها للمرة الجاية تتردد فيها',
    visual: 'Flat-lay of 3 perfume bottles with numbered sticky notes; clean desk, soft blue cloth.',
    whyItWorks: 'Educational carousels get saves. Saves signal quality to Instagram without paid push.',
  },
  {
    id: 'ar-com-1',
    pillar: 'community',
    platforms: ['instagram', 'x', 'snapchat'],
    language: 'ar',
    hook: 'سؤال صباحي بسيط:',
    body: 'لو عندك ميزانية واحدة هالأسبوع…\nتحدّث جوالك؟ ولا تجدّد دولابك؟\nقولها بصراحة 👇',
    hashtags: ['#هناك', '#سؤال', '#مجتمع_هناك'],
    cta: 'علّق بـ "جوال" أو "دولاب"',
    visual: 'Split image: phone box vs folded fashion pieces. Bold Arabic question centered.',
    whyItWorks: 'Binary polls drive comments and tell you what category to feature next organically.',
  },
  {
    id: 'ar-trust-1',
    pillar: 'trust',
    platforms: ['instagram', 'linkedin'],
    language: 'ar',
    hook: 'أحلى شعور؟ توصل القطعة… وتكون أصلية.',
    body: '٣٠٠٠+ براند.\nدفع آمن.\nودعم يرد عليك.\nمو شعارات — هذي طريقة نشتغل فيها كل يوم.\nكون هناك، بثقة.',
    hashtags: ['#هناك', '#أصلي', '#تسوق_آمن', '#ثقة'],
    cta: 'شارك تجربتك لو طلبت من قبل',
    visual: 'Unboxing still with authenticity seal / branded packaging and calm blue backdrop.',
    whyItWorks: 'Trust content rebuilds organic reach after promo fatigue and supports conversion later.',
  },
  {
    id: 'ar-season-1',
    pillar: 'seasonal',
    platforms: ['instagram', 'snapchat', 'tiktok'],
    language: 'ar',
    hook: 'حرّ الشارع يحتاج ذكاء بسيط.',
    body: 'نظارة، قبعّة خفيفة، وماية باردة في السيارة.\nمو ستايل بس — راحة.\nوش أول شيء تحطّه معك قبل تطلع؟',
    hashtags: ['#هناك', '#صيف_السعودية', '#نصيحة_يومية'],
    cta: 'علّق بأهم شيء في طقم الصيف عندك',
    visual: 'Car dashboard POV: sunglasses case + water bottle + soft sunlight flare.',
    whyItWorks: 'Seasonal utility posts feel timely and shareable without needing a sale event.',
  },
  {
    id: 'ar-soft-1',
    pillar: 'soft-sell',
    platforms: ['instagram', 'tiktok'],
    language: 'ar',
    hook: 'لو تدور تحديث بسيط للبيت… ابدأ من زاوية الصلاة.',
    body: 'سجادة مرتبة، سبحة قريبة، ضوء هادي.\nتفاصيل صغيرة تغيّر الإحساس بالمكان.\nمو صفقة — عادة.',
    hashtags: ['#هناك', '#من_هنا', '#ركن_الصلاة', '#بيت'],
    cta: 'احفظ الفكرة لو تبي ترتّب ركنك هالأسبوع',
    visual: 'Styled prayer corner vignette — Min Hena mat and beads, soft morning light, no hard CTA graphics.',
    whyItWorks: 'Habit framing sells prayer-category products without discount language.',
  },
  {
    id: 'ar-edu-2',
    pillar: 'education',
    platforms: ['tiktok', 'instagram', 'snapchat'],
    language: 'ar',
    hook: 'تبي تشتري جوال وما تتلخبط؟',
    body: 'رتّب أولوياتك بهالترتيب:\n١) ميزانيتك الحقيقية\n٢) الكاميرا ولا البطارية؟\n٣) التخزين اللي تحتاجه فعلياً\nبعدها قارن خيارين بس — مو عشرة.',
    hashtags: ['#هناك', '#جوالات', '#نصيحة', '#إلكترونيات'],
    cta: 'احفظ الفيديو قبل ما تفتح أي مقارنة أسعار',
    visual: 'Talking-head or screen recording with 3 big numbered cards; fast cuts under 20s for TikTok/Reels.',
    whyItWorks: 'Decision frameworks reduce overwhelm and position HNAK as a helpful guide, not only a store.',
  },
  {
    id: 'ar-com-2',
    pillar: 'community',
    platforms: ['instagram', 'x'],
    language: 'ar',
    hook: 'وش الخرافة اللي الناس تصدّقها عن التسوق أونلاين؟',
    body: 'بعضهم يقول: الأصلي ما يتجاب إلا من المحل.\nبعضهم يقول: التوصيل دايم يتأخر.\nوش أكثر خرافة تسمعها عندكم؟',
    hashtags: ['#هناك', '#تسوق_أونلاين', '#خرافات'],
    cta: 'اكتب الخرافة… ونرد عليها بهدوء في الكومنتس',
    visual: 'Text-first post with myth vs reality layout; calm navy background, one product silhouette.',
    whyItWorks: 'Myth-busting invites debate and lets social proof appear in comments organically.',
  },
  {
    id: 'en-local-1',
    pillar: 'local',
    platforms: ['instagram', 'linkedin'],
    language: 'en',
    hook: 'Not imported for the sake of it. Made to feel like home.',
    body: 'Min Hena is our quiet reminder that local craft still belongs in modern routines — jewelry, prayer essentials, gifts with weight.\nSupport what is from here.',
    hashtags: ['#HNAK', '#MinHena', '#SaudiMade', '#GoLocal'],
    cta: 'Save this if you are building a local gift list',
    visual: 'Editorial still of Min Hena pieces on raw plaster; Arabic + English brand mark small in corner.',
    whyItWorks: 'Bilingual local storytelling works for Instagram and LinkedIn brand building.',
  },
  {
    id: 'en-life-1',
    pillar: 'lifestyle',
    platforms: ['instagram', 'tiktok'],
    language: 'en',
    hook: 'A good day in Jeddah starts with less glare.',
    body: 'Coffee. Errands. That stretch of sun between buildings.\nSometimes the only upgrade you need is the pair that stays in the car.',
    hashtags: ['#HNAK', '#Jeddah', '#EverydayStyle'],
    cta: 'Tag the friend who borrows sunglasses and never returns them',
    visual: 'Moving Reels shot: passenger seat, sunglasses slide on, city light wash — no logo sting until end frame.',
    whyItWorks: 'Place-based lifestyle content feels native to followers in KSA.',
  },
  {
    id: 'en-edu-1',
    pillar: 'education',
    platforms: ['linkedin', 'x', 'instagram'],
    language: 'en',
    hook: 'Organic ecommerce content that actually works has one job.',
    body: 'Help first. Sell second.\nTips, rituals, local pride, and honest questions build saves and replies — then offers convert warmer traffic.',
    hashtags: ['#HNAK', '#Ecommerce', '#ContentMarketing', '#KSA'],
    cta: 'Which pillar should we publish more of next week?',
    visual: 'Clean carousel: Help → Habit → Soft ask. Brand blue panels, minimal type.',
    whyItWorks: 'LinkedIn/X versions educate the market while reinforcing HNAK’s organic playbook.',
  },
  {
    id: 'en-trust-1',
    pillar: 'trust',
    platforms: ['instagram', 'linkedin'],
    language: 'en',
    hook: '3000+ brands. One standard: genuine.',
    body: 'Secure payment. Real support. Delivery you can plan around.\nBeing HNAK means showing up after the click — not only before it.',
    hashtags: ['#HNAK', '#Genuine', '#ShopSaudi'],
    cta: 'Share your latest delivery win in the comments',
    visual: 'Split panel: checkout confidence icons + unboxing photo from a real order aesthetic.',
    whyItWorks: 'Proof posts reduce hesitation for new buyers discovering the brand organically.',
  },
  {
    id: 'en-soft-1',
    pillar: 'soft-sell',
    platforms: ['instagram', 'snapchat'],
    language: 'en',
    hook: 'Refresh the corner you use every day.',
    body: 'A calmer prayer space does not need a full redesign.\nOne mat. One set of beads. Better light.\nSmall shifts. Better mornings.',
    hashtags: ['#HNAK', '#MinHena', '#HomeRitual'],
    cta: 'Save for your weekend reset',
    visual: 'Before/after of a prayer corner — subtle, respectful, no flashy sale stickers.',
    whyItWorks: 'Ritual content earns saves and soft-sells Min Hena without promo fatigue.',
  },
  {
    id: 'en-com-1',
    pillar: 'community',
    platforms: ['instagram', 'x', 'tiktok'],
    language: 'en',
    hook: 'Quick vote for this week’s drop focus:',
    body: 'A) Beauty & fragrance\nB) Mobiles & gadgets\nC) Local Min Hena finds\nComment A, B, or C — we will lean into the winner in organic this week.',
    hashtags: ['#HNAK', '#Community', '#YourPick'],
    cta: 'Drop your letter below',
    visual: 'Three bold option tiles; branded but not “ad-looking”; sticker-style poll for Stories/Snap.',
    whyItWorks: 'Audience-led planning increases reply rate and makes the calendar feel co-created.',
  },
]

export type WorkshopInput = {
  pillar: Pillar
  platform: Platform
  language: 'ar' | 'en'
  topic: string
  audience: string
}

export function buildWorkshopDraft(input: WorkshopInput): OrganicPost {
  const pillarMeta = PILLARS.find((p) => p.id === input.pillar)!
  const topic = input.topic.trim() || pillarMeta.blurb
  const audience = input.audience.trim() || (input.language === 'ar' ? 'متابعينا في السعودية' : 'shoppers across Saudi Arabia')

  if (input.language === 'ar') {
    const hooks: Record<Pillar, string> = {
      local: `مو ترند بس… ${topic}.`,
      lifestyle: `لحظة بسيطة من يومك: ${topic}.`,
      education: `قبل ما تقرّر… خذ هالفكرة عن ${topic}.`,
      community: `سؤال لـ ${audience}:`,
      trust: `ليش نطمّن في ${topic}؟`,
      seasonal: `هالموسم يطلب ${topic}.`,
      'soft-sell': `لو تبي تبدأ بهدوء: ${topic}.`,
    }
    const bodies: Record<Pillar, string> = {
      local: `${topic} تذكّرنا إن الخيار المحلي له طعم مختلف.\nمصنوع لقربنا، ليومنا، ولهديتنا.\nوش رأيك: المحلي أول ولا بعد التجربة؟`,
      lifestyle: `${topic} ما يحتاج تصوير فخم.\nيكفي مشهد حقيقي من روتين ${audience}.\nخلّ المنتج يبان كجزء من اليوم — مو بطاقة إعلان.`,
      education: `٣ نقاط سريعة عن ${topic}:\n١) ايش المشكلة الحقيقية؟\n٢) ايش الخيار الأذكى لـ ${audience}؟\n٣) ايش الغلطة الشائعة؟\nاحفظها، وارجع لها وقت الشراء.`,
      community: `عن ${topic}…\nوش أول شيء يخطر على بال ${audience}؟\nعلّق بكلمة واحدة، ونكمّل الحوار.`,
      trust: `مع ${topic}، الثقة تجي من التفاصيل:\nأصل المنتج، وضوح التوصيل، وشخص يرد عليك.\nهذي معاييرنا في هناك.`,
      seasonal: `${topic} صار جزء من حديث الموسم.\nخلّ المحتوى مفيد أولاً، والعرض يجي لاحقاً بهدوء.`,
      'soft-sell': `${topic} مو صفقة اليوم.\nهي دعوة تجرب شيء يرتّب يومك شوي.\nإذا حسيته لك — تقدر تكمل من هناك.`,
    }
    return {
      id: `workshop-${Date.now()}`,
      pillar: input.pillar,
      platforms: [input.platform],
      language: 'ar',
      hook: hooks[input.pillar],
      body: bodies[input.pillar],
      hashtags: ['#هناك', '#كون_هناك', ...(input.pillar === 'local' ? ['#من_هنا'] : ['#تسوق_ذكي'])],
      cta: input.platform === 'tiktok' ? 'احفظ الفيديو ورجّع له وقت تحتاج' : 'احفظ أو علّق — اختيارك',
      visual: `Native ${input.platform} frame for ${topic}: lifestyle-led, Arabic-first typography, no heavy promo badges.`,
      whyItWorks: `Built for ${pillarMeta.labelEn.toLowerCase()} organic reach on ${input.platform}.`,
    }
  }

  const hooks: Record<Pillar, string> = {
    local: `From here — ${topic}.`,
    lifestyle: `A real moment: ${topic}.`,
    education: `Before you buy into ${topic}, read this.`,
    community: `Quick question for ${audience}:`,
    trust: `Why ${topic} should feel safe.`,
    seasonal: `This season’s quiet essential: ${topic}.`,
    'soft-sell': `Start soft with ${topic}.`,
  }
  const bodies: Record<Pillar, string> = {
    local: `${topic} works because it feels familiar, not forced.\nTell the craft story. Invite pride. Leave the hard sell for later.`,
    lifestyle: `Show ${topic} inside a normal day for ${audience}.\nNo studio perfection — just a scene people recognize.`,
    education: `Break ${topic} into 3 useful points:\n1) The real problem\n2) The smarter choice\n3) The common mistake\nUseful posts get saved. Saved posts keep working.`,
    community: `About ${topic} — what do ${audience} actually want this week?\nAsk one clear question. Reply to every comment for 1 hour.`,
    trust: `For ${topic}, lead with proof: authenticity, delivery clarity, and human support.\nTrust content warms the next offer.`,
    seasonal: `Tie ${topic} to what people feel right now.\nUtility first. Offer second.`,
    'soft-sell': `${topic} should feel like a helpful nudge, not a blast.\nOne benefit. One calm CTA. No sticker clutter.`,
  }

  return {
    id: `workshop-${Date.now()}`,
    pillar: input.pillar,
    platforms: [input.platform],
    language: 'en',
    hook: hooks[input.pillar],
    body: bodies[input.pillar],
    hashtags: ['#HNAK', '#BeHNAK', ...(input.pillar === 'local' ? ['#MinHena'] : ['#OrganicSocial'])],
    cta: input.platform === 'linkedin' ? 'Comment with the pillar you want next' : 'Save or reply — your call',
    visual: `Native ${input.platform} creative for ${topic}: brand-forward, light product presence, no coupon spam.`,
    whyItWorks: `Drafted for ${pillarMeta.labelEn.toLowerCase()} organic performance on ${input.platform}.`,
  }
}
