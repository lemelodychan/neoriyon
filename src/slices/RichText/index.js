/**
 * @typedef {import("@prismicio/client").Content.RichTextSlice} RichTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RichTextSlice>} RichTextProps
 * @param {RichTextProps}
 */

import { PrismicRichText } from "@prismicio/react";
import '../../app/globals.css'
import styles from './richtext.module.scss';

const RichText = ({ slice }) => {

  return (
    <section
      className={styles.RichText}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={slice.primary.anchor}
    >
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.text} />
    </section>
  );
};

export default RichText;
