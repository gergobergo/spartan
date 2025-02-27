import { Component } from '@angular/core';
import { ThreeHundredItemPlaceholderComponent } from './th-item-placeholder.component';
import { ThreeHundredItemComponent } from './th-item.component';

@Component({
	selector: 'spartan-three-hundred',
	standalone: true,
	imports: [ThreeHundredItemComponent, ThreeHundredItemPlaceholderComponent],
	host: {
		class: 'grid gap-2 grid-cols-5 md:grid-cols-10',
	},
	template: `
		@for (contributor of _contributors; track contributor) {
			<spartan-th-item class="mb-2" [href]="'https://github.com/' + contributor">{{ contributor }}</spartan-th-item>
		}
		@for (item of _rest; track item) {
			<spartan-th-item-placeholder class="mb-2" />
		}
	`,
})
export class ThreeHundredComponent {
	protected readonly _contributors = [
		'goetzrobin',
		'mihajm',
		'ajitzero',
		'arturgawlik',
		'deepakrudrapaul',
		'evanfuture',
		'AdditionAddict',
		'Altamimi-Dev',
		'ferat',
		'jeremy-js-devweb',
		'heddendorp',
		'tutkli',
		'Pascalmh',
		'okkindel',
		'marcjulian',
		'elite-benni',
		'oidre',
		'nartc',
		'santoshyadavdev',
		'markostanimirovic',
		'theo-matzavinos',
	];
	protected readonly _rest = Array(300 - this._contributors.length).map((x, i) => i);
}
