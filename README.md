# Suzanne Eats – Sanity Backend (CMS)

This repository contains the **Sanity.io backend** for [Suzanne Eats](https://www.suzanneeats.com), a bespoke private catering venue. The Sanity CMS powers the content management system used to update venue details, services, testimonials, and more.

---

## 🏡 About Suzanne Eats

Suzanne Eats is the digital home of a beautifully serene and unique **private dining and celebration venue**. From intimate lunches to joyous family celebrations, the venue offers a refined, warm, and peaceful setting nestled within a lush garden and pavilion space.

The platform highlights:
- A Japanese-style all-season pavilion with capacity for seated or standing events
- Customizable event planning and catering options
- A unique “Bring Your Own” drinks policy
- On-site parking and strong public transport connectivity

---


## 🧰 Tech Stack

| Layer             | Technologies / Tools                                                                 |
|-------------------|----------------------------------------------------------------------------------------|
| **Frontend**      | [Svelte](https://svelte.dev/), JavaScript / Sanity UI, Vite / Webpack     |
| **Backend**       | Sanity Content Lake (hosted), WebSockets, GROQ                                        |
| **CMS**           | Sanity.io (Structured Content Studio, Real-time Collaboration)                        |
| **Querying**      | GROQ, GraphQL                                                                          |
| **Hosting**       | Vercel (Frontend), Sanity Cloud (Studio & APIs), Custom Domains   |
| **Media & APIs**  | Sanity Image CDN, Asset Pipeline, Webhooks, API Tokens                                |
| **Customization** | Custom Components, Plugins, Structure Builder, Desk Tool                              |

> 🔗 **Frontend Source Code**  
> The frontend of Suzanne Eats is built using **Svelte**. You can check out the full source code here: [GitHub Repo – Suzanne Eats Frontend](https://github.com/prathushan/susanne-svelte.git)

---

## ✨ Features of the CMS

- Custom schema definitions for:
  - **Venue Information** (titles, descriptions, gallery)
  - **Services Offered**
  - **Why Choose Us** sections
  - **Client Testimonials**
  - **Contact Information**
- Modular content editing with portable text support
- Optimized media management with hotspot cropping
- Fully decoupled CMS for seamless frontend integration

---

## 📂 Content Models

- `venueInfo`: Intro titles, paragraphs, and key location info
- `features`: List of benefits (BYO policy, transport, chef, etc.)
- `testimonials`: Client reviews with name, message, and date
- `services`: Overview of types of events and offerings
- `contact`: Location, email, contact numbers
- `gallery`: Event and venue photos

---

## 🧪 Local Development

### Prerequisites

- Node.js (v16+ recommended)
- Sanity CLI: `npm install -g @sanity/cli`

### Setup

```bash
git clone https://github.com/your-username/suzanne-eats-backend.git
cd suzanne-eats-backend
sanity install
sanity start
