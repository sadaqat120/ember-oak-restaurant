import { Flame, Leaf, HandHeart, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import ImageSection from '../components/ImageSection';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import { images } from '../data/site';
import usePageMeta from '../hooks/usePageMeta';

export default function About() {
  usePageMeta('About', "Learn about Ember & Oak's live-fire cooking philosophy, our team, and the story behind our Chicago restaurant.");
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Food cooked the way it used to be."
        description="Ember & Oak opened in 2019 with one rule: nothing leaves the kitchen without passing over fire."
        image={images.aboutStory}
      />

      <section className="py-20 sm:py-28">
        <div className="container-content">
          <ImageSection image={images.diningRoom} alt="Ember & Oak dining room" eyebrow="Our Story" title="Built around a single hearth">
            <p>
              Chef-owner and a small team of cooks opened Ember & Oak in a converted print shop on Larkspur Avenue,
              gutting the space around one requirement: a hearth large enough to cook an entire service on wood
              alone.
            </p>
            <p>
              What started as a 40-seat neighborhood spot has grown into one of the city's most requested tables —
              but the kitchen still runs the same way it did on opening night: no gas ranges, no shortcuts, and a
              menu that changes with what regional farms bring us each week.
            </p>
          </ImageSection>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-paper-dark">
        <div className="container-content">
          <SectionHeading eyebrow="What We Believe" title="Three ideas guide everything we cook" align="center" />
          <div className="mt-14 grid sm:grid-cols-3 gap-8">
            <FeatureCard
              icon={Flame}
              title="Fire is the technique"
              description="No fryers, no induction, no shortcuts. If it's on the menu, it has touched the hearth."
            />
            <FeatureCard
              icon={Leaf}
              title="The season sets the menu"
              description="We build dishes around what a dozen regional farms bring us each week, not the other way around."
            />
            <FeatureCard
              icon={HandHeart}
              title="Hospitality is the whole job"
              description="A good table is remembered for how it felt, not just what was on the plate."
            />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-content">
          <ImageSection image={images.aboutTeam} alt="Chef plating a dish in the open kitchen" reverse eyebrow="Our Team" title="Led by cooks, not a corporate kitchen">
            <p>
              Our kitchen is led by a small team of career cooks who trained in wood-fired kitchens across the
              Midwest and Southern Europe before settling in Chicago. The team is intentionally small — every dish
              that leaves the hearth has been touched by someone who has been with us for years, not weeks.
            </p>
            <p>
              Front of house is led with the same philosophy: a compact, well-trained team who know the menu, the
              wine list, and most of our regulars by name.
            </p>
          </ImageSection>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-ink text-paper">
        <div className="container-content text-center max-w-2xl mx-auto">
          <p className="eyebrow text-brass-light mb-4">Come See for Yourself</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-6">
            The best way to understand our kitchen is to sit at our table.
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/menu" variant="ghost">
              Browse the Menu
            </Button>
            <Button to="/booking" variant="primary">
              Reserve a Table <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Planning something bigger?"
        description="Our banquet rooms and catering team can bring the same hearth-driven menu to your private event."
        primaryLabel="Explore Private Events"
        primaryTo="/banquet"
      />
    </>
  );
}
