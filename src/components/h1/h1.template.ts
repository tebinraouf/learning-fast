import { html } from "@microsoft/fast-element";


export const template = html`
    <h1 style="color: ${x => x.color}" @click="${x => x.handler()}">
        <slot></slot>
    </h1>
`;
