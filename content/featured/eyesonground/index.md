---
date: '3'
title: 'EyesOnGround — Remote Inspection Marketplace'
cover: '/images/featured/eyesonground/cover.png'
external: 'https://eyesonground.com'
tech:
  - NestJS
  - React
  - PostgreSQL
  - Prisma
  - Redis
  - Stripe
---

- Marketplace where buyers book a verified local agent to inspect a vehicle, machine or boat
  before they bid, and get photo and video evidence back.

- Built the payment-to-match lifecycle: Stripe webhooks with event dedupe feed an idempotent
  matcher that assigns the nearest agent by service radius, with decline/re-match and a sweep job.

- Added an identity-verification gate with HMAC-signed webhooks and an append-only event log.

- Real-time client–agent messaging over Server-Sent Events with Redis pub/sub fan-out.

- Three apps (API, client/agent SPA, staff admin) secured with JWT role guards, API-client keys,
  Helmet and rate limiting; deployed with Docker and Coolify.
