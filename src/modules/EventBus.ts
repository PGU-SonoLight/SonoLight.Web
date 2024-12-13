/**
 * @author Jim Lin
 * @desc 事件总线相关代码
 * @version 1.0.0
 */

const eventNames: string[] = [
    "ROUTER_TO:CHOOSE_PROJECT",
    "POPOUT:SIT_BACK_AND_RELAX",
];

type EventNames = (typeof eventNames)[number];

class EventBus {
    private listeners: Record<EventNames, Set<Function>> = {
        "ROUTER_TO:CHOOSE_PROJECT": new Set(),
        "POPOUT:SIT_BACK_AND_RELAX": new Set(),
    };

    on(eventName: EventNames, listener: Function) {
        this.listeners[eventName].add(listener);
    }

    emit(eventName: EventNames, ...args: any[]) {
        if (this.listeners[eventName].size === 0) {
            this.emit(
                "ERR-HANDLER:WARNING",
                `Call Event ${eventName} has no listeners`
            );
        }
        this.listeners[eventName].forEach((listener) => listener(...args));
    }
}

const eventBus = new EventBus();

export default eventBus;
