# Terminal Portfolio Website

## Project Overview
This is a personal portfolio website for Tobias Vontobel, designed as an interactive terminal interface. The website showcases professional background, research papers, and contact information in a unique terminal-style presentation that reflects expertise in AI/development.

## Tech Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid, Flexbox, and CSS animations
- **Typography**: JetBrains Mono (Google Fonts) for authentic terminal feel
- **No frameworks**: Vanilla JavaScript for lightweight performance

## Key Features

### 1. Terminal Interface
- Realistic terminal window with macOS-style controls (red/yellow/green buttons)
- Fixed-height terminal with internal scrolling (80vh)
- Monospace font throughout for authentic terminal experience
- Terminal-style color scheme: dark background with green/cyan/purple accents

### 2. Animated Startup Sequence
- Starts completely empty, then types "whoami" command automatically
- Progressive reveal of content sections with realistic typing animations
- ASCII art name banner (TOBIAS) with typing effect
- Smooth transitions between sections

### 3. Interactive Terminal Commands
Available commands when users type in the terminal:
- `help` - Show available commands
- `about` - Personal bio and background
- `skills` - Technical skills (hidden from startup, only available via command)
- `papers` - Research publications with links
- `projects` - Project showcase (hidden from startup, only available via command)
- `contact` - Contact information
- `clear` - Clear terminal output
- `whoami` - Display user info
- `ls`, `pwd`, `date`, `echo` - Standard terminal commands
- `github`, `linkedin`, `email`, `arxiv` - Quick links to profiles

### 4. Content Sections

#### Animated Startup Content (Automatically Shown)
- **ASCII Art**: "TOBIAS" name banner
- **About**: Bio highlighting ETH Zurich background and Disney Research experience
- **Research Papers**: Three published papers with arXiv and GitHub links
- **Contact**: JSON-formatted contact information

#### Interactive-Only Content (Command Access Only)
- **Skills**: Technical skills organized by category
- **Projects**: Detailed project showcase including HiWave framework, Flatland Empire game

### 5. Research Papers
Three papers are featured with full metadata:
1. **HiWave**: Training-Free High-Resolution Image Generation (first author)
2. **Breaking reCAPTCHAv2**: Security research (co-author) - includes GitHub repo link
3. **Guidance in Frequency Domain**: Diffusion model improvements (co-author)

## File Structure
```
/
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── script.js           # JavaScript for animations and terminal functionality
└── CLAUDE.md          # This documentation file
```

## Technical Implementation Details

### Animation System
- **Input Animation**: Realistic typing with variable speed (80ms ± 40ms)
- **Output Animation**: Fast display (1-5ms per character) for responsive feel
- **Section Delays**: 200ms between major sections
- **Auto-scrolling**: Automatic scroll to bottom after each animation step

### Terminal Behavior
- **Real Terminal Feel**: Input prompt moves to bottom after each command
- **Input Management**: Only newest input field is functional, old ones are disabled
- **Command History**: Arrow keys navigate through previous commands
- **Focus Management**: Click anywhere to focus input, auto-focus maintained

### Responsive Design
- **Mobile Optimized**: Responsive grid layout, adjusted font sizes
- **Fixed Terminal Size**: Maintains consistent window size with internal scrolling
- **Cross-Browser**: Works on Safari, Chrome, Firefox with consistent styling

### Privacy Considerations
- **Limited Personal Info**: Uses professional email (hello@vontobel.dev)
- **No Phone Number**: Removed for privacy
- **Professional Focus**: Emphasizes research and technical achievements

## Color Scheme
```css
--bg-primary: #0a0a0a        /* Terminal background */
--bg-secondary: #1a1a1a      /* Terminal window */
--text-primary: #00ff41      /* Terminal green */
--text-secondary: #ffffff    /* White text */
--text-muted: #888888        /* Gray text */
--accent-blue: #00d9ff       /* Links and headers */
--accent-purple: #a855f7     /* Projects and ASCII art */
--border-color: #333333      /* Borders */
```

## Performance Features
- **Lightweight**: No external frameworks or heavy dependencies
- **Fast Loading**: Minimal CSS/JS, optimized animations
- **Memory Efficient**: Cleans up event listeners, manages DOM efficiently

## Future Enhancement Ideas
- Add syntax highlighting for code examples
- Implement tab completion for commands
- Add more interactive easter eggs
- Consider adding a "matrix rain" background effect
- Add sound effects for typing (optional)

## Development Notes
- **Terminal Authenticity**: Focus on making it feel like a real terminal
- **Content Balance**: Keep startup animation concise, detailed info available via commands
- **Professional Tone**: Maintain technical credibility while being engaging
- **Mobile Experience**: Ensure terminal works well on touch devices

## Contact Information
- **Email**: hello@vontobel.dev
- **GitHub**: https://github.com/votobias
- **LinkedIn**: https://linkedin.com/in/tobias-vontobel-7a4b3b343
- **Location**: Zurich, Switzerland

## Recent Updates
- Fixed input field management (only newest field functional)
- Added GitHub link to CAPTCHA paper
- Removed private information (skills/projects from startup)
- Improved ASCII art display
- Enhanced scrolling behavior
- Consistent input field styling

This website serves as both a portfolio and a demonstration of technical skills, particularly in frontend development and attention to user experience details.