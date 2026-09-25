# SCORPIUS Studio — Revamp

نسخة مطوّرة من موقع SCORPIUS كاستوديو وفريق متكامل. التصميم يعيد بناء تجربة الصفحة حول 5 أفكار: هوية تقنية فاخرة، رسالة أوضح، أعمال موثقة، فريق ظاهر، وتحويل أسرع عبر واتساب.

## ما تم تغييره

- إزالة صورة المؤسس بالكامل من الموقع.
- إضافة قسم فريق واضح:
  - Hazem Mohammed Kamel — Founder & Lead Full-Stack Developer
  - عبدالرحمن — Senior Software Engineer — خبرة 5 سنين
  - معاذ — Graphic Designer — خبرة 6 سنين
- إضافة قسم أعمال مختارة مع Qureo Plus كدراسة حالة.
- إعادة بناء الـ Hero بهوية SCORPIUS جديدة وخلفية تقنية أصلية.
- إضافة خدمات منظمة: Product Engineering، UX/UI، Brand Systems.
- إضافة منهجية عمل من 4 مراحل.
- إضافة FAQ تفاعلي.
- إضافة نموذج مشروع يجهز رسالة واتساب تلقائيًا.
- تحسين التجاوب مع الموبايل، الوصول، الـ SEO الأساسي، والـ micro-interactions.

## التشغيل المحلي

```bash
pnpm install
pnpm run dev
```

ثم افتح رابط Vite المحلي.

## Build للإنتاج

```bash
pnpm run build
```

## ملاحظة الخلفية

النسخة داخل مشروع WebDev تستخدم أصل الخلفية عبر:

```text
/manus-storage/scorpius-hero-abstract_72bb2c2b.jpg
```

إذا ستنقل المشروع إلى Vercel خارج WebDev، ارفع الملف الموجود في مجلد التسليم إلى `client/public/` وغيّر مسار الخلفية في `client/src/index.css` إلى:

```css
url('/scorpius-hero-abstract.jpg')
```

## الملفات الرئيسية

- `client/src/pages/Home.tsx` — الصفحة والمحتوى والتفاعلات.
- `client/src/index.css` — نظام التصميم والتجاوب.
- `client/src/App.tsx` — نقطة دخول التطبيق.
- `client/index.html` — اللغة والـ SEO metadata.

## تعديل سريع

- رقم واتساب: أول سطر في `Home.tsx` داخل `whatsappNumber`.
- أسماء وأدوار الفريق: مصفوفة `team` في `Home.tsx`.
- الخدمات: مصفوفة `services` في `Home.tsx`.
- الأسئلة: مصفوفة `faqs` في `Home.tsx`.
