import "./globals.css";

export const metadata = {
  title: "Dr. Maya Reynolds | Therapy in Santa Monica",
  description:
    "Compassionate therapy for anxiety, trauma, and burnout in Santa Monica and throughout California.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F5F4EF] text-[#1F2A1F]">{children}</body>
    </html>
  );
}
