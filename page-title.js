const PAGE_TITLE = 'Kontur UI Docs';
document.title = PAGE_TITLE;

const titleEl = document.querySelector('title');
const obs = new MutationObserver(() => {
  const old = document.title;
  const modified = old
    .replace(/\s-\s/g, ' — ')
    .replace(/Docs ⋅ Storybook$/, PAGE_TITLE);
  if (old !== modified) {
    document.title = modified;
  }
});
obs.observe(titleEl, { childList: true });
