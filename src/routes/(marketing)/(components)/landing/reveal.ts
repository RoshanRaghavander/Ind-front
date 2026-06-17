/**
 * Scroll-reveal action: fades + slides an element into view the first time it
 * intersects the viewport. Honors prefers-reduced-motion (reveals instantly).
 */
export function reveal(node: HTMLElement, params: { delay?: number } = {}) {
    const reduce =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    node.style.setProperty('--reveal-delay', `${params.delay ?? 0}ms`);
    node.classList.add('reveal');

    if (reduce) {
        node.classList.add('is-visible');
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    node.classList.add('is-visible');
                    observer.unobserve(node);
                }
            }
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
