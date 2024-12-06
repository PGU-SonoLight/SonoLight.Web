/**
 * @author Jim Lin
 * @desc 响应式组件相关代码
 */

type SizerState = "mobile" | "tablet" | "desktop" | "unknown";

export const getCurrentSizerState = (): SizerState => {
    if (window.matchMedia("(min-width: 1024px)").matches) return "desktop";
    if (window.matchMedia("(max-width: 768px)").matches) return "tablet";
    if (window.matchMedia("(max-width: 320px)").matches) return "tablet";
    return "unknown";
};