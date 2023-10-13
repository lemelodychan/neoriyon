'use client';
import React, { useEffect } from 'react';
import imagesLoaded from 'imagesloaded';
import styles from '../page.module.scss';

const GlitchDiv = ({ children }) => {
  useEffect(() => {
    setTimeout(() => document.body.classList.add('render'), 60);

    const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
    const total = navdemos.length;
    const current = navdemos.findIndex(el => el.classList.contains('demo--current'));

    const navigate = (linkEl) => {
      document.body.classList.remove('render');
      document.body.addEventListener('transitionend', () => {
        window.location = linkEl.href;
      });
    };

    navdemos.forEach(link => link.addEventListener('click', (ev) => {
      ev.preventDefault();
      navigate(ev.target);
    }));

    document.addEventListener('keydown', (ev) => {
      const keyCode = ev.keyCode || ev.which;
      let linkEl;
      if (keyCode === 37) {
        linkEl = current > 0 ? navdemos[current - 1] : navdemos[total - 1];
      } else if (keyCode === 39) {
        linkEl = current < total - 1 ? navdemos[current + 1] : navdemos[0];
      } else {
        return false;
      }
      navigate(linkEl);
    });

    imagesLoaded('.glitch__img', { background: true }, () => {
      document.body.classList.remove('loading');
      document.body.classList.add('imgloaded');
    });
  }, []);

  return (
    <div className={styles.glitch}>
      {children}
    </div>
  );
};

export default GlitchDiv;