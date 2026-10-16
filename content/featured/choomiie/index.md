---
date: '4'
title: 'Choomiie — Transport Marketplace Backend'
cover: '/images/featured/choomiie/cover.png'
external: 'https://choomiie.com'
tech:
  - NestJS
  - TypeScript
  - PostgreSQL
  - TypeORM
  - Redis
  - WhatsApp Business API
---

- Sole backend engineer on a Ghana marketplace for haulage, rides and parcels. Customers post
  loads, truck operators bid, and the system closes the bid window and picks a winner.

- Built a wallet and escrow: customer money is held during a job and paid out after a cooling-off
  period unless a dispute is raised, with an append-only ledger and guards against double payments.

- Booking without the app: WhatsApp conversations with menus, photos and bid reminders, plus a
  USSD phone menu in English, Twi, Ga and Hausa.

- ID and face checks for drivers and operators, with a sweeper that settles checks that never
  reported back, plus vehicle inspection and anti-money-laundering checks.

- Fuel advances drawn against the job payout, enforced step by step in the database, and live GPS
  tracking that spots when a vehicle departs or sits still.
