import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcommingWebinars from "@/components/UpcommingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <section>
        <HeroSection />
      </section>
      <section>
        <FeaturedCourses />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <section>
        <TestimonialCards />
      </section>
      <section>
        <UpcommingWebinars />
      </section>
      <section>
        <Instructors />
      </section>
    </main>
  );
}
