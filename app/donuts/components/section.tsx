'use client'

import React, { useEffect, useRef, useState } from 'react';
import cx from 'clsx';

import styles from './section.module.css';

function useIntersectionObserver(callback: (entry: IntersectionObserverEntry) => void) {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                callback(e);
            })
        }, {
            threshold: 0.5
        });
        const { current } = ref;
        if (current) {
            console.log('observing');
            observer.observe(current);
            return () => observer.unobserve(current);
        }
    }, [callback])
    return ref;
}

export function Section(props: object) {
    const [intersecting, setIntersecting] = useState(false);
    const ref = useIntersectionObserver((entry) => {
        console.log(entry.intersectionRatio);
        setIntersecting(entry.isIntersecting)
    });
    return (
        <section
            ref={ref}
            {...props}
            className={cx(styles.container, { [styles.intersecting]: intersecting })}
        />
    );
}
