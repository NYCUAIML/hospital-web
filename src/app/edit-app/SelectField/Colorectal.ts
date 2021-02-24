import { field, value } from '../../global.model';

export let ColorectalField: Array<field> = [
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Past and Personal History',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'DM',
        'value': 'DM'
      },
      {
        'type': 'checkbox',
        'label': 'Hypertension, need treatment',
        'value': 'Hypertension, need treatment'
      },
      {
        'type': 'checkbox',
        'label': 'Heart disease, need medical/surgical Tx',
        'value': 'Heart disease, need medical/surgical Tx'
      },
      {
        'type': 'checkbox',
        'label': 'Liver cirrhosis, chronic hepatic disease',
        'value': 'Liver cirrhosis, chronic hepatic disease'
      },
      {
        'type': 'checkbox',
        'label': 'Renal failure or renal insufficiency',
        'value': 'Renal failure or renal insufficiency'
      },
      {
        'type': 'checkbox',
        'label': 'COPD or after major lung resection',
        'value': 'COPD or after major lung resection'
      },
      {
        'type': 'checkbox',
        'label': 'Brain disease(CVA or dementia)',
        'value': 'Brain disease(CVA or dementia)'
      },
      {
        'type': 'checkbox',
        'label': 'History of cholecystectomy',
        'value': 'History of cholecystectomy'
      },
      {
        'type': 'checkbox',
        'label': 'Chronic use of steroid',
        'value': 'Chronic use of steroid'
      }
    ]
  },
  {
    'type': 'text',
    'icon': 'fa-font',
    'label': 'History of other malignancy',
    'description': '0:No, 1:Yes:___',
    'placeholder': '0:No, 1:Yes:___',
    'className': 'form-control',
    'subtype': 'text',
    'regex' : '',
    'handle': true
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Special Colorectal Condition',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'No',
        'value': 'No'
      },
      {
        'type': 'checkbox',
        'label': 'History of polyps',
        'value': 'History of polyps'
      },
      {
        'type': 'checkbox',
        'label': 'History of colorectal cancer',
        'value': 'History of colorectal cancer'
      },
      {
        'type': 'checkbox',
        'label': 'History of inflammatory bowel disease',
        'value': 'History of inflammatory bowel disease'
      },
      {
        'type': 'checkbox',
        'label': 'Presented with obstruction',
        'value': 'Presented with obstruction'
      },
      {
        'type': 'checkbox',
        'label': 'Presented with perforation/peritonitis',
        'value': 'Presented with perforation/peritonitis'
      },
      {
        'type': 'checkbox',
        'label': 'Polyposis coli',
        'value': 'Polyposis coli'
      },
      {
        'type': 'textarea',
        'label': 'Other colorectal disorders',
        'value': ''
      },
    ]
  },
  {
    'type': 'text',
    'icon': 'fa-font',
    'label': 'Family History',
    'description': '(請以2A,1B形式，不止一位請複選)',
    'placeholder': '(請以2A,1B形式，不止一位請複選)',
    'className': 'form-control',
    'subtype': 'text',
    'regex' : '',
    'handle': true
  },
  {
    'type': 'text',
    'icon': 'fa-font',
    'label': 'History of other malignancy',
    'description': '0:No, 1:Yes:___',
    'placeholder': '0:No, 1:Yes:___',
    'className': 'form-control',
    'subtype': 'text',
    'regex' : '',
    'handle': true
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Special exams for staging',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Sonography',
        'value': 'Sonography'
      },
      {
        'type': 'checkbox',
        'label': 'abdominal CT',
        'value': 'abdominal CT'
      },
      {
        'type': 'checkbox',
        'label': 'MRI',
        'value': 'MRI'
      },
      {
        'type': 'checkbox',
        'label': 'Endorectal Sono',
        'value': 'Endorectal Sono'
      },
      {
        'type': 'checkbox',
        'label': 'Chest CT scan',
        'value': 'Chest CT scan'
      },
      {
        'type': 'checkbox',
        'label': 'PET-CT',
        'value': 'PET-CT'
      },
      {
        'type': 'textarea',
        'label': 'Image clinical stage, cT_N_M_',
        'value': ''
      },
    ]
  },
  {
    'type': 'file',
    'icon': 'fa-file',
    'label': 'Site of invasion',
    'className': 'form-control',
    'subtype': 'file'
  },
  {
    'type': 'file',
    'icon': 'fa-file',
    'label': 'Site of metastasis',
    'className': 'form-control',
    'subtype': 'file'
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Tumor characteriatic',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Circumferential',
        'value': 'Circumferential'
      },
      {
        'type': 'checkbox',
        'label': 'Obstructing, ulcerative, infiltrative',
        'value': 'Obstructing, ulcerative, infiltrative'
      },
      {
        'type': 'checkbox',
        'label': 'Appendix',
        'value': 'Appendix'
      },
      {
        'type': 'checkbox',
        'label': 'Cecum',
        'value': 'Cecum'
      },
      {
        'type': 'checkbox',
        'label': 'Ascending colon',
        'value': 'Ascending colon'
      },
      {
        'type': 'checkbox',
        'label': 'Hepatic',
        'value': 'Hepatic'
      },
      {
        'type': 'checkbox',
        'label': 'Trasverse colon',
        'value': 'Trasverse colon'
      },
      {
        'type': 'checkbox',
        'label': 'Splenic flexure',
        'value': 'Splenic flexure'
      },
      {
        'type': 'checkbox',
        'label': 'Descending colon',
        'value': 'Descending colon'
      },
      {
        'type': 'checkbox',
        'label': 'Sigmoid colon',
        'value': 'Sigmoid colon'
      },
      {
        'type': 'checkbox',
        'label': 'Rectosigmoid junction',
        'value': 'Rectosigmoid junction'
      },
      {
        'type': 'checkbox',
        'label': 'Anal canal',
        'value': 'Anal canal'
      },
      {
        'type': 'textarea',
        'label': 'Rectum tumor __cm from anal verge',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'Associated with adenoma___',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'Number of cancer lesions',
        'value': ''
      },
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Tumor Markers',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'textarea',
        'label': 'CEA (initial/pre-op/one month post-op)',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'CA-199 (initial/pre-op/one month post-op)',
        'value': ''
      },
    ]
  },
  {
    'type': 'textarea',
    'icon': 'fa-text-width',
    'label': 'Chief complaint',
    'value': ''
  },
  {
    'type': 'textarea',
    'icon': 'fa-text-width',
    'label': 'Present illness',
    'value': ''
  },
  {
    'type': 'textarea',
    'icon': 'fa-text-width',
    'label': 'First symptom',
    'value': ''
  },
];
