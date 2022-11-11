# CMS element

inject content into collections

## Install

Add the following script the the bottom of the body tag:

`<script src="https://cw-webflow.s3.eu-west-1.amazonaws.com/cms_element/index.js"></script>`

## Attributes

The element to be injected:

`data-cw-cms-element="element"`

The list the element will be injected into:

`data-cw-cms-element="list"`

The position the element will be inject in at:

`data-cw-cms-element-position="4"`

## Example markup

```html
<div data-cw-cms-element="element" class="element">
  <div class="cta">
    <div>
      <h3>A CTA</h3>
      <button>Click me</button>
    </div>
  </div>
</div>

<div
  class="w-dyn-list"
  data-cw-cms-element="list"
  data-cw-cms-element-position="4"
>
  <div role="list" class="w-dyn-items">
    <div class="listitem" data-cw-cms-element="list-item">
      <img
        src="https://picsum.photos/seed/picsum/200/300"
        alt="Placeholder image"
      />
      <div>
        <span>Test</span>
        <h3>Test Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat
          ex. Mauris euismod placerat metus, at pretium dui fringilla quis.
          Suspendisse molestie maximus turpis at viverra.
        </p>
      </div>
    </div>
    ...
  </div>
</div>
```
