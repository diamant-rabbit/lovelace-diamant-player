import {DiamantElement} from "./diamant-element";
import {state} from "lit/decorators.js";
import {html} from "lit";
import {HassEntity} from "home-assistant-js-websocket";

export class DiamantCard<ConfigT, HassEntityT extends HassEntity = HassEntity> extends DiamantElement {
    @state() protected _config?: ConfigT;

    setConfig(config: ConfigT) {
        this._config = config
    }

    protected get _stateObj(): HassEntityT | undefined {
        return undefined
        // if (!this._config || !this.hass || !this._config.entity) return undefined;
        //
        // const entityId = this._config.entity;
        // return this.hass.states[entityId] as HassEntityT;
    }

    protected renderError(error: string) {
        return html`
            <ha-card>
                ${error}
            </ha-card>
        `
    }
}