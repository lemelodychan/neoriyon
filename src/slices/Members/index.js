/**
 * @typedef {import("@prismicio/client").Content.MembersSlice} MembersSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MembersSlice>} MembersProps
 * @param {MembersProps}
 */
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";

const Members = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} />

      {slice.items.map((item, index) => (
        <div key={index}>
          <PrismicNextImage field={item.photo} />
          <div>
            <>{item.name}</>
            <>{item.birthday}</>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Members;
