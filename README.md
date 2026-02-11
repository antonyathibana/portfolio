# Personal Portfolio Website

A modern, fully responsive personal portfolio website for a final-year Computer Science student and Full Stack Developer. Built with React, Tailwind CSS, and Framer Motion.

![Portfolio Preview](./preview.png)

## 🌟 Features

- **Dark Theme** - Sleek black background with purple and teal accents
- **Glassmorphism Design** - Modern, translucent cards with blur effects
- **Smooth Animations** - Powered by Framer Motion
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Scroll Progress Bar** - Visual indicator of page scroll position
- **Floating AI Chat Widget** - Interactive FAQ about the portfolio
- **Smooth Scroll** - Navigation with smooth scrolling between sections
- **Type Animation** - Dynamic typing effect in the hero section

## 📦 Tech Stack

- **React** - UI Library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Type Animation** - Typing animations
- **Vite** - Build tool

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build files will be in the `dist` directory.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       - Navigation bar with sticky positioning
│   │   ├── Hero.jsx         - Hero section with typing animation
│   │   ├── About.jsx        - About section with bio and features
│   │   ├── Skills.jsx       - Skills display with progress bars
│   │   ├── Projects.jsx     - Projects grid with hover effects
│   │   ├── Experience.jsx   - Timeline of experience and education
│   │   ├── Contact.jsx      - Contact form and information
│   │   ├── ChatWidget.jsx   - Floating AI chat widget
│   │   └── Footer.jsx       - Footer with social links
│   ├── App.jsx              - Main app component
│   ├── index.css            - Global styles and Tailwind directives
│   └── main.jsx              - React entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Changing Personal Information

Edit the following files to customize:

1. **Name & Title** - `src/components/Hero.jsx`
2. **Bio** - `src/components/About.jsx`
3. **Skills** - `src/components/Skills.jsx`
4. **Projects** - `src/components/Projects.jsx`
5. **Experience** - `src/components/Experience.jsx`
6. **Contact Info** - `src/components/Contact.jsx` and `src/components/Footer.jsx`

### Color Scheme

The color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  background: '#0a0a0a',
  primary: '#8b5cf6',    // Purple
  secondary: '#14b8a6',  // Teal
}
```

### Social Links

Update social links in:
- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

## 📱 Sections

1. **Hero** - Name, title, tagline, CTA buttons, social links
2. **About** - Professional bio, achievements, key points
3. **Skills** - Frontend, Backend, and Other skills with progress bars
4. **Projects** - Showcase of work with GitHub and Demo links
5. **Experience** - Timeline of work and education
6. **Contact** - Contact form and social links
7. **Chat Widget** - Interactive FAQ about the portfolio

## ✨ Animations

All animations are powered by Framer Motion:

- Fade-in on scroll
- Slide-up effects
- Hover transformations
- Staggered animations
- Smooth transitions
- Scroll progress indicator

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

- Email: your.email@example.com
- LinkedIn: https://linkedin.com/in/yourprofile
- GitHub: https://github.com/yourusername

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion

# portfolio
