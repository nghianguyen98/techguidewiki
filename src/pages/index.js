import React from 'react';
import Layout from '@theme/Layout';
import  '../css/mystyle.css';
export default function Home() {
  return (
    <Layout
      title="Trang Chủ"
      description="Mô tả trang chủ">
      <main>
     
      <div className="wapperap">
      <div className="content">
        <h3>Hello 👋</h3>
        <p>Welcome to our website - a personal space dedicated to sharing knowledge about DevOps and System Administration. Here, I provide documentation authored by individuals, not from official sources. The insights, guides, and information on this website stem from passionate technology enthusiasts who aim to contribute to the sharing and broadening of understanding in these two crucial domains.</p>
        <a href="/docs/wellcome"><span></span>
      <span></span>
      <span></span>
      <span></span>Explore</a>
      </div>
      <div class="img-banner">
        <div class="icon">
          <img class= "icon-auto one"src="img/1.svg" alt="" />
          <img class= "icon-auto two"src="img/2.svg" alt="" />
          <img class= "icon-auto four"src="img/4.svg" alt="" />
          <img class= "icon-auto fine"src="img/5.svg" alt="" />
          <img class= "icon-auto six"src="img/6.svg" alt="" />
          <img class= "icon-auto seven"src="img/7.svg" alt="" />
          <img class= "icon-auto eight"src="img/8.svg" alt="" />
          <img class= "icon-auto nice"src="img/9.svg" alt="" />
          <img class= "icon-auto then"src="img/10.svg" alt="" />
          <img class= "icon-auto ele"src="img/11.svg" alt="" />
          <img class= "icon-auto element"src="img/12.svg" alt="" />
        </div>
        <div class="img-banner-main">
        <img src="img/banner.svg" class="banner" alt="" />
        </div>
      </div>
    </div>
      </main>
    </Layout>
  );
}