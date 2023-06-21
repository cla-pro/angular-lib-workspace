# NgxClosable

Library that provides a very simple responsive way to make a component closable (hidden) based on a toggle button. If the screen is big enough, the component is always displayed and the toggle button hidden.

## Usage

Import the NgxClosableModule within your NgModule.
```ts
@NgModule({
    declarations: [],
    imports: [
        ...,
        NgxClosableModule
    ],
})
```
and import the css in your styles.css

```css
@import '../node_modules/ngx-closable/assets/ngx-closable.css'
```

If you have only one closable content (and toggle) in your whole application, only the attribute directive is required for both the content and the toggle.

```ts
<div ngxClosable>
    ...
</div>
...
<button ngxClosableToggle>...</button>
```

> The closable and the toggle *don't* need to be located in the same component.

Optional you can define a closable ID which is used from the toggle to open/close only the closable(s) with the same id.

```ts
<div ngxClosable closableId="my-first-closable">
    ...
</div>
...
<button ngxClosableToggle closableId="my-first-closable">...</button>
...
<div ngxClosable closableId="my-second-closable">
    ...
</div>
...
<button ngxClosableToggle closableId="my-second-closable">...</button>
```

Based on the closable ID, the toggle can control multiple closables at once. It simply requires all the related closables to have the same ID.
