import { html } from "@microsoft/fast-element";


export const template = html`
    <h1 style="color: ${x => x.color}">
        <slot></slot>
    </h1>
`;
