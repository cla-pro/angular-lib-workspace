# NgxClosable

Library that provides a very simple responsive way to make a component closable (hidden) based on a toggle button. If the screen is big enough, the component is always displayed and the toggle button hidden.

## Usage

If you have only one closable content (and toggle) in your whole application, only the attribute directive is required for both the content and the toggle.

```ts
<div ngxClosable>
    ...
</div>
...
<button ngxClosableToggle>...</button>
```

Run `ng generate component component-name --project ngx-closable` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-closable`.
> Note: Don't forget to add `--project ngx-closable` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-closable` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-closable`, go to the dist folder `cd dist/ngx-closable` and run `npm publish`.

## Running unit tests

Run `ng test ngx-closable` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
