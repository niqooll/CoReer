// utils/index.js

export async function applyViewTransition(contentSelector, renderCallback) {
  const contentWrapper = document.querySelector(contentSelector);

  if (!document.startViewTransition || !contentWrapper) {
    // Jika View Transition API tidak didukung, langsung render saja
    await renderCallback();
    return;
  }

  const scrollY = window.scrollY;

  const transition = document.startViewTransition(async () => {
    await renderCallback();
    // Kembalikan posisi scroll setelah render
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
    });
  });

  await transition.finished;
}
