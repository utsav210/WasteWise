# WasteWise 🌍♻️

WasteWise is a sustainable platform designed to bridge the gap between food donors and those in need. By ensuring surplus food reaches the right hands, WasteWise aims to reduce food waste and fight hunger. In addition, we promote composting and renewable energy by effectively managing rotten food.

## Features ✨

- **Food Redistribution:** Connects food donors (restaurants, events, households) with NGOs and food banks.
- **Sustainable Composting:** Diverts rotten and unusable food to composting and biogas production, creating renewable energy and nutrient-rich soil.
- **Community Impact:** Strong focus on community development, hunger relief, and environmental sustainability.
- **Secure Authentication:** User authentication and session management powered by [NextAuth.js](https://next-auth.js.org/).
- **Modern UI:** Responsive, accessible, and beautiful user interface built with [Tailwind CSS](https://tailwindcss.com/) and [Radix UI](https://www.radix-ui.com/).

## Tech Stack 🛠️

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Authentication:** NextAuth.js
- **Icons:** Lucide React & React Icons

## Getting Started 🚀

### Prerequisites
- Node.js (v18 or higher)
- npm, yarn, or pnpm
- PostgreSQL (or any preferred database configured in Prisma)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/utsav210/WasteWise.git
   ```

2. Navigate to the project directory:
   ```bash
   cd WasteWise
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up the environment variables:
   Create a `.env` file in the root directory and configure your database URL and NextAuth secrets:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/wastewise"
   NEXTAUTH_SECRET="your_nextauth_secret"
   ```

5. Run Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Contributing 🤝

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/utsav210/WasteWise/issues).

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License 📝

This project is licensed under the MIT License.
