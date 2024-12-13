import zhCN from "./zh-CN.json";

type LangType = { [key: string]: string };

export const $t = (key: string) => {
    return (zhCN as LangType)[key] ?? key;
};
