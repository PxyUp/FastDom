import { Component, FastDomNode, createComponent, fdIf, fdObject, fdValue } from "../../src";

export function createExampleAttr() {
    return createComponent(DynamicAttr)
}

class DynamicAttr extends Component {

    reactive = {
        src: fdValue("https://www.w3schools.com/html/pic_trulli.jpg"),
        disabled: fdIf(false),
    }

    fdObjects = {
        imgAttrs: new fdObject({
            src: this.src
        }),
        btnAttrs: new fdObject({
            disabled: this.disabled
        }),
    }

    get src() {
        return this.reactive.src
    }

    get disabled() {
        return this.reactive.disabled
    }

    onClick = () => {
        this.src.value = "https://www.w3schools.com/html/img_girl.jpg"
    }

    changeBtnClick = () => {
        this.disabled.value = !this.disabled.value
    }

    btnClick = () => {
        alert("hey")
    }

    template: FastDomNode = {
        tag: "div",
        children: [
            {
                tag: "div",
                children: [
                    {
                        tag: "span",
                        textValue: "Current state:"
                    },
                    {
                        tag: "span",
                        textValue: this.disabled
                    },
                    {
                        tag: "button",
                        attrs: this.fdObjects.btnAttrs,
                        textValue: "I am button",
                        listeners: {
                            click: this.btnClick
                        }
                    },
                    {
                        tag: "button",
                        textValue: "Click me to change",
                        listeners: {
                            click: this.changeBtnClick
                        }
                    }
                ]
            },
            {
                tag: "button",
                textValue: "Click me",
                listeners: {
                    click: this.onClick
                }
            },
            {
                tag: "span",
                textValue: this.src
            },
            {
                tag: "div",
                children: [
                    {
                        tag: "img",
                        attrs: this.fdObjects.imgAttrs
                    }
                ]
            }
        ]
    }
}