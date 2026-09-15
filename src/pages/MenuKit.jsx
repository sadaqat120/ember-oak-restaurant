import { Download, FileText, Printer, Smartphone } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';
import Button from '../components/Button';
import { images } from '../data/site';
import usePageMeta from '../hooks/usePageMeta';

export default function MenuKit() {
  usePageMeta('Menu Kit', "Download a printable sample menu from Ember & Oak.");
  return (
    <>
      <PageHero
        eyebrow="Menu Kit"
        title="Take the menu with you."
        description="Download a printable copy of our current menu, or browse it directly on the site."
        image={images.dishPasta}
      />

      <section className="py-20 sm:py-28">
        <div className="container-content grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow mb-3">Printable Menu</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-6">
              A sample menu, ready to share.
            </h2>
            <p className="text-ink/70 leading-relaxed mb-8">
              This sample PDF reflects the current concept menu and is intended for planning and review. Once the
              restaurant's final dishes and pricing are confirmed, this file will be replaced with the production
              menu — including any seasonal rotation or QR-linked digital version you'd like at the table.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/ember-oak-sample-menu.pdf" variant="primary">
                <Download size={16} /> Download Sample Menu (PDF)
              </Button>
              <Button to="/menu" variant="secondary">
                View Menu Online
              </Button>
            </div>
          </div>
          <div className="border border-ink/15 bg-paper-dark p-10 flex flex-col items-center text-center">
            <FileText size={40} className="text-rust mb-4" strokeWidth={1.5} />
            <p className="font-display text-xl">ember-oak-sample-menu.pdf</p>
            <p className="text-sm text-ink/55 mt-1">Demo file · 1 page · placeholder pricing</p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-paper-dark">
        <div className="container-content">
          <SectionHeading eyebrow="What's in the Kit" title="Everything needed to share the menu" align="center" />
          <div className="mt-14 grid sm:grid-cols-3 gap-8">
            <FeatureCard icon={Printer} title="Print-Ready Layout" description="Formatted for standard letter paper so it can be printed for tastings, press, or front-of-house use." />
            <FeatureCard icon={Smartphone} title="Mobile-Friendly Browsing" description="The full menu page is built to be read comfortably on a phone at the table." />
            <FeatureCard icon={FileText} title="Easy to Update" description="Menu content lives in one central file, so pricing and dishes can be updated without touching the design." />
          </div>
        </div>
      </section>

      <CTASection title="Ready to taste the menu?" description="Reserve a table and experience it in person." />
    </>
  );
}
