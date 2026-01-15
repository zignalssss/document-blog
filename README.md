# Documentation Site

เว็บไซต์สำหรับจัดการเอกสาร (Documentation) แบบ Dynamic ที่สามารถเพิ่ม Docs ใหม่ได้ง่ายผ่านการแก้ไข JSON config

## 🚀 Features

- ✅ **Dynamic Navigation** - กำหนด structure ผ่าน `docs-config.json`
- ✅ **MDX Support** - เขียน docs ด้วย Markdown + JSX components
- ✅ **Content Collections** - Astro content collections สำหรับ type-safety
- ✅ **Sidebar Navigation** - Sidebar แบบ auto-generate จาก config
- ✅ **Table of Contents** - TOC แบบอัตโนมัติจาก headings
- ✅ **Responsive Design** - รองรับทุกขนาดหน้าจอ
- ✅ **Syntax Highlighting** - Code blocks พร้อม syntax highlighting

## 📁 Project Structure

```
/
├── docs-config.json          # กำหนด navigation และ structure
├── src/
│   ├── content/
│   │   ├── config.ts         # Content collections schema
│   │   └── docs/             # เอกสารทั้งหมด (MDX files)
│   │       ├── introduction/
│   │       ├── setup/
│   │       ├── architecture/
│   │       └── api/
│   ├── layouts/
│   │   └── DocsLayout.astro  # Layout สำหรับหน้า docs
│   ├── components/
│   │   ├── Sidebar.astro     # Sidebar navigation
│   │   ├── Toc.astro         # Table of contents
│   │   └── CodeBlock.astro   # Code block component
│   └── pages/
│       └── docs/
│           └── [...slug].astro  # Dynamic routing
└── public/                   # Static assets
```

## 🎯 วิธีใช้งาน

### 1. ติดตั้ง Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. เริ่ม Development Server

\`\`\`bash
npm run dev
\`\`\`

เปิดเบราว์เซอร์ที่ `http://localhost:4321/docs/introduction/overview`

### 3. Build สำหรับ Production

\`\`\`bash
npm run build
npm run preview
\`\`\`

## 📝 การเพิ่มเอกสารใหม่

### ขั้นตอนที่ 1: สร้างโฟลเดอร์และไฟล์ MDX ใน `src/content/docs/`

สร้างโฟลเดอร์ category และไฟล์ `.mdx` ภายใน:

```
src/content/docs/
├── docs-config.json          # ไฟล์ config navigation
└── your-category/            # โฟลเดอร์ category
    ├── page-one.mdx
    └── page-two.mdx
```

**ตัวอย่างไฟล์ MDX:**

```mdx
---
title: "ชื่อเอกสาร"
description: "คำอธิบายสั้นๆ"
order: 1
category: "your-category"
---

# ชื่อหัวข้อ

เนื้อหาเอกสาร...

## หัวข้อย่อย

- รายการ 1
- รายการ 2

### Code Example

\`\`\`javascript
console.log("Hello World");
\`\`\`
```

### ขั้นตอนที่ 2: อัพเดท `src/content/docs/docs-config.json`

เพิ่ม section และ items ใน navigation:

```json
{
  "navigation": [
    {
      "title": "ชื่อ Section",
      "slug": "your-category",
      "items": [
        {
          "title": "ชื่อหน้าแรก",
          "slug": "your-category/page-one"
        },
        {
          "title": "ชื่อหน้าสอง",
          "slug": "your-category/page-two"
        }
      ]
    }
  ]
}
```

**หมายเหตุ:**
- `slug` ใน section ต้องตรงกับชื่อโฟลเดอร์
- `slug` ใน items ต้องเป็น path ไปยังไฟล์ (ไม่ต้องใส่ `.mdx`)

ระบบจะอัพเดท Sidebar อัตโนมัติ! 🎉

### ตัวอย่างการเพิ่ม Project ใหม่

หากต้องการเพิ่ม documentation project ใหม่ (เช่น Python, Go):

1. **เพิ่มใน `projects-config.json`:**

```json
{
  "projects": [
    {
      "id": "python",
      "title": "Python Documentation",
      "description": "เอกสารภาษา Python",
      "icon": "🐍",
      "color": "#3776AB"
    }
  ]
}
```

2. **สร้างโฟลเดอร์ใน `src/content/`:**

```
src/content/python/
├── docs-config.json
└── getting-started/
    ├── introduction.mdx
    └── installation.mdx
```

## 🧞 Commands

| Command | Action |
| :-- | :-- |
| \`npm install\` | ติดตั้ง dependencies |
| \`npm run dev\` | เริ่ม dev server ที่ \`localhost:4321\` |
| \`npm run build\` | Build production site ไปที่ \`./dist/\` |
| \`npm run preview\` | Preview build ก่อน deploy |

## 🎨 การ Customize

### แก้ไข Styles

แก้ไข CSS ใน components:
- \`src/layouts/DocsLayout.astro\` - Layout หลัก
- \`src/components/Sidebar.astro\` - Sidebar styles
- \`src/components/Toc.astro\` - TOC styles

### เพิ่ม Component ใหม่

สร้าง component ใน \`src/components/\` และใช้งานใน MDX files

## 📖 เอกสารเพิ่มเติม

- [Astro Documentation](https://docs.astro.build)
- [MDX Documentation](https://mdxjs.com)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)

## 💡 ตัวอย่างเอกสารที่มีอยู่

- **Introduction**: Overview, Scope
- **Setup**: Installation, Configuration
- **Architecture**: System Design, Database Schema
- **API**: Authentication API, Users API

เปิดดูได้ที่ \`http://localhost:4321/docs/introduction/overview\` หลังจากรัน dev server
