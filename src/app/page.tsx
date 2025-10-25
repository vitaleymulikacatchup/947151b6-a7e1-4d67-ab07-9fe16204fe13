"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { MapPin, Sparkles, Wifi, Castle, Trees, Rocket, Flame, Music, BarChart3, Users, Waves, TrendingUp, HelpCircle, Plane } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Culture", id: "feature" },
            { name: "Facts", id: "metric" },
            { name: "FAQ", id: "faq" },
            { name: "Visit", id: "contact" }
          ]}
          brandName="Estonia"
          button={{
            text: "Plan Your Visit",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Discover Estonia"
          description="Experience the perfect blend of medieval charm and digital innovation in the heart of the Baltics. From Tallinn's UNESCO World Heritage old town to pristine forests and innovative startups."
          tag="Baltic Gem"
          tagIcon={MapPin}
          buttons={[
            {
              text: "Plan Your Visit",
              href: "contact"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/3375394/pexels-photo-3375394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Charming view of Tallinn's medieval architecture and historic buildings under cloudy skies."
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Estonia"
          description={[
            "Estonia is a small Baltic nation that has transformed itself into one of Europe's most digitally advanced countries. Known as the birthplace of Skype and e-Residency, this northern European gem combines rich medieval history with cutting-edge technology.",
            "With over 50% of its territory covered in forests, Estonia offers breathtaking natural landscapes alongside its vibrant cultural scene. The capital Tallinn perfectly embodies this blend - its UNESCO-listed Old Town sits adjacent to modern business districts and tech hubs."
          ]}
          buttons={[
            {
              text: "Explore Culture",
              href: "feature"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="What Makes Estonia Special"
          description="Discover the unique aspects that make Estonia stand out in the Baltic region"
          tag="Culture & Innovation"
          tagIcon={Sparkles}
          features={[
            {
              title: "Digital Pioneer",
              description: "World's first digital nation with e-Residency program, online voting, and 99% of services available online",
              icon: Wifi
            },
            {
              title: "Medieval Heritage",
              description: "Tallinn's Old Town is one of Europe's best-preserved medieval cities, a UNESCO World Heritage site",
              icon: Castle
            },
            {
              title: "Natural Beauty",
              description: "Over 2,200 islands, pristine forests, and the beautiful Baltic coastline offering endless outdoor adventures",
              icon: Trees
            },
            {
              title: "Startup Nation",
              description: "Home to more unicorns per capita than anywhere else, including Skype, Wise, and Bolt",
              icon: Rocket
            },
            {
              title: "Sauna Culture",
              description: "Deep-rooted sauna traditions with over 100,000 saunas nationwide - that's one for every 13 residents",
              icon: Flame
            },
            {
              title: "Song Festival",
              description: "The Estonian Song Festival brings together 30,000 singers in the world's largest amateur choir event",
              icon: Music
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Estonia by Numbers"
          description="Fascinating facts and figures about this remarkable Baltic nation"
          tag="Statistics"
          tagIcon={BarChart3}
          metrics={[
            {
              id: "1",
              value: "1.3",
              title: "million",
              description: "Population of Estonia, making it one of Europe's least crowded countries",
              icon: Users
            },
            {
              id: "2",
              value: "2,200",
              title: "islands",
              description: "Beautiful islands scattered along Estonia's 3,800km coastline",
              icon: Waves
            },
            {
              id: "3",
              value: "51%",
              title: "forest coverage",
              description: "Over half of Estonia is covered by pristine forests and woodlands",
              icon: Trees
            },
            {
              id: "4",
              value: "8",
              title: "unicorns",
              description: "Billion-dollar startups founded by Estonians, highest per capita in Europe",
              icon: TrendingUp
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Planning Your Visit to Estonia"
          description="Everything you need to know before visiting this Baltic gem"
          tag="Travel Guide"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What's the best time to visit Estonia?",
              content: "Summer (June-August) offers the warmest weather and white nights, perfect for exploring. Winter brings snow-covered landscapes and cozy Christmas markets, while spring and autumn offer fewer crowds and beautiful seasonal colors."
            },
            {
              id: "2",
              title: "Do I need a visa to visit Estonia?",
              content: "Estonia is part of the Schengen Area. EU citizens need only an ID card, while visitors from many countries including the US, Canada, and Australia can visit visa-free for up to 90 days."
            },
            {
              id: "3",
              title: "What currency does Estonia use?",
              content: "Estonia uses the Euro (EUR) and has been part of the Eurozone since 2011. Card payments are widely accepted, and Estonia is largely cashless with excellent digital payment infrastructure."
            },
            {
              id: "4",
              title: "Is English widely spoken?",
              content: "Yes, especially in Tallinn and among younger generations. Estonian, Russian, and German are also commonly spoken. Most tourist services, restaurants, and hotels have English-speaking staff."
            },
            {
              id: "5",
              title: "What are the must-see attractions?",
              content: "Tallinn Old Town (UNESCO site), Lahemaa National Park, Saaremaa Island, Tartu (university city), Parnu (summer capital), and the beautiful Soomaa National Park are essential destinations."
            },
            {
              id: "6",
              title: "How is the internet connectivity?",
              content: "Estonia has one of the world's most advanced digital infrastructures. Free WiFi is available almost everywhere, and mobile coverage is excellent throughout the country, even in remote areas."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Estonia"
          tagIcon={Plane}
          title="Start Planning Your Estonian Adventure"
          description="Get personalized travel recommendations and insider tips for your perfect Estonian experience. Subscribe to our newsletter for the latest updates on events, attractions, and travel deals."
          imageSrc="https://images.pexels.com/photos/1428347/pexels-photo-1428347.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Airbnb Guest Guidebook on a modern table in Kavala, Greece home."
          inputPlaceholder="Enter your email address"
          buttonText="Get Travel Guide"
          termsText="By subscribing, you'll receive our comprehensive Estonia travel guide and monthly newsletters with exclusive travel tips and deals."
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Discover",
              items: [
                { label: "About Estonia", href: "about" },
                { label: "Culture & Heritage", href: "feature" },
                { label: "Facts & Figures", href: "metric" }
              ]
            },
            {
              title: "Plan Your Trip",
              items: [
                { label: "Travel Guide", href: "faq" },
                { label: "Contact Us", href: "contact" },
                { label: "Visit Estonia", href: "https://visitestonia.com" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "e-Residency", href: "https://e-residency.gov.ee" },
                { label: "Digital Estonia", href: "https://e-estonia.com" },
                { label: "Tourism Board", href: "https://visitestonia.com" }
              ]
            }
          ]}
          copyrightText="© 2025 | Discover Estonia"
        />
      </div>
    </ThemeProvider>
  );
}