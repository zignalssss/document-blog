# Template Documentation Site

A dynamic documentation website that allows you to easily add new docs through JSON config editing.

## 🚀 Features

- ✅ **Dynamic Navigation** - Define structure via `docs-config.json`
- ✅ **MDX Support** - Write docs with Markdown + JSX components
- ✅ **Content Collections** - Astro content collections for type-safety
- ✅ **Sidebar Navigation** - Auto-generated sidebar from config
- ✅ **Table of Contents** - Automatic TOC from headings
- ✅ **Responsive Design** - Support all screen sizes
- ✅ **Syntax Highlighting** - Code blocks with syntax highlighting

## 📁 Project Structure

```
/
├── projects-config.json      # Define all projects
├── src/
│   ├── configs/
│   │   └── index-config.json # Homepage configuration
│   ├── content/
│   │   ├── config.ts         # Content collections schema
│   │   └── [project-id]/     # Each project folder
│   │       ├── docs-config.json  # Project navigation
│   │       └── [section]/    # Section folders
│   │           └── page.mdx  # Documentation files
│   ├── layouts/
│   │   └── DocsLayout.astro  # Docs page layout
│   ├── components/
│   │   ├── Sidebar.astro     # Sidebar navigation
│   │   ├── Toc.astro         # Table of contents
│   │   ├── Breadcrumb.astro  # Breadcrumb navigation
│   │   └── CodeBlock.astro   # Code block component
│   └── pages/
│       ├── index.astro       # Homepage
│       └── [project]/
│           └── [...slug].astro  # Dynamic routing
└── public/                   # Static assets
```

## 🎯 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open browser at `http://localhost:4321`

### 3. Build for Production

```bash
npm run build
npm run preview
```

## 📝 Adding New Documentation

### Step 1: Create MDX File

Create folder and `.mdx` file in `src/content/[project-id]/`:

```
src/content/docs/
├── docs-config.json          # Navigation config file
└── your-category/            # Category folder
    ├── page-one.mdx
    └── page-two.mdx
```

**Example MDX File:**

```mdx
---
title: "Document Title"
description: "Short description"
order: 1
category: "your-category"
---

# Main Heading

Document content...

## Subheading

- Item 1
- Item 2

### Code Example

\`\`\`javascript
console.log("Hello World");
\`\`\`
```

### Step 2: Update `src/content/[project-id]/docs-config.json`

Add section and items to navigation:

```json
{
  "navigation": [
    {
      "title": "Section Name",
      "slug": "your-category",
      "items": [
        {
          "title": "First Page",
          "slug": "your-category/page-one"
        },
        {
          "title": "Second Page",
          "slug": "your-category/page-two"
        }
      ]
    }
  ]
}
```

**Note:**
- `slug` in section must match folder name
- `slug` in items must be path to file (without `.mdx`)

Sidebar will update automatically! 🎉

### Adding a New Project

To add a new documentation project (e.g., Python, Go):

1. **Add to `projects-config.json`:**

```json
{
  "projects": [
    {
      "id": "python",
      "title": "Python Documentation",
      "description": "Python language documentation",
      "icon": "🐍",
      "color": "#3776AB"
    }
  ]
}
```

2. **Create folder structure in `src/content/`:**

```
src/content/python/
├── docs-config.json
└── getting-started/
    ├── introduction.mdx
    └── installation.mdx
```

3. **Create `docs-config.json` for the project:**

```json
{
  "navigation": [
    {
      "title": "Getting Started",
      "slug": "getting-started",
      "items": [
        {
          "title": "Introduction",
          "slug": "getting-started/introduction"
        }
      ]
    }
  ]
}
```

## 🧞 Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build before deploy |

## 🎨 Customization

### Editing Styles

Edit CSS in components:
- `src/layouts/DocsLayout.astro` - Main layout
- `src/components/Sidebar.astro` - Sidebar styles
- `src/components/Toc.astro` - TOC styles

### Homepage Configuration

Edit `src/configs/index-config.json` to customize:
- Hero title and description
- Project cards
- Footer text

### Adding New Components

Create components in `src/components/` and use them in MDX files.

## 📖 Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [MDX Documentation](https://mdxjs.com)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
