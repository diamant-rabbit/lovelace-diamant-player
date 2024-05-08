export type EntityConfig = {
    entity?: string
}

export type ActionsConfig = {
    tap_action?: unknown,
    hold_action?: unknown,
}

export type ChipConfig = EntityConfig & ActionsConfig & {
    icon?: string,
    title?: string,
}

export type RoomCardConfig = EntityConfig & ActionsConfig & {
    title?: string;
    icon: string;
    temperature_sensor?: string;
    humidity_sensor?: string;
    items?: any[];
}
