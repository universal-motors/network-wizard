"use client";
// import BackgroudImage from "@/app/assets/images/bg/1.jpg";
import { Box } from "@mui/material";
import Herosection from "@/components/herosection";
import Logo from "@/components/logo";
import Internat from "@/components/internat";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Herosection />
      <Logo />
      <Internat />
      <Footer />
    </Box>
  );
}
