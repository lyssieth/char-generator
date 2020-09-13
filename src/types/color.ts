export class Color {
    private _name: string;
    private _hex: string;

    /**
     * @param {string} name
     * @param {string} hex
     */
    constructor(name: string, hex: string) {
        this._name = name;
        this._hex = hex;
    }

    get name() {
        return this._name;
    }

    get hex() {
        return this._hex;
    }

    get rgb() {
        let col = this.hex.split(/[0-9a-fA-F]{2}/);
        let r = col[0],
            g = col[1],
            b = col[2];

        return { r: parseInt(r, 16), g: parseInt(g, 16), b: parseInt(b, 16) };
    }

    public toString() {
        return (
            '<span class="underlined" title="' +
            this.hex +
            '">' +
            this.name +
            "</span>"
        );
    }

    public toHTMLString(renderColors: boolean) {
        if (renderColors) {
            return (
                '<span style="color: #' +
                this.hex +
                ';" title="' +
                this.hex +
                '">[' +
                this.name +
                "]</span>"
            );
        } else {
            return this.toString();
        }
    }
}
