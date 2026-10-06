import type { Metadata } from "next";
import { PortfolioPage } from "../../components/portfolio-page";

export const metadata: Metadata = {
  title: "Portfolio | White Linen",
  description: "Explore residential interiors by White Linen.",
};

export default function Portfolio() {
  return <PortfolioPage />;
}
