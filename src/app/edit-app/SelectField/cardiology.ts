import { field, value } from '../../global.model';

export let CardiologyField: Array<field> = [
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Major symptoms',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'autocomplete',
        'label': 'Angina(CCVS) / Chest Pain',
        'values': [
          {
            'label': 'Yes',
            'value': 'Yes'
          },
          {
            'label': 'No',
            'value': 'No'
          }
        ]
      },
      {
        'type': 'date',
        'label': 'Duration',
        'value': ''
      },
      {
        'type': 'autocomplete',
        'label': 'Class',
        'values': [
          {
            'label': 'I',
            'value': 'I'
          },
          {
            'label': 'II',
            'value': 'II'
          },
          {
            'label': 'III',
            'value': 'III'
          },
          {
            'label': 'IV',
            'value': 'IV'
          },
        ]
      },
      {
        'type': 'autocomplete',
        'label': 'Location',
        'values': [
          {
            'label': 'Left',
            'value': 'Left'
          },
          {
            'label': 'Left upper',
            'value': 'Left upper'
          },
          {
            'label': 'Left lower',
            'value': 'Left lower'
          },
          {
            'label': 'Left middle',
            'value': 'Left middle'
          },
          {
            'label': 'Right',
            'value': 'Right'
          },
          {
            'label': 'Right upper',
            'value': 'Right upper'
          },
          {
            'label': 'Right lower',
            'value': 'Right lower'
          },
          {
            'label': 'Mid-chest',
            'value': 'Mid-chest'
          },
          {
            'label': 'Back',
            'value': 'Back'
          }
        ]
      },
      {
        'type': 'autocomplete',
        'label': 'Radiation Pain',
        'values': [
          {
            'label': 'Yes',
            'value': 'Yes'
          },
          {
            'label': 'No',
            'value': 'No'
          }
        ]
      },
      {
        'type': 'autocomplete',
        'label': 'Location',
        'values': [
          {
            'label': 'Left',
            'value': 'Left'
          },
          {
            'label': 'Left upper',
            'value': 'Left upper'
          },
          {
            'label': 'Left lower',
            'value': 'Left lower'
          },
          {
            'label': 'Left middle',
            'value': 'Left middle'
          },
          {
            'label': 'Right',
            'value': 'Right'
          },
          {
            'label': 'Right upper',
            'value': 'Right upper'
          },
          {
            'label': 'Right lower',
            'value': 'Right lower'
          },
          {
            'label': 'Mid-chest',
            'value': 'Mid-chest'
          },
          {
            'label': 'Back',
            'value': 'Back'
          }
        ]
      },
      {
        'type': 'autocomplete',
        'label': 'Quality',
        'values': [
          {
            'label': 'Twitching',
            'value': 'Twitching'
          },
          {
            'label': 'Dullness',
            'value': 'Dullness'
          },
          {
            'label': 'Oppression',
            'value': 'Oppression'
          },
          {
            'label': 'Stabbing like',
            'value': 'Stabbing like'
          }
        ]
      },
      {
        'type': 'autocomplete',
        'label': 'Onset',
        'values': [
          {
            'label': 'Sudden Onset',
            'value': 'Sudden Onset'
          },
          {
            'label': 'Gradual Onset',
            'value': 'Gradual Onset'
          },
          {
            'label': 'Ill Defined',
            'value': 'Ill Defined'
          }
        ]
      },
      {
        'type': 'autocomplete',
        'label': 'Precipitating Mode',
        'values': [
          {
            'label': 'Effort Related',
            'value': 'Effort Related'
          },
          {
            'label': 'Not-effort Related',
            'value': 'Not-effort Related'
          }
        ]
      },
      {
        'type': 'autocomplete',
        'label': 'Releasing Factor',
        'values': [
          {
            'label': 'Resolved with Rest',
            'value': 'Resolved with Rest'
          },
          {
            'label': 'Resolved with Movement',
            'value': 'Resolved with Movement'
          },
          {
            'label': 'Resolved with Drinking Water',
            'value': 'Resolved with Drinking Water'
          },
          {
            'label': 'Resolved with others___',
            'value': 'Resolved with others___'
          },
        ]
      },
      {
        'type': 'autocomplete',
        'label': 'Associated factors',
        'values': [
          {
            'label': 'Dizziness',
            'value': 'Dizziness'
          },
          {
            'label': 'Cold Sweating',
            'value': 'Cold Sweating'
          },
          {
            'label': 'Palpitation',
            'value': 'Palpitation'
          },
          {
            'label': 'Acid Regurgitation',
            'value': 'Acid Regurgitation'
          },
          {
            'label': 'Dyspnea',
            'value': 'Dyspnea'
          },
          {
            'label': 'Cough',
            'value': 'Cough'
          },
          {
            'label': 'Hemoptysis',
            'value': 'Hemoptysis'
          },
        ]
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'CHF(NYHA classification)',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'autocomplete',
        'label': 'CHF(NYHA classification)',
        'values': [
          {
            'label': 'Yes',
            'value': 'Yes'
          },
          {
            'label': 'No',
            'value': 'No'
          }
        ]
      },
      {
        'type': 'autocomplete',
        'label': 'Class',
        'values': [
          {
            'label': 'I',
            'value': 'I'
          },
          {
            'label': 'II',
            'value': 'II'
          },
          {
            'label': 'III',
            'value': 'III'
          },
          {
            'label': 'IV',
            'value': 'IV'
          },
        ]
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'AMI',
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
        'label': 'Yes',
        'value': 'Yes'
      },
      {
        'type': 'textarea',
        'label': 'Functional class (Killip)',
        'value': ''
      },
      {
        'type': 'date',
        'label': 'Date',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Thrombolysis',
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
        'label': 'Yes',
        'value': 'Yes'
      },
      {
        'type': 'checkbox',
        'label': 'SK',
        'value': 'SK'
      },
      {
        'type': 'checkbox',
        'label': 't-PA',
        'value': 't-PA'
      },
      {
        'type': 'date',
        'label': 'Date',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Previous PTCA',
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
        'label': 'Yes',
        'value': 'Yes'
      },
      {
        'type': 'textarea',
        'label': 'Location',
        'value': ''
      },
      {
        'type': 'date',
        'label': 'Date',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Previous CABG',
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
        'label': 'Yes',
        'value': 'Yes'
      },
      {
        'type': 'date',
        'label': 'Date',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Hypertention',
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
        'label': 'Yes',
        'value': 'Yes'
      },
      {
        'type': 'textarea',
        'label': 'Duration(month)',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'DM',
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
        'label': 'Yes',
        'value': 'Yes'
      },
      {
        'type': 'textarea',
        'label': 'Duration(month)',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Hypercholesterolemia',
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
        'label': 'Yes',
        'value': 'Yes'
      },
      {
        'type': 'textarea',
        'label': 'Duration(month)',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Smoking',
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
        'label': 'Yes',
        'value': 'Yes'
      },
      {
        'type': 'textarea',
        'label': 'Duration(month)',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Lab. Data',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'textarea',
        'label': 'BUN',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'Creat',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'FBS',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'Uric acid',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'TG',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'T. Chol',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'HDL-C',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'LDL-C',
        'value': ''
      },
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'EKG: Q wave',
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
        'label': 'Yes',
        'value': 'Yes'
      },
      {
        'type': 'checkbox',
        'label': 'ASMI',
        'value': 'ASMI'
      },
      {
        'type': 'checkbox',
        'label': 'Ant-lat, MI',
        'value': 'Ant-lat, MI'
      },
      {
        'type': 'checkbox',
        'label': 'Extensive MI',
        'value': 'Extensive MI'
      },
      {
        'type': 'checkbox',
        'label': 'Inf. MI',
        'value': 'Inf. MI'
      },
      {
        'type': 'checkbox',
        'label': 'RV infarction',
        'value': 'RV infarction'
      },
      {
        'type': 'textarea',
        'label': 'Others',
        'value': ''
      },
      {
        'type': 'date',
        'label': 'Date',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Arrhythmia',
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
        'label': 'Yes',
        'value': 'Yes'
      },
      {
        'type': 'checkbox',
        'label': 'CAVB',
        'value': 'CAVB'
      },
      {
        'type': 'checkbox',
        'label': 'VT/VF',
        'value': 'VT/VF'
      },
      {
        'type': 'checkbox',
        'label': 'Af/PSVT',
        'value': 'Af/PSVT'
      },
      {
        'type': 'textarea',
        'label': 'Others',
        'value': ''
      },
      {
        'type': 'date',
        'label': 'Date',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Treadmill Exercise Test',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Positive',
        'value': 'Positive'
      },
      {
        'type': 'checkbox',
        'label': 'Negative',
        'value': 'Negative'
      },
      {
        'type': 'date',
        'label': 'Date',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Thallium-201 scan',
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
        'label': 'Yes',
        'value': 'Yes'
      },
      {
        'type': 'checkbox',
        'label': 'Ischemia',
        'value': 'Ischemia'
      },
      {
        'type': 'checkbox',
        'label': 'Scar',
        'value': 'Scar'
      },
      {
        'type': 'date',
        'label': 'Date',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Radionucleotide Ejection Fraction',
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
        'label': 'Yes',
        'value': 'Yes'
      },
      {
        'type': 'textarea',
        'label': 'LVEF/RVEF',
        'value': ''
      },
      {
        'type': 'date',
        'label': 'Date',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Cardiac Catherization',
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
        'label': 'Yes',
        'value': 'Yes'
      },
      {
        'type': 'textarea',
        'label': 'LVEDP(mmHg)',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'MR',
        'value': ''
      },
      {
        'type': 'date',
        'label': 'Date',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'PTCR',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Calcification',
        'value': 'Calcification'
      },
      {
        'type': 'checkbox',
        'label': 'Small Vessel (<2.5mm)',
        'value': 'Small Vessel (<2.5mm)'
      },
      {
        'type': 'checkbox',
        'label': 'Ostium stenosis',
        'value': 'Ostium stenosis'
      },
      {
        'type': 'checkbox',
        'label': 'Restenois',
        'value': 'Restenois'
      },
      {
        'type': 'checkbox',
        'label': 'Tubular Lesion',
        'value': 'Tubular Lesion'
      },
      {
        'type': 'checkbox',
        'label': 'Total Occlusion',
        'value': 'Total Occlusion'
      },
      {
        'type': 'textarea',
        'label': 'Others',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Stent Deployment',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Type B or C Lesion',
        'value': 'Type B or C Lesion'
      },
      {
        'type': 'checkbox',
        'label': 'Restenosis',
        'value': 'Restenosis'
      },
      {
        'type': 'checkbox',
        'label': 'AMI',
        'value': 'AMI'
      },
      {
        'type': 'checkbox',
        'label': 'Unable to accept OP',
        'value': 'Unable to accept OP'
      },
      {
        'type': 'checkbox',
        'label': 'Acute Closure',
        'value': 'Acute Closure'
      },
      {
        'type': 'checkbox',
        'label': 'Threaten Closure',
        'value': 'Threaten Closure'
      },
      {
        'type': 'checkbox',
        'label': 'Residual Stenosis > 40%',
        'value': 'Residual Stenosis > 40%'
      },
      {
        'type': 'checkbox',
        'label': 'Ostial Lesion',
        'value': 'Ostial Lesion'
      },
      {
        'type': 'checkbox',
        'label': 'Bypass',
        'value': 'Bypass'
      },
      {
        'type': 'checkbox',
        'label': 'Extensive Dissection',
        'value': 'Extensive Dissection'
      },
      {
        'type': 'textarea',
        'label': 'Others',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'PTCR',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Calcification',
        'value': 'Calcification'
      },
      {
        'type': 'checkbox',
        'label': 'Small Vessel (<2.5mm)',
        'value': 'Small Vessel (<2.5mm)'
      },
      {
        'type': 'checkbox',
        'label': 'Ostium stenosis',
        'value': 'Ostium stenosis'
      },
      {
        'type': 'checkbox',
        'label': 'Restenois',
        'value': 'Restenois'
      },
      {
        'type': 'checkbox',
        'label': 'Tubular Lesion',
        'value': 'Tubular Lesion'
      },
      {
        'type': 'checkbox',
        'label': 'Total Occlusion',
        'value': 'Total Occlusion'
      },
      {
        'type': 'textarea',
        'label': 'Others',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Stent Deployment',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Type B or C Lesion',
        'value': 'Type B or C Lesion'
      },
      {
        'type': 'checkbox',
        'label': 'Restenosis',
        'value': 'Restenosis'
      },
      {
        'type': 'checkbox',
        'label': 'AMI',
        'value': 'AMI'
      },
      {
        'type': 'checkbox',
        'label': 'Unable to accept OP',
        'value': 'Unable to accept OP'
      },
      {
        'type': 'checkbox',
        'label': 'Acute Closure',
        'value': 'Acute Closure'
      },
      {
        'type': 'checkbox',
        'label': 'Threaten Closure',
        'value': 'Threaten Closure'
      },
      {
        'type': 'checkbox',
        'label': 'Residual Stenosis > 40%',
        'value': 'Residual Stenosis > 40%'
      },
      {
        'type': 'checkbox',
        'label': 'Ostial Lesion',
        'value': 'Ostial Lesion'
      },
      {
        'type': 'checkbox',
        'label': 'Bypass',
        'value': 'Bypass'
      },
      {
        'type': 'checkbox',
        'label': 'Extensive Dissection',
        'value': 'Extensive Dissection'
      },
      {
        'type': 'textarea',
        'label': 'Others',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'In 24 Hour Complication',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'None',
        'value': 'None'
      },
      {
        'type': 'checkbox',
        'label': 'Acute Closure',
        'value': 'Acute Closure'
      },
      {
        'type': 'checkbox',
        'label': 'Dissection',
        'value': 'Dissection'
      },
      {
        'type': 'checkbox',
        'label': 'Thrombus',
        'value': 'Thrombus'
      },
      {
        'type': 'checkbox',
        'label': 'Spasm',
        'value': 'Spasm'
      },
      {
        'type': 'checkbox',
        'label': 'Side Branch Occlusion',
        'value': 'Side Branch Occlusion'
      },
      {
        'type': 'checkbox',
        'label': 'VT/VF',
        'value': 'VT/VF'
      },
      {
        'type': 'checkbox',
        'label': 'Bradyarrbythima',
        'value': 'Bradyarrbythima'
      },
      {
        'type': 'checkbox',
        'label': 'CABG',
        'value': 'CABG'
      },
      {
        'type': 'checkbox',
        'label': 'Death',
        'value': 'Death'
      },
      {
        'type': 'checkbox',
        'label': 'Death',
        'value': 'Death'
      },
      {
        'type': 'checkbox',
        'label': 'Vascular Compplication',
        'value': 'Vascular Compplication'
      },
      {
        'type': 'checkbox',
        'label': 'Loss of Stent',
        'value': 'Loss of Stent'
      },
      {
        'type': 'checkbox',
        'label': 'Perforation',
        'value': 'Perforation'
      },
      {
        'type': 'checkbox',
        'label': 'Cardiac Tamponade',
        'value': 'Cardiac Tamponade'
      },
      {
        'type': 'textarea',
        'label': 'AMI(Max CK)',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'Non-Q Infraction(Max CK)',
        'value': ''
      },
      {
        'type': 'textarea',
        'label': 'Others',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Post-procedure Medication',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Heparin',
        'value': 'Heparin'
      },
      {
        'type': 'checkbox',
        'label': 'Ticlopidine',
        'value': 'Ticlopidine'
      },
      {
        'type': 'checkbox',
        'label': 'Warfarin',
        'value': 'Warfarin'
      },
      {
        'type': 'checkbox',
        'label': 'ASA',
        'value': 'ASA'
      },
      {
        'type': 'checkbox',
        'label': 'Dipyridamote',
        'value': 'Dipyridamote'
      },
      {
        'type': 'textarea',
        'label': 'Others',
        'value': ''
      }
    ]
  },
  {
    'type': 'checkbox',
    'required': true,
    'label': 'Outcome',
    'icon': 'fa-user-circle-o',
    'description': 'Checkbox',
    'inline': true,
    'values': [
      {
        'type': 'checkbox',
        'label': 'Stable',
        'value': 'Stable'
      },
      {
        'type': 'checkbox',
        'label': 'Re-PTCA',
        'value': 'Re-PTCA'
      },
      {
        'type': 'checkbox',
        'label': 'CABG',
        'value': 'CABG'
      },
      {
        'type': 'checkbox',
        'label': 'Death',
        'value': 'Death'
      },
      {
        'type': 'date',
        'label': 'Date',
        'value': ''
      }
    ]
  }
];
