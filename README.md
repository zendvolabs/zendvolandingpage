# Zendvo Landing Page

Zendvo is a gifting platform that enables users to send cash gifts that remain completely hidden until a predetermined unlock date and time. By using the Stellar blockchain, Zendvo transforms digital money transfers into memorable experiences filled with mystery and anticipation.

## Who is Zendvo For?

- **Diaspora Senders:** Specifically targeting young adults (18-35) in the US, UK, and Canada looking for a more meaningful way to send money home to Nigeria.
- **Domestic Gifting (Future Phase):** Nigerians sending to Nigerians for birthdays, anniversaries, and holidays where surprise is key.
- **Memorable Occasions:** Perfect for Valentine's Day, graduations, and surprise celebrations where the timing of the gift is as important as the gift itself.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS with [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
- **Engine**: [React Compiler](https://react.dev/learn/react-compiler) enabled for optimized performance
- **Icons**: [Lucide React](https://lucide.dev/) (Recommended)

## 📁 Project Structure

```text
src/
├── app/            # App router, pages, and global styles
├── components/     # Reusable UI components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and shared logic
└── public/         # Static assets (images, fonts)
```

## Benefits to the Stellar Ecosystem

Zendvo showcases the power of Stellar through:

1.  **Stablecoin Infrastructure:** Utilizing **USDC** for value preservation, ensuring that the gift amount remains stable from creation to unlock.
2.  **Soroban Smart Contracts:** Implementing decentralized time-locking logic that prevents early withdrawal, providing a middleman-free guarantee of the "hidden" nature of the gift.
3.  **Low-Cost Transactions:** Leveraging Stellar's high speed and near-zero fees to ensure that more of the sender's money reaches the recipient.
4.  **Real-World Utility:** Connecting blockchain technology directly to Nigerian bank accounts via local payout partners, driving adoption of Web3 solutions for real-world financial needs.
5.  **Financial Inclusion:** Providing a good on/off-ramp experience that bridges global stablecoin liquidity with local financial systems.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design Philosophy

Zendvo follows a "Rich Aesthetics" approach:

- **Premium Typography**: Using Inter and custom font scales.
- **Glassmorphism**: Subtle translucent surfaces and blurs.
- **Micro-animations**: Smooth transitions and hover effects.
- **Dark Mode**: Fully supports high-contrast dark aesthetics.
