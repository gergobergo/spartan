import { Directive, Input } from '@angular/core';
import { BrnDialogTriggerDirective } from '@spartan-ng/ui-dialog-brain';
import { BrnAlertDialogComponent } from './brn-alert-dialog.component';

@Directive({
	selector: 'button[brnAlertDialogTrigger],button[brnAlertDialogTriggerFor]',
	standalone: true,
	host: {
		'[id]': '_id()',
		'(click)': 'open()',
		'aria-haspopup': 'dialog',
		'[attr.aria-expanded]': "state() === 'open' ? 'true': 'false'",
		'[attr.data-state]': 'state()',
		'[attr.aria-controls]': 'dialogId',
	},
})
export class BrnAlertDialogTriggerDirective extends BrnDialogTriggerDirective {
	@Input()
	set brnAlertDialogTriggerFor(brnDialog: BrnAlertDialogComponent) {
		super.brnDialogTriggerFor = brnDialog;
	}
}
