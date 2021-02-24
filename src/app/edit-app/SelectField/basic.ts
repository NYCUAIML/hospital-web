import { field, value } from '../../global.model';

export let basicField: Array<field> = [
    {
      'type': 'text',
      'icon': 'fa-font',
      'label': 'Text',
      'description': 'Enter your name',
      'placeholder': 'Enter your name',
      'className': 'form-control',
      'subtype': 'text',
      'regex' : '',
      'handle': true
    },
    {
      'type': 'number',
      'label': 'Number',
      'icon': 'fa-html5',
      'description': 'Age',
      'placeholder': 'Enter your age',
      'className': 'form-control',
      'value': '20',
      'min': 12,
      'max': 90
    },
    {
      'type': 'textarea',
      'icon': 'fa-text-width',
      'label': 'Textarea'
    },
    {
      'type': 'date',
      'icon': 'fa-calendar',
      'label': 'Date',
      'placeholder': 'Date',
      'className': 'form-control'
    },
    {
      'type': 'paragraph',
      'icon': 'fa-paragraph',
      'label': 'Paragraph',
      'placeholder': 'Type your text to display here only'
    },
    {
      'type': 'checkbox',
      'required': true,
      'label': 'Checkbox',
      'icon': 'fa-list',
      'description': 'Checkbox',
      'inline': true,
      'values': [
        {
          'type': 'checkbox',
          'label': 'Option 1',
          'value': 'option-1'
        },
        {
          'type': 'checkbox',
          'label': 'Option 2',
          'value': 'option-2'
        }
      ]
    },
    {
      'type': 'radio',
      'icon': 'fa-list-ul',
      'label': 'Radio',
      'description': 'Radio boxes',
      'values': [
        {
          'label': 'Option 1',
          'value': 'option-1'
        },
        {
          'label': 'Option 2',
          'value': 'option-2'
        }
      ]
    },
    {
      'type': 'autocomplete',
      'icon': 'fa-bars',
      'label': 'Select',
      'description': 'Select',
      'placeholder': 'Select',
      'className': 'form-control',
      'values': [
        {
          'label': 'Option 1',
          'value': 'option-1'
        },
        {
          'label': 'Option 2',
          'value': 'option-2'
        },
        {
          'label': 'Option 3',
          'value': 'option-3'
        }
      ]
    },
    {
      'type': 'file',
      'icon': 'fa-file',
      'label': 'File Upload',
      'className': 'form-control',
      'subtype': 'file'
    },
    {
      'type': 'button',
      'icon': 'fa-paper-plane',
      'subtype': 'submit',
      'label': 'Submit'
    }
  ];
