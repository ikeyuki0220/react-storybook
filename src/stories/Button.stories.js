import { Button } from "../Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Button",
    backgroundColor: "",
  },
  argTypes: {
    label: {
      description: "ボタンのラベル名",
      table: {
        defaultValue: {
          summary: "",
        },
        type: {
          summary: "string",
        },
      },
    },
    backgroundColor: {
      description: "ボタンの背景色",
      table: {
        defaultValue: {
          summary: "",
        },
        type: {
          summary: "string",
        },
      },
    },
  },
};

export const Default = {};

export const Red = {
  args: {
    backgroundColor: "red",
  },
};

export const Yellow = {
  args: {
    backgroundColor: "yellow",
  },
};
