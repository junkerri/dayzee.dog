# 🐕 Dayzee.dog - MySpace Era Dog Profile

A nostalgic, MySpace-era themed personal profile website for Dayzee, featuring glitter backgrounds, scrapbook vibes, voice intros, autoplay music, and draggable Polaroid photos. It's playful, sparkly, and deeply personal—a digital shrine like it's 2005! ✨

## 🎨 Features

- **Nostalgic Design**: Glitter backgrounds, retro fonts, and MySpace-era styling
- **Interactive Audio**: Voice intro with waveform visualization
- **Draggable Photo Scrapbook**: Polaroid-style photos you can rearrange
- **Now Playing**: Classic music player with visualizer
- **Guestbook**: Leave messages for Dayzee (client-side for now)
- **Responsive Layout**: Works on desktop and mobile
- **Smooth Animations**: Framer Motion powered interactions

## 🚀 Quick Start

1. **Clone and install dependencies:**

   ```bash
   git clone <your-repo>
   cd dayzee.dog
   npm install
   ```

2. **Add your content:**

   - Replace placeholder photos in `public/photos/`
   - Add audio files in `public/audio/`
   - Update Dayzee's info in `src/data/dayzee.ts`

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
dayzee.dog/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Home page
│   │   ├── about/           # About page
│   │   ├── photos/          # Photo scrapbook
│   │   └── guestbook/       # Guestbook
│   ├── components/          # React components
│   │   ├── AudioIntro.tsx   # Voice intro player
│   │   ├── NowPlaying.tsx   # Music player
│   │   ├── ScrapbookGrid.tsx # Draggable photos
│   │   ├── Navigation.tsx   # Site navigation
│   │   └── ...              # Other components
│   └── data/
│       └── dayzee.ts        # Dayzee's profile data
├── public/
│   ├── photos/              # Dayzee's photos
│   └── audio/               # Audio files
└── README.md
```

## 🎵 Audio Setup

To add audio functionality:

1. **Voice Intro**: Add `dayzee-intro.mp3` to `public/audio/`
2. **Background Music**: Add your chosen song to `public/audio/`
3. **Update the data**: Modify `src/data/dayzee.ts` with correct file paths

## 📸 Photo Setup

1. **Add photos** to `public/photos/` directory
2. **Update photo data** in `src/data/dayzee.ts`:
   ```typescript
   photos: [
     {
       id: "1",
       src: "/photos/your-photo.jpg",
       alt: "Description",
       caption: "Fun caption!",
       date: "2024",
     },
   ];
   ```

## 🎨 Customization

### Colors & Styling

- Edit `src/app/globals.css` for color schemes
- Modify CSS variables for easy theming
- Add more glitter effects and animations

### Content

- Update `src/data/dayzee.ts` with your dog's info
- Add more pages in `src/app/`
- Create new components in `src/components/`

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Works with static export
- **GitHub Pages**: Requires static export
- **Custom Domain**: Point to `dayzee.dog` for maximum nostalgia

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Audio**: HTML5 Audio API
- **Deployment**: Vercel

## 🎯 Future Enhancements

- [ ] Supabase backend for persistent guestbook
- [ ] "Boop Dayzee" button with bark sound
- [ ] Theme toggler (classic vs minimalist)
- [ ] Top 8 friends carousel
- [ ] Page hit counter (ironic)
- [ ] More interactive elements

## 📝 License

MIT License - feel free to use this template for your own pet's profile!

## 🐾 About Dayzee

Dayzee is a shih-tzu who loves sun bathing, chickens, and her humans. She's a zoomies enthusiast and professional cuddle bug. This website is her digital shrine in the style of early 2000s web profiles.

---

Made with 💕 and lots of zoomies in 2024 ✨
