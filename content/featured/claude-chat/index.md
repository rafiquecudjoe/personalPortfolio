---
date: '5'
title: 'AI Companion Chat — Claude with Cross-Room Memory'
cover: '/images/featured/claude-chat/cover.png'
tech:
  - Node.js
  - Express
  - PostgreSQL
  - Claude API
  - JavaScript
---

- AI companion for members of an online coaching community. Members chat in themed rooms (kitchen,
  garden and more), each with its own personality the admin team can edit.

- Memory that carries across rooms: a small, cheap Claude model reads each exchange and saves
  lasting facts, commitments, projects and moods. Stored in plain PostgreSQL, no vector database.

- Sensitive details never reach memory: a strict block-list stops passwords, bank details and
  health disclosures being saved, even if the model misses them.

- Members can view, edit and delete what the companion remembers, or switch memory off. Each chat
  starts with a summary sized to a fixed budget, so costs stay predictable.

- Passwordless sign-in by email link or 6-digit code, monthly and daily spending caps, admin tools
  for rooms and conversations, and hundreds of automated tests.
