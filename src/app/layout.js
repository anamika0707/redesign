import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Dr. Maya Reynolds | Therapist in Santa Monica",
  description:
    "Therapy for anxiety, trauma, and burnout in Santa Monica and across California.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
