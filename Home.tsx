import { FormEvent, useState } from "react";
import {
  ArrowUpLeft,
  ArrowUpRight,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Figma,
  Layers3,
  Menu,
  MessageCircle,
  Palette,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const whatsappNumber = "201050094382";

const navItems = [
  { label: "الخدمات", href: "#services" },
  { label: "أعمالنا", href: "#work" },
  { label: "الفريق", href: "#team" },
  { label: "المنهجية", href: "#process" },
  { label: "الأسئلة", href: "#faq" },
];

const services = [
  {
    number: "01",
    icon: Code2,
    eyebrow: "PRODUCT ENGINEERING",
    title: "منتجات رقمية تُبنى صح",
    text: "من أول فكرة إلى نسخة قابلة للاستخدام، نبني أنظمة سريعة، واضحة، وقابلة للتوسع بدون تعقيد غير ضروري.",
    tags: ["Web Apps", "Mobile", "Dashboards"],
  },
  {
    number: "02",
    icon: Layers3,
    eyebrow: "UX / UI DESIGN",
    title: "تجربة تحوّل الفكرة لرحلة",
    text: "نحوّل احتياج المستخدم إلى واجهات مفهومة ومتماسكة، تجمع بين الوضوح والشخصية والنتيجة التجارية.",
    tags: ["UX Strategy", "UI Systems", "Prototyping"],
  },
  {
    number: "03",
    icon: Palette,
    eyebrow: "BRAND SYSTEMS",
    title: "هوية لا تتوه وسط الزحمة",
    text: "نبني لغة بصرية كاملة من الشعار إلى آخر منشور، عشان علامتك تبان ثابتة ومميزة في كل نقطة تواصل.",
    tags: ["Identity", "Social Kits", "Menus"],
  },
];

const team = [
  {
    initials: "SC",
    name: "Hazem Mohammed Kamel",
    role: "Founder & Lead Full-Stack Developer",
    bio: "يقود الاستوديو ويحوّل الأفكار المعقدة إلى منتجات واضحة، من الاستراتيجية وحتى الإطلاق.",
    skills: ["Product", "Full-Stack", "UI / UX"],
    accent: "lime",
  },
  {
    initials: "عـ",
    name: "عبدالرحمن",
    role: "Senior Software Engineer",
    bio: "مبرمج محترف بخبرة 5 سنين في بناء حلول مستقرة، سريعة، ومهيّأة للنمو.",
    skills: ["Frontend", "Backend", "Architecture"],
    accent: "violet",
  },
  {
    initials: "مـ",
    name: "معاذ",
    role: "Graphic Designer",
    bio: "جرافيك ديزاينر بخبرة 6 سنين، يحوّل الأفكار إلى أنظمة بصرية لها حضور وتُستخدم فعلاً.",
    skills: ["Branding", "Art Direction", "Social"],
    accent: "orange",
  },
];

const process = [
  { step: "01", title: "نسمع ونحدد", text: "نفهم الهدف، الجمهور، والقيود قبل أي تصميم أو كود." },
  { step: "02", title: "نرسم المسار", text: "نحوّل الفكرة إلى نطاق واضح، خريطة شاشات، وأولويات قابلة للتنفيذ." },
  { step: "03", title: "نبني ونراجع", text: "تصميم ثم تطوير ثم مراجعة مستمرة — بدون مفاجآت في آخر المشروع." },
  { step: "04", title: "نطلق ونسلّم", text: "نختبر، نطلق، ونسلّمك المنتج والملفات والمعرفة اللازمة للتشغيل." },
];

const faqs = [
  { q: "هل SCORPIUS فريق أم شخص واحد؟", a: "SCORPIUS استوديو وفريق متكامل يضم البرمجة، التصميم، والهوية البصرية. يختلف تشكيل الفريق حسب احتياج كل مشروع." },
  { q: "هل الكود والتصاميم ملكي بعد التسليم؟", a: "نعم، بعد تسوية الدفعة النهائية يتم تسليم ملفات المشروع والكود والتصاميم المتفق عليها، مع توضيح أي تراخيص لطرف ثالث." },
  { q: "كيف تبدأون المشروع؟", a: "تبدأ العملية بمكالمة قصيرة أو رسالة على واتساب، ثم نحدد النطاق والمخرجات والمدة والتكلفة قبل التنفيذ." },
  { q: "هل يوجد دعم بعد الإطلاق؟", a: "نعم، كل مشروع يتضمن فترة دعم فني للأخطاء المتعلقة بالتسليم. ويمكن الاتفاق على دعم أو تطوير مستمر إذا احتجت." },
];

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="SCORPIUS home">
      <span className="brand-mark"><span /><span /><span /></span>
      <span className="brand-word">SCORPIUS</span>
      <span className="brand-slash">/.</span>
    </a>
  );
}

