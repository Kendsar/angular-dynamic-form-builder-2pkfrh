import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form: FormGroup;
  unsubcribe: any

  public fields: any[] = [
    {
      fieldId: 'First Name',
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      row: '1',
      column: '1',
      defaultValue: '',
      tab: '',
      visibleInSynthesis: '',
      required: true,
    },
    {
      fieldId: 'Last Name',
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      row: '1',
      column: '2',
      defaultValue: '',
      tab: '',
      visibleInSynthesis: '',
      required: true,
    },
    {
      fieldId: 'Origin',
      type: 'text',
      name: 'origin',
      label: 'Origin',
      row: '2',
      column: '1',
      defaultValue: '',
      tab: '',
      visibleInSynthesis: '',
      required: true,
    },
    {
      fieldId: 'Sex',
      type: 'dropdown',
      name: 'sex',
      label: 'Sex',
      row: '2',
      column: '2',
      defaultValue: 'in',
      tab: '',
      visibleInSynthesis: '',
      required: true,
      options: [
        { key: 'M', label: 'Male' },
        { key: 'F', label: 'Female' }
      ]
    },
    {
      fieldId: 'Devise',
      type: 'checkbox',
      name: 'devise',
      label: 'Devise',
      row: '3',
      column: '1',
      defaultValue: '',
      tab: '',
      visibleInSynthesis: '',
      required: true,
      options: [
        { key: 'EUR', label: 'EUR' },
        { key: 'TND', label: 'TND' }
      ]
    }
  ];

  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }

  onUpload(e) {
    console.log(e);

  }

  getFields() {
    return this.fields;
  }

  ngDistroy() {
    this.unsubcribe();
  }
}
