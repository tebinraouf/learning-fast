import { FASTElement, attr } from "@microsoft/fast-element";
import { styles } from "./h1.style.js";
import { template } from "./h1.template.js";


export class H1Component extends FASTElement {
    @attr color: string = 'brown'

    private handler() {
        const quotes = ["We cannot solve our problems with the same thinking we used when we created them", "The true sign of intelligence is not knowledge but imagination.", "I have no special talent. I am only passionately curious.", "The only reason for time is so that everything doesn't happen at once.", "Only a life lived for others is a life worthwhile."];
        const random = Math.floor(Math.random() * quotes.length);

        this.$emit('colorhandler', quotes[random])
    };
}

export const h1component = H1Component.compose({
    name: "tebin-h1",
    template,
    styles,
});
