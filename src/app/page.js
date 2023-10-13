import styles from './page.module.scss';

import { SliceZone } from "@prismicio/react";

import React from 'react';
import ParticlesComponent from './components/Particles'; // Adjust the import path based on your project structure
import GlitchHero from './components/GlitchHero';

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from '@prismicio/next';


export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");
  const members = await client.getAllByType("member");

  const imageURL = page.data.main_image.url;

  return (
    <div className={styles.main}>
      <GlitchHero>
          <div className={styles.glitch__img} style={{backgroundImage: `url(${imageURL})`}}></div>
          <div className={styles.glitch__img} style={{backgroundImage: `url(${imageURL})`}}></div>
          <div className={styles.glitch__img} style={{backgroundImage: `url(${imageURL})`}}></div>
          <div className={styles.glitch__img} style={{backgroundImage: `url(${imageURL})`}}></div>
          <div className={styles.glitch__img} style={{backgroundImage: `url(${imageURL})`}}></div>
      </GlitchHero>

      <div className={styles.content}>
        <SliceZone slices={page.data.slices} components={components} />
      </div>

      <ParticlesComponent />
    </div>
  );
}