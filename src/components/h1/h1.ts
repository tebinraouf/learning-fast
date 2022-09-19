import { FASTElement, attr } from "@microsoft/fast-element";
import { styles } from "./h1.style.js";
import { template } from "./h1.template.js";


export class H1Component extends FASTElement {
    @attr color: string = 'brown'
}

export const h1component = H1Component.compose({
    name: "tebin-h1",
    template,
    styles,
});
