import styles from './page.module.css';

import { SliceZone } from "@prismicio/react";

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

  console.log(page);

  return (
    <div className={styles.main}>
      <PrismicNextImage field={page.data.main_image} />
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}