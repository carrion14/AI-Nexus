/**
 * SOF.AI Core Logic
 * Handles multiple pages, modal interactions, filtering, and the professional AI assistant.
 * Architect: Rubén Carrión
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Database Ecosystem ---
    const dbTools = [
        // === AI TOOLS (Creative, Personal, Education) ===
        {
            id: 1,
            name: "ChatGPT",
            mainCategory: "tools",
            category: "Text Generation",
            desc: "Versatile AI assistant for technical writing and analysis.",
            details: "OpenAI's versatile AI assistant for technical document writing, data analysis, and multimodal content creation. Includes advanced reasoning models (o1, o3, GPT-5) and web search capabilities.",
            link: "https://chatgpt.com/",
            price: "Freemium",
            popular: true
        },
        {
            id: 2,
            name: "Claude",
            mainCategory: "tools",
            category: "Text Generation",
            desc: "Anthropic's assistant focused on safety and reasoning.",
            details: "Focused on safety and advanced reasoning. Features a 200,000 token context window, ideal for analyzing extensive documents, architectural planning, and clean code writing.",
            link: "https://claude.ai/",
            price: "Freemium",
            popular: true
        },
        {
            id: 3,
            name: "Midjourney",
            mainCategory: "tools",
            category: "Image Generation",
            desc: "Leading artistic and photorealistic image platform.",
            details: "Leading platform for image generation with artistic, painterly aesthetics and high-quality photorealism. Professionally used for concept art, marketing, and creative visuals.",
            link: "https://www.midjourney.com/",
            price: "Paid",
            popular: true
        },
        {
            id: 4,
            name: "DALL-E 3",
            mainCategory: "tools",
            category: "Image Generation",
            desc: "OpenAI's creative image generator integrated with ChatGPT.",
            details: "OpenAI tool to generate creative images from text quickly. It is a standard for advertising and marketing teams requiring integration with the ChatGPT ecosystem.",
            link: "https://openai.com/dall-e",
            price: "Paid",
            popular: false
        },
        {
            id: 5,
            name: "Nano Banana",
            mainCategory: "tools",
            category: "Image Generation",
            desc: "Google's precise native image editor (Gemini Flash).",
            details: "Native Google model (Gemini 2.5 Flash Image) for precise editing. Allows background changes, adding clothes, full scene transformations, and creating 3D figures from photos.",
            link: "https://aistudio.google.com/",
            price: "Free",
            popular: true
        },
        {
            id: 6,
            name: "Sora",
            mainCategory: "tools",
            category: "Video Generation",
            desc: "Cinematic video creation from text with physical realism.",
            details: "OpenAI model that creates cinematic videos up to 60 seconds with high visual fidelity and physical realism from text instructions.",
            link: "https://openai.com/sora",
            price: "Paid",
            popular: true
        },
        {
            id: 7,
            name: "Runway Gen-4",
            mainCategory: "tools",
            category: "Video Generation",
            desc: "Optimized cinematic video generation tool.",
            details: "Video generation tool that produces optimized cinematic clips, solving previous facial distortion issues and improving motion realism.",
            link: "https://runwayml.com/",
            price: "Paid",
            popular: true
        },
        {
            id: 8,
            name: "Pika",
            mainCategory: "tools",
            category: "Video Generation",
            desc: "Short video clips and animations for social media.",
            details: "Tool for creating short video clips and animations from text or images. Widely used for social media content.",
            link: "https://pika.art/",
            price: "Freemium",
            popular: false
        },
        {
            id: 9,
            name: "Suno",
            mainCategory: "tools",
            category: "Music Generation",
            desc: "Full song generator with vocals and lyrics.",
            details: "Generates complete songs (vocals, lyrics, and instruments) from text. Includes tools to export stems, MIDI, and adjust BPM/pitch.",
            link: "https://suno.com/",
            price: "Freemium",
            popular: true
        },
        {
            id: 10,
            name: "Udio",
            mainCategory: "tools",
            category: "Music Generation",
            desc: "High-fidelity music with crisp vocals.",
            details: "High-fidelity music generator focused on crisp vocal quality. Allows remixing, extending sections, and pasting own lyrics for deep track control.",
            link: "https://www.udio.com/",
            price: "Freemium",
            popular: false
        },
        {
            id: 11,
            name: "ElevenLabs",
            mainCategory: "tools",
            category: "Audio & Voice",
            desc: "Voice cloning and multilingual dubbing platform.",
            details: "Platform for voice generation, sound effects, and music. Allows voice cloning, multilingual dubbing, and narrations with emotional control (whispers, sarcasm).",
            link: "https://elevenlabs.io/",
            price: "Freemium",
            popular: true
        },
        {
            id: 12,
            name: "Adobe Firefly",
            mainCategory: "tools",
            category: "Creativity",
            desc: "Generative suite integrated into Creative Cloud.",
            details: "Suite integrated into Photoshop and Illustrator for image generation, generative expansion, and object removal/fill.",
            link: "https://www.adobe.com/firefly",
            price: "Paid",
            popular: true
        },
        {
            id: 13,
            name: "Writesonic",
            mainCategory: "tools",
            category: "Text Generation",
            desc: "Advanced prompt optimization and content tool.",
            details: "Advanced prompt optimization tool to improve accuracy and quality of language model outputs. Also generates SEO-friendly content.",
            link: "https://writesonic.com/",
            price: "Paid",
            popular: false
        },
        {
            id: 14,
            name: "PromptPerfect",
            mainCategory: "tools",
            category: "Text Generation",
            desc: "Prompt engineering optimization platform.",
            details: "Platform to optimize prompts for various AI models to ensure the best possible output quality.",
            link: "https://promptperfect.xyz/",
            price: "Paid",
            popular: false
        },
        {
            id: 15,
            name: "GravityWrite",
            mainCategory: "tools",
            category: "Text Generation",
            desc: "Interactive AI story generator.",
            details: "Interactive story generator powered by AI, helping writers overcome block and generate creative narratives.",
            link: "https://gravitywrite.com/",
            price: "Paid",
            popular: false
        },
        {
            id: 16,
            name: "Talefy",
            mainCategory: "tools",
            category: "Text Generation",
            desc: "Copywriting and content marketing assistant.",
            details: "AI assistant specialized for copywriting and content marketing workflows.",
            link: "https://talefy.ai/",
            price: "Paid",
            popular: false
        },
        {
            id: 17,
            name: "AI Text Humanizer",
            mainCategory: "tools",
            category: "Text Generation",
            desc: "Rewrites AI content to bypass detection.",
            details: "Tool to humanize AI-generated text, improving readability and evading AI detection systems.",
            link: "https://humanizerpro.ai/",
            price: "Paid",
            popular: false
        },
        {
            id: 18,
            name: "Google Veo",
            mainCategory: "tools",
            category: "Video Generation",
            desc: "Google's advanced cinematic video model.",
            details: "Advanced Google model for realistic cinematic visuals. Includes synchronized audio generation, clip extension, and reference image usage.",
            link: "https://cloud.google.com/vertex-ai",
            price: "Paid",
            popular: false
        },
        {
            id: 19,
            name: "Rayon Design",
            mainCategory: "tools",
            category: "Creativity",
            desc: "Architecture tool for moodboards and 3D views.",
            details: "Tool for architects and designers that generates moodboards, material studies, and 3D views from 2D plans.",
            link: "https://www.rayon.design/",
            price: "Freemium",
            popular: false
        },
        {
            id: 20,
            name: "Sudowrite",
            mainCategory: "tools",
            category: "Creativity",
            desc: "Creative writing assistant for fiction authors.",
            details: "Creative writing assistant for fiction that helps generate plots, expand outlines, and improve character development.",
            link: "https://www.sudowrite.com/",
            price: "Paid",
            popular: false
        },
        {
            id: 21,
            name: "VEED.IO",
            mainCategory: "tools",
            category: "Video Generation",
            desc: "Online AI video editor for social media.",
            details: "Online video editor with AI that simplifies content creation for social media and audience growth.",
            link: "https://www.veed.io/",
            price: "Freemium",
            popular: false
        },
        {
            id: 22,
            name: "Spell",
            mainCategory: "tools",
            category: "Creativity",
            desc: "Generates editable 3D worlds from text.",
            details: "Generation of editable 3D worlds from text or images for design in virtual environments.",
            link: "https://spell.com/",
            price: "Paid",
            popular: false
        },
        {
            id: 23,
            name: "Patternaly",
            mainCategory: "tools",
            category: "Creativity",
            desc: "Seamless pattern generator for designers.",
            details: "Generates seamless repetitive patterns for graphic and textile design from text prompts.",
            link: "https://patternaly.com/",
            price: "Paid",
            popular: false
        },
        {
            id: 24,
            name: "Punchd",
            mainCategory: "tools",
            category: "Text Generation",
            desc: "Copywriting tool for marketing headlines.",
            details: "Copywriting tool designed to generate and score the effectiveness of marketing headlines.",
            link: "https://punchd.ai/",
            price: "Paid",
            popular: false
        },
        {
            id: 25,
            name: "MusicHero.ai",
            mainCategory: "tools",
            category: "Music Generation",
            desc: "Music generation and vocal removal.",
            details: "Combines music generation with vocal removal, lyrics creation, and music videos for social media.",
            link: "https://musichero.ai/",
            price: "Freemium",
            popular: false
        },
        {
            id: 26,
            name: "SOUNDRAW",
            mainCategory: "tools",
            category: "Music Generation",
            desc: "Instrumental music generator.",
            details: "Instrumental music generator allowing bar-by-bar adjustments of duration, intensity, and instruments.",
            link: "https://soundraw.io/",
            price: "Paid",
            popular: false
        },
        {
            id: 27,
            name: "Beatoven.ai",
            mainCategory: "tools",
            category: "Music Generation",
            desc: "Mood-based background tracks.",
            details: "Creation of background tracks based on moods for videos and podcasts with integrated licensing.",
            link: "https://www.beatoven.ai/",
            price: "Freemium",
            popular: false
        },
        {
            id: 28,
            name: "Loudly",
            mainCategory: "tools",
            category: "Music Generation",
            desc: "Royalty-free tracks with stem control.",
            details: "Creation of royalty-free tracks with style controls and stem isolation (vocals and drums).",
            link: "https://www.loudly.com/",
            price: "Freemium",
            popular: false
        },
        {
            id: 29,
            name: "Mureka",
            mainCategory: "tools",
            category: "Music Generation",
            desc: "Song structure focused music platform.",
            details: "Music platform highlighting song structure (verse-chorus) and distortion-free audio quality.",
            link: "https://www.mureka.ai/",
            price: "Freemium",
            popular: false
        },
        {
            id: 30,
            name: "Gemini",
            mainCategory: "tools",
            category: "Text Generation",
            desc: "Google's conversational AI chat.",
            details: "Conversational chat by Google with advanced multimodal models (Gemini 1.5 Pro).",
            link: "https://gemini.google.com/",
            price: "Freemium",
            popular: true
        },
        {
            id: 31,
            name: "CapCut AI",
            mainCategory: "tools",
            category: "Video Editing",
            desc: "TikTok's editor with AI viral features.",
            details: "Video editor integrated with TikTok. Uses AI to transform long videos into viral short clips.",
            link: "https://www.capcut.com/",
            price: "Freemium",
            popular: true
        },
        {
            id: 32,
            name: "Opus Clip",
            mainCategory: "tools",
            category: "Video Editing",
            desc: "AI clipping tool for shorts.",
            details: "Clipping tool that transforms long videos into short clips ready to go viral.",
            link: "https://www.opus.pro/",
            price: "Freemium",
            popular: false
        },
        {
            id: 33,
            name: "MagicTrips",
            mainCategory: "tools",
            category: "Personal Assistant",
            desc: "AI-powered travel planner.",
            details: "Generates travel itineraries and plans trips using AI.",
            link: "https://magictravel.ai",
            price: "Freemium",
            popular: false
        },
        {
            id: 34,
            name: "Monica",
            mainCategory: "tools",
            category: "Personal Assistant",
            desc: "Browser copilot extension.",
            details: "Browser extension 'Copilot' to chat, summarize webs, and write emails.",
            link: "https://monica.im/",
            price: "Freemium",
            popular: false
        },
        {
            id: 35,
            name: "DeepL Translator",
            mainCategory: "tools",
            category: "Translation",
            desc: "High-precision text translation.",
            details: "Text and document translation with high precision and natural phrasing.",
            link: "https://www.deepl.com/",
            price: "Freemium",
            popular: true
        },
        {
            id: 36,
            name: "Microsoft Translator",
            mainCategory: "tools",
            category: "Translation",
            desc: "Real-time conversation translations.",
            details: "Translations for live conversations, menus, and street text.",
            link: "https://translator.microsoft.com",
            price: "Free",
            popular: false
        },
        {
            id: 37,
            name: "Unreal Speech",
            mainCategory: "tools",
            category: "Audio & Voice",
            desc: "Ultra-fast TTS API for devs.",
            details: "Text-to-speech (TTS) API that is ultra-fast and cost-effective for developers.",
            link: "https://unrealspeech.com",
            price: "Paid",
            popular: false
        },
        {
            id: 38,
            name: "WellSaid",
            mainCategory: "tools",
            category: "Audio & Voice",
            desc: "Enterprise-grade text-to-speech.",
            details: "High-quality text-to-speech for corporate narrations.",
            link: "https://wellsaidlabs.com",
            price: "Paid",
            popular: false
        },
        {
            id: 39,
            name: "Respeecher",
            mainCategory: "tools",
            category: "Audio & Voice",
            desc: "Speech-to-Speech voice cloning.",
            details: "Voice cloning (Speech-to-Speech) used for cinema and video games.",
            link: "https://www.respeecher.com/",
            price: "Paid",
            popular: false
        },

        // === AI BUSINESS (Workflows, Marketing, Coding, Data) ===
        {
            id: 99,
            name: "Gemini (Canvas)",
            mainCategory: "business",
            category: "Programming",
            desc: "Collaborative coding interface.",
            details: "Google's workspace for iterative writing and coding. Provides a canvas interface for refining code blocks and documents.",
            link: "https://gemini.google.com/",
            price: "Freemium",
            popular: true
        },
        {
            id: 40,
            name: "Cursor",
            mainCategory: "business",
            category: "Programming",
            desc: "AI-first Code Editor (VS Code fork).",
            details: "IDE based on VS Code that uses AI to predict edits, translate natural language to code, and perform automatic reviews navigating large file structures.",
            link: "https://www.cursor.com/",
            price: "Freemium",
            popular: true
        },
        {
            id: 41,
            name: "Devin AI",
            mainCategory: "business",
            category: "Programming",
            desc: "Autonomous software engineer.",
            details: "Autonomous software engineer capable of planning and executing full projects, fixing bugs, and migrating legacy code without supervision.",
            link: "https://www.cognition.ai/devin",
            price: "Paid",
            popular: true
        },
        {
            id: 42,
            name: "GitHub Copilot",
            mainCategory: "business",
            category: "Programming",
            desc: "The standard AI pair programmer.",
            details: "Assistant that suggests code completion, creates functions, and detects errors in real-time integrating into popular code editors.",
            link: "https://github.com/features/copilot",
            price: "Paid",
            popular: true
        },
        {
            id: 43,
            name: "Claude Code",
            mainCategory: "business",
            category: "Programming",
            desc: "CLI agent for project orchestration.",
            details: "CLI-type agent that understands full code projects to orchestrate changes across multiple files and manage workflows from detection to Pull Request.",
            link: "https://anthropic.com/claude-code",
            price: "Paid",
            popular: false
        },
        {
            id: 44,
            name: "Abacus AI Desktop",
            mainCategory: "business",
            category: "Programming",
            desc: "High-performance agent for complex apps.",
            details: "Agent to build complex applications, manage databases, and integrate payment systems via natural language instructions.",
            link: "https://abacus.ai/",
            price: "Paid",
            popular: false
        },
        {
            id: 45,
            name: "IQuest Coder",
            mainCategory: "business",
            category: "Programming",
            desc: "Open source coding model (128K context).",
            details: "Open source model with 128K context support for generating and refining code across multiple files.",
            link: "https://github.com/iquest-coder",
            price: "Free",
            popular: false
        },
        {
            id: 46,
            name: "Tabnine",
            mainCategory: "business",
            category: "Programming",
            desc: "AI code completion that adapts to your style.",
            details: "AI-driven code completion tool that adapts to coding habits. Compatible with 20+ languages and runs offline/online.",
            link: "https://www.tabnine.com/",
            price: "Freemium",
            popular: false
        },
        {
            id: 47,
            name: "Replit Ghostwriter",
            mainCategory: "business",
            category: "Programming",
            desc: "Cloud IDE assistant for coding.",
            details: "AI-based coding assistant in Replit cloud IDE. Provides real-time code completions, debugging assistance, and explanations.",
            link: "https://replit.com/",
            price: "Freemium",
            popular: false
        },
        {
            id: 48,
            name: "Synthesia",
            mainCategory: "business",
            category: "Marketing",
            desc: "AI avatars for corporate video.",
            details: "Create realistic AI avatar videos. Converts text to video with voiceovers in 140+ languages, ideal for training and demos.",
            link: "https://www.synthesia.io/",
            price: "Freemium",
            popular: true
        },
        {
            id: 49,
            name: "HeyGen",
            mainCategory: "business",
            category: "Marketing",
            desc: "Scalable video generation with avatars.",
            details: "Video generation with digital twins in 4K. Offers voice cloning and lip-syncing in 175 languages for scalable marketing.",
            link: "https://www.heygen.com/",
            price: "Freemium",
            popular: true
        },
        {
            id: 50,
            name: "Jasper",
            mainCategory: "business",
            category: "Marketing",
            desc: "Enterprise content and brand voice generator.",
            details: "Content generator for blogs, ads, and social media. Includes brand voice training and optimization at scale.",
            link: "https://www.jasper.ai",
            price: "Paid",
            popular: true
        },
        {
            id: 51,
            name: "Surfer SEO",
            mainCategory: "business",
            category: "Marketing",
            desc: "SEO optimization based on competitors.",
            details: "Content optimization based on competitor analysis to offer keyword recommendations and improve organic visibility.",
            link: "https://surferseo.com/",
            price: "Paid",
            popular: true
        },
        {
            id: 52,
            name: "CRM Creatio",
            mainCategory: "business",
            category: "Marketing",
            desc: "No-code marketing automation platform.",
            details: "Marketing automation platform for designing and optimizing multichannel campaigns with AI-driven segmentation.",
            link: "https://www.creatio.com/",
            price: "Paid",
            popular: false
        },
        {
            id: 53,
            name: "GMC Guard",
            mainCategory: "business",
            category: "Marketing",
            desc: "Audits for Google Merchant Center.",
            details: "Technical tool that audits and corrects misrepresentation issues in Google Merchant Center.",
            link: "https://gmcguard.com/",
            price: "Paid",
            popular: false
        },
        {
            id: 54,
            name: "Sequenzy",
            mainCategory: "business",
            category: "Marketing",
            desc: "Automated email sequences.",
            details: "Generation and deployment of email sequences automatically adapted to brand identity.",
            link: "https://sequenzy.ai/",
            price: "Paid",
            popular: false
        },
        {
            id: 55,
            name: "Copy.ai",
            mainCategory: "business",
            category: "Marketing",
            desc: "Persuasive text generator for sales.",
            details: "Generates persuasive copy for marketing and sales.",
            link: "https://www.copy.ai/",
            price: "Freemium",
            popular: false
        },
        {
            id: 56,
            name: "AlphaSense",
            mainCategory: "business",
            category: "Finance",
            desc: "Financial market intelligence search.",
            details: "Financial intelligence utilizing semantic search in earnings transcripts and reports to reduce market research time.",
            link: "https://www.alpha-sense.com/",
            price: "Paid",
            popular: true
        },
        {
            id: 57,
            name: "Upstart",
            mainCategory: "business",
            category: "Finance",
            desc: "AI for credit decision making.",
            details: "AI for credit decisions analyzing over 1,000 variables to assess risks and automate loan origination.",
            link: "https://www.upstart.com",
            price: "Paid",
            popular: false
        },
        {
            id: 58,
            name: "InvoiceAgent.ai",
            mainCategory: "business",
            category: "Finance",
            desc: "Automated invoice data extraction.",
            details: "Automation of invoice data extraction for management and comprehensive financial analysis.",
            link: "https://invoiceagent.ai/",
            price: "Paid",
            popular: false
        },
        {
            id: 59,
            name: "Sardine",
            mainCategory: "business",
            category: "Finance",
            desc: "Real-time fraud prevention.",
            details: "Risk management to detect and prevent financial fraud in real-time by analyzing device behavior.",
            link: "https://www.sardine.ai/",
            price: "Paid",
            popular: false
        },
        {
            id: 60,
            name: "make.com",
            mainCategory: "business",
            category: "Automation",
            desc: "Visual workflow automation platform.",
            details: "Platform for visual workflow automation connecting apps and services.",
            link: "https://www.make.com/",
            price: "Freemium",
            popular: true
        },
        {
            id: 61,
            name: "Zapier AI",
            mainCategory: "business",
            category: "Automation",
            desc: "Automates tasks across 8,000+ apps.",
            details: "Agents that automate tasks in over 8,000 apps. Learn from historical flows to connect tools autonomously via natural language.",
            link: "https://zapier.com/ai",
            price: "Freemium",
            popular: true
        },
        {
            id: 62,
            name: "n8n",
            mainCategory: "business",
            category: "Automation",
            desc: "Workflow automation for technical teams.",
            details: "Visual node editor to connect apps and services, allowing creation of complex processes like data backups.",
            link: "https://n8n.io/",
            price: "Paid",
            popular: false
        },
        {
            id: 63,
            name: "Logic Sheet",
            mainCategory: "business",
            category: "Automation",
            desc: "Workflow automation in Google Sheets.",
            details: "Automation of workflows in Google Sheets using AI agents that execute multi-step tasks.",
            link: "https://logicsheet.co/",
            price: "Paid",
            popular: false
        },
        {
            id: 64,
            name: "Arahi AI",
            mainCategory: "business",
            category: "Automation",
            desc: "Autonomous flow platform.",
            details: "Platform to execute autonomous flows in over 2,800 applications using intelligent agents.",
            link: "https://arahi.ai/",
            price: "Paid",
            popular: false
        },
        {
            id: 65,
            name: "Tableau AI",
            mainCategory: "business",
            category: "Data & Analysis",
            desc: "Data insights via natural language.",
            details: "Platform that converts raw data into actionable insights, allowing natural language queries and automatic forecasting.",
            link: "https://www.tableau.com/products/ai",
            price: "Paid",
            popular: true
        },
        {
            id: 66,
            name: "SQLAI.ai",
            mainCategory: "business",
            category: "Data & Analysis",
            desc: "Text to SQL queries optimizer.",
            details: "Transforms natural language prompts into precise SQL statements and optimizes slow queries.",
            link: "https://www.sqlai.ai/",
            price: "Paid",
            popular: false
        },
        {
            id: 67,
            name: "Adverity",
            mainCategory: "business",
            category: "Data & Analysis",
            desc: "Unified marketing data platform.",
            details: "Unifies marketing data from various sources to extract insights and automate information cleaning.",
            link: "https://www.adverity.com/",
            price: "Paid",
            popular: false
        },
        {
            id: 68,
            name: "Arka",
            mainCategory: "business",
            category: "Data & Analysis",
            desc: "Analytical queries via NLP.",
            details: "Performs analytical queries to various data sources using natural language processing.",
            link: "https://arka.ai/",
            price: "Paid",
            popular: false
        },
        {
            id: 69,
            name: "NotebookLM",
            mainCategory: "business",
            category: "Data & Analysis",
            desc: "AI research assistant for your docs.",
            details: "AI assistant that generates information and summaries from your own documents and sources.",
            link: "https://notebooklm.google.com/",
            price: "Free",
            popular: true
        },
        {
            id: 70,
            name: "Google AI Studio",
            mainCategory: "business",
            category: "Development",
            desc: "Experimentation space for Gemini models.",
            details: "Experimentation space to test Gemini models and prototype AI applications.",
            link: "https://aistudio.google.com/",
            price: "Free",
            popular: false
        },
        {
            id: 71,
            name: "Vertex AI",
            mainCategory: "business",
            category: "Development",
            desc: "Unified AI development platform.",
            details: "Unified platform to create, deploy, and scale generative AI models.",
            link: "https://cloud.google.com/vertex-ai",
            price: "Paid",
            popular: false
        },
        {
            id: 72,
            name: "Plus AI",
            mainCategory: "business",
            category: "Presentations",
            desc: "Google Slides add-on for slide generation.",
            details: "Add-on for Google Slides that generates slides and designs automatically.",
            link: "https://plusdocs.com",
            price: "Freemium",
            popular: false
        },
        {
            id: 73,
            name: "Simplified",
            mainCategory: "business",
            category: "Presentations",
            desc: "All-in-one design and presentation suite.",
            details: "All-in-one suite: Design, Video, Copywriting, and Presentations.",
            link: "https://simplified.com",
            price: "Freemium",
            popular: false
        },
        {
            id: 74,
            name: "Tome",
            mainCategory: "business",
            category: "Presentations",
            desc: "Storytelling and slide creation from prompts.",
            details: "Creation of stories and visual slides using simple prompts.",
            link: "https://tome.app",
            price: "Freemium",
            popular: true
        },
        {
            id: 75,
            name: "PowerMode AI",
            mainCategory: "business",
            category: "Presentations",
            desc: "Pitch decks for startups.",
            details: "Specialized in creating 'Pitch Decks' for startups and businesses.",
            link: "https://powermodeai.com",
            price: "Free",
            popular: false
        },
        {
            id: 76,
            name: "Fellow",
            mainCategory: "business",
            category: "Email & Meeting",
            desc: "Meeting agendas and notes management.",
            details: "Management of meeting agendas, collaborative notes, and task tracking.",
            link: "https://fellow.app",
            price: "Freemium",
            popular: false
        },
        {
            id: 77,
            name: "Superhuman",
            mainCategory: "business",
            category: "Email & Meeting",
            desc: "Ultra-fast AI email client.",
            details: "Ultra-fast email client with AI for writing and triage.",
            link: "https://superhuman.com/",
            price: "Paid",
            popular: true
        },
        {
            id: 78,
            name: "Shortwave",
            mainCategory: "business",
            category: "Email & Meeting",
            desc: "Converts email into task lists.",
            details: "Converts your email into a task list with AI summaries.",
            link: "https://shortwave.com",
            price: "Freemium",
            popular: false
        },
        {
            id: 79,
            name: "Merlin",
            mainCategory: "business",
            category: "Email & Meeting",
            desc: "Chrome extension for AI on any site.",
            details: "Chrome extension that brings ChatGPT to Gmail, LinkedIn, and any website.",
            link: "https://getmerlin.in",
            price: "Freemium",
            popular: false
        }
    ];

    // --- 2. Page Detection ---
    const isHome = document.body.id === 'homePage';
    const isTools = document.body.id === 'toolsPage';
    const isBusiness = document.body.id === 'businessPage';

    // --- 3. Rendering Logic ---

    // Home Page Logic
    if (isHome) {
        renderPopularCategories();
        renderHomeGrid();
        setupSearch('globalSearch', 'trendingGrid', true);
    }

    // Tools & Business Pages Logic
    if (isTools || isBusiness) {
        const targetMainCat = isTools ? 'tools' : 'business';
        populateSubCategories(targetMainCat);
        filterPageGrid(targetMainCat); // Initial render

        // Event Listeners
        const subCatSelect = document.getElementById('subCatSelect');
        const priceSelect = document.getElementById('priceSelect');
        const pageSearch = document.getElementById('pageSearch');

        if (subCatSelect) subCatSelect.addEventListener('change', () => filterPageGrid(targetMainCat));
        if (priceSelect) priceSelect.addEventListener('change', () => filterPageGrid(targetMainCat));
        if (pageSearch) pageSearch.addEventListener('input', () => filterPageGrid(targetMainCat));
    }

    // --- 4. Helper Functions ---

    function renderPopularCategories() {
        const list = document.getElementById('popularCategoriesList');
        if (!list) return;

        const categories = [
            "Text Generation",
            "Image Generation",
            "Video Generation",
            "Programming",
            "Marketing",
            "Finance",
            "Automation"
        ];

        list.innerHTML = '';
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'cat-btn';
            btn.textContent = cat;
            btn.onclick = () => {
                // Heuristic redirection
                const businessCats = ["Programming", "Marketing", "Finance", "Automation"];
                if (businessCats.includes(cat)) window.location.href = "ai-business.html";
                else window.location.href = "ai-tools.html";
            };
            list.appendChild(btn);
        });
    }

    function renderHomeGrid() {
        const grid = document.getElementById('trendingGrid');
        if (!grid) return;

        const popularTools = dbTools.filter(t => t.popular);
        // Randomize slightly for freshness or just show top 12
        renderCards(grid, popularTools.slice(0, 12));
    }

    function populateSubCategories(mainCat) {
        const select = document.getElementById('subCatSelect');
        if (!select) return;

        const relevantTools = dbTools.filter(t => t.mainCategory === mainCat);
        const categories = [...new Set(relevantTools.map(t => t.category))].sort();

        select.innerHTML = '<option value="all">All Categories</option>';
        categories.forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat;
            opt.textContent = cat;
            select.appendChild(opt);
        });
    }

    function filterPageGrid(mainCat) {
        const grid = document.getElementById('mainGrid');
        if (!grid) return;

        const subCat = document.getElementById('subCatSelect').value;
        const price = document.getElementById('priceSelect').value;
        const search = document.getElementById('pageSearch').value.toLowerCase();

        const filtered = dbTools.filter(tool => {
            const matchMain = tool.mainCategory === mainCat;
            const matchSub = subCat === 'all' || tool.category === subCat;
            const matchPrice = price === 'all' || tool.price.toLowerCase().includes(price);
            const matchSearch = tool.name.toLowerCase().includes(search) ||
                tool.desc.toLowerCase().includes(search) ||
                tool.details.toLowerCase().includes(search);
            return matchMain && matchSub && matchPrice && matchSearch;
        });

        renderCards(grid, filtered);
    }

    function renderCards(container, data) {
        container.innerHTML = '';
        if (data.length === 0) {
            container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666;">No tools found matching your criteria.</p>';
            return;
        }

        data.forEach(tool => {
            const card = document.createElement('article');
            card.className = 'tool-card';
            card.onclick = () => openModal(tool);

            card.innerHTML = `
                <div class="card-header">
                    <span class="tool-title">${tool.name}</span>
                    <span class="badge ${tool.price === 'Free' ? 'free' : (tool.price === 'Paid' ? 'paid' : 'freemium')}">${tool.price}</span>
                </div>
                <span class="tool-category-label">${tool.category}</span>
                <p class="tool-desc">${tool.desc}</p>
            `;
            container.appendChild(card);
        });
    }

    function setupSearch(inputId, gridId, isGlobal) {
        const input = document.getElementById(inputId);
        if (!input) return;

        input.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const grid = document.getElementById(gridId);
            // Search across entire DB for global, but only show relevant ones if redirected
            // For homepage global search, we dynamically show matches from ALL DB in the trending grid
            const data = isGlobal ? dbTools : dbTools;

            const filtered = data.filter(t =>
                t.name.toLowerCase().includes(term) ||
                t.desc.toLowerCase().includes(term) ||
                t.category.toLowerCase().includes(term)
            );

            // Limit global search results to avoid clutter
            renderCards(grid, filtered.slice(0, 20));
        });
    }

    // --- 5. Modal Logic ---
    const modal = document.getElementById('toolModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.getElementById('closeModal');

    function openModal(tool) {
        if (!modal) return;
        modalBody.innerHTML = `
            <div class="modal-info">
                <h2 style="font-size:1.8rem; margin-bottom:0.5rem; color:#202124;">${tool.name}</h2>
                <div class="modal-meta" style="margin-bottom: 1.5rem;">
                    <span style="background:#E8F0FE; color:#1A73E8; padding:4px 10px; border-radius:12px; font-size:0.85rem; font-weight:600; margin-right: 0.5rem;">${tool.category}</span>
                    <span style="background:#F1F3F4; color:#5F6368; padding:4px 10px; border-radius:12px; font-size:0.85rem; font-weight:600;">${tool.price}</span>
                </div>
                <hr style="border:0; border-top:1px solid #E0E3E7; margin: 1.5rem 0;">
                <p style="font-size:1.1rem; color:#202124; margin-bottom:1.5rem; line-height: 1.6;">${tool.desc}</p>
                <div style="background:#F8F9FA; padding:1.5rem; border-radius:16px; border:1px solid #E0E3E7;">
                    <h4 style="margin-bottom:0.75rem; color:#202124; font-size: 1rem;">About this tool:</h4>
                    <p style="color:#5F6368; line-height:1.6;">${tool.details}</p>
                </div>
                
                <a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="modal-btn">
                    Visit Official Website ↗
                </a>
            </div>
        `;
        modal.classList.remove('hidden');
    }

    if (closeBtn) {
        closeBtn.onclick = () => modal.classList.add('hidden');
    }

    if (modal) {
        modal.onclick = (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        };
    }

    // --- 6. Sofia Assistant (Enhanced Professional Version) ---
    const chatToggle = document.getElementById('chatToggle');
    const chatInterface = document.getElementById('chatInterface');
    const closeChat = document.getElementById('closeChat');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('userQuery');
    const chatMsgs = document.getElementById('chatMessages');

    function getBotResponse(input) {
        const text = input.toLowerCase();

        // 1. Greetings
        const greetings = ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon'];
        if (greetings.some(g => text.includes(g))) {
            return "Hello. I am Sofia, your SOF.AI architectural assistant. I can help you identify the optimal tools for your specific workflow. How may I assist you today?";
        }

        // 2. Capabilities / Help
        if (text.includes('help') || text.includes('can you do') || text.includes('who are you')) {
            return "I am designed to navigate the SOF.AI ecosystem. You can ask me about <b>Generative Tools</b> (video, image, text), <b>Business Solutions</b> (coding, marketing, finance), or specific pricing models. For example, try asking: <i>'What are the best tools for coding?'</i> or <i>'Show me free video generators.'</i>";
        }

        // 3. Dynamic Category Search
        // Map keywords to database categories
        const categoryMap = {
            'video': ['Video Generation', 'Video Editing'],
            'image': ['Image Generation', 'Creativity'],
            'photo': ['Image Generation'],
            'art': ['Image Generation', 'Creativity'],
            'code': ['Programming', 'Development'],
            'programming': ['Programming', 'Development'],
            'dev': ['Programming', 'Development'],
            'text': ['Text Generation', 'Translation'],
            'write': ['Text Generation'],
            'music': ['Music Generation', 'Audio & Voice'],
            'audio': ['Audio & Voice', 'Music Generation'],
            'voice': ['Audio & Voice'],
            'marketing': ['Marketing', 'Email & Meeting'],
            'seo': ['Marketing'],
            'finance': ['Finance'],
            'data': ['Data & Analysis'],
            'analysis': ['Data & Analysis'],
            'presentation': ['Presentations'],
            'slide': ['Presentations']
        };

        for (const [key, categories] of Object.entries(categoryMap)) {
            if (text.includes(key)) {
                // Find tools in these categories
                const recommendations = dbTools.filter(t => categories.includes(t.category) || categories.includes(t.mainCategory));

                if (recommendations.length > 0) {
                    // Pick top 3-4 distinct ones
                    const topPicks = recommendations.filter(t => t.popular).slice(0, 3);
                    const others = recommendations.filter(t => !t.popular).slice(0, 2);
                    const finalDisplay = [...topPicks, ...others].slice(0, 4);

                    const names = finalDisplay.map(t => `<b>${t.name}</b>`).join(", ");
                    return `Regarding <b>${key}</b>, I have analyzed our database. Highly recommended solutions include: ${names}. Would you like details on any specific one?`;
                }
            }
        }

        // 4. Specific Tool Lookup
        // Check if user mentioned a tool name directly
        const mentionedTool = dbTools.find(t => text.includes(t.name.toLowerCase()));
        if (mentionedTool) {
            return `<b>${mentionedTool.name}</b> is a ${mentionedTool.price} solution for <i>${mentionedTool.category}</i>. ${mentionedTool.desc} <a href="${mentionedTool.link}" target="_blank" style="color:#2563EB;">Visit Link</a>.`;
        }

        // 5. Pricing Queries
        if (text.includes('free')) {
            const freeTools = dbTools.filter(t => t.price === 'Free' || t.price === 'Freemium').slice(0, 5).map(t => `<b>${t.name}</b>`).join(", ");
            return `If cost efficiency is a priority, here are some robust Free and Freemium options: ${freeTools}.`;
        }

        // 6. Fallback
        return "I apologize, but I did not fully process that request within the current context. Could you specify if you are looking for a creative tool (like image or video) or a business solution (like coding or marketing)?";
    }

    if (chatToggle) {
        chatToggle.onclick = () => {
            chatInterface.classList.toggle('hidden');
            if (!chatInterface.classList.contains('hidden')) {
                chatInput.focus();
            }
        };
        closeChat.onclick = () => chatInterface.classList.add('hidden');

        chatForm.onsubmit = (e) => {
            e.preventDefault();
            const txt = chatInput.value.trim();
            if (!txt) return;

            // User Msg
            const userDiv = document.createElement('div');
            userDiv.className = 'message user';
            userDiv.innerHTML = `<p>${txt}</p>`;
            chatMsgs.appendChild(userDiv);
            chatInput.value = '';
            chatMsgs.scrollTop = chatMsgs.scrollHeight;

            // Thinking Indicator
            const thinkingDiv = document.createElement('div');
            thinkingDiv.className = 'message bot thinking';
            thinkingDiv.innerHTML = '<p><i>Analyzing...</i></p>';
            chatMsgs.appendChild(thinkingDiv);
            chatMsgs.scrollTop = chatMsgs.scrollHeight;

            // Thinking Logic
            setTimeout(() => {
                chatMsgs.removeChild(thinkingDiv); // Remove thinking
                const response = getBotResponse(txt);

                const botDiv = document.createElement('div');
                botDiv.className = 'message bot';
                botDiv.innerHTML = `<p>${response}</p>`;
                chatMsgs.appendChild(botDiv);
                chatMsgs.scrollTop = chatMsgs.scrollHeight;
            }, 600);
        };
    }
});