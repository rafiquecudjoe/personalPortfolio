---
date: '1'
title: 'Üretia — Agricultural Marketplace'
cover: '/images/featured/uretia/cover.png'
external: 'https://uretia.com'
tech:
  - NestJS
  - Next.js
  - PostgreSQL
  - Redis / BullMQ
  - WhatsApp Cloud API
  - Grafana / Loki
---

- Turkish livestock and agriculture marketplace: listings, market prices, government subsidy
  directory and a full admin panel with six-role RBAC and audit logging.

- Built a WhatsApp CRM inbox on the Meta Cloud API with an n8n bot, plus a two-way support mailbox.

- Hardened security: server-side refresh-token cookies, CSP/HSTS, strict validation on every admin
  write, and ClamAV malware scanning on uploads in production.

- Cut production p95 latency from 338–452 ms to 199 ms (99.6% of requests under 300 ms); listing
  detail pages went from ~965 ms to 168 ms.

- Shipped a Prometheus/Grafana/Loki monitoring stack with AI-assisted daily log reviews, and ops
  runbooks for deploy, restore and alerts on Hetzner + Coolify.
