# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Students, researchers, engineering and medical candidates, and lifelong learners tackling complex multi-source coursework (textbooks, lecture slides, academic papers, and YouTube lectures) who need to master high-density material without the illusion of competence.

## Product Purpose
LearnX transforms scattered and passive study materials into an active recall mastery workspace. It replaces passive rereading with grounded Socratic interrogation, citation-backed vector search, adaptive flashcards, and diagnostic practice quizzes. Success means verified retention and comprehension backed by page-level and timestamp citations.

## Positioning
Unlike general LLM chat tools that hallucinate on specialized coursework, LearnX grounds every response strictly in the user's uploaded materials using page-level vector RAG (`[Page X]`, `[Slide X]`, `[MM:SS]`), with an editorial Anthropic/Claude-inspired warm aesthetic and full multi-format parsing (PDF, Word DOCX/DOC, PowerPoint PPTX/PPT, YouTube transcripts, audio overviews).

## Operating Context
Multi-source study sessions: students upload full slide decks, textbooks, and recorded lectures, select active subsets of materials, query via Socratic dialogue, generate active recall flashcards on specific topics, and test themselves via diagnostic practice quizzes.

## Capabilities and Constraints
- Ingestion: PDF, Word (`.docx`, `.doc`), PowerPoint (`.pptx`, `.ppt`), YouTube links with transcript extraction, Markdown, and notes.
- Grounded Socratic Tutor: Dual-level chat (streaming SSE, pgvector Cosine similarity, conversational follow-up expansion).
- Active Recall Flashcards: Flippable 3D card deck with custom topic focus and variable counts (5, 10, 15, 30 cards).
- Diagnostic Practice Quizzes: Assessment engine with contextual explanations and scoring.
- Audio Overviews: Dual-host conversational podcast synthesis.
- Studio Dossiers: Hierarchical briefings and study notes.
- Strict anti-hallucination citations: `[Page X]`, `[Slide X]`, `[MM:SS]`.

## Brand Commitments
- Name: LearnX (Active Recall Study Workspace).
- Aesthetic World: Warm-canvas editorial design (Claude/Anthropic inspired).
- Primary Tone: Warm Terracotta / Coral (`#CC785C`), Canvas Cream (`#FAF9F5`), Dark Obsidian (`#181715`), Sage Mint (`#5DB8A6`), Honey Amber (`#E8A55A`).
- Typography: Newsreader / Copernicus serif display + Inter UI + JetBrains Mono code/data.
- Voice: Intellectual, rigorous, encouraging, grounded, direct, free of artificial AI cheerfulness or conversational stalling.

## Product Principles
1. Grounded Truth Over Fluency: Every factual claim must point to source citations (`[Page X]`, `[Slide X]`, `[MM:SS]`).
2. Active Retrieval Over Passive Consumption: Force the learner's brain to retrieve knowledge via flashcards, questions, and Socratic challenges rather than passive rereading.
3. Fluid Multi-Format Ingestion: Handle textbooks, slide presentations, Word documents, and recorded lectures without requiring manual format conversion.
4. Editorial Restraint and Craft: Honor readability, high typography contrast, and uncluttered layout; avoid AI slop, neon gradients, and nested card clutter.