function SectionKicker({ children, index }: { children: string; index: string }) {
  return (
    <div className="section-kicker">
      <span className="kicker-index">{index}</span>
      <span>{children}</span>
    </div>
  );
}

function AppLink({ href, children, variant = "primary", external = false }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "text"; external?: boolean }) {
  return (
    <a className={`button button-${variant}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {children}
      {external ? <ExternalLink size={15} /> : <ArrowUpLeft size={16} />}
    </a>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({ name: "", type: "منتج رقمي", details: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `مرحباً SCORPIUS، أنا ${form.name || "عميل جديد"}. مهتم بـ ${form.type}. تفاصيل المشروع: ${form.details || "أرغب في مناقشة الفكرة."}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="site-shell" id="top">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className={`main-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Main navigation">
            {navItems.map((item, i) => (
              <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                <span className="nav-count">0{i + 1}</span>{item.label}
              </a>
            ))}
            <AppLink href={`https://wa.me/${whatsappNumber}`} external variant="primary">ابدأ مشروعك</AppLink>
          </nav>
          <button className="menu-toggle" onClick={() => setMobileOpen((value) => !value)} aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={mobileOpen}>
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-grid" />
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-node node-a" />
            <div className="visual-node node-b" />
            <div className="hero-terminal">
              <div className="terminal-top"><span>SCORPIUS / SYSTEM</span><span className="terminal-status"><i /> ONLINE</span></div>
              <div className="terminal-copy"><span>build</span><strong>with<br /><em>intent.</em></strong></div>
              <div className="terminal-lines"><span><i>01</i> strategy <b>READY</b></span><span><i>02</i> design <b>READY</b></span><span><i>03</i> engineering <b>READY</b></span><span><i>04</i> launch <b>READY</b></span></div>
            </div>
          </div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="live-dot" /> DIGITAL PRODUCT STUDIO <span className="year">EST. 2026</span></div>
              <h1 id="hero-title">نحوّل فكرتك إلى<br /><span>حضور حقيقي.</span></h1>
              <p className="hero-lede">استوديو SCORPIUS يجمع الاستراتيجية، التصميم، والبرمجة في فريق واحد — عشان تطلع بمنتج متماسك، قابل للنمو، ويشبهك.</p>
              <div className="hero-actions">
                <AppLink href={`https://wa.me/${whatsappNumber}`} external>احكِ لنا عن فكرتك</AppLink>
                <a className="text-link" href="#work">شاهد أعمالنا <ArrowUpLeft size={16} /></a>
              </div>
              <div className="hero-proof">
                <div><strong>01</strong><span>فريق واحد<br />من الفكرة للإطلاق</span></div>
                <div><strong>100%</strong><span>ملكية واضحة<br />بعد التسليم</span></div>
                <div><strong>360°</strong><span>تصميم، كود<br />وهوية بصرية</span></div>
              </div>
            </div>
          </div>
          <a href="#services" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={16} /></a>
        </section>

        <section className="marquee-band" aria-label="SCORPIUS capabilities">
          <div className="marquee-track"><span>PRODUCT STRATEGY</span><i>✳</i><span>DESIGN SYSTEMS</span><i>✳</i><span>FULL-STACK BUILD</span><i>✳</i><span>BRAND DIRECTION</span><i>✳</i><span>PRODUCT STRATEGY</span><i>✳</i><span>DESIGN SYSTEMS</span></div>
        </section>

        <section className="section-pad services-section" id="services">
          <div className="container">
            <div className="section-heading split-heading"><div><SectionKicker index="01" children="WHAT WE DO" /><h2>مش مجرد تنفيذ.<br /><span>بناء له معنى.</span></h2></div><p>كل خدمة عندنا جزء من رحلة أكبر: نفهم المشكلة، نرتب الأولويات، ونبني الحل الذي يستحق أن يعيش في السوق.</p></div>
            <div className="services-grid">
              {services.map((service) => { const Icon = service.icon; return <article className="service-card" key={service.number}><div className="service-card-top"><span className="service-number">{service.number}</span><Icon size={23} strokeWidth={1.5} /></div><div className="service-content"><span className="card-eyebrow">{service.eyebrow}</span><h3>{service.title}</h3><p>{service.text}</p><div className="tag-row">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><ArrowUpLeft className="card-arrow" size={21} /></article>; })}
            </div>
          </div>
        </section>

        <section className="section-pad work-section" id="work">
          <div className="container">
            <div className="section-heading"><SectionKicker index="02" children="SELECTED WORK" /><h2>أعمال نقدر<br /><span>نتكلم عنها.</span></h2><p>كل مشروع يبدأ بسؤال واضح وينتهي بتجربة لها هدف. دي عينة من طريقة تفكيرنا، مش مجرد صور شكلها حلو.</p></div>
            <div className="case-study-grid">
              <article className="case-card case-primary"><div className="case-art qureo-art"><div className="case-art-header"><span>QUREO / 01—73</span><span><i /> LIVE PRODUCT</span></div><div className="case-art-title">QUREO<br /><em>PLUS</em></div><div className="case-art-panel"><b>73</b><span>LEVELS<br />TO MASTER</span></div><div className="case-code">const <strong>learn</strong> = <em>build</em>(idea);</div></div><div className="case-info"><div><span className="card-eyebrow">EDUCATIONAL PRODUCT · 2026</span><h3>Qureo Plus</h3><p>منصة تعليمية لمسارات JavaScript وPython، بتجربة تعلم منظمة وتتبع تقدم واضح.</p></div><a href="https://qureo-plus.vercel.app" target="_blank" rel="noreferrer" aria-label="زيارة Qureo Plus"><ArrowUpLeft size={20} /></a></div></article>
              <article className="case-card case-secondary"><div className="case-art brand-art"><div className="brand-art-symbol">/\</div><div className="brand-art-word">BRAND<br /><em>IN MOTION</em></div><span className="brand-art-label">IDENTITY SYSTEM / 02</span></div><div className="case-info"><div><span className="card-eyebrow">BRAND IDENTITY · CONCEPT</span><h3>هوية تتحرك معك</h3><p>أنظمة بصرية مرنة للعلامات التي تريد أن تظهر بثقة في كل شاشة.</p></div><ArrowUpLeft size={20} /></div></article>
            </div>
            <div className="work-footer"><span>المزيد من المشاريع قريبًا</span><span className="work-rule" /><span className="muted">WE BUILD IN PUBLIC</span></div>
          </div>
        </section>

        <section className="section-pad team-section" id="team">
          <div className="container">
            <div className="section-heading split-heading"><div><SectionKicker index="03" children="THE PEOPLE BEHIND IT" /><h2>أفكار مختلفة.<br /><span>فريق واحد.</span></h2></div><p>القوة مش في عدد الأفراد، لكن في إن كل شخص يعرف دوره ويضيف زاوية مختلفة لنفس الهدف.</p></div>
            <div className="team-grid">{team.map((member) => <article className={`team-card accent-${member.accent}`} key={member.name}><div className="avatar-orbit"><div className="avatar-initials">{member.initials}</div><span className="avatar-ring ring-a" /><span className="avatar-ring ring-b" /></div><div className="team-card-body"><span className="member-role">{member.role}</span><h3>{member.name}</h3><p>{member.bio}</p><div className="skill-list">{member.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></article>)}</div>
            <div className="team-note"><Sparkles size={18} /><span>فريق صغير بما يكفي للمرونة، وخبير بما يكفي لبناء شيء يعتمد عليه.</span></div>
          </div>
        </section>

        <section className="section-pad process-section" id="process">
          <div className="container process-layout"><div className="process-intro"><SectionKicker index="04" children="HOW WE WORK" /><h2>الطريق<br /><span>واضح.</span></h2><p>لا قفزات مجهولة، ولا تسليم مفاجئ. كل مرحلة لها قرار ومخرج مفهوم قبل الانتقال للخطوة التالية.</p><AppLink href={`https://wa.me/${whatsappNumber}`} external variant="secondary">ابدأ محادثة</AppLink></div><div className="process-list">{process.map((item, index) => <div className="process-item" key={item.step}><div className="process-number">{item.step}</div><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="process-line" />{index !== process.length - 1 && <ArrowDown className="process-arrow" size={16} />}</div>)}</div></div>
        </section>

        <section className="section-pad proof-section"><div className="container proof-grid"><div className="proof-card"><ShieldCheck size={22} /><strong>اتفاق واضح</strong><span>نطاق، دفعات، ومخرجات معروفة من البداية.</span></div><div className="proof-card"><Rocket size={22} /><strong>تسليم قابل للاستخدام</strong><span>مش مجرد شاشة — منتج يقدر يتحرك في السوق.</span></div><div className="proof-card"><Zap size={22} /><strong>قرارات أسرع</strong><span>فريق واحد يقلل الفجوة بين الفكرة والتنفيذ.</span></div></div></section>

        <section className="section-pad faq-section" id="faq"><div className="container faq-layout"><div className="section-heading"><SectionKicker index="05" children="GOOD TO KNOW" /><h2>أسئلة قبل<br /><span>ما نبدأ.</span></h2><p>لو سؤالك مش هنا، ابعته لنا مباشرة وسنرد عليك بتفاصيل تناسب مشروعك.</p></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={faq.q}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{faq.q}</span><ChevronDown size={18} /></button><div className="faq-answer"><p>{faq.a}</p></div></div>)}</div></div></section>

        <section className="section-pad contact-section" id="contact"><div className="container contact-shell"><div className="contact-copy"><SectionKicker index="06" children="LET'S MAKE IT REAL" /><h2>جاهز تطلع<br /><span>الفكرة للسوق؟</span></h2><p>اكتب لنا سطرين عن مشروعك. هنرجع لك بخطوة تالية واضحة، مش برسالة مبيعات عامة.</p><a className="direct-contact" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> تواصل مباشر على واتساب <ArrowUpLeft size={16} /></a></div><form className="project-form" onSubmit={handleSubmit}><div className="form-topline"><span>START A PROJECT</span><span>01 / 01</span></div><label>الاسم<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="اسمك أو اسم الشركة" /></label><label>نوع المشروع<select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}><option>منتج رقمي</option><option>موقع شركة</option><option>هوية بصرية</option><option>متجر إلكتروني</option><option>مشروع مخصص</option></select></label><label>احكِ لنا أكثر<textarea value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} placeholder="الفكرة، الجمهور، والموعد المتوقع…" rows={4} /></label><button className="button button-primary form-submit" type="submit">أرسل التفاصيل على واتساب <Send size={16} /></button><small>بالضغط على الإرسال، ستفتح رسالة مجهزة على واتساب بدون تسجيل أو انتظار.</small></form></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><Logo /><p>WE BUILD THE THINGS<br /><span>PEOPLE REMEMBER.</span></p><a href="#top" className="back-top">العودة للأعلى <ArrowUpRight size={16} /></a></div><div className="container footer-bottom"><span>© 2026 SCORPIUS STUDIO</span><span>CRAFTED IN-HOUSE · DELIVERED WITH PRECISION</span><div><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp</a><span>·</span><a href="mailto:scorpius@studio">Email</a></div></div></footer>
      <a className="floating-wa" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" aria-label="تواصل على واتساب"><MessageCircle size={21} /></a>
    </div>
  );
}
