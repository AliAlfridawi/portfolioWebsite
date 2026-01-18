# 🌊 Deep Ocean Portfolio

A stunning, interactive portfolio website with an underwater theme featuring smooth animations, accordion navigation, and a beautiful dark mode aesthetic.

## ✨ Features

- **Deep Ocean Theme**: Beautiful gradient background with underwater vibes
- **Accordion Navigation**: Expandable sections for About, Education, Experience, Skills, Projects, and Contact
- **Floating Bubbles**: Animated bubbles and underwater elements in the background
- **Decorative Elements**: Fish, seaweed, shells, and waves scattered throughout
- **Smooth Animations**: Fade-ins, slides, and hover effects for polished interactions
- **Mobile Responsive**: Fully responsive design that works on all devices
- **One Section at a Time**: Only one accordion section opens at a time for clean navigation

## 🛠️ Technology Stack

- **React 19** - UI component library
- **Vite** - Fast development server and build tool
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icons (Fish, Waves, Shell, etc.)
- **JavaScript (ES6+)** - Modern JavaScript features

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Clone or download the project**
   ```bash
   cd portfolioWebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The app will automatically open at `http://localhost:3000`
   - Or manually navigate to `http://localhost:3000`

## 🚀 Running the Project

### Development Mode
```bash
npm run dev
```
- Starts the Vite development server
- Hot Module Replacement (HMR) enabled - changes reflect instantly
- Server runs on `http://localhost:3000`

### Build for Production
```bash
npm run build
```
- Creates optimized production build in the `dist/` folder
- Minified and optimized code ready for deployment

### Preview Production Build
```bash
npm run preview
```
- Preview the production build locally before deploying

## 📝 Customization Guide

### Edit Your Information

Open `Portfolio.jsx` and update the `portfolioData` object at the top:

```javascript
const portfolioData = {
  header: {
    name: 'Your Name',
    title: 'Your Title',
    bio: 'Your bio here...',
  },
  about: {
    content: 'Your about section content...',
  },
  education: [
    {
      degree: 'Your Degree',
      school: 'Your School',
      year: '2024',
    },
  ],
  experience: [
    {
      role: 'Your Role',
      company: 'Your Company',
      date: '2024 - Present',
      description: 'Your description here...',
    },
  ],
  skills: ['React', 'Tailwind CSS', 'Node.js', ...],
  contact: {
    email: 'your.email@example.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
};
```

### Change Colors

Modify the Tailwind classes in `Portfolio.jsx`:
- `from-slate-900` - Background gradient start
- `via-blue-950` - Background gradient middle
- `to-slate-900` - Background gradient end
- `text-cyan-400` - Primary accent color
- `bg-cyan-500` - Highlight color

### Adjust Loading Animation Duration

In the `Portfolio.jsx` component, find:
```javascript
const timer = setTimeout(() => {
  setIsLoading(false);
}, 2500); // Change this value (in milliseconds)
```

### Modify Bubble Animations

In the JSX return statement, adjust the bubble properties:
```javascript
<Bubble size="40px" delay="0" duration="6" left="10%" bottom="20%" />
```
- `size` - Bubble diameter
- `delay` - Animation delay in seconds
- `duration` - Animation cycle duration in seconds
- `left` - Horizontal position
- `bottom` - Vertical position

## 📁 Project Structure

```
portfolioWebsite/
├── Portfolio.jsx          # Main portfolio component
├── main.jsx              # React entry point
├── index.html            # HTML template
├── index.css             # Custom CSS and animations
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## 🎨 Key Components

### AccordionSection
Reusable accordion component for each section:
```javascript
<AccordionSection
  title="Section Title"
  isOpen={openSection === 'sectionId'}
  onToggle={() => toggleSection('sectionId')}
>
  {/* Section content */}
</AccordionSection>
```

### Bubble
Animated floating bubble component:
```javascript
<Bubble size="40px" delay="0" duration="6" left="10%" bottom="20%" />
```

### Seaweed
Decorative SVG seaweed elements framing the page

### CoralIcon
Custom SVG coral decoration

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect repository to Vercel
3. Vercel automatically deploys on every push

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `dist/` folder to Netlify
3. Or connect your GitHub repo for automatic deploys

### Deploy to GitHub Pages
1. Update `vite.config.js` with your repository name
2. Run: `npm run build`
3. Push the `dist/` folder to `gh-pages` branch

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# On Windows
netstat -ano | findstr :3000

# On macOS/Linux
lsof -i :3000
```
Then kill the process or use a different port in `vite.config.js`