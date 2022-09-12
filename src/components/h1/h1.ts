import { FASTElement } from "@microsoft/fast-element";
import { styles } from "./h1.style.js";
import { template } from "./h1.template.js";


export class H1Component extends FASTElement {

}

export const h1component = H1Component.compose({
    name: "tebin-h1",
    template,
    styles,
});
