---
date: '2'
title: 'Fyndae — Trust Intelligence Platform'
cover: '/images/featured/fyndae/cover.png'
external: 'https://fyndae.com'
tech:
  - NestJS
  - React
  - PostgreSQL
  - Prisma
  - Socket.IO
  - Stripe
---

- Subscription platform for checking people, businesses and accounts against behavioural,
  security and fraud risk signals before transacting.

- Built the NestJS API (search, subscriptions, payments, KYC, reports, admin) and a React SPA
  behind an Express BFF proxy with a path allowlist.

- Wrote a Python crawler and sync pipeline that imported 41,000+ public records with photos and
  tracks removals over time.

- Designed an evidence-based dispute flow for people named on the platform: append-only records,
  a private evidence bucket, automatic evidence expiry and audited admin review.

- Real-time notifications over Socket.IO with a Redis adapter; Docker/PM2/nginx deployment and
  Playwright end-to-end tests.
