/**
 * @typedef {import("@prismicio/client").Content.MembersSlice} MembersSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MembersSlice>} MembersProps
 * @param {MembersProps}
 */
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import '../../app/globals.css'
import styles from './members.module.scss';

const Members = ({ slice }) => {
  return (
    <section
      className={styles.Members}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={slice.primary.anchor}
    >
      <PrismicRichText field={slice.primary.title} />

      <div className={styles.Grid}>

      {slice.items.map((item, index) => (
        <div key={index} className={styles.Member}>
          <PrismicNextImage field={item.photo} />
          <div className={styles.Info} style={{borderColor: `${item.color}`}}>
            <div className={styles.Nom}>{item.name}</div>
            <div className={styles.Birthday}><strong>Anniversaire :</strong> {item.birthday}</div>
          </div>
        </div>
      ))}

      </div>
    </section>
  );
};

export default Members;
