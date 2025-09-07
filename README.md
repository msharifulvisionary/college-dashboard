# college-dashboard
Government Azizul Haque College ,bogra. Physics first year (24-25 session ) note, notices and class update
# College Dashboard System

একটি সম্পূর্ণ কলেজ ড্যাশবোর্ড সিস্টেম যেখানে নোটিশ, নোট এবং ক্লাস আপডেট ম্যানেজ করা যায়।

## ফাইল স্ট্রাকচার

\`\`\`
college-dashboard/
├── public/                 # পাবলিক পেজগুলো
│   ├── notices/
│   │   └── index.html     # নোটিশ পাবলিক পেজ
│   ├── notes/
│   │   └── index.html     # নোট পাবলিক পেজ
│   └── class-updates/
│       └── index.html     # ক্লাস আপডেট পাবলিক পেজ
├── admin/
│   └── index.html         # অ্যাডমিন ড্যাশবোর্ড
├── firebase-config.js     # Firebase কনফিগারেশন
└── README.md
\`\`\`

## পাবলিক লিংকসমূহ

- **নোটিশ**: `your-domain.com/public/notices/`
- **নোট**: `your-domain.com/public/notes/`
- **ক্লাস আপডেট**: `your-domain.com/public/class-updates/`
- **অ্যাডমিন ড্যাশবোর্ড**: `your-domain.com/admin/`

## ফিচারসমূহ

### পাবলিক পেজ
- রিয়েল-টাইম ডাটা লোডিং
- রেসপন্সিভ ডিজাইন
- ডাউনলোড ফাংশনালিটি
- সার্চ ও ফিল্টার (ক্লাস আপডেটে)

### অ্যাডমিন ড্যাশবোর্ড
- সিকিউর লগইন সিস্টেম
- নোটিশ যোগ/সম্পাদনা/মুছে ফেলা
- নোট যোগ/সম্পাদনা/মুছে ফেলা
- ক্লাস আপডেট যোগ/সম্পাদনা/মুছে ফেলা
- রিয়েল-টাইম ডাটা সিঙ্ক

## সেটআপ নির্দেশনা

### ১. Firebase সেটআপ
- Firebase প্রজেক্ট তৈরি করুন
- Firestore Database সক্রিয় করুন
- Authentication সক্রিয় করুন (Email/Password)
- প্রদত্ত Firestore Rules প্রয়োগ করুন

### ২. অ্যাডমিন ইউজার তৈরি
Firebase Console থেকে:
1. Authentication > Users > Add User
2. ইমেইল ও পাসওয়ার্ড দিয়ে ইউজার তৈরি করুন
3. Firestore Database > Create Collection: `_meta`
4. Document ID: `admins`
5. Field: `{user_uid}: true`

### ৩. ডিপ্লয়মেন্ট

#### GitHub Pages এর জন্য:
1. GitHub রিপোজিটরি তৈরি করুন
2. সব ফাইল আপলোড করুন
3. Settings > Pages > Source: Deploy from a branch
4. Branch: main, Folder: / (root)

#### Vercel এর জন্য:
1. Vercel অ্যাকাউন্ট তৈরি করুন
2. GitHub রিপোজিটরি কানেক্ট করুন
3. Deploy করুন

## ব্যবহার

### অ্যাডমিন হিসেবে:
1. `/admin/` পেজে যান
2. আপনার ইমেইল ও পাসওয়ার্ড দিয়ে লগইন করুন
3. বিভিন্ন ট্যাব ব্যবহার করে কন্টেন্ট ম্যানেজ করুন

### পাবলিক ইউজার হিসেবে:
- সরাসরি পাবলিক লিংকগুলো ভিজিট করুন
- কোন লগইনের প্রয়োজন নেই

## নিরাপত্তা

- শুধুমাত্র অনুমোদিত অ্যাডমিনরা ডাটা পরিবর্তন করতে পারবেন
- Firestore Security Rules দিয়ে ডাটা সুরক্ষিত
- পাবলিক ইউজাররা শুধু পড়তে পারবেন

## সাপোর্ট

কোন সমস্যা হলে Firebase Console এর Logs চেক করুন অথবা Browser Developer Tools ব্যবহার করুন।
