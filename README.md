# UtilCraft

**UtilCraft** — bu React loyihalari uchun komponentlar, hooklar va util funksiyalarini avtomatik yaratishga yordam beruvchi CLI vositasi.
REPO: https://github.com/lazywk/utilcraft

## 📦 Ishga tushirish

UtilCraft ni o‘rnatish shart emas! Quyidagi buyruq orqali to‘g‘ridan-to‘g‘ri ishga tushirish mumkin:

```bash
npx utilcraft component Button
```

yoki agar `utilcraft` loyihangiz ichida mavjud bo‘lsa:

```bash
node path/to/utilcraft/bin/index.js component Button
```

## 🚀 Foydalanish

UtilCraft quyidagi buyruqlarni qo‘llab-quvvatlaydi:

### 🎨 Komponent yaratish

```bash
npx utilcraft component Button
```

Agar loyiha `src/` papkasidan foydalansa, komponent `src/components/` ichida yaratiladi.
Aks holda, `components/` papkasida yaratiladi.

### 🪝 Hook yaratish

```bash
npx utilcraft hook useTemplateHook
```

Yangi hook `src/hooks/` yoki `hooks/` papkasida yaratiladi.

### 🔧 Util funksiyani yaratish

```bash
npx utilcraft util formatDate
```

Util funksiya `src/utils/` yoki `utils/` papkasida yaratiladi.

## ⚙️ Xususiyatlari

✅ **`src/` papkasining mavjudligini avtomatik tekshiradi** — agar `src/` bo‘lsa, ichiga joylashtiradi, aks holda loyiha ildiziga joylashtiradi.
✅ **Fayl mavjud bo‘lsa, almashtirishni so‘raydi.**
✅ **TypeScript (`.tsx`, `.ts`) yoki JavaScript (`.jsx`, `.js`) formatlarini tanlash imkoniyati.**
✅ **`fs-extra` orqali papkalar avtomatik yaratiladi.**

## 💡 Loyiha hissa qo‘shish

Agar siz UtilCraft'ni yaxshilashni istasangiz, `GitHub` repozitoriyasiga pull request yuborishingiz yoki muammolarni `issue` sifatida qo‘shishingiz mumkin.

## 📄 Litsenziya

MIT litsenziyasi asosida tarqatiladi. Erkin foydalanish mumkin! 🎉

