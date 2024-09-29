import { Faq } from "../components/faq";
import { FeatureNav } from "../components/feature-nav";
import { Footer } from "../components/footer";
import { HeroSection } from "../components/hero-section";
import { IconFeatures } from "../components/icon-features";
import { PricingSection } from "../components/pricing-section";
import { Testimonials } from "../components/testimonials";

export const metadata = {
	title: "CatchLead",
	description: "CatchLead",
	keywords: ["CatchLead"],
};

export default function Store(): JSX.Element {
	return (
		<div>
			<HeroSection />
			<FeatureNav />
			<IconFeatures />
			<PricingSection />
			<Testimonials />
			<Faq />
			<Footer />
		</div>
	);
}
