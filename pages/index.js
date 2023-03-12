import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Section1 from '../components/Section1';
import Section01 from '../components/Section01';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
// import Img1 from '../static/img1';

import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      {/* <Section01 /> */}
      <div class="landingpage">
        <Header />
        {/* <Section1 />
        <div class="auction">
          <div class="title">
            <p class="titlebold">Hot auctions</p>
            <p class="titleslim">View all</p>
          </div>
          <div class="nft">
            <div class="item">
              <img class="item-img" src="https://i.ibb.co/RhpnYWV/Enis-cyberpunk-ottoman-sultan-in-a-cyberpunk-city-8-K-hyperreali-e7506c88-2574-487c-838e-5bb8618dd1c.png" alt="unsplash-OG44d93i-NJk" border="0" />
              <div class="item-title">
                <p>Lorem Ipsum</p>
                <p>1.20 Weth</p>
              </div>
              <p class="item-date">Ends in 01.34.45</p>
            </div>
            <div class="item">
              <img class="item-img" src="https://i.ibb.co/SrNRC0b/Erkan-Erdil-angry-soviet-officer-shouting-his-soldiers8k-octane-7b802966-9d4e-4c6e-ac37-d4f751419081.png" alt="unsplash-OG44d93i-NJk" border="0" />
              <div class="item-title">
                <p>Lorem Ipsum</p>
                <p>1.20 Weth</p>
              </div>
              <p class="item-date">Ends in 01.34.45</p>
            </div>
            <div class="item">
              <img class="item-img" src="https://i.ibb.co/YjzSzjk/Erkan-Erdil-very-technical-and-detailed-blueprint-of-wolf-carve-bd937607-6a4f-4525-b4f2-b78207e64662.png" border="0" />
              <div class="item-title">
                <p>Lorem Ipsum</p>
                <p>1.20 Weth</p>
              </div>
              <p class="item-date">Ends in 01.34.45</p>
            </div>
            <div class="item">
              <img class="item-img" src="https://i.ibb.co/VLfJ41h/MR-ROBOT-two-cyberpunk-cowboys-dueling-6ae4203d-3539-4033-a9d9-80d747ac6498.png" alt="unsplash-OG44d93i-NJk" border="0" />
              <div class="item-title">
                <p>Lorem Ipsum</p>
                <p>1.20 Weth</p>
              </div>
              <p class="item-date">Ends in 01.34.45</p>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="footer-main">
            Etiam et id tincidunt faucibus mollis a sociis pretium fermentum quis magna faucibus lacus.
          </div>
          <div class="footer-navigate">
            <div class="nav">
              <h5>Marketplace</h5>
              <p>Home</p>
              <p>Activity</p>
              <p>Discover</p>
              <p>Learn more</p>
            </div>
            <div class="nav">
              <h5>Company</h5>
              <p>About Us</p>
              <p>Services</p>
              <p>Portfolio</p>
            </div>
            <div class="nav">
              <h5>Contact</h5>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Email</p>
            </div>
          </div>
        </div>
        <div class="footer2">
          <div></div>
          <p>Copyright 2021 Gaslur</p>
  </div> */}
      </div>  
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
