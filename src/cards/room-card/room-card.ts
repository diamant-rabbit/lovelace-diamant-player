import {html, nothing} from "lit";
import {customElement} from "lit/decorators.js";
import {ChipConfig, RoomCardConfig} from "./room-card-config";
import {DiamantCard} from "../../common/diamant-card";

@customElement(RoomCard.TYPE)
export class RoomCard extends DiamantCard<RoomCardConfig> {
    static readonly TYPE = "diamant-ui-room-card"
    static readonly NAME = "Diamant Room Card"
    static readonly DESCRIPTION = "Card for room representation"

    protected render() {
        if (!this._config || !this.hass) {
            return nothing
        }

        return html`
            <ha-card>
                <div>
                    ${this._config.title ?? nothing}
                    ${this._config.icon ?? nothing}
                    ${this._config.temperature_sensor ?? nothing}
                    ${this._config.humidity_sensor ?? nothing}
                    ${this._config.items?.map((item: ChipConfig) => {
                        return html`
                            <div>
                                ${item.icon ?? nothing}
                                ${item.title ?? nothing}
                            </div>
                        `
                    }) ?? nothing}
                </div>
            </ha-card>
        `;
    }
}
