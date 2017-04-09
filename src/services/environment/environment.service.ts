import { Injectable } from '@angular/core';
import { Environments } from '../../configs/environments';

@Injectable()
export class EnvironmentService {
    private _fullUrl: string;

    constructor() {
        this.fullUrl = Environments.getUrl(Environments.list[0]);
    }

	public get fullUrl(): string {
		return this._fullUrl;
	}

	public set fullUrl(value: string) {
		this._fullUrl = value;
	}

}