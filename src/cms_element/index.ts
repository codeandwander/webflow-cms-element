(() => {
  const config = {
    listItemAttributeValue: 'list-item',
    elementAttributeValue: 'element',
    positionAttibute: 'data-cw-cms-element-position',
  };

  const element = document.querySelector(
    `[data-cw-cms-element="${config.elementAttributeValue}"]`
  );
  if (!element) {
    return new Error('CMS Element element attribute not found');
  }

  const listItems = document.querySelectorAll(
    `[data-cw-cms-element="${config.listItemAttributeValue}"]`
  );
  if (!listItems) {
    return new Error('CMS Element list item attribute not found');
  }

  const position = document.querySelector<
    HTMLElement & { readonly dataset: DOMStringMap }
  >(`[${config.positionAttibute}]`);
  if (!position) {
    return new Error('CMS Element position attribute not found');
  }

  const positionVal = parseInt(position.dataset.cwCmsElementPosition) - 2;

  const copy = element.cloneNode(true);
  listItems[positionVal].after(copy);
  element.remove();
})();
