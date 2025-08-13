class TerminalPortfolio {
    constructor() {
        this.commandHistory = [];
        this.historyIndex = -1;
        this.isAnimating = true;
        this.commands = {
            help: () => this.showHelp(),
            about: () => this.showAbout(),
            skills: () => this.showSkills(),
            papers: () => this.showPapers(),
            projects: () => this.showProjects(),
            contact: () => this.showContact(),
            clear: () => this.clearOutput(),
            whoami: () => 'Tobias Vontobel - Machine Learning Engineer & Researcher',
            pwd: () => '/home/tobias/portfolio',
            ls: () => 'about.txt  skills/  research_papers/  projects/  contact.json  README.md',
            date: () => new Date().toLocaleString(),
            echo: (args) => args.join(' '),
            github: () => {
                window.open('https://github.com/votobias', '_blank');
                return 'Opening GitHub profile...';
            },
            linkedin: () => {
                window.open('https://linkedin.com/in/tobias-vontobel-7a4b3b343', '_blank');
                return 'Opening LinkedIn profile...';
            },
            email: () => {
                window.location.href = 'mailto:hello@vontobel.dev';
                return 'Opening email client...';
            },
            arxiv: () => {
                window.open('https://arxiv.org/search/cs?searchtype=author&query=Vontobel%2C+T', '_blank');
                return 'Opening arXiv author profile...';
            },
            privacy: () => this.showPrivacy()
        };
        
        this.contentSections = [
            {
                type: 'ascii',
                content: `
████████╗ ██████╗ ██████╗ ██╗ █████╗ ███████╗
╚══██╔══╝██╔═══██╗██╔══██╗██║██╔══██╗██╔════╝
   ██║   ██║   ██║██████╔╝██║███████║███████╗
   ██║   ██║   ██║██╔══██╗██║██╔══██║╚════██║
   ██║   ╚██████╔╝██████╔╝██║██║  ██║███████║
   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═╝╚══════╝

                Machine Learning Engineer & Researcher`
            },
            {
                type: 'command',
                command: 'cat about.txt',
                content: [
                    'Machine Learning Engineer & Computer Science Graduate (ETH Zurich)',
                    'Research experience at Disney Research Studios developing novel algorithms for generative AI, including the HiWave framework for high-resolution image synthesis.',
                    'Specialized in deep learning, computer vision, and diffusion models with publications at top-tier venues.'
                ]
            },
            {
                type: 'command',
                command: 'ls research_papers/',
                content: [
                    {
                        title: 'HiWave: Training-Free High-Resolution Image Generation via Wavelet-Based Diffusion Sampling',
                        authors: 'Tobias Vontobel et al.',
                        venue: 'arXiv:2506.20452 [cs.CV] • 2025',
                        description: 'Novel approach for high-resolution image generation using wavelet-based diffusion sampling without additional training requirements.',
                        link: 'https://arxiv.org/abs/2506.20452',
                        tags: '[Computer Vision, Diffusion Models, Wavelets]'
                    },
                    {
                        title: 'Guidance in the Frequency Domain Enables High-Fidelity Sampling at Low CFG Scales',
                        authors: 'Seyedmorteza Sadat, Tobias Vontobel, Farnood Salehi, Romann M. Weber',
                        venue: 'arXiv:2506.19713 [cs.CV] • 2025',
                        description: 'Advanced guidance techniques in frequency domain for improved diffusion model sampling with reduced computational requirements.',
                        link: 'https://arxiv.org/abs/2506.19713',
                        tags: '[Diffusion Models, Frequency Domain, CFG]'
                    },
                    {
                        title: 'Breaking reCAPTCHAv2',
                        authors: 'Andreas Plesner, Tobias Vontobel, Roger Wattenhofer',
                        venue: 'arXiv:2409.08831 [cs.CR] • 2024',
                        description: 'Security analysis demonstrating vulnerabilities in reCAPTCHAv2 systems and proposing countermeasures.',
                        link: 'https://arxiv.org/abs/2409.08831',
                        github: 'https://github.com/aplesner/Breaking-reCAPTCHAv2',
                        tags: '[Security, CAPTCHA, Machine Learning]'
                    }
                ]
            },
            {
                type: 'command',
                command: 'cat contact.json',
                content: `{
  "email": "hello@vontobel.dev",
  "github": "https://github.com/votobias",
  "linkedin": "https://linkedin.com/in/tobias-vontobel-7a4b3b343",
  "location": "Zurich, Switzerland",
  "status": "available_for_opportunities"
}`
            }
        ];
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.startBootSequence();
    }

    setupEventListeners() {
        // Event listeners will be set up after animation completes
    }

    async startBootSequence() {
        await this.sleep(1000); // Initial delay
        await this.typeCommand('whoami');
        await this.sleep(500);
        await this.showWhoamiResult();
        await this.sleep(800);
        await this.animateAllContent();
        this.setupInteractiveTerminal();
    }

    async typeCommand(command) {
        const typedCommand = document.getElementById('typed-command');
        const cursor = document.getElementById('main-cursor');
        
        for (let i = 0; i <= command.length; i++) {
            typedCommand.textContent = command.substring(0, i);
            await this.sleep(80 + Math.random() * 40); // Variable typing speed
        }
        
        cursor.style.display = 'none';
    }

    async showWhoamiResult() {
        const result = document.createElement('div');
        result.className = 'whoami-result';
        result.textContent = 'Tobias Vontobel - Machine Learning Engineer & Researcher';
        result.style.color = 'var(--text-secondary)';
        result.style.marginLeft = '20px';
        result.style.marginTop = '10px';
        
        document.getElementById('initial-line').after(result);
        await this.sleep(300);
    }

    async animateAllContent() {
        const animatedContent = document.getElementById('animated-content');
        animatedContent.style.display = 'block';
        
        for (const section of this.contentSections) {
            await this.animateSection(section, animatedContent);
            this.scrollToBottom();
            await this.sleep(200);
        }
    }

    async animateSection(section, container) {
        if (section.type === 'ascii') {
            await this.animateAsciiArt(section.content, container);
        } else if (section.type === 'command') {
            await this.animateCommand(section.command, section.content, container);
        }
    }

    async animateAsciiArt(asciiContent, container) {
        const asciiDiv = document.createElement('div');
        asciiDiv.className = 'ascii-art';
        asciiDiv.style.color = 'var(--accent-purple)';
        asciiDiv.style.textAlign = 'center';
        asciiDiv.style.margin = '30px 0';
        asciiDiv.style.fontSize = '12px';
        asciiDiv.style.lineHeight = '1.2';
        
        const pre = document.createElement('pre');
        pre.style.fontFamily = 'inherit';
        asciiDiv.appendChild(pre);
        container.appendChild(asciiDiv);
        
        const lines = asciiContent.trim().split('\n');
        for (const line of lines) {
            await this.typeTextLine(pre, line, 1);
            this.scrollToBottom();
            await this.sleep(50);
        }
    }

    async typeTextLine(element, text, baseSpeed = 50) {
        const lineSpan = document.createElement('div');
        element.appendChild(lineSpan);
        
        for (let i = 0; i <= text.length; i++) {
            lineSpan.textContent = text.substring(0, i);
            await this.sleep(baseSpeed + Math.random() * 5);
        }
    }

    async animateCommand(command, content, container) {
        // Add command line
        const commandLine = document.createElement('div');
        commandLine.className = 'terminal-line';
        commandLine.style.marginBottom = '10px';
        commandLine.innerHTML = `<span class="prompt">tobias@portfolio:~$</span> `;
        
        const commandSpan = document.createElement('span');
        commandSpan.className = 'command';
        commandSpan.style.color = 'var(--text-secondary)';
        commandLine.appendChild(commandSpan);
        
        container.appendChild(commandLine);
        
        // Type command
        await this.typeText(commandSpan, command, 60);
        await this.sleep(200);
        
        // Add content based on type
        if (Array.isArray(content)) {
            if (typeof content[0] === 'string') {
                // Simple text content (about section)
                await this.animateTextContent(content, container);
            } else {
                // Complex content (papers/projects)
                await this.animateComplexContent(content, container);
            }
        } else if (typeof content === 'object' && !Array.isArray(content)) {
            // Skills content
            await this.animateSkillsContent(content, container);
        } else {
            // JSON content (contact)
            await this.animateJsonContent(content, container);
        }
    }

    async animateTextContent(content, container) {
        const fileContent = document.createElement('div');
        fileContent.className = 'file-content';
        fileContent.style.background = 'rgba(0, 255, 65, 0.05)';
        fileContent.style.padding = '20px';
        fileContent.style.borderRadius = '8px';
        fileContent.style.margin = '15px 0';
        fileContent.style.border = '1px solid rgba(0, 255, 65, 0.2)';
        container.appendChild(fileContent);
        
        for (const line of content) {
            const p = document.createElement('p');
            p.style.marginBottom = '10px';
            p.style.color = 'var(--text-secondary)';
            fileContent.appendChild(p);
            await this.typeText(p, line, 3);
            this.scrollToBottom();
            await this.sleep(50);
        }
    }

    async animateSkillsContent(content, container) {
        const skillsGrid = document.createElement('div');
        skillsGrid.className = 'skills-grid';
        skillsGrid.style.display = 'grid';
        skillsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
        skillsGrid.style.gap = '20px';
        skillsGrid.style.margin = '20px 0';
        container.appendChild(skillsGrid);
        
        for (const [category, skills] of Object.entries(content)) {
            const skillCategory = document.createElement('div');
            skillCategory.className = 'skill-category';
            skillCategory.style.background = 'rgba(0, 217, 255, 0.05)';
            skillCategory.style.padding = '20px';
            skillCategory.style.borderRadius = '8px';
            skillCategory.style.border = '1px solid rgba(0, 217, 255, 0.2)';
            skillsGrid.appendChild(skillCategory);
            
            const header = document.createElement('div');
            header.className = 'category-header';
            header.style.color = 'var(--accent-blue)';
            header.style.fontWeight = '600';
            header.style.marginBottom = '15px';
            header.style.fontSize = '16px';
            skillCategory.appendChild(header);
            
            await this.typeText(header, category, 8);
            await this.sleep(50);
            
            for (const skill of skills) {
                const skillItem = document.createElement('div');
                skillItem.className = 'skill-item';
                skillItem.style.color = 'var(--text-secondary)';
                skillItem.style.padding = '5px 0';
                skillItem.style.paddingLeft = '20px';
                skillItem.style.position = 'relative';
                skillItem.innerHTML = '<span style="position: absolute; left: 0; color: var(--text-primary);">▶</span>';
                skillCategory.appendChild(skillItem);
                
                const skillText = document.createElement('span');
                skillItem.appendChild(skillText);
                await this.typeText(skillText, skill, 3);
                await this.sleep(30);
            }
            await this.sleep(100);
        }
    }

    async animateComplexContent(content, container) {
        const listContainer = document.createElement('div');
        listContainer.style.margin = '20px 0';
        container.appendChild(listContainer);
        
        for (const item of content) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'paper-item';
            itemDiv.style.background = 'rgba(168, 85, 247, 0.05)';
            itemDiv.style.padding = '20px';
            itemDiv.style.margin = '15px 0';
            itemDiv.style.borderRadius = '8px';
            itemDiv.style.border = '1px solid rgba(168, 85, 247, 0.2)';
            itemDiv.style.cursor = 'pointer';
            listContainer.appendChild(itemDiv);
            
            if (item.title) {
                // Paper item
                const title = document.createElement('div');
                title.style.color = 'var(--accent-purple)';
                title.style.fontWeight = '600';
                title.style.fontSize = '16px';
                title.style.marginBottom = '8px';
                title.style.lineHeight = '1.4';
                itemDiv.appendChild(title);
                await this.typeText(title, item.title, 3);
                
                const authors = document.createElement('div');
                authors.style.color = 'var(--accent-blue)';
                authors.style.fontSize = '14px';
                authors.style.marginBottom = '5px';
                authors.style.fontWeight = '500';
                itemDiv.appendChild(authors);
                await this.typeText(authors, item.authors, 2);
                
                const venue = document.createElement('div');
                venue.style.color = 'var(--text-muted)';
                venue.style.fontSize = '12px';
                venue.style.marginBottom = '10px';
                venue.style.fontStyle = 'italic';
                itemDiv.appendChild(venue);
                await this.typeText(venue, item.venue, 2);
                
                const description = document.createElement('div');
                description.style.color = 'var(--text-secondary)';
                description.style.marginBottom = '12px';
                description.style.lineHeight = '1.5';
                itemDiv.appendChild(description);
                await this.typeText(description, item.description, 2);
                
                const links = document.createElement('div');
                links.style.display = 'flex';
                links.style.alignItems = 'center';
                links.style.gap = '15px';
                links.style.flexWrap = 'wrap';
                itemDiv.appendChild(links);
                
                const arxivLink = document.createElement('a');
                arxivLink.href = item.link;
                arxivLink.target = '_blank';
                arxivLink.textContent = '[arxiv]';
                arxivLink.style.color = 'var(--text-primary)';
                arxivLink.style.textDecoration = 'none';
                arxivLink.style.fontWeight = '600';
                arxivLink.style.padding = '4px 8px';
                arxivLink.style.border = '1px solid var(--text-primary)';
                arxivLink.style.borderRadius = '4px';
                arxivLink.style.fontSize = '12px';
                links.appendChild(arxivLink);
                
                if (item.github) {
                    const githubLink = document.createElement('a');
                    githubLink.href = item.github;
                    githubLink.target = '_blank';
                    githubLink.textContent = '[github]';
                    githubLink.style.color = 'var(--accent-blue)';
                    githubLink.style.textDecoration = 'none';
                    githubLink.style.fontWeight = '600';
                    githubLink.style.padding = '4px 8px';
                    githubLink.style.border = '1px solid var(--accent-blue)';
                    githubLink.style.borderRadius = '4px';
                    githubLink.style.fontSize = '12px';
                    links.appendChild(githubLink);
                }
                
                const tags = document.createElement('span');
                tags.style.color = 'var(--text-muted)';
                tags.style.fontSize = '11px';
                tags.textContent = item.tags;
                links.appendChild(tags);
                
            } else {
                // Project item
                const name = document.createElement('div');
                name.style.color = 'var(--accent-purple)';
                name.style.fontWeight = '600';
                name.style.fontSize = '16px';
                name.style.marginBottom = '8px';
                itemDiv.appendChild(name);
                await this.typeText(name, item.name, 5);
                
                const description = document.createElement('div');
                description.style.color = 'var(--text-secondary)';
                description.style.marginBottom = '8px';
                itemDiv.appendChild(description);
                await this.typeText(description, item.description, 2);
                
                const tech = document.createElement('div');
                tech.style.color = 'var(--text-muted)';
                tech.style.fontSize = '12px';
                itemDiv.appendChild(tech);
                await this.typeText(tech, item.tech, 2);
            }
            
            this.scrollToBottom();
            await this.sleep(100);
        }
    }

    async animateJsonContent(content, container) {
        const jsonDiv = document.createElement('div');
        jsonDiv.className = 'contact-json';
        jsonDiv.style.background = 'rgba(0, 255, 65, 0.05)';
        jsonDiv.style.padding = '20px';
        jsonDiv.style.borderRadius = '8px';
        jsonDiv.style.margin = '15px 0';
        jsonDiv.style.border = '1px solid rgba(0, 255, 65, 0.2)';
        jsonDiv.style.overflowX = 'auto';
        
        const pre = document.createElement('pre');
        pre.style.color = 'var(--text-secondary)';
        pre.style.fontFamily = 'inherit';
        jsonDiv.appendChild(pre);
        container.appendChild(jsonDiv);
        
        await this.typeText(pre, content, 2);
        this.scrollToBottom();
    }

    async typeText(element, text, baseSpeed = 50) {
        for (let i = 0; i <= text.length; i++) {
            element.textContent = text.substring(0, i);
            await this.sleep(baseSpeed + Math.random() * 5);
        }
    }

    setupInteractiveTerminal() {
        const interactiveSection = document.getElementById('interactive-section');
        const animatedContent = document.getElementById('animated-content');
        
        // Ensure interactive section is appended after all animated content
        animatedContent.appendChild(interactiveSection);
        interactiveSection.style.display = 'block';
        this.scrollToBottom();
        
        this.setupNewInput();
        this.isAnimating = false;
    }

    disableAllInputs() {
        // Remove active class from all previous inputs
        const oldActiveInputs = document.querySelectorAll('.active-input');
        oldActiveInputs.forEach(input => {
            input.classList.remove('active-input');
        });
        
        // Disable all existing input fields
        const allInputs = document.querySelectorAll('input[type="text"]');
        allInputs.forEach(input => {
            input.disabled = true;
            input.style.opacity = '0.5';
            input.style.cursor = 'not-allowed';
        });
    }

    setupNewInput(inputId = 'command-input') {
        const commandInput = document.getElementById(inputId);
        if (!commandInput) return;
        
        // Make sure this input is enabled and styled properly
        commandInput.disabled = false;
        commandInput.style.opacity = '1';
        commandInput.style.cursor = 'text';
        
        commandInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.executeCommand(commandInput.value.trim());
                commandInput.value = '';
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateHistory('up', inputId);
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateHistory('down', inputId);
            }
        });

        // Focus input when clicking anywhere on terminal
        document.addEventListener('click', () => {
            commandInput.focus();
        });

        // Keep input focused
        commandInput.addEventListener('blur', () => {
            setTimeout(() => commandInput.focus(), 100);
        });
        
        // Auto-focus
        commandInput.focus();
    }

    executeCommand(input) {
        if (!input || this.isAnimating) return;
        
        this.commandHistory.unshift(input);
        this.historyIndex = -1;
        
        // Find the container where we'll add everything
        const animatedContent = document.getElementById('animated-content');
        if (!animatedContent) return;
        
        const [command, ...args] = input.toLowerCase().split(' ');
        
        // Disable all existing input fields first
        this.disableAllInputs();
        
        // Add command to output
        const commandLine = document.createElement('div');
        commandLine.className = 'terminal-line';
        commandLine.innerHTML = `<span class="prompt">tobias@portfolio:~$</span> <span class="command">${input}</span>`;
        animatedContent.appendChild(commandLine);
        
        // Execute command
        let result = '';
        if (this.commands[command]) {
            try {
                result = this.commands[command](args) || '';
            } catch (error) {
                result = `Error: ${error.message}`;
            }
        } else {
            result = `Command not found: ${command}. Type 'help' for available commands.`;
        }
        
        // Add result to output
        if (result) {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'command-result';
            if (result.startsWith('Error:')) {
                resultDiv.classList.add('error-message');
            } else if (result.includes('Opening')) {
                resultDiv.classList.add('success-message');
            }
            resultDiv.textContent = result;
            animatedContent.appendChild(resultDiv);
        }
        
        // Create new input line at the bottom with unique ID
        const inputId = 'command-input-' + Date.now();
        const newInputLine = document.createElement('div');
        newInputLine.className = 'terminal-line active-input';
        newInputLine.innerHTML = `
            <span class="prompt">tobias@portfolio:~$</span>
            <span class="input-area">
                <input type="text" id="${inputId}" class="active-command-input" placeholder="Type 'help' for available commands">
                <span class="cursor-input">|</span>
            </span>
        `;
        animatedContent.appendChild(newInputLine);
        
        // Remove the old interactive section if it exists
        const oldInteractiveSection = document.getElementById('interactive-section');
        if (oldInteractiveSection) {
            oldInteractiveSection.remove();
        }
        
        // Set up event listeners for the new input
        this.setupNewInput(inputId);
        
        // Scroll to bottom
        this.scrollToBottom();
    }

    navigateHistory(direction, inputId = 'command-input') {
        const commandInput = document.getElementById(inputId);
        if (!commandInput) return;
        
        if (direction === 'up' && this.historyIndex < this.commandHistory.length - 1) {
            this.historyIndex++;
            commandInput.value = this.commandHistory[this.historyIndex];
        } else if (direction === 'down' && this.historyIndex > 0) {
            this.historyIndex--;
            commandInput.value = this.commandHistory[this.historyIndex];
        } else if (direction === 'down' && this.historyIndex === 0) {
            this.historyIndex = -1;
            commandInput.value = '';
        }
    }

    showHelp() {
        return `Available commands:
help      - Show this help message
about     - Learn more about me
skills    - View my technical skills
papers    - View my research papers
projects  - See my latest projects
contact   - Get my contact information
clear     - Clear the terminal
whoami    - Display current user
ls        - List directory contents
pwd       - Show current directory
date      - Display current date and time
echo      - Echo back the arguments
github    - Open my GitHub profile
linkedin  - Open my LinkedIn profile
email     - Send me an email
arxiv     - Open my arXiv author profile
privacy   - View privacy policy and analytics info

Navigation:
↑/↓ arrows - Navigate command history
Click anywhere to focus input`;
    }

    showAbout() {
        return `About Tobias Vontobel:

Machine learning engineer with research experience at Disney Research Studios, where I 
developed the HiWave framework for high-resolution image generation. Computer Science 
graduate from ETH Zurich with expertise in generative AI, diffusion models, and computer vision.

My work spans from academic research (SIGGRAPH Asia submissions, patent applications) to 
practical applications including iOS game development and enterprise solutions. Published 
researcher with focus on novel algorithms for AI and security applications.

Currently exploring: Advanced diffusion models, frequency-domain image processing, and 
the intersection of research and real-world AI deployment.`;
    }

    showSkills() {
        return `Technical Skills:

🤖 AI & Machine Learning
   • PyTorch, TensorFlow, Hugging Face
   • Diffusion Models, Generative AI
   • Computer Vision, Deep Learning
   • PyWavelets, Frequency-Domain Processing
   • GPU Optimization & Distributed Computing

💻 Programming
   • Python, C++, C#, Java
   • SQL, Algorithm Design
   • Unity Game Development
   • Enterprise Software Development

🛠️ Tools & Libraries
   • NumPy/SciPy, Git, Docker
   • SAP HANA, GPU Clusters
   • CI/CD, Database Design
   • Consumer GPU Optimization

📱 Specializations
   • High-Resolution Image Synthesis
   • Security Research & Analysis
   • Mobile Game Development
   • ERP & Business Process Automation`;
    }

    showPapers() {
        return `Research Papers:

📄 HiWave: Training-Free High-Resolution Image Generation via Wavelet-Based Diffusion Sampling
   arXiv:2506.20452 [cs.CV] • 2025
   Novel approach for high-resolution image generation using wavelet-based diffusion 
   sampling without additional training requirements.
   Link: https://arxiv.org/abs/2506.20452

🔒 Breaking reCAPTCHAv2
   Andreas Plesner, Tobias Vontobel, Roger Wattenhofer
   arXiv:2409.08831 [cs.CR] • 2024
   Security analysis demonstrating vulnerabilities in reCAPTCHAv2 systems and 
   proposing countermeasures.
   arXiv: https://arxiv.org/abs/2409.08831
   GitHub: https://github.com/aplesner/Breaking-reCAPTCHAv2

⚡ Guidance in the Frequency Domain Enables High-Fidelity Sampling at Low CFG Scales
   Seyedmorteza Sadat, Tobias Vontobel, Farnood Salehi, Romann M. Weber
   arXiv:2506.19713 [cs.CV] • 2025
   Advanced guidance techniques in frequency domain for improved diffusion model 
   sampling with reduced computational requirements.
   Link: https://arxiv.org/abs/2506.19713

Research focuses: Computer Vision, Diffusion Models, Security, Machine Learning
Type 'arxiv' to view my complete publication list.`;
    }

    showProjects() {
        return `Recent Projects:

🎨 HiWave Framework (Disney Research Studios)
   Master's thesis: Novel training-free high-resolution image generation framework
   Technologies: PyTorch, Diffusion Models, Discrete Wavelet Transform
   Status: SIGGRAPH Asia 2025 submission, patent pending

🏙️ Flatland Empire
   iOS city-building game featured in Apple's "New Games We Love"
   Technologies: Unity, C#, iOS Development
   Impact: 150,000+ downloads in first month

🔒 CAPTCHA Solver
   Automated system achieving 100% bypass rate using advanced ML
   Technologies: Python, YOLOv8, Computer Vision
   Status: Published at IEEE COMPSAC 2024

🏢 Enterprise Solutions
   ERP automation and data analysis tools for fintech and logistics
   Technologies: C#, SQL, SAP HANA, Python, TensorFlow
   Companies: modum.io AG, Credit Suisse

For more details about any project, visit my GitHub profile or contact me directly.`;
    }

    showContact() {
        return `Contact Information:

📧 Email: hello@vontobel.dev
🐙 GitHub: https://github.com/votobias
💼 LinkedIn: https://linkedin.com/in/tobias-vontobel-7a4b3b343
📍 Location: Zurich, Switzerland

💡 Currently: Available for exciting opportunities in AI research and development

Feel free to reach out for:
• Research collaboration opportunities
• AI/ML consulting
• Generative AI projects
• Speaking engagements
• Academic partnerships

I'm always interested in discussing cutting-edge AI research and innovative applications!`;
    }

    showPrivacy() {
        return `Privacy Policy & Analytics Information:

ANALYTICS
This website uses Counter.dev for minimal, privacy-focused analytics.
Counter.dev is a free, lightweight analytics service that:

• Does NOT use cookies
• Does NOT track individual users
• Does NOT collect personal data
• Fully GDPR compliant

WHAT WE TRACK:
• Total page views
• Unique visitor count (via hash, not IP)
• Country of origin
• Referrer source
• Screen resolution
• User agent (browser/OS type)

YOUR PRIVACY:
• No IP addresses are stored
• No personal information is collected
• No tracking across websites
• No consent banner needed (GDPR compliant)
• Data is aggregated and anonymous

DATA USAGE:
Analytics data helps me:
• Understand portfolio reach
• See which content resonates
• Track visitor geography for professional networking
• Improve website performance

BLOCKING:
You can block Counter.dev using any ad blocker or by adding
cdn.counter.dev to your hosts file or DNS blocker.

For more info: https://counter.dev/privacy

Your privacy is respected. This is a professional portfolio, not a data collection site.`;
    }

    clearOutput() {
        const animatedContent = document.getElementById('animated-content');
        if (!animatedContent) return '';
        
        // Disable all existing inputs first
        this.disableAllInputs();
        
        // Remove all content except keep the initial animated content
        const children = Array.from(animatedContent.children);
        children.forEach(child => {
            // Only remove terminal lines and command results (interactive content)
            if (child.classList.contains('terminal-line') || child.classList.contains('command-result')) {
                child.remove();
            }
        });
        
        // Remove interactive section if it exists
        const oldInteractiveSection = document.getElementById('interactive-section');
        if (oldInteractiveSection) {
            oldInteractiveSection.remove();
        }
        
        // Create new input line at the bottom after clearing with unique ID
        const inputId = 'command-input-' + Date.now();
        const newInputLine = document.createElement('div');
        newInputLine.className = 'terminal-line active-input';
        newInputLine.innerHTML = `
            <span class="prompt">tobias@portfolio:~$</span>
            <span class="input-area">
                <input type="text" id="${inputId}" class="active-command-input" placeholder="Type 'help' for available commands">
                <span class="cursor-input">|</span>
            </span>
        `;
        animatedContent.appendChild(newInputLine);
        
        this.setupNewInput(inputId);
        this.scrollToBottom();
        return '';
    }

    scrollToBottom() {
        const terminalContent = document.querySelector('.terminal-content');
        if (terminalContent) {
            terminalContent.scrollTop = terminalContent.scrollHeight;
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize the terminal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const terminal = new TerminalPortfolio();
    
    // Handle privacy link click
    const privacyLink = document.getElementById('privacy-link');
    if (privacyLink) {
        privacyLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            // If animation is still running, wait for it to finish
            if (terminal.isAnimating) {
                return;
            }
            
            // Execute privacy command
            const commandInput = document.getElementById('command-input');
            if (commandInput) {
                commandInput.value = 'privacy';
                terminal.processCommand('privacy');
                commandInput.value = '';
                
                // Scroll to terminal
                document.querySelector('.terminal-container').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    }
});

// Add some keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl+L to clear (like in real terminals)
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        document.getElementById('command-output').innerHTML = '';
    }
    
    // Escape to focus input
    if (e.key === 'Escape') {
        const input = document.getElementById('command-input');
        if (input) input.focus();
    }
});