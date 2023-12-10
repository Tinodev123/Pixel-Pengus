import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import Question from '../components/question'
import './home.css'
import SolanaPrice from './SolanaPrice.js'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Pixel Pengus</title>
        <meta property="og:title" content="Pixel Pengus" />
      </Helmet>
      <div className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <span id="Top" className="Heading home-logo">
            PIXELPENGUINS
          </span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <a href="#About">About</a>
              <a href="#Features" className="home-nav2">
                Features
              </a>
              <a href="#Pricing" className="home-nav3">
                Pricing
              </a>
            </nav>
            <button className="home-register button">
              <span>
                <span className="home-text01">Connect</span>
                <br></br>
              </span>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <span className="home-logo1">PIXELPENGUINS</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-nav11">About</span>
                <span className="home-nav21">Features</span>
                <span className="home-nav31">Pricing</span>
                <span className="home-nav4">Team</span>
                <span className="home-nav5">Blog</span>
              </nav>
              <div className="home-buttons">
                <button className="home-login button">Login</button>
                <button className="home-register1 button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading Heading">Pixel Penguins</h1>
            <span className="home-hero-sub-heading">
              Solar Penguins to rule over solana
              Solar PEnguins to rule over solana
            </span>
            <div className="home-btn-group">
              <button className="home-hero-button1 button">Mint</button>
              <a href="#Features" className="home-hero-button2 button">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container02">
            <h2 id="About" className="home-details-heading heading2 Heading">
              About Pixel Penguins
            </h2>
            <span className="home-details-sub-heading">
              Pixel Penguins is a revolutionary NFT platform built on the Solana
              blockchain. With our pixelated themed website, we offer a wide
              range of unique and collectible pixel art NFTs. Each Pixel Penguin
              is meticulously designed and has its own story to tell. Join our
              community and start your journey into the world of digital art and
              blockchain technology.
            </span>
          </div>
          <img alt="image" src="/155-400h.png" className="home-details-image" />
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div id="Features" className="home-features1">
            <div className="home-container03">
              <h2 className="home-features-heading heading2 Heading">
                Discover the Features of Pixel Penguins
              </h2>
              <span className="home-features-sub-heading">
                Explore the exciting features that make Pixel Penguins a
                must-have NFT collection.
              </span>
            </div>
            <div className="home-container04">
              <FeatureCard
                Heading="Unique Pixelated Artwork"
                SubHeading="Discover a collection of one-of-a-kind pixelated artwork created by talented artists."
              ></FeatureCard>
              <FeatureCard
                Heading="NFT Ownership on Solana Blockchain"
                SubHeading="Own and trade your Pixel Penguins NFTs securely on the Solana blockchain, ensuring authenticity and provenance."
              ></FeatureCard>
              <FeatureCard
                Heading="Limited Edition Collectibles"
                SubHeading="Get your hands on limited edition Pixel Penguins NFTs, each with its own unique traits and characteristics."
              ></FeatureCard>
              <FeatureCard
                Heading="Community-driven "
                SubHeading="Join a vibrant community of collectors and artists, where you can buy, sell, and interact with fellow Pixel Penguins enthusiasts."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-pricing1">
          <div className="home-container05">
            <span id="Pricing" className="home-text03 Content sectionTitle">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="home-pricing-heading heading2">
              How much does it cost?
            </h2>
            <span className="home-pricing-sub-heading">
              Unlock the world of pixelated NFTs with our affordable pricing.
            </span>
          </div>
          <div className="home-container06">
            <div className="home-pricing-card">
              <div className="home-container07">
                <span className="Content heading3">0.1 Sol per NFt</span>
                <span className="home-free-plan-description">
                  Get started with Pixel Penguins for 0.1 sol and explore the
                  world of pixelated NFTs on the Solana blockchain.
                  <SolanaPrice />
                </span>
              </div>
              <div className="home-container09">
                <div className="home-container10">
                  <span className="home-text07">✔</span>
                  <span className="home-free-plan-features">
                    Access to a limited collection of pixelated NFTs
                  </span>
                </div>
                <div className="home-container11">
                  <span className="home-text08">✔</span>
                  <span className="home-free-plan-features1">
                    Ability to buy and sell your Pixel Pengus on any supported
                    marketplace
                  </span>
                </div>
              </div>
              <button className="home-button button">
                <span>
                  <span>Buy for 0.1 sol</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner"></div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container12">
              <h2 className="home-text12 heading2 Heading">Common questions</h2>
              <span className="home-text13">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container13">
              <Question
                Answer="Pixel Penguins is a pixelated themed website for NFTs on the Solana blockchain."
                Question="What is Pixel Penguins?"
              ></Question>
              <Question
                Answer="NFT stands for Non-Fungible Token, which is a unique digital asset that represents ownership or proof of authenticity."
                Question="What is an NFT?"
              ></Question>
              <Question
                Answer="To purchase Pixel Penguins, you can visit our website and connect your Solana wallet. "
                Question="How can I purchase Pixel Penguins?"
              ></Question>
              <Question
                Answer="Yes, you can sell your Pixel Penguins on various NFT marketplaces that support Solana. Simply connect your wallet to the marketplace and list your Pixel Penguins for sale."
                Question="Can I sell my Pixel Penguins?"
              ></Question>
              <Question
                Answer="Owning a Pixel Penguin not only gives you a unique and collectible digital asset, but it also grants you access to exclusive events, giveaways, and future updates related to the Pixel Penguins community. Pixel Pengus will not just be an NFT, they will get usecases and earn revenue in the future"
                Question="Are there any benefits to owning a Pixel Penguin?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-container14">
            <a href="#Top" className="home-logo2">
              PIXELPENGUINS
            </a>
            <nav className="home-nav1 home-nav1">
              <a href="#About" className="home-nav12">
                About
              </a>
              <a href="#Features" className="home-nav22">
                Features
              </a>
              <a href="#Pricing" className="home-nav32">
                Pricing
              </a>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container15">
            <span className="home-text30">
              © 2023 Solar Pixel Pengus, All Rights Reserved.
            </span>
            <div className="home-icon-group1">
              <a
                href="https://twitter.com/Pengu_NFT"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon10"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
