# Portfolio Setup Instructions

## Required Dependencies

Install the following packages to run the portfolio:

```bash
npm install framer-motion lucide-react
```

Or if using yarn:
```bash
yarn add framer-motion lucide-react
```

Or if using pnpm:
```bash
pnpm add framer-motion lucide-react
```

## Additional Setup

1. **CV File**: Place your CV file at `/public/joao_felicio_cv.pdf` for the download button to work.

2. **Portfolio Images** (Optional): Add portfolio images to `/public/portfolio/`:
   - manufacturing.jpg
   - cloud.jpg
   - supply-chain.jpg
   - fullstack.jpg
   - automation.jpg
   - analytics.jpg

   If images are not available, the portfolio will display gradient placeholders.

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## Customization

- Update content in each component file in `app/components/`
- Modify colors in `app/globals.css` (Dark Navy: #2c3e50, Teal: #1abc9c)
- Adjust animations in component files using Framer Motion
- Update journey data in `ProfessionalJourney.tsx`
- Update competencies in `CoreCompetencies.tsx`
- Update portfolio items in `Portfolio.tsx`


